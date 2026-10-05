import { loadAnalytics } from './analytics';

const URL = 'https://exemplo.goatcounter.com/count';
const scripts = () => document.querySelectorAll('script[data-goatcounter]');

afterEach(() => {
  scripts().forEach((script) => script.remove());
});

test('carrega o GoatCounter em produção quando há endereço configurado', () => {
  expect(loadAnalytics({ endpoint: URL, production: true, doNotTrack: false })).toBe(true);
  expect(scripts()).toHaveLength(1);
  expect(scripts()[0].dataset.goatcounter).toBe(URL);
});

test('não carrega sem endereço, fora de produção ou com Do Not Track', () => {
  expect(loadAnalytics({ endpoint: '', production: true, doNotTrack: false })).toBe(false);
  expect(loadAnalytics({ endpoint: URL, production: false, doNotTrack: false })).toBe(false);
  expect(loadAnalytics({ endpoint: URL, production: true, doNotTrack: true })).toBe(false);
  expect(scripts()).toHaveLength(0);
});
