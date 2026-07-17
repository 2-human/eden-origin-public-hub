/* Shared order form for product pages. Runs only when a #buy2 module is present.
   Volume discounts: 5% for 10-20, 7% for 21-50, 10% for over 50. Demo prices. */
(function () {
  function fmt(n) { return Math.round(n).toLocaleString('sr-RS') + ' RSD'; }
  function tier(q) { if (q > 50) return 0.10; if (q >= 21) return 0.07; if (q >= 10) return 0.05; return 0; }

  window.buyTab = function (i) {
    document.querySelectorAll('#buy2 .buy2__tab').forEach(function (t, k) { t.classList.toggle('is-on', k === i); });
    var p0 = document.getElementById('buyP0'), p1 = document.getElementById('buyP1');
    if (p0) p0.hidden = (i !== 0);
    if (p1) p1.hidden = (i !== 1);
  };

  window.ordCalc = function () {
    var sizeEl = document.getElementById('ordSize'), qtyEl = document.getElementById('ordQty');
    if (!sizeEl || !qtyEl) return;
    var unit = parseFloat(sizeEl.value);
    var qty = Math.max(1, parseInt(qtyEl.value || '1', 10));
    var sub = unit * qty, pct = tier(qty), disc = sub * pct, total = sub - disc;
    document.getElementById('ordSub').textContent = fmt(sub);
    document.getElementById('ordPct').textContent = Math.round(pct * 100) + '%';
    document.getElementById('ordDisc').innerHTML = (disc > 0 ? '−' : '') + fmt(disc);
    document.getElementById('ordTotal').textContent = fmt(total);
    document.getElementById('ordDiscRow').classList.toggle('ord__disc-on', disc > 0);
  };

  window.ordSubmit = function (e) {
    e.preventDefault();
    var unit = parseFloat(document.getElementById('ordSize').value);
    var qty = Math.max(1, parseInt(document.getElementById('ordQty').value || '1', 10));
    var sub = unit * qty, pct = tier(qty), total = sub - sub * pct;
    document.getElementById('buyP0').innerHTML =
      '<div class="ord__done"><div class="tick">✓</div>'
      + '<h3 style="margin-bottom:.3rem">Hvala na porudžbini</h3>'
      + '<p style="font-size:.9rem;color:var(--ink-soft);max-width:36ch;margin:.2rem auto 0">'
      + qty + ' flaša · popust ' + Math.round(pct * 100) + '% · ukupno <b>' + fmt(total) + '</b>. '
      + 'U pravom sistemu ova porudžbina bi se pojavila u CRM-u. Ovo je prototip, porudžbina nije poslata.</p></div>';
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.ordCalc);
  else window.ordCalc();
})();
