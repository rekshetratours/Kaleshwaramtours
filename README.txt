KALESHWARAM TOURS - STATIC SITE (Telugu + English)
=================================================

WHAT IS IN THIS ZIP
  index.html                         Home guide page
  <folder>/index.html                10 guide pages (timings, seva tickets, pindapradanam,
                                     Pushkaralu 2027, how to reach, stay, ashtatheerthalu,
                                     triveni sangamam, karthika masam, nearby places)
  assets/style.css, assets/site.js   Shared styling, language toggle, visitor counter
  api/visit.php                      Self-hosted visitor counter (PHP)
  sitemap.xml, robots.txt            For Google

HOW TO PUBLISH
  1. Upload everything to your hosting's public_html (keep the folder structure).
  2. Open https://kaleshwaramtours.com/ and check a few pages.
  3. Google Search Console: add the domain, submit https://kaleshwaramtours.com/sitemap.xml
     and use "Request indexing" on the home page and on the first 4 guides.

BEFORE YOU GO LIVE (search for "kaleshwaram-triveni-sangamam.jpg")
  - Upload a 1200x630 photo as images/kaleshwaram-triveni-sangamam.jpg (used for WhatsApp/Facebook
    previews), or change the og:image / twitter:image path in each page.
  - Add 3-4 real photos per page with Telugu + English alt text (the pages have no photos yet).
  - Confirm timings, ticket prices, room rates and the Pushkaralu dates with the Devasthanam.
    They come from public websites and can be out of date.

VISITOR COUNTER (shown in the footer; hidden until it works; starts at 0, nothing is faked)
  Option A (default): own hosting with PHP 7.3+  (most cPanel hosting)
    - Works as soon as you upload the files. Make sure api/data/ is writable (chmod 755 or 775).
    - Counts one "visitor" per browser per year and one "view" per page load. Bots are skipped.
    - Counts are stored in api/data/counts.json (blocked from public access by .htaccess on Apache).
    - To reset: delete api/data/counts.json.
  Option B: no PHP (Netlify, GitHub Pages, etc.) -> GoatCounter
    - Create a site at goatcounter.com, then in its Settings enable "Allow adding visitor counts
      on your website".
    - In assets/site.js set COUNTER_MODE = 'goatcounter' and GOATCOUNTER_CODE = 'yourcode'.
    - GoatCounter is free for non-commercial use. For a tours business check their terms.
  Option C: set COUNTER_MODE = 'off' to remove the counter and all tracking.
  Privacy: Option A sets one small cookie (kt_v). If you serve EU visitors, mention it in a privacy note.

IF THE SITE IS NOT AT THE DOMAIN ROOT
  Canonical URLs, sitemap.xml and JSON-LD use https://kaleshwaramtours.com/. Update them if you
  publish elsewhere.
