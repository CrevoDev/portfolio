/**
 * Contagem de visitas com GoatCounter (sem cookies, sem dados pessoais).
 * Fica desligada até existir REACT_APP_GOATCOUNTER_URL no build, por exemplo
 * https://meu-codigo.goatcounter.com/count. Não roda em desenvolvimento nem
 * quando o visitante ativa "Do Not Track".
 */
export function loadAnalytics({
  endpoint = process.env.REACT_APP_GOATCOUNTER_URL,
  production = process.env.NODE_ENV === 'production',
  doNotTrack = navigator.doNotTrack === '1',
} = {}) {
  if (!endpoint || !production || doNotTrack) return false;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = endpoint;
  document.body.appendChild(script);
  return true;
}
