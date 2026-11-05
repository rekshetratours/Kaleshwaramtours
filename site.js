(function () {
  'use strict';
  /* ===== Visitor counter settings =====
     COUNTER_MODE:
       'php'         -> only for PHP hosting (not GitHub Pages): needs api/visit.php from optional-php-counter/.
       'goatcounter' -> uses GoatCounter (set GOATCOUNTER_CODE below, see README.txt). Works on GitHub Pages.
                        While GOATCOUNTER_CODE is empty nothing is loaded and nothing is tracked.
       'off'         -> no counter, nothing is tracked.
     If the counter cannot load, it stays hidden. Nothing is faked. */
  var COUNTER_MODE = 'goatcounter';
  var GOATCOUNTER_CODE = '';

  var script = document.currentScript;
  var root = script ? new URL('..', script.src).href : '/';

  /* ===== Language toggle ===== */
  var body = document.body, KEY = 'kt-lang';
  var btns = document.querySelectorAll('.lang button');
  function setLang(l) {
    body.setAttribute('data-lang', l);
    document.documentElement.lang = (l === 'en') ? 'en' : 'te';
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-set') === l ? 'true' : 'false'); });
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-set')); }); });
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'te' || saved === 'en' || saved === 'both') { setLang(saved); }

  /* ===== Visitor counter ===== */
  var box = document.getElementById('vc');
  function fmt(n) { try { return Number(n).toLocaleString('en-IN'); } catch (e) { return String(n); } }
  function setAll(name, val) {
    var f = String(val).indexOf(',') > -1 ? String(val) : fmt(val);
    box.querySelectorAll('[data-vc="' + name + '"]').forEach(function (el) { el.textContent = f; });
  }
  function show(visitors, views) {
    if (!box || visitors == null || isNaN(Number(String(visitors).replace(/,/g, '')))) { return; }
    setAll('visitors', visitors);
    if (views != null) { setAll('views', views); }
    box.hidden = false;
  }
  if (box && COUNTER_MODE === 'php') {
    fetch(root + 'api/visit.php', { method: 'POST', credentials: 'same-origin', cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) { show(d.visitors, d.views); })
      .catch(function () {});
  } else if (COUNTER_MODE === 'goatcounter' && GOATCOUNTER_CODE) {
    var gc = document.createElement('script');
    gc.async = true;
    gc.src = '//gc.zgo.at/count.js';
    gc.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    document.head.appendChild(gc);
    fetch('https://' + GOATCOUNTER_CODE + '.goatcounter.com/counter/TOTAL.json')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) { show(d.count_unique != null ? d.count_unique : d.count, d.count); })
      .catch(function () {});
  }
})();
