(function () {
'use strict';

// Idioma: valencià per defecte; ?lang=es en enllaços compartits. No es guarda res al mòbil.
var LANG = /[?&]lang=es(&|$)/.test(location.search) ? 'es' : 'va';
var BASE = location.origin + location.pathname;

// ---------- textos de la interfície ----------
var T = {
  va: {
    lema: "Què falta a Muro? Digues-ho ací, sense donar el teu nom.",
    carregant: "Carregant…", tornar: "Tornar", compartir: "Compartir per WhatsApp",
    errXarxa: "No s'ha pogut connectar. Comprova la connexió i torna-ho a provar.",
    enquestes: "Enquestes", enquestesSub: "Contesta en un minut",
    propostes: "Propostes", propostesSub: "Problema i solució",
    formacio: "Formació", formacioSub: "Com funciona l'Ajuntament",
    grups: "Grups", grupsSub: "Seguix el treball fet",
    programa: "Programa", programaSub: "D'on ix cada mesura",
    preguntes: "Pregunta com funciona", preguntesSub: "Respostes clares",
    ple: "El ple, en clar", pleSub: "Què s'ha votat",
    mapa: "Mapa", mapaSub: "Propostes per llocs",
    novetats: "Novetats", novTipus: { enquesta: "Enquesta", formacio: "Formació", grup: "Grup de treball", ple: "Ple" }, parts: "parts", totesNovetats: "Veure totes les novetats", capNovetats: "Encara no hi ha novetats.",
    mesos: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], implicat: "Vols implicar-te més?",
    implicatText: "Hi ha cinc maneres de participar. Tu tries fins on vols arribar.",
    comParticipar: "Com participar", oberta: "Enquesta oberta", contestar: "Contestar",
    preguntesN: "preguntes · anònima", fins: "Fins al",
    congelat: "Període electoral: l'app no publica novetats ni accepta enviaments fins després de les eleccions.",
    enviar: "Enviar", seguent: "Enviar respostes",
    gracies: "Gràcies per participar! Junts decidim, junts construïm.",
    veureResultats: "Vore els resultats", resultats: "Resultats", participants: "persones han participat", participant1: "persona ha participat",
    tancada: "Esta enquesta ja no està oberta.", obligatoria: "obligatòria", altres: "Altres",
    escriu: "Escriu-ho ací", si: "Sí", no: "No", falta: "Falta contestar una pregunta obligatòria.",
    ambResultats: "Enquestes amb resultats", capEnquesta: "Ara mateix no hi ha cap enquesta oberta.",
    anonimEnq: "Anònima: guardem què respons, no qui respon.",
    ferProposta: "Fes una proposta", tema: "Tema", problemaQ: "Quin problema veus?",
    solucioQ: "Quina solució proposes?", lloc: "Lloc del poble (si vols)", capLloc: "— Cap lloc concret —",
    normesProp: "Accepte les normes: sense noms ni atacs a persones. Diem què falta i què proposem.",
    avisNoms: "No escrigues noms ni dades personals. Llegim cada proposta abans de publicar-la.",
    teuNum: "Proposta enviada. El teu número és", segueix: "Seguix la teua proposta",
    numero: "Número", buscar: "Buscar", publicades: "Propostes publicades", capProposta: "Encara no n'hi ha cap.",
    noTrobada: "No trobem eixa proposta.", pendentRev: "pendent de revisió",
    capFormacio: "Encara no hi ha peces de formació.", veure: "Obrir",
    capGrup: "Els grups de treball comencen després de l'acte del 21 de novembre.",
    tancades: "propostes tancades", queDiu: "Què ens vau dir", estudiant: "Què estem estudiant",
    propGrup: "Propostes del grup", alPrograma: "Al programa", veins: "Propostes de veïns per a este grup",
    proposarGrup: "Envia una proposta a este grup", capEstudi: "El grup tot just comença.",
    programaBuit: "El programa es publicarà a partir de febrer, amb cada mesura enllaçada a la proposta o l'enquesta d'on ix.",
    pleBuit: "Encara no hi ha cap resum de ple.", font: "Font",
    ferPregunta: "Pregunta com funciona l'Ajuntament", laPregunta: "La teua pregunta",
    normesPreg: "Accepte les normes: sense noms ni atacs a persones.",
    pregEnviada: "Pregunta enviada. La contestarem ací. Número:", respostes: "Preguntes contestades",
    capPregunta: "Encara no hi ha preguntes contestades.",
    actes: "Pròxims actes", aniré: "Hi aniré", apuntat: "Gràcies! T'hem comptat.", capActe: "Ara mateix no hi ha actes anunciats.",
    xarxes: "Xarxes", quiSom: "Qui som",
    quiSomText: "Projecte Xarxa 2027 és un projecte de participació ciutadana de Muro d'Alcoi. Junts decidim, junts construïm.",
    privacitat: "Privacitat", info: "Informació", acces: "Accés amb codi",
    anonim: "L'app no et demana ni guarda cap dada que t'identifique.",
    privText: [
      "L'app no et demana el nom ni cap dada de contacte, no guarda la teua IP i no posa galetes al teu mòbil.",
      "Comptem visites i respostes, no persones: si obris l'app tres vegades, compta tres.",
      "Si escrius un text lliure, no hi poses noms ni dades personals. El revisem abans de publicar-lo.",
      "Esta pàgina la servix GitHub Pages i les dades passen per Google (Apps Script) fins a un full de càlcul del projecte. GitHub guarda la IP de les visites per seguretat, com fan els servidors web; l'app no la guarda enlloc.",
      "Qui vol entrar en un grup de treball ens dona les seues dades fora de l'app, d'acord amb el nostre Codi de privacitat.",
      "Contacte: projectexarxa2027@gmail.com"
    ],
    nivellsTitol: "Com participar: els 5 nivells",
    nivellsPeu: "Els nivells no són escales fixes ni jerarquies rígides. Pots entrar pel que vulgues i avançar quan estigues preparat. Sense pressions. Sense judicis.",
    n1: "Seguidor", n1t: "Estigues informat sense cap compromís. Ningú no sabrà que ens segueixes si no vols.", n1b: "Canal de WhatsApp",
    n2: "Col·laborador puntual", n2t: "Ajuda en una acció concreta, quan tu vulgues.",
    n3: "Grup de treball", n3t: "Treballa un tema del poble, amb formació. Per a entrar cal que sapiguem qui eres.",
    n4: "Membre actiu", n4t: "Participa en l'assemblea i vota les decisions.",
    n5: "Participant polític", n5t: "Implica't en la política municipal, també com a possible candidat.",
    escriunos: "Escriu-nos", parlem: "Parlem",
    mapaText: "Propostes publicades per llocs del poble.",
    // espais interns
    codi: "Codi", entrar: "Entrar", eixir: "Eixir",
    normesConf: "Accepte les normes de confidencialitat del grup.",
    calNormes: "Cal acceptar les normes.",
    puntPartida: "Punt de partida", documents: "Documents", contractes: "Contractes de l'Ajuntament",
    fontPlacsp: "Font: Plataforma de Contractació del Sector Públic · Actualitzat:",
    fitxes: "Fitxes de proposta", novaFitxa: "Nova fitxa", guardar: "Guardar",
    titol: "Títol", proposta: "Proposta", quiDecidix: "Qui ho pot decidir", cost: "Cost i d'on ix el diner",
    contracte: "Contracte afectat", tipus: "Tipus",
    tipusOps: ["Es pot fer ara", "Cal modificar el contracte", "Cal esperar a la pròxima licitació"],
    resultatReunio: "Resultat de la reunió", estatFitxa: "Estat", discrepancia: "Discrepància apuntada",
    notaVots: "Els 3 vots i la decisió es fan a la reunió. Ací s'apunta el resultat. En passar a «Proposta del grup», es publica sola al seguiment.",
    guardat: "Guardat.", motiu: "Motiu (si no es pot fer)", canviarEstat: "Canviar l'estat",
    revisio: "Revisió", publicar: "Publicar", noPublicar: "No publicar",
    capPendent: "No hi ha res pendent de revisar.", calResposta: "Per a publicar-la, primer escriu la resposta al full.",
    grupReduit: "Grup reduït", activar: "Activar", desactivar: "Desactivar", obrir: "Obrir",
    assemblea: "Assemblea", pendentsAss: "Propostes dels grups pendents de decidir",
    votacions: "Votacions", codiVot: "Codi de vot (d'un sol ús)", votar: "Votar", votat: "Vot registrat. Gràcies.",
    sessions: "Reunions", panell: "Panell de gestió"
  },
  es: {
    lema: "¿Qué le falta a Muro? Dilo aquí, sin dar tu nombre.",
    carregant: "Cargando…", tornar: "Volver", compartir: "Compartir por WhatsApp",
    errXarxa: "No se ha podido conectar. Comprueba la conexión y vuelve a intentarlo.",
    enquestes: "Encuestas", enquestesSub: "Contesta en un minuto",
    propostes: "Propuestas", propostesSub: "Problema y solución",
    formacio: "Formación", formacioSub: "Cómo funciona el Ayuntamiento",
    grups: "Grupos", grupsSub: "Sigue el trabajo hecho",
    programa: "Programa", programaSub: "De dónde sale cada medida",
    preguntes: "Pregunta cómo funciona", preguntesSub: "Respuestas claras",
    ple: "El pleno, claro", pleSub: "Qué se ha votado",
    mapa: "Mapa", mapaSub: "Propuestas por lugares",
    novetats: "Novedades", novTipus: { enquesta: "Encuesta", formacio: "Formación", grup: "Grupo de trabajo", ple: "Pleno" }, parts: "partes", totesNovetats: "Ver todas las novedades", capNovetats: "Todavía no hay novedades.",
    mesos: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."], implicat: "¿Quieres implicarte más?",
    implicatText: "Hay cinco maneras de participar. Tú eliges hasta dónde llegar.",
    comParticipar: "Cómo participar", oberta: "Encuesta abierta", contestar: "Contestar",
    preguntesN: "preguntas · anónima", fins: "Hasta el",
    congelat: "Periodo electoral: la app no publica novedades ni acepta envíos hasta después de las elecciones.",
    enviar: "Enviar", seguent: "Enviar respuestas",
    gracies: "¡Gracias por participar! Junts decidim, junts construïm.",
    veureResultats: "Ver los resultados", resultats: "Resultados", participants: "personas han participado", participant1: "persona ha participado",
    tancada: "Esta encuesta ya no está abierta.", obligatoria: "obligatoria", altres: "Otros",
    escriu: "Escríbelo aquí", si: "Sí", no: "No", falta: "Falta contestar una pregunta obligatoria.",
    ambResultats: "Encuestas con resultados", capEnquesta: "Ahora mismo no hay ninguna encuesta abierta.",
    anonimEnq: "Anónima: guardamos qué respondes, no quién responde.",
    ferProposta: "Haz una propuesta", tema: "Tema", problemaQ: "¿Qué problema ves?",
    solucioQ: "¿Qué solución propones?", lloc: "Lugar del pueblo (si quieres)", capLloc: "— Ningún lugar concreto —",
    normesProp: "Acepto las normas: sin nombres ni ataques a personas. Decimos qué falta y qué proponemos.",
    avisNoms: "No escribas nombres ni datos personales. Leemos cada propuesta antes de publicarla.",
    teuNum: "Propuesta enviada. Tu número es", segueix: "Sigue tu propuesta",
    numero: "Número", buscar: "Buscar", publicades: "Propuestas publicadas", capProposta: "Todavía no hay ninguna.",
    noTrobada: "No encontramos esa propuesta.", pendentRev: "pendiente de revisión",
    capFormacio: "Todavía no hay piezas de formación.", veure: "Abrir",
    capGrup: "Los grupos de trabajo empiezan después del acto del 21 de noviembre.",
    tancades: "propuestas cerradas", queDiu: "Qué nos dijisteis", estudiant: "Qué estamos estudiando",
    propGrup: "Propuestas del grupo", alPrograma: "En el programa", veins: "Propuestas de vecinos para este grupo",
    proposarGrup: "Envía una propuesta a este grupo", capEstudi: "El grupo acaba de empezar.",
    programaBuit: "El programa se publicará a partir de febrero, con cada medida enlazada a la propuesta o la encuesta de donde sale.",
    pleBuit: "Todavía no hay ningún resumen de pleno.", font: "Fuente",
    ferPregunta: "Pregunta cómo funciona el Ayuntamiento", laPregunta: "Tu pregunta",
    normesPreg: "Acepto las normas: sin nombres ni ataques a personas.",
    pregEnviada: "Pregunta enviada. La contestaremos aquí. Número:", respostes: "Preguntas contestadas",
    capPregunta: "Todavía no hay preguntas contestadas.",
    actes: "Próximos actos", aniré: "Iré", apuntat: "¡Gracias! Te hemos contado.", capActe: "Ahora mismo no hay actos anunciados.",
    xarxes: "Redes", quiSom: "Quiénes somos",
    quiSomText: "Projecte Xarxa 2027 es un proyecto de participación ciudadana de Muro d'Alcoi. Junts decidim, junts construïm.",
    privacitat: "Privacidad", info: "Información", acces: "Acceso con código",
    anonim: "La app no te pide ni guarda ningún dato que te identifique.",
    privText: [
      "La app no te pide el nombre ni ningún dato de contacto, no guarda tu IP y no pone cookies en tu móvil.",
      "Contamos visitas y respuestas, no personas: si abres la app tres veces, cuenta tres.",
      "Si escribes un texto libre, no pongas nombres ni datos personales. Lo revisamos antes de publicarlo.",
      "Esta página la sirve GitHub Pages y los datos pasan por Google (Apps Script) hasta una hoja de cálculo del proyecto. GitHub guarda la IP de las visitas por seguridad, como hacen los servidores web; la app no la guarda en ningún sitio.",
      "Quien quiere entrar en un grupo de trabajo nos da sus datos fuera de la app, de acuerdo con nuestro Código de privacidad.",
      "Contacto: projectexarxa2027@gmail.com"
    ],
    nivellsTitol: "Cómo participar: los 5 niveles",
    nivellsPeu: "Los niveles no son escalas fijas ni jerarquías rígidas. Puedes entrar por el que quieras y avanzar cuando estés preparado. Sin presiones. Sin juicios.",
    n1: "Seguidor", n1t: "Infórmate sin ningún compromiso. Nadie sabrá que nos sigues si no quieres.", n1b: "Canal de WhatsApp",
    n2: "Colaborador puntual", n2t: "Ayuda en una acción concreta, cuando tú quieras.",
    n3: "Grupo de trabajo", n3t: "Trabaja un tema del pueblo, con formación. Para entrar necesitamos saber quién eres.",
    n4: "Miembro activo", n4t: "Participa en la asamblea y vota las decisiones.",
    n5: "Participante político", n5t: "Implícate en la política municipal, también como posible candidato.",
    escriunos: "Escríbenos", parlem: "Hablemos",
    mapaText: "Propuestas publicadas por lugares del pueblo."
  }
};
function t(k) { return (T[LANG] && T[LANG][k] !== undefined) ? T[LANG][k] : (T.va[k] !== undefined ? T.va[k] : k); }

// ---------- estat en memòria (no es guarda res al mòbil) ----------
var S = { codi: null, acces: null, enllacos: null, apuntats: {} };

// ---------- utilitats ----------
function $(id) { return document.getElementById(id); }
function esc(s) {
  return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
// Les crides van a la part de Google (Apps Script) sense galetes: no depenen dels comptes del mòbil.
var LECTURES = ['apiInici', 'apiNovetats', 'apiEnquestes', 'apiEnquesta', 'apiResultats', 'apiTemes', 'apiPropostes', 'apiEstatProposta',
  'apiMapa', 'apiFormacio', 'apiGrupsPublic', 'apiSeguiment', 'apiPrograma', 'apiPle', 'apiPreguntes', 'apiActes',
  'apiAcces', 'apiGrup', 'apiRevisio', 'apiReduit', 'apiAssemblea', 'apiPanell'];
function api(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  var errXarxa = function () { var e = new Error(t('errXarxa')); e.xarxa = true; return e; };
  var crida = function () {
    return fetch(APP_API, { method: 'POST', body: JSON.stringify({ fn: fn, args: args }), credentials: 'omit',
                            redirect: 'follow', cache: 'no-store' })
      .catch(function () { throw errXarxa(); })
      .then(function (r) { return r.json().catch(function () { throw errXarxa(); }); })
      .then(function (d) { if (!d || !d.ok) throw new Error((d && d.error) || t('errXarxa')); return d.valor; });
  };
  // Si Google està ocupat, o falla la connexió en una consulta, es torna a provar una vegada.
  // Els enviaments (propostes, vots...) no es repetixen sols, per a no duplicar-los.
  return crida().catch(function (e) {
    var ocupat = /too many|simult|invoked/i.test((e && e.message) || '');
    if (!ocupat && !(e && e.xarxa && LECTURES.indexOf(fn) >= 0)) throw e;
    return new Promise(function (ok) { setTimeout(ok, 1500); }).then(crida);
  });
}
function pinta(h) { $('vista').innerHTML = h; window.scrollTo(0, 0); }
function carrega() { pinta('<div class="carrega">' + esc(t('carregant')) + '</div>'); }
function error(e) { return '<div class="error">' + esc((e && e.message) || e) + '</div>'; }
function falla(e) { pinta(tornar() + error(e)); }
function tornar(r) { return '<a class="tornar" href="#' + (r || 'inici') + '">‹ ' + esc(t('tornar')) + '</a>'; }
function urlRuta(r) { return BASE + (LANG === 'es' ? '?lang=es' : '') + '#' + r; }
function compartir(r, text) {
  return '<a class="boto sec2 petit" target="_blank" rel="noopener" href="https://wa.me/?text=' +
    encodeURIComponent(text + ' ' + urlRuta(r)) + '">' + esc(t('compartir')) + '</a>';
}
function barres(valors) {
  return valors.map(function (v) {
    return '<div class="res-op"><span>' + esc(v.opcio) + '</span><b>' + v.pct + '%</b></div>' +
      '<div class="barra"><i style="width:' + Math.max(0, Math.min(100, v.pct)) + '%"></i></div>';
  }).join('');
}
function dt(s) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || '')); return m ? m[3] + '/' + m[2] + '/' + m[1] : (s || ''); }
// Data curta per a les novetats: «15 nov.»; amb l'any si no és l'actual.
function dtCurt(s) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));
  if (!m) return s || '';
  var d = Number(m[3]) + ' ' + t('mesos')[Number(m[2]) - 1];
  return Number(m[1]) === new Date().getFullYear() ? d : d + ' ' + m[1];
}
// Les peces d'una mateixa sèrie («… (1 de 3)», «… (2 de 3)») fan una sola novetat.
function agruparNovetats(llista) {
  var out = [], idx = {};
  llista.forEach(function (n) {
    var titol = String(n.titol || '');
    if (n.tipus === 'formacio') {
      var m = /\s*\(\s*\d+\s+de\s+\d+\s*\)\s*$/i.exec(titol);
      if (m) titol = titol.slice(0, m.index);
    }
    var clau = n.tipus + '|' + n.ruta + '|' + titol, parts = Number(n.parts) || 1;
    if (n.tipus === 'formacio' && idx[clau] !== undefined) { out[idx[clau]].parts += parts; return; }
    idx[clau] = out.length;
    out.push({ tipus: n.tipus, titol: titol, ruta: n.ruta, data: n.data, grup: n.grup, parts: parts });
  });
  return out;
}
// Llista de novetats (pantalla principal i «Totes les novetats»).
function llistaNovetats(llista) {
  return '<div class="novetats">' + agruparNovetats(llista).map(function (n) {
    var tipus = (t('novTipus') || {})[n.tipus] || '';
    var sub = n.grup ? n.grup : (n.parts > 1 ? n.parts + ' ' + t('parts') : '');
    return '<a class="nov" href="#' + esc(n.ruta) + '"><span class="nov-cap">' + (tipus ? '<span class="etiqueta gris">' + esc(tipus) + '</span>' : '') +
      '<span class="nov-data">' + esc(dtCurt(n.data)) + '</span></span><span class="nov-tit">' + esc(n.titol) + '</span>' +
      (sub ? '<span class="nov-sub">' + esc(sub) + '</span>' : '') + '</a>';
  }).join('') + '</div>';
}
function valor(id) { var el = $(id); return el ? el.value : ''; }
function marcat(id) { var el = $(id); return !!(el && el.checked); }
function enllac(url, text) {
  return url ? '<a class="boto sec2" target="_blank" rel="noopener" href="' + esc(url) + '">' + esc(text) + '</a>' : '';
}
function quan(btn, promesa, exit, capsa) {
  btn.disabled = true;
  return promesa.then(function (r) { btn.disabled = false; exit(r); }).catch(function (e) {
    btn.disabled = false;
    if (capsa) $(capsa).innerHTML = error(e); else alert((e && e.message) || e);
  });
}

// ---------- capçalera i peu ----------
function capcalera() {
  $('lema').textContent = t('lema');
  var id = $('idioma');
  id.textContent = LANG === 'es' ? 'VA' : 'ES';
  id.setAttribute('aria-label', LANG === 'es' ? 'Valencià' : 'Castellano');
  id.onclick = function () {
    LANG = LANG === 'es' ? 'va' : 'es';
    document.documentElement.lang = LANG === 'es' ? 'es' : 'ca';
    ruta();
  };
  $('lletra').onclick = function () { document.body.classList.toggle('gran'); };
  $('peu').innerHTML = '<p>' + esc(t('anonim')) + '</p><p><a href="#privacitat">' + esc(t('privacitat')) +
    '</a><a href="#info">' + esc(t('info')) + '</a><a href="#nivells">' + esc(t('comParticipar')) +
    '</a><a href="#intern">' + esc(t('acces')) + '</a></p>';
}

// ---------- rutes ----------
// Navegació amb #: el botó «arrere» del mòbil funciona i els enllaços compartits porten a la secció.
var RUTES = {};
var RUTA = 'inici';
function rutaActual() {
  try { return decodeURIComponent(location.hash.slice(1)) || 'inici'; } catch (e) { return 'inici'; }
}
function ruta() {
  RUTA = rutaActual();
  var p = RUTA.split('/');
  var f = RUTES[p[0]] || RUTES.inici;
  capcalera();
  api('apiVisita', p[0] || 'inici').catch(function () {});
  try { f(p[1], p[2]); } catch (e) { falla(e); }
}
function ves(r, substituir) {
  r = String(r || 'inici').replace(/^#/, '') || 'inici';
  if (substituir) { history.replaceState(null, '', '#' + r); ruta(); return; }
  if (rutaActual() === r) ruta(); else location.hash = r;
}
window.addEventListener('hashchange', ruta);
// Si una miniatura de Drive no carrega, s'amaga (sense codi dins de l'HTML).
document.addEventListener('error', function (ev) {
  var el = ev.target;
  if (el && el.tagName === 'IMG' && el.classList.contains('mini')) el.style.display = 'none';
}, true);

// ---------- totes les novetats ----------
RUTES.novetats = function () {
  carrega();
  api('apiNovetats', LANG).then(function (d) {
    var h = tornar() + '<section class="targeta"><h2>' + esc(t('novetats')) + '</h2>';
    if (d.congelat) h += '<p class="sec">' + esc(t('congelat')) + '</p>';
    else if (!d.novetats.length) h += '<p class="sec">' + esc(t('capNovetats')) + '</p>';
    else h += llistaNovetats(d.novetats);
    pinta(h + '</section>');
  }).catch(falla);
};

// ---------- inici ----------
RUTES.inici = function () {
  // El menú es pinta de seguida; l'enquesta destacada i les novetats arriben quan respon el servidor.
  var raj = function (r, a, b) { return '<a class="rajola" href="#' + r + '">' + esc(t(a)) + '<span>' + esc(t(b)) + '</span></a>'; };
  pinta('<div id="iniciDalt"></div>' +
    '<nav class="rajoles">' + raj('enquestes', 'enquestes', 'enquestesSub') + raj('propostes', 'propostes', 'propostesSub') +
    raj('formacio', 'formacio', 'formacioSub') + raj('grups', 'grups', 'grupsSub') + raj('programa', 'programa', 'programaSub') +
    raj('preguntes', 'preguntes', 'preguntesSub') + raj('ple', 'ple', 'pleSub') + raj('mapa', 'mapa', 'mapaSub') + '</nav>' +
    '<div id="iniciNov"><section class="targeta" aria-busy="true"><h2>' + esc(t('novetats')) + '</h2>' +
    '<div class="esquelet"></div><div class="esquelet"></div><div class="esquelet curt"></div></section></div>' +
    '<div id="iniciComp"></div>' +
    '<section class="targeta nivell"><h2>' + esc(t('implicat')) + '</h2><p>' + esc(t('implicatText')) +
    '</p><a class="boto sec2" href="#nivells">' + esc(t('comParticipar')) + '</a></section>');
  api('apiInici', LANG).then(function (d) {
    var dalt = $('iniciDalt'), nov = $('iniciNov'), comp = $('iniciComp');
    if (!dalt || !nov || !comp) return; // la persona ja ha canviat de pantalla
    S.enllacos = d.enllacos;
    var h = '';
    if (d.periode.congelat) h += '<div class="avis">' + esc(t('congelat')) + '</div>';
    if (d.destacada) {
      var e = d.destacada;
      h += '<section class="targeta"><span class="etiqueta">' + esc(t('oberta')) + '</span><h2>' + esc(e.titol) +
        '</h2><p class="sec">' + e.preguntes + ' ' + esc(t('preguntesN')) +
        (e.tancament ? ' · ' + esc(t('fins')) + ' ' + esc(dt(e.tancament)) : '') +
        '</p><a class="boto" href="#enquesta/' + encodeURIComponent(e.id) + '">' + esc(t('contestar')) + '</a></section>';
    }
    dalt.innerHTML = h;
    nov.innerHTML = (d.novetats && d.novetats.length) ?
      '<section class="targeta"><h2>' + esc(t('novetats')) + '</h2>' + llistaNovetats(d.novetats) +
      (d.mesNovetats ? '<a class="boto sec2" href="#novetats">' + esc(t('totesNovetats')) + '</a>' : '') + '</section>' : '';
    comp.innerHTML = d.comptador ? '<section class="targeta"><h2>Participació</h2><p>' + d.comptador.respostes + ' respostes · ' +
      d.comptador.propostes + ' propostes · ' + d.comptador.visites + ' visites</p></section>' : '';
  }).catch(function (e) {
    var nov = $('iniciNov');
    if (nov) nov.innerHTML = error(e);
  });
};

// ---------- enquestes ----------
RUTES.enquestes = function () {
  carrega();
  api('apiEnquestes', LANG).then(function (d) {
    var h = tornar() + '<h2>' + esc(t('enquestes')) + '</h2>';
    if (!d.actives.length) h += '<p class="sec">' + esc(t('capEnquesta')) + '</p>';
    d.actives.forEach(function (e) {
      h += '<section class="targeta"><span class="etiqueta">' + esc(t('oberta')) + '</span><h2>' + esc(e.titol) +
        '</h2><p class="sec">' + e.preguntes + ' ' + esc(t('preguntesN')) + '</p><a class="boto" href="#enquesta/' +
        encodeURIComponent(e.id) + '">' + esc(t('contestar')) + '</a></section>';
    });
    if (d.resultats.length) {
      h += '<h3>' + esc(t('ambResultats')) + '</h3><div class="llista">' + d.resultats.map(function (e) {
        return '<a class="fila" href="#resultats/' + encodeURIComponent(e.id) + '">' + esc(e.titol) + '<span>›</span></a>';
      }).join('') + '</div>';
    }
    pinta(h);
  }).catch(falla);
};

RUTES.enquesta = function (id) {
  carrega();
  api('apiEnquesta', id, LANG).then(function (e) {
    var h = tornar('enquestes') + '<span class="etiqueta">' + esc(t('enquestes')) + '</span><h2>' + esc(e.titol) + '</h2>';
    if (e.descripcio) h += '<p>' + esc(e.descripcio) + '</p>';
    if (!e.activa || e.congelat) {
      h += '<div class="avis">' + esc(e.congelat ? t('congelat') : t('tancada')) + '</div>';
      if (e.resultatsVisibles) h += '<a class="boto" href="#resultats/' + encodeURIComponent(e.id) + '">' + esc(t('veureResultats')) + '</a>';
      return pinta(h);
    }
    h += '<form id="fenq">';
    e.preguntes.forEach(function (p) {
      h += '<section class="targeta"><h3>' + esc(p.text) + (p.obligatoria ? ' <span class="sec">(' + esc(t('obligatoria')) + ')</span>' : '') + '</h3>';
      var nom = 'p' + p.n;
      if (p.tipus === 'imatge') {
        if (p.imatge) h += '<img class="mini" alt="" src="' + esc(p.imatge) + '">';
      } else if (p.tipus === 'sino') {
        h += '<label class="opcio"><input type="radio" name="' + nom + '" value="si">' + esc(t('si')) + '</label>' +
          '<label class="opcio"><input type="radio" name="' + nom + '" value="no">' + esc(t('no')) + '</label>';
      } else if (p.tipus === 'una' || p.tipus === 'diverses') {
        var tipus = p.tipus === 'una' ? 'radio' : 'checkbox';
        p.opcions.forEach(function (o, k) {
          h += '<label class="opcio"><input type="' + tipus + '" name="' + nom + '" value="' + k + '">' + esc(o) + '</label>';
        });
        if (p.altres) {
          h += '<label class="opcio"><input type="' + tipus + '" name="' + nom + '" value="altres">' + esc(t('altres')) + '</label>' +
            '<input type="text" id="' + nom + 'a" maxlength="300" placeholder="' + esc(t('escriu')) + '" aria-label="' + esc(t('altres')) + '">';
        }
      } else {
        h += '<textarea id="' + nom + 't" maxlength="1000" aria-label="' + esc(p.text) + '"></textarea>';
      }
      h += '</section>';
    });
    h += '<div id="errenq"></div><button class="boto" type="submit" id="benq">' + esc(t('seguent')) + '</button>' +
      '<p class="sec">' + esc(t('anonimEnq')) + '</p></form>';
    pinta(h);
    $('fenq').onsubmit = function (ev) {
      ev.preventDefault();
      var resp = [], faltaAlguna = false;
      e.preguntes.forEach(function (p) {
        var nom = 'p' + p.n, r = null;
        var sel = Array.prototype.slice.call(document.querySelectorAll('input[name="' + nom + '"]:checked')).map(function (x) { return x.value; });
        var alt = valor(nom + 'a').trim();
        if (p.tipus === 'sino') r = sel[0] || null;
        else if (p.tipus === 'una') r = sel[0] === 'altres' ? (alt ? { altres: alt } : null) : (sel.length ? Number(sel[0]) : null);
        else if (p.tipus === 'diverses') {
          var ops = sel.filter(function (v) { return v !== 'altres'; }).map(Number);
          var a = sel.indexOf('altres') >= 0 ? alt : '';
          r = (ops.length || a) ? { opcions: ops, altres: a } : null;
        } else if (p.tipus === 'lliure') r = valor(nom + 't').trim() || null;
        if (p.obligatoria && p.tipus !== 'imatge' && r === null) faltaAlguna = true;
        resp.push(r);
      });
      if (faltaAlguna) { $('errenq').innerHTML = error(t('falta')); return; }
      quan($('benq'), api('apiRespondre', e.id, resp), function (r) {
        var h2 = '<div class="exit">' + esc(t('gracies')) + '</div>';
        if (r.resultatsVisibles) h2 += '<a class="boto" href="#resultats/' + encodeURIComponent(e.id) + '">' + esc(t('veureResultats')) + '</a>';
        h2 += compartir('enquesta/' + e.id, e.titol) + '<p>' + tornar() + '</p>';
        pinta(h2);
      }, 'errenq');
    };
  }).catch(falla);
};

RUTES.resultats = function (id) {
  carrega();
  api('apiResultats', id, LANG).then(function (r) {
    var h = tornar('enquestes') + '<span class="etiqueta">' + esc(t('resultats')) + '</span><h2>' + esc(r.titol) + '</h2><p class="sec">' +
      r.participants + ' ' + esc(r.participants === 1 ? t('participant1') : t('participants')) + '</p>';
    r.preguntes.forEach(function (p) {
      if (p.tipus === 'imatge' || p.tipus === 'lliure') return;
      h += '<section class="targeta"><h3>' + esc(p.text) + '</h3>' + barres(p.valors) + '</section>';
    });
    h += compartir('resultats/' + id, r.titol);
    pinta(h);
  }).catch(falla);
};

// ---------- propostes ----------
RUTES.propostes = function () {
  carrega();
  Promise.all([api('apiTemes', LANG), api('apiPropostes', LANG, '')]).then(function (d) {
    var temes = d[0], llista = d[1];
    var h = tornar() + '<h2>' + esc(t('ferProposta')) + '</h2><form id="fprop" class="targeta">' +
      '<label for="ptema">' + esc(t('tema')) + '</label><select id="ptema">' + temes.temes.map(function (x) {
        return '<option value="' + esc(x.id) + '">' + esc(x.nom) + '</option>';
      }).join('') + '</select>' +
      '<label for="pprob">' + esc(t('problemaQ')) + '</label><textarea id="pprob" maxlength="1200"></textarea>' +
      '<label for="psol">' + esc(t('solucioQ')) + '</label><textarea id="psol" maxlength="1200"></textarea>' +
      '<label for="plloc">' + esc(t('lloc')) + '</label><select id="plloc"><option value="">' + esc(t('capLloc')) + '</option>' +
      temes.llocs.map(function (l) { return '<option>' + esc(l) + '</option>'; }).join('') + '</select>' +
      '<div class="parany" aria-hidden="true"><input type="text" id="pweb" tabindex="-1" autocomplete="off"></div>' +
      '<div class="avis">' + esc(t('avisNoms')) + '</div>' +
      '<label class="opcio"><input type="checkbox" id="pnorm">' + esc(t('normesProp')) + '</label>' +
      '<div id="errprop"></div><button class="boto" type="submit" id="bprop">' + esc(t('enviar')) + '</button></form>' +
      '<section class="targeta"><h3>' + esc(t('segueix')) + '</h3><label for="pnum">' + esc(t('numero')) +
      '</label><input type="number" id="pnum" min="1"><button class="boto sec2" type="button" id="bnum">' + esc(t('buscar')) + '</button></section>' +
      '<h3>' + esc(t('publicades')) + '</h3>';
    if (!llista.length) h += '<p class="sec">' + esc(t('capProposta')) + '</p>';
    llista.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">Núm. ' + esc(p.num) + ' · ' + esc(p.tema) + (p.lloc ? ' · ' + esc(p.lloc) : '') +
        '</span><p><b>' + esc(t('problemaQ')) + '</b> ' + esc(p.problema) + '</p><p><b>' + esc(t('solucioQ')) + '</b> ' + esc(p.solucio) +
        '</p><span class="estat t">' + esc(p.estat) + '</span>' + (p.motiu ? '<p class="sec">' + esc(p.motiu) + '</p>' : '') + '</section>';
    });
    pinta(h);
    $('bnum').onclick = function () { var n = valor('pnum'); if (n) ves('proposta/' + n); };
    $('fprop').onsubmit = function (ev) {
      ev.preventDefault();
      if (!marcat('pnorm')) { $('errprop').innerHTML = error(t('calNormes')); return; }
      quan($('bprop'), api('apiEnviarProposta', { tema: valor('ptema'), problema: valor('pprob'), solucio: valor('psol'),
        lloc: valor('plloc'), normes: true, web: valor('pweb'), lang: LANG }), function (r) {
        pinta('<div class="exit">' + esc(t('teuNum')) + ' <b>' + esc(r.num) + '</b>.</div>' +
          '<a class="boto sec2" href="#proposta/' + r.num + '">' + esc(t('segueix')) + '</a>' + tornar());
      }, 'errprop');
    };
  }).catch(falla);
};

RUTES.proposta = function (num) {
  carrega();
  api('apiEstatProposta', num).then(function (r) {
    var h = tornar('propostes') + '<h2>' + esc(t('proposta')) + ' núm. ' + esc(num) + '</h2>';
    if (!r.trobada) h += '<p>' + esc(t('noTrobada')) + '</p>';
    else h += '<section class="targeta"><span class="estat t">' + esc(r.estat) + '</span>' +
      (r.pendent ? ' <span class="sec">' + esc(t('pendentRev')) + '</span>' : '') +
      (r.motiu ? '<p>' + esc(r.motiu) + '</p>' : '') + '</section>';
    pinta(h);
  }).catch(falla);
};

RUTES.mapa = function () {
  carrega();
  api('apiMapa').then(function (llista) {
    var max = Math.max.apply(null, [1].concat(llista.map(function (l) { return l.propostes; })));
    pinta(tornar() + '<h2>' + esc(t('mapa')) + '</h2><p class="sec">' + esc(t('mapaText')) + '</p><section class="targeta">' +
      llista.map(function (l) {
        return '<div class="res-op"><span>' + esc(l.lloc) + '</span><b>' + l.propostes + '</b></div><div class="barra"><i style="width:' +
          Math.round(l.propostes * 100 / max) + '%"></i></div>';
      }).join('') + '</section>');
  }).catch(falla);
};

// ---------- formació ----------
RUTES.formacio = function () {
  carrega();
  api('apiFormacio', LANG).then(function (llista) {
    // Les imatges es carreguen de googleusercontent (la miniatura de Drive demana iniciar sessió si hi ha un compte obert).
    llista.forEach(function (f) {
      var m = /[?&]id=([\w-]+)/.exec(f.miniatura || '');
      if (!m) return;
      f.miniatura = 'https://lh3.googleusercontent.com/d/' + m[1] + '=w800';
      if (f.tipus === 'imatge') f.veure = 'https://lh3.googleusercontent.com/d/' + m[1] + '=w1080';
    });
    // Més noves primer; si tenen la mateixa data, per títol (1 de 3, 2 de 3...).
    llista.sort(function (a, b) {
      return String(b.data || '').localeCompare(String(a.data || '')) || String(a.titol).localeCompare(String(b.titol), 'ca', { numeric: true });
    });
    var h = tornar() + '<h2>' + esc(t('formacio')) + '</h2>';
    if (!llista.length) h += '<p class="sec">' + esc(t('capFormacio')) + '</p>';
    // Sense reproductors incrustats: la miniatura obri el fitxer a Drive quan la persona ho tria.
    llista.forEach(function (f) {
      h += '<section class="targeta"><span class="etiqueta gris">' + esc(f.tipus === 'video' ? 'Vídeo' : f.tipus === 'imatge' ? 'Infografia' : 'Document') +
        '</span><h3>' + esc(f.titol) + '</h3><a href="' + esc(f.veure) + '" target="_blank" rel="noopener"><img class="mini" referrerpolicy="no-referrer" alt="' + esc(f.titol) +
        '" src="' + esc(f.miniatura) + '"></a>' + enllac(f.veure, (f.tipus === 'video' ? '▶ ' : '') + t('veure')) +
        compartir('formacio', f.titol) + '</section>';
    });
    pinta(h);
  }).catch(falla);
};

// ---------- grups i seguiment ----------
RUTES.grups = function () {
  carrega();
  api('apiGrupsPublic', LANG).then(function (llista) {
    var h = tornar() + '<h2>' + esc(t('grups')) + '</h2>';
    if (!llista.length) h += '<p class="sec">' + esc(t('capGrup')) + '</p>';
    h += '<div class="llista">' + llista.map(function (g) {
      return '<a class="fila" href="#seguiment/' + encodeURIComponent(g.id) + '"><span>' + esc(g.nom) + '</span><span class="sec">' +
        g.propostesTancades + ' ' + esc(t('tancades')) + ' ›</span></a>';
    }).join('') + '</div>';
    pinta(h);
  }).catch(falla);
};

RUTES.seguiment = function (id) {
  carrega();
  api('apiSeguiment', id, LANG).then(function (g) {
    var alProg = g.fitxes.filter(function (f) { return f.estat === "Aprovada per l'assemblea"; });
    var h = tornar('grups') + '<span class="etiqueta">' + esc(t('grups')) + '</span><h2>' + esc(g.nom) + '</h2>' +
      '<section class="targeta passos">' +
      '<div><b>1</b><span><strong>' + esc(t('queDiu')) + '</strong><br>' + (g.enquestes.length ? esc(g.enquestes.join(' · ')) : '—') + '</span></div>' +
      '<div><b>2</b><span><strong>' + esc(t('estudiant')) + '</strong><br>' + esc(g.estudiant || t('capEstudi')) + '</span></div>' +
      '<div><b>3</b><span><strong>' + esc(t('propGrup')) + '</strong><br>' + g.fitxes.length + '</span></div>' +
      '<div><b>4</b><span><strong>' + esc(t('alPrograma')) + '</strong><br>' + alProg.length + '</span></div></section>';
    g.fitxes.forEach(function (f) {
      h += '<section class="targeta"><span class="estat t">' + esc(f.estat) + '</span><h3>' + esc(f.titol) + '</h3><p><b>' +
        esc(t('problemaQ')) + '</b> ' + esc(f.problema) + '</p><p><b>' + esc(t('proposta')) + ':</b> ' + esc(f.proposta) + '</p></section>';
    });
    h += '<h3>' + esc(t('veins')) + '</h3>';
    if (!g.propostesVeins.length) h += '<p class="sec">' + esc(t('capProposta')) + '</p>';
    g.propostesVeins.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">Núm. ' + esc(p.num) + '</span><p>' + esc(p.problema) + '</p><p><b>→</b> ' +
        esc(p.solucio) + '</p><span class="estat">' + esc(p.estat) + '</span></section>';
    });
    h += '<a class="boto" href="#propostes">' + esc(t('proposarGrup')) + '</a>' + compartir('seguiment/' + id, g.nom);
    pinta(h);
  }).catch(falla);
};

// ---------- programa, ple, preguntes ----------
RUTES.programa = function () {
  carrega();
  api('apiPrograma', LANG).then(function (llista) {
    var h = tornar() + '<h2>' + esc(t('programa')) + '</h2>';
    if (!llista.length) h += '<p class="sec">' + esc(t('programaBuit')) + '</p>';
    var perGrup = {};
    llista.forEach(function (m) { (perGrup[m.grup] = perGrup[m.grup] || []).push(m); });
    Object.keys(perGrup).forEach(function (g) {
      h += '<section class="targeta"><h3>' + esc(g) + '</h3>' + perGrup[g].map(function (m) {
        return '<p>· ' + esc(m.mesura) + ' <span class="sec">(' + esc(m.origen) + ' ' + esc(m.ref) + ')</span></p>';
      }).join('') + '</section>';
    });
    pinta(h);
  }).catch(falla);
};

RUTES.ple = function () {
  carrega();
  api('apiPle', LANG).then(function (llista) {
    var h = tornar() + '<h2>' + esc(t('ple')) + '</h2>';
    if (!llista.length) h += '<p class="sec">' + esc(t('pleBuit')) + '</p>';
    llista.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">' + esc(dt(p.data)) + '</span><h3>' + esc(p.titol) + '</h3><p>' + esc(p.resum) + '</p>' +
        (p.font ? '<p class="sec">' + esc(t('font')) + ': <a href="' + esc(p.font) + '" target="_blank" rel="noopener">' + esc(p.font) + '</a></p>' : '') +
        compartir('ple', p.titol) + '</section>';
    });
    pinta(h);
  }).catch(falla);
};

RUTES.preguntes = function () {
  carrega();
  api('apiPreguntes', LANG).then(function (llista) {
    var h = tornar() + '<h2>' + esc(t('ferPregunta')) + '</h2><form id="fpreg" class="targeta">' +
      '<label for="qtext">' + esc(t('laPregunta')) + '</label><textarea id="qtext" maxlength="600"></textarea>' +
      '<div class="parany" aria-hidden="true"><input type="text" id="qweb" tabindex="-1" autocomplete="off"></div>' +
      '<label class="opcio"><input type="checkbox" id="qnorm">' + esc(t('normesPreg')) + '</label>' +
      '<div id="errpreg"></div><button class="boto" type="submit" id="bpreg">' + esc(t('enviar')) + '</button></form>' +
      '<h3>' + esc(t('respostes')) + '</h3>';
    if (!llista.length) h += '<p class="sec">' + esc(t('capPregunta')) + '</p>';
    llista.forEach(function (p) {
      h += '<section class="targeta"><h3>' + esc(p.pregunta) + '</h3><p>' + esc(p.resposta) + '</p></section>';
    });
    pinta(h);
    $('fpreg').onsubmit = function (ev) {
      ev.preventDefault();
      if (!marcat('qnorm')) { $('errpreg').innerHTML = error(t('calNormes')); return; }
      quan($('bpreg'), api('apiEnviarPregunta', { pregunta: valor('qtext'), normes: true, web: valor('qweb'), lang: LANG }), function (r) {
        pinta('<div class="exit">' + esc(t('pregEnviada')) + ' <b>' + esc(r.num) + '</b></div>' + tornar());
      }, 'errpreg');
    };
  }).catch(falla);
};

// ---------- nivells, informació, privacitat ----------
function ambEnllacos(f) {
  if (S.enllacos) return f(S.enllacos);
  api('apiInici', LANG).then(function (d) { S.enllacos = d.enllacos; f(S.enllacos); }).catch(falla);
}

RUTES.nivells = function () {
  ambEnllacos(function (e) {
    var wa = e.whatsapp, h = tornar() + '<h2>' + esc(t('nivellsTitol')) + '</h2>';
    [['n1', 'n1t', e.canal, 'n1b'], ['n2', 'n2t', wa, 'escriunos'], ['n3', 'n3t', wa, 'escriunos'],
     ['n4', 'n4t', wa, 'escriunos'], ['n5', 'n5t', wa, 'parlem']].forEach(function (n, i) {
      h += '<section class="targeta nivell"><span class="etiqueta">' + (i + 1) + '</span><h2>' + esc(t(n[0])) + '</h2><p>' + esc(t(n[1])) + '</p>' +
        enllac(n[2], t(n[3])) + '</section>';
    });
    h += '<p class="sec">' + esc(t('nivellsPeu')) + '</p>';
    pinta(h);
  });
};

RUTES.info = function () {
  carrega();
  api('apiActes', LANG).then(function (actes) {
    ambEnllacos(function (e) {
      var h = tornar() + '<h2>' + esc(t('actes')) + '</h2>';
      if (!actes.length) h += '<p class="sec">' + esc(t('capActe')) + '</p>';
      actes.forEach(function (a) {
        h += '<section class="targeta"><span class="sec">' + esc(dt(a.data)) + ' · ' + esc(a.hora) + ' · ' + esc(a.lloc) + '</span><h3>' +
          esc(a.titol) + '</h3><p>' + esc(a.descripcio) + '</p>' + (S.apuntats[a.id] ? '<div class="exit">' + esc(t('apuntat')) + '</div>' :
          '<button class="boto sec2" type="button" data-acte="' + esc(a.id) + '">' + esc(t('aniré')) + '</button>') + '</section>';
      });
      h += '<h2>' + esc(t('xarxes')) + '</h2>' + enllac(e.canal, t('n1b')) + enllac(e.instagram, 'Instagram') +
        enllac(e.facebook, 'Facebook') + enllac(e.blog, 'Blog') +
        '<section class="targeta"><h2>' + esc(t('quiSom')) + '</h2><p>' + esc(t('quiSomText')) + '</p></section>' +
        '<a class="boto sec2" href="#privacitat">' + esc(t('privacitat')) + '</a>';
      pinta(h);
      Array.prototype.forEach.call(document.querySelectorAll('[data-acte]'), function (b) {
        b.onclick = function () {
          var id = b.getAttribute('data-acte');
          quan(b, api('apiInscriure', id), function () { S.apuntats[id] = 1; b.outerHTML = '<div class="exit">' + esc(t('apuntat')) + '</div>'; });
        };
      });
    });
  }).catch(falla);
};

RUTES.privacitat = function () {
  pinta(tornar() + '<h2>' + esc(t('privacitat')) + '</h2><section class="targeta">' +
    t('privText').map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>');
};

// ---------- espais amb codi ----------
RUTES.intern = function (sub, ref) {
  if (!S.codi) {
    pinta(tornar() + '<h2>' + esc(t('acces')) + '</h2><form id="fcodi" class="targeta"><label for="icodi">' + esc(t('codi')) +
      '</label><input type="text" id="icodi" autocomplete="off" autocapitalize="characters">' +
      '<label class="opcio"><input type="checkbox" id="inorm">' + esc(t('normesConf')) + '</label>' +
      '<div id="errcodi"></div><button class="boto" type="submit" id="bcodi">' + esc(t('entrar')) + '</button></form>');
    $('fcodi').onsubmit = function (ev) {
      ev.preventDefault();
      if (!marcat('inorm')) { $('errcodi').innerHTML = error(t('calNormes')); return; }
      var c = valor('icodi').trim().toUpperCase();
      quan($('bcodi'), api('apiAcces', c, LANG), function (r) {
        S.codi = c; S.acces = r;
        ves(iniciRol(r), true);
      }, 'errcodi');
    };
    return;
  }
  var vistes = { grup: vGrup, revisio: vRevisio, reduit: vReduit, assemblea: vAssemblea, panell: vPanell };
  var f = vistes[sub];
  if (!f) { ves(iniciRol(S.acces), true); return; }
  f(ref);
};

function iniciRol(r) {
  return { grup: 'intern/grup/' + r.ref, revisio: 'intern/revisio', reduit: 'intern/reduit',
           assemblea: 'intern/assemblea', admin: 'intern/panell' }[r.rol] || 'inici';
}
function gestor() { return S.acces && (S.acces.rol === 'reduit' || S.acces.rol === 'admin'); }

function capInterna(titol) {
  return '<div class="fila-int"><a class="tornar" href="#inici">‹ ' + esc(t('tornar')) + '</a><a class="tornar" href="#" id="beixir">' + esc(t('eixir')) + '</a></div>' +
    '<span class="etiqueta">' + esc(t('acces')) + '</span><h2>' + esc(titol) + '</h2>';
}
function activarEixir() {
  var b = $('beixir');
  if (b) b.onclick = function (ev) { ev.preventDefault(); S.codi = null; S.acces = null; ves('inici'); };
}

function vGrup(gid) {
  carrega();
  api('apiGrup', S.codi, gid, LANG).then(function (d) {
    var g = d.grup;
    var h = capInterna(g.nom);
    if (S.acces.rol !== 'grup') h += '<p><a href="#intern/reduit">‹ ' + esc(t('grupReduit')) + '</a></p>';
    h += '<section class="targeta"><h3>' + esc(t('estudiant')) + '</h3><p>' + esc(g.estudiant || '—') + '</p></section>';
    h += '<h3>' + esc(t('puntPartida')) + '</h3>';
    d.enquestes.forEach(function (e) {
      h += '<details class="targeta"><summary>' + esc(e.titol) + (e.participants ? ' · ' + e.participants : '') + '</summary>' +
        (e.error ? error(e.error) : '') + (e.preguntes || []).map(function (p) {
          if (p.tipus === 'textos') {
            return '<h3>' + esc(p.text) + '</h3><details><summary>' + p.n + ' respostes</summary>' +
              p.textos.map(function (x) { return '<p>· ' + esc(x) + '</p>'; }).join('') + '</details>';
          }
          return '<h3>' + esc(p.text) + '</h3>' + barres(p.valors);
        }).join('') + '</details>';
    });
    h += '<h3>' + esc(t('formacio')) + '</h3>' + (d.formacio.length ? d.formacio.map(function (f) { return enllac(f.veure, f.titol); }).join('') : '<p class="sec">—</p>');
    h += '<h3>' + esc(t('documents')) + '</h3>' + (d.documents.length ? d.documents.map(function (f) { return enllac(f.veure, f.titol); }).join('') : '<p class="sec">—</p>');
    h += '<h3>' + esc(t('contractes')) + '</h3>';
    if (d.contractes.length) {
      h += '<section class="targeta"><table class="taula"><tr><th>Exp.</th><th>Objecte</th><th>Import</th><th>Estat</th></tr>' +
        d.contractes.map(function (c) {
          return '<tr><td>' + esc(c.expedient) + '</td><td>' + (c.enllac ? '<a target="_blank" rel="noopener" href="' + esc(c.enllac) + '">' + esc(c.objecte) + '</a>' : esc(c.objecte)) +
            '</td><td>' + esc(c.import) + '</td><td>' + esc(c.estat) + '</td></tr>';
        }).join('') + '</table><p class="sec">' + esc(t('fontPlacsp')) + ' ' + esc(d.contractes[0].actualitzat) + '</p></section>';
    } else h += '<p class="sec">—</p>';
    h += '<h3>' + esc(t('veins')) + '</h3>';
    d.propostes.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">Núm. ' + esc(p.num) + (p.lloc ? ' · ' + esc(p.lloc) : '') + '</span><p>' + esc(p.problema) +
        '</p><p><b>→</b> ' + esc(p.solucio) + '</p><label>' + esc(t('canviarEstat')) + '</label><select id="pe' + p.num + '">' +
        ['Al grup', 'En estudi', 'Al programa', 'No es pot fer'].map(function (e) {
          return '<option' + (e === p.estat ? ' selected' : '') + '>' + esc(e) + '</option>';
        }).join('') + '</select><input type="text" id="pm' + p.num + '" placeholder="' + esc(t('motiu')) + '">' +
        '<button class="boto petit" type="button" data-prop="' + p.num + '">' + esc(t('guardar')) + '</button></section>';
    });
    h += '<h3>' + esc(t('fitxes')) + '</h3><p class="sec">' + esc(t('notaVots')) + '</p>';
    // L'assemblea vota; l'acord l'apunta el grup reduït (o el panell).
    var estats = d.estatsFitxa.filter(function (e) {
      return gestor() || e === 'Esborrany' || e === 'Proposta del grup';
    });
    d.fitxes.forEach(function (f) {
      h += '<details class="targeta"><summary><span class="estat t">' + esc(f.estat) + '</span>&nbsp;' + esc(f.titol) + '</summary>' +
        formFitxa(f) + '<label>' + esc(t('estatFitxa')) + '</label><select id="fe' + esc(f.id) + '">' + estats.map(function (e) {
          return '<option' + (e === f.estat ? ' selected' : '') + '>' + esc(e) + '</option>';
        }).join('') + '</select><label>' + esc(t('resultatReunio')) + '</label><textarea id="fr' + esc(f.id) + '">' + esc(f.resultat) +
        '</textarea><label>' + esc(t('discrepancia')) + '</label><textarea id="fd' + esc(f.id) + '">' + esc(f.discrepancia) + '</textarea>' +
        '<button class="boto petit" type="button" data-resultat="' + esc(f.id) + '">' + esc(t('guardar')) + '</button></details>';
    });
    h += '<details class="targeta"><summary>+ ' + esc(t('novaFitxa')) + '</summary>' + formFitxa({ id: '' }) + '</details><div id="errgrup"></div>';
    pinta(h);
    activarEixir();
    Array.prototype.forEach.call(document.querySelectorAll('[data-fitxa]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-fitxa'), k = 'x' + (id || 'nova');
        var f = { id: id, titol: valor(k + 'titol'), problema: valor(k + 'problema'), proposta: valor(k + 'proposta'),
                  qui_decidix: valor(k + 'qui'), cost: valor(k + 'cost'), contracte: valor(k + 'contracte'), tipus: valor(k + 'tipus') };
        quan(b, api('apiGuardarFitxa', S.codi, g.id, f), function () { vGrup(g.id); }, 'errgrup');
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-resultat]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-resultat');
        quan(b, api('apiResultatFitxa', S.codi, g.id, id, valor('fe' + id), valor('fr' + id), valor('fd' + id)), function () { vGrup(g.id); }, 'errgrup');
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-prop]'), function (b) {
      b.onclick = function () {
        var n = b.getAttribute('data-prop');
        quan(b, api('apiEstatPropostaGrup', S.codi, g.id, n, valor('pe' + n), valor('pm' + n)), function () { b.textContent = t('guardat'); }, 'errgrup');
      };
    });
  }).catch(falla);
}

function formFitxa(f) {
  var k = 'x' + (f.id || 'nova');
  var camp = function (c, etiq, area) {
    return '<label for="' + k + c + '">' + esc(t(etiq)) + '</label>' + (area
      ? '<textarea id="' + k + c + '">' + esc(f[c === 'qui' ? 'qui_decidix' : c]) + '</textarea>'
      : '<input type="text" id="' + k + c + '" value="' + esc(f[c === 'qui' ? 'qui_decidix' : c]) + '">');
  };
  return camp('titol', 'titol') + camp('problema', 'problemaQ', true) + camp('proposta', 'proposta', true) + camp('qui', 'quiDecidix') +
    camp('cost', 'cost') + camp('contracte', 'contracte') + '<label for="' + k + 'tipus">' + esc(t('tipus')) + '</label><select id="' + k + 'tipus">' +
    t('tipusOps').map(function (o) { return '<option' + (o === f.tipus ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') +
    '</select><button class="boto petit" type="button" data-fitxa="' + esc(f.id || '') + '">' + esc(t('guardar')) + '</button>';
}

function vRevisio() {
  carrega();
  api('apiRevisio', S.codi).then(function (d) {
    var h = capInterna(t('revisio'));
    if (!d.propostes.length && !d.preguntes.length) h += '<p class="sec">' + esc(t('capPendent')) + '</p>';
    d.propostes.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">' + esc(t('proposta')) + ' núm. ' + esc(p.num) + ' · ' + esc(p.tema) + (p.lloc ? ' · ' + esc(p.lloc) : '') +
        '</span><p>' + esc(p.problema) + '</p><p><b>→</b> ' + esc(p.solucio) + '</p><input type="text" id="rm' + p.num + '" placeholder="' + esc(t('motiu')) +
        '"><button class="boto petit" type="button" data-rev="proposta|' + p.num + '|publicar">' + esc(t('publicar')) +
        '</button><button class="boto petit sec2" type="button" data-rev="proposta|' + p.num + '|rebutjar">' + esc(t('noPublicar')) + '</button></section>';
    });
    d.preguntes.forEach(function (p) {
      h += '<section class="targeta"><span class="sec">' + esc(t('preguntes')) + ' núm. ' + esc(p.num) + '</span><p>' + esc(p.pregunta) + '</p>' +
        (p.resposta_va ? '<p><b>→</b> ' + esc(p.resposta_va) + '</p>' : '<p class="sec">' + esc(t('calResposta')) + '</p>') +
        '<input type="text" id="qm' + p.num + '" placeholder="' + esc(t('motiu')) + '">' +
        '<button class="boto petit" type="button" data-rev="pregunta|' + p.num + '|publicar">' + esc(t('publicar')) +
        '</button><button class="boto petit sec2" type="button" data-rev="pregunta|' + p.num + '|rebutjar">' + esc(t('noPublicar')) + '</button></section>';
    });
    h += '<div id="errrev"></div>';
    pinta(h);
    activarEixir();
    Array.prototype.forEach.call(document.querySelectorAll('[data-rev]'), function (b) {
      b.onclick = function () {
        var p = b.getAttribute('data-rev').split('|');
        var motiu = valor((p[0] === 'pregunta' ? 'qm' : 'rm') + p[1]);
        quan(b, api('apiRevisar', S.codi, p[0], p[1], p[2], motiu), function () { vRevisio(); }, 'errrev');
      };
    });
  }).catch(falla);
}

function vReduit() {
  carrega();
  api('apiReduit', S.codi, LANG).then(function (d) {
    var h = capInterna(t('grupReduit')) + '<p><a class="boto sec2" href="#intern/revisio">' + esc(t('revisio')) + ' (' + d.pendents + ')</a>' +
      '<a class="boto sec2" href="#intern/assemblea">' + esc(t('assemblea')) + '</a></p>' +
      '<section class="targeta"><table class="taula"><tr><th>' + esc(t('grups')) + '</th><th>' + esc(t('veins')) + '</th><th>' + esc(t('fitxes')) + '</th><th></th></tr>' +
      d.grups.map(function (g) {
        var f = g.fitxes;
        return '<tr><td>' + esc(g.nom) + '</td><td>' + g.propostesVeins + '</td><td>' + (f['Esborrany'] || 0) + ' / ' + (f['Proposta del grup'] || 0) + ' / ' +
          (f["Aprovada per l'assemblea"] || 0) + '</td><td>' + (g.actiu ? '<a href="#intern/grup/' + esc(g.id) + '">' + esc(t('obrir')) + '</a> · ' : '') +
          '<a href="#" data-actiu="' + esc(g.id) + '|' + (g.actiu ? '0' : '1') + '">' + esc(g.actiu ? t('desactivar') : t('activar')) + '</a></td></tr>';
      }).join('') + '</table><p class="sec">' + esc(t('fitxes')) + ': esborrany / del grup / aprovades</p></section>';
    if (d.assemblea.length) {
      h += '<h3>' + esc(t('sessions')) + '</h3>' + d.assemblea.map(function (a) { return '<section class="targeta"><b>' + esc(a.data) + '</b><p>' + esc(a.ordre) + '</p></section>'; }).join('');
    }
    pinta(h);
    activarEixir();
    Array.prototype.forEach.call(document.querySelectorAll('[data-actiu]'), function (a) {
      a.onclick = function (ev) {
        ev.preventDefault();
        var p = a.getAttribute('data-actiu').split('|');
        api('apiActivarGrup', S.codi, p[0], p[1] === '1').then(vReduit).catch(function (e) { alert(e.message || e); });
      };
    });
  }).catch(falla);
}

function vAssemblea() {
  carrega();
  api('apiAssemblea', S.codi).then(function (d) {
    var h = capInterna(t('assemblea'));
    h += '<h3>' + esc(t('votacions')) + '</h3>';
    d.votacions.forEach(function (v) {
      h += '<section class="targeta"><h3>' + esc(v.titol) + '</h3>';
      if (v.oberta) {
        h += v.opcions.map(function (o, k) {
          return '<label class="opcio"><input type="radio" name="vo' + esc(v.id) + '" value="' + esc(o) + '">' + esc(o) + '</label>';
        }).join('') + '<label for="vc' + esc(v.id) + '">' + esc(t('codiVot')) + '</label><input type="text" id="vc' + esc(v.id) +
          '" autocomplete="off" autocapitalize="characters"><div id="ve' + esc(v.id) + '"></div><button class="boto" type="button" data-vot="' +
          esc(v.id) + '">' + esc(t('votar')) + '</button>';
      } else if (v.resultat) {
        var tot = v.resultat.reduce(function (s, r) { return s + r.n; }, 0);
        h += barres(v.resultat.map(function (r) { return { opcio: r.opcio + ' (' + r.n + ')', pct: tot ? Math.round(r.n * 100 / tot) : 0 }; }));
      }
      h += '</section>';
    });
    h += '<h3>' + esc(t('pendentsAss')) + '</h3>';
    if (!d.pendents.length) h += '<p class="sec">—</p>';
    d.pendents.forEach(function (f) {
      h += '<details class="targeta"><summary>' + esc(f.titol) + ' · ' + esc(f.grupNom || f.grup) + '</summary><p><b>' + esc(t('problemaQ')) + '</b> ' + esc(f.problema) +
        '</p><p><b>' + esc(t('proposta')) + ':</b> ' + esc(f.proposta) + '</p><p class="sec">' + esc(t('quiDecidix')) + ': ' + esc(f.qui_decidix) +
        ' · ' + esc(t('cost')) + ': ' + esc(f.cost) + ' · ' + esc(f.tipus) + '</p>';
      if (gestor()) {
        h += '<p class="sec">Apunta l\'acord després de la votació:</p>' +
          '<button class="boto petit" type="button" data-acord="' + esc(f.grup) + '|' + esc(f.id) + '|Aprovada per l\'assemblea">Aprovada</button>' +
          '<button class="boto petit sec2" type="button" data-acord="' + esc(f.grup) + '|' + esc(f.id) + '|No aprovada">No aprovada</button>' +
          ' <a href="#intern/grup/' + esc(f.grup) + '">' + esc(t('obrir')) + '</a>';
      }
      h += '</details>';
    });
    h += '<div id="erracord"></div>';
    if (d.sessions.length) {
      h += '<h3>' + esc(t('sessions')) + '</h3>' + d.sessions.map(function (s) {
        return '<section class="targeta"><b>' + esc(s.data) + '</b><p>' + esc(s.ordre) + '</p>' + (s.acords ? '<p class="sec">' + esc(s.acords) + '</p>' : '') + '</section>';
      }).join('');
    }
    pinta(h);
    activarEixir();
    Array.prototype.forEach.call(document.querySelectorAll('[data-vot]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-vot');
        var sel = document.querySelector('input[name="vo' + id + '"]:checked');
        if (!sel) { $('ve' + id).innerHTML = error(t('falta')); return; }
        quan(b, api('apiVotar', id, valor('vc' + id).trim().toUpperCase(), sel.value), function () {
          b.outerHTML = '<div class="exit">' + esc(t('votat')) + '</div>';
        }, 've' + id);
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-acord]'), function (b) {
      b.onclick = function () {
        var p = b.getAttribute('data-acord').split('|');
        quan(b, api('apiResultatFitxa', S.codi, p[0], p[1], p[2], null, null), function () { vAssemblea(); }, 'erracord');
      };
    });
  }).catch(falla);
}

function vPanell() {
  carrega();
  api('apiPanell', S.codi).then(function (d) {
    var c = d.comptadors;
    var max = Math.max.apply(null, [1].concat(d.perDia.map(function (x) { return x.n; })));
    var h = capInterna(t('panell')) +
      '<section class="targeta"><h3>Comptadors</h3><p>Visites hui: <b>' + c.visitesHui + '</b> · 30 dies: <b>' + c.visites30 + '</b><br>Respostes: <b>' +
      c.respostes + '</b> · Propostes: <b>' + c.propostes + '</b> · Inscripcions: <b>' + c.inscripcions + '</b></p>' +
      (d.perDia.length ? '<div class="dies">' : '<div class="dies amagat">') + d.perDia.map(function (x) { return '<i title="' + esc(x.data) + ': ' + x.n + '" style="height:' + Math.round(x.n * 100 / max) + '%"></i>'; }).join('') +
      '</div><p class="sec">Visites, no persones.</p>' +
      '<table class="taula">' + d.perSeccio.map(function (s) { return '<tr><td>' + esc(s.seccio) + '</td><td>' + s.n + '</td></tr>'; }).join('') + '</table></section>';
    h += '<section class="targeta"><h3>Interruptors</h3>' + [['congelat', 'App congelada (període electoral)'], ['comptador_public', 'Comptador públic'],
      ['avisos_correu', 'Avisos per correu'], ['resum_setmanal', 'Resum dels dilluns'], ['contractes_actiu', 'Importar contractes de la Plataforma']].map(function (o) {
      return '<label class="opcio"><input type="checkbox" data-cfg="' + o[0] + '"' + (d.config[o[0]] ? ' checked' : '') + '>' + esc(o[1]) + '</label>';
    }).join('') + '</section>';
    h += '<section class="targeta"><h3>Revisió</h3><p>' + (d.pendents.propostes.length + d.pendents.preguntes.length) +
      ' pendents.</p><a class="boto sec2" href="#intern/revisio">Revisar</a><a class="boto sec2" href="#intern/reduit">' + esc(t('grupReduit')) +
      '</a><a class="boto sec2" href="#intern/assemblea">' + esc(t('assemblea')) + '</a></section>';
    h += '<section class="targeta"><h3>Enquestes</h3>' + (d.enquestes.length ? d.enquestes.map(function (e) {
      return '<details><summary>' + esc(e.titol || e.id) + ' · ' + esc(e.estat) + '</summary>' +
        '<label>Estat</label><select id="ee' + esc(e.id) + '">' + ['esborrany', 'activa', 'tancada'].map(function (s) { return '<option' + (s === e.estat ? ' selected' : '') + '>' + s + '</option>'; }).join('') +
        '</select><label>Obertura</label><input type="date" id="eo' + esc(e.id) + '" value="' + esc(e.obertura) + '"><label>Tancament</label><input type="date" id="et' + esc(e.id) + '" value="' + esc(e.tancament) +
        '"><label>Resultats</label><select id="er' + esc(e.id) + '">' + ['en_acabar', 'data', 'mai'].map(function (s) { return '<option' + (s === e.resultats ? ' selected' : '') + '>' + s + '</option>'; }).join('') +
        '</select><label>Data dels resultats (si has triat «data»)</label><input type="date" id="edr' + esc(e.id) + '" value="' + esc(e.data_resultats) + '"><label class="opcio"><input type="checkbox" id="ed' + esc(e.id) + '"' + (e.destacada ? ' checked' : '') + '>Destacada a l\'inici</label>' +
        '<button class="boto petit" type="button" data-enq="' + esc(e.id) + '">Guardar</button></details>';
    }).join('') : '<p class="sec">Les enquestes noves les prepara Claude al full. Ací les obris i les tanques.</p>') + '</section>';
    h += '<section class="targeta"><h3>Formació</h3><p class="sec">Grups: «tots» o els identificadors separats per comes (p. ex. neteja,aigua).</p>' +
      (d.formacio.length ? d.formacio.map(function (f, i) {
        return '<details><summary>' + esc(f.titol) + (f.public ? ' · públic' : '') + (f.grups ? ' · ' + esc(f.grups) : '') + '</summary>' +
          '<label class="opcio"><input type="checkbox" id="fp' + i + '"' + (f.public ? ' checked' : '') + '>Públic</label><label>Grups</label><input type="text" id="fg' + i + '" value="' + esc(f.grups) +
          '"><label class="opcio"><input type="checkbox" id="fa' + i + '"' + (f.actiu ? ' checked' : '') + '>Activa</label><button class="boto petit" type="button" data-form="' + i + '" data-id="' + esc(f.fitxer_id) + '">Guardar</button></details>';
      }).join('') : '<p class="sec">Deixa les peces a la carpeta «Formació» de Drive. Cada hora entren ací.</p>') +
      '<button class="boto sec2 petit" type="button" id="bsync">Sincronitzar ara</button></section>';
    h += '<section class="targeta"><h3>Codis</h3><table class="taula">' + d.codis.map(function (k) {
      return '<tr><td>' + esc(k.rol) + ' ' + esc(k.ref) + '</td><td>' + esc(k.etiqueta) + '</td><td>' + esc(k.creat) + '</td><td>' + (k.actiu ? (k.rol === 'admin' ? 'actiu' :
        '<a href="#" data-desact="' + k.fila + '">Desactivar</a>') : '—') + '</td></tr>';
    }).join('') + '</table><label>Codi nou per a</label><select id="nrol"><option value="grup">Grup</option><option value="reduit">Grup reduït</option><option value="assemblea">Assemblea</option><option value="revisio">Revisió</option></select>' +
      '<select id="ngrup">' + d.grups.map(function (g) { return '<option value="' + esc(g.id) + '">' + esc(g.nom) + '</option>'; }).join('') + '</select>' +
      '<input type="text" id="netiq" placeholder="Etiqueta (sense noms)"><button class="boto petit" type="button" id="bcodinou">Generar</button><div id="codinou"></div></section>';
    h += '<section class="targeta"><h3>Votacions de l\'assemblea</h3><table class="taula">' + d.votacions.map(function (v) {
      return '<tr><td>' + esc(v.id) + '</td><td>' + esc(v.titol) + '</td><td>' + esc(v.estat) + (v.estat === 'oberta' ? ' · <a href="#" data-tancar="' + esc(v.id) + '">Tancar</a>' : '') + '</td></tr>';
    }).join('') + '</table><label>Votació nova</label><input type="text" id="vtitol" placeholder="Què es vota"><input type="text" id="vops" placeholder="Opcions separades per | (Sí|No|Abstenció)">' +
      '<label>Tancament</label><input type="date" id="vtanc"><button class="boto petit" type="button" id="bvot">Crear</button>' +
      '<label>Codis de vot</label><select id="cvv">' + d.votacions.map(function (v) { return '<option>' + esc(v.id) + '</option>'; }).join('') +
      '</select><input type="number" id="cvn" min="1" max="200" placeholder="Quants"><button class="boto petit" type="button" id="bcv">Generar codis</button>' +
      '<p class="sec">Es reparteixen sense apuntar qui rep cada codi.</p><div id="cvout"></div></section><div id="errpan"></div>';
    pinta(h);
    activarEixir();
    var accio = function (b, nom, p, ok) { return quan(b, api('apiPanellAccio', S.codi, nom, p), ok || function () { vPanell(); }, 'errpan'); };
    Array.prototype.forEach.call(document.querySelectorAll('[data-cfg]'), function (x) {
      x.onchange = function () { accio(x, 'config', { clau: x.getAttribute('data-cfg'), valor: x.checked }, function () {}); };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-enq]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-enq');
        accio(b, 'enquesta', { id: id, estat: valor('ee' + id), obertura: valor('eo' + id), tancament: valor('et' + id), resultats: valor('er' + id),
                               data_resultats: valor('edr' + id), destacada: marcat('ed' + id) });
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-form]'), function (b) {
      b.onclick = function () {
        var i = b.getAttribute('data-form');
        accio(b, 'formacio', { fitxer_id: b.getAttribute('data-id'), public: marcat('fp' + i), grups: valor('fg' + i), actiu: marcat('fa' + i) });
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-desact]'), function (a) {
      a.onclick = function (ev) { ev.preventDefault(); accio(a, 'desactivarCodi', { fila: a.getAttribute('data-desact') }); };
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-tancar]'), function (a) {
      a.onclick = function (ev) { ev.preventDefault(); accio(a, 'tancarVotacio', { id: a.getAttribute('data-tancar') }); };
    });
    $('bsync').onclick = function () { accio($('bsync'), 'sincronitzar', {}); };
    $('bcodinou').onclick = function () {
      var rol = valor('nrol');
      accio($('bcodinou'), 'codi', { rol: rol, ref: rol === 'grup' ? valor('ngrup') : '', etiqueta: valor('netiq') }, function (r) {
        $('codinou').innerHTML = '<div class="codi">' + esc(r.codi) + '</div><p class="sec">Apunta\'l ara: no es tornarà a mostrar.</p>';
      });
    };
    $('bvot').onclick = function () { accio($('bvot'), 'votacio', { titol: valor('vtitol'), opcions: valor('vops'), tancament: valor('vtanc') }); };
    $('bcv').onclick = function () {
      accio($('bcv'), 'codisVot', { votacio: valor('cvv'), n: valor('cvn') }, function (r) {
        $('cvout').innerHTML = '<p class="sec">Imprimix-los i retalla\'ls. No es tornaran a mostrar.</p>' + r.codis.map(function (k) { return '<div class="codi">' + esc(k) + '</div>'; }).join('');
      });
    };
  }).catch(falla);
}

// ---------- arrancada ----------
document.documentElement.lang = LANG === 'es' ? 'es' : 'ca';
ruta();
})();
