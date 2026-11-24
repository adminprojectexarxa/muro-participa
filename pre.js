// Demana a Google les dades de la primera pantalla mentre el navegador carrega la resta de la pàgina (24 nov.).
// app.js les arreplega amb api(); si no arriben bé, les torna a demanar com sempre. No guarda res al mòbil.
(function () {
  if (!window.fetch || typeof APP_API === 'undefined') return;
  var lang = /[?&]lang=es(&|$)/.test(location.search) ? 'es' : 'va';
  var ruta = location.hash.replace(/^#/, '') || 'inici';
  var demana = [];
  if (ruta === 'inici') demana = ['apiInici'];
  else if (ruta === 'participar' || ruta === 'enquesta') demana = ['apiInici', 'apiEnquestes'];
  window.PRE_DADES = {};
  demana.forEach(function (fn) {
    var args = [lang];
    window.PRE_DADES[fn + '|' + JSON.stringify(args)] = fetch(APP_API, {
      method: 'POST', body: JSON.stringify({ fn: fn, args: args }), credentials: 'omit', redirect: 'follow', cache: 'no-store'
    }).then(function (r) { return r.json(); }).catch(function () { return null; });
  });
})();
