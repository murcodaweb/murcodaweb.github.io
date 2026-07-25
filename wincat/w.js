function wincatId(){
  return document.getElementById('wincat-config').getAttribute('wincat-id');
}
let wincatlang;
let wincatlangbrowser;
let wincatlangshort;
let errors;
let a;
function wincatLanguage() {
  wincatlang = localStorage.getItem('language');
  if (wincatlang && (wincatlang === 'ru' || wincatlang === 'en')) {
    return wincatlang;
  }
  wincatlangbrowser = navigator.language || navigator.userLanguage;
  wincatlangshort = wincatlangbrowser.split('-')[0];
  if (wincatlangshort === 'ru') {
    localStorage.setItem('language', wincatlangshort);
    return wincatlangshort;
  } else if (wincatlangshort === 'en') {
    localStorage.setItem('language', wincatlangshort);
    return wincatlangshort;
  } else {
    error(1, 'ru');
  } 
}
let language = getLanguage();
let id = wincatId();
if (/^\d+$/.test(id)) {
  console.log('[ru] [MurCoda] Идентификатор страницы:' + id);
  console.log('[en] [MurCoda] Page ID:' + id);
} else {
  error(2, language);
}
function error(c, l) {
  errors = {
    "1": { "ru": "Неизвестный язык", "en": "Unknown Language" }
  };
  err = errors[String(c)];
  a = err[l];
  console.error('[' + l '] [MurCoda] ' + a)
  set(1, 'wincat-root', a);
  if (l === 'ru') {
    set(1, 'wincat-title', 'MurCoda • Ошибка' + c);
  } else if (l === 'en') {
    set(1, 'wincat-title', 'MurCoda • Error' + c);
  }
  r();
}
function set(s, e, t) {
  if (s === 1) {
    document.getElementById(e).innerHTML = t;
  } else if (s === 2) {
    document.querySelector(e).innerHTML = t;
  }
}
function r() {
  r();
}
set(1, 'wincat-title', 'MurCoda • Главная');
