"""Build every web variant of the Chandu Online Services logo from the ORIGINAL artwork.

Usage:  python build_brand.py <original-logo.png> <output-dir>

Nothing is redrawn. Every output is made of pixels from the original logo:
  logo-full.webp     the complete logo, resized (footer, loading screen)
  logo-lockup.webp   wordmark lockup: crown + "Chandu" + "Online Services" banner, with the
                     portrait and laptop masked out, for small spaces such as the header
  favicon / icons    the gold crown from the logo on black
Needs: Pillow, numpy, scipy.
"""
import base64, io, os, sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT + "/public", exist_ok=True)
os.makedirs(OUT + "/assets", exist_ok=True)
src = Image.open(SRC).convert("RGB")

# ---------- full logo (web size) ----------
src.resize((900, 600), Image.LANCZOS).save(OUT + "/assets/logo-full.webp", quality=90, method=6)

# ---------- wordmark lockup ----------
X0, Y0, X1, Y1 = 130, 430, 1430, 862            # band holding the crown, lettering and banner
c = np.asarray(src.crop((X0, Y0, X1, Y1))).astype(float)
ci = c.astype(int)
H, W = ci.shape[:2]
bright = (ci.min(axis=2) > 110) & ((ci.max(axis=2) - ci.min(axis=2)) < 75)   # jacket, letters, laptop lines
lab, n = ndi.label(bright, structure=np.ones((3, 3)))
sizes = ndi.sum(bright, lab, range(1, n + 1))
letters_id = int(np.argmax(sizes)) + 1                                      # the lettering is the biggest piece
objs = ndi.find_objects(lab)
drop = np.zeros((H, W), bool)
for i, o in enumerate(objs, 1):
    if i == letters_id or sizes[i - 1] < 1500:                              # keep lettering and small details (crown highlight)
        continue
    if o[0].stop + Y0 < 610:                                                # above the lettering: jacket / laptop
        drop |= lab == i
img = c.copy()
img[ndi.binary_dilation(drop, iterations=5)] = 0

letters = lab == letters_id
yellow = (ci[..., 0] > 170) & (ci[..., 1] > 120) & (ci[..., 2] < 130)
yellow &= (np.arange(W)[None, :] < 300) & (np.arange(H)[:, None] < 240)
crown = ndi.binary_closing(yellow, iterations=3)
keep = ndi.binary_dilation(letters, iterations=20) | ndi.binary_dilation(crown, iterations=14)
keep[240:, :] = True
soft = np.clip(ndi.gaussian_filter(keep.astype(float), sigma=5) * 1.6, 0, 1)
soft[252:, :] = 1
out = img * soft[..., None]
ys, xs = np.where(out.max(axis=2) > 35)
pad = 16
x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, W)
y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, H)
lock = Image.fromarray(out[y0:y1, x0:x1].astype("uint8"))
lock.save(OUT + "/lockup_master.png")
lock.resize((720, round(720 * lock.height / lock.width)), Image.LANCZOS).save(
    OUT + "/assets/logo-lockup.webp", quality=92, method=6)

# ---------- crown mark: take it from the ORIGINAL, remove only the lettering that touches it ----------
cx0, cy0, cx1, cy1 = 150, 470, 340, 625
cr = np.asarray(src.crop((cx0, cy0, cx1, cy1))).astype(float)
lt = ndi.binary_dilation(letters, iterations=4)
jk = ndi.binary_dilation(drop, iterations=5)
mask = (lt | jk)[cy0 - Y0:cy1 - Y0, cx0 - X0:cx1 - X0]
cr[mask] = 0
cr = Image.fromarray(cr.astype("uint8"))
a = np.asarray(cr).astype(int)
yl = (a[..., 0] > 150) & (a[..., 1] > 110) & (a[..., 2] < 120)
yy, xx = np.where(yl)
cr = cr.crop((xx.min() - 26, yy.min() - 26, xx.max() + 26, yy.max() + 26))
# keep only the crown and its own outline glow (drops a sliver of the original ring that the crop catches)
a2 = np.asarray(cr).astype(int)
yl2 = (a2[..., 0] > 150) & (a2[..., 1] > 110) & (a2[..., 2] < 120)
near = ndi.gaussian_filter(ndi.binary_dilation(ndi.binary_closing(yl2, iterations=3), iterations=22).astype(float), 4)
cr = Image.fromarray((np.asarray(cr).astype(float) * np.clip(near * 1.5, 0, 1)[..., None]).astype("uint8"))


def square(img, size, pad=0.17):
    w, h = img.size
    s = round(max(w, h) * (1 + 2 * pad))
    cv = Image.new("RGB", (s, s), (0, 0, 0))
    cv.paste(img, ((s - w) // 2, (s - h) // 2))
    return cv.resize((size, size), Image.LANCZOS)


square(cr, 1024).save(OUT + "/crown_master.png")
for name, s in (("favicon-16x16.png", 16), ("favicon-32x32.png", 32), ("apple-touch-icon.png", 180),
                ("icon-192.png", 192), ("icon-512.png", 512)):
    square(cr, 512).resize((s, s), Image.LANCZOS).save(f"{OUT}/public/{name}", optimize=True)
square(cr, 256).save(OUT + "/public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# ---------- loading-screen image, small, to be inlined in index.html ----------
buf = io.BytesIO()
src.resize((360, 240), Image.LANCZOS).save(buf, "WEBP", quality=82, method=6)
open(OUT + "/splash.b64", "w").write(base64.b64encode(buf.getvalue()).decode())
print("built:", sorted(os.listdir(OUT)), sorted(os.listdir(OUT + "/public")))
