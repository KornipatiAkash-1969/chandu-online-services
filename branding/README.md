# Branding - Chandu Online Services

`chandu-logo-original.png` is the master logo (1536 x 1024, black background). Every other logo file
is made from its pixels. Nothing was redrawn or recoloured.

| File | Made from | Used for |
|---|---|---|
| `src/assets/brand/logo-full.webp` | Whole logo, resized to 900 x 600 | Footer (blended into the dark footer with `mix-blend-screen`), loading screen (inlined copy in `index.html`) |
| `src/assets/brand/logo-lockup.webp` | Crown + "Chandu" + "Online Services" banner; the portrait and laptop are masked out | Header (shown on a black rounded badge so it stays sharp on the white header) |
| `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` | The gold crown on black | Browser tab |
| `public/apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest` | The gold crown on black | Home-screen / "Add to home screen" icon |

Why a lockup and a crown? The full logo is a 3:2 picture with a lot of detail, so at header height (36-44 px)
the lettering would be unreadable. The wordmark alone stays legible. At tab size (16 px) only the crown is
simple enough to recognise; the "C" can't be cut out because it runs into the "h".

## Regenerating

If you replace the master logo, run (needs Python with Pillow, numpy and scipy):

    python branding/build_logo_variants.py branding/chandu-logo-original.png out

then copy `out/assets/*` to `src/assets/brand/` and `out/public/*` to `public/`. The loading-screen image is
`out/splash.b64`; paste it into the `<img src="data:image/webp;base64,...">` in `index.html`.
`site.webmanifest` is not generated; edit it by hand.
