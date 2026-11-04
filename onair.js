/* GPverse OnAir — studio di registrazione per podcast
 * Versione: vedi APP.version e CHANGELOG.md (schema V.maior.minor.patch)
 */
'use strict';

const APP = { name: 'GPverse OnAir', version: '2.4.0' };

const CHANGELOG = [
  { v: '2.4.0', date: '04/11/2026', title: 'OnAir online e installabile', items: [
    'OnAir è online su un indirizzo https: si usa da tablet e smartphone Android senza il PC acceso.',
    'Si installa come app (pulsante «Installa app» o menu del browser → «Installa app» / «Aggiungi a schermata Home»).',
    'Funziona anche senza internet dopo il primo avvio; gli aggiornamenti arrivano da soli quando c\'è rete.',
    'I file audio, le registrazioni e il testo restano salvati sul dispositivo: nulla viene caricato online.'
  ]},
  { v: '2.3.2', date: '31/10/2026', title: 'Video nell\'anteprima delle sessioni', items: [
    'Corretto: aprendo una sessione il video restava nero finché non si premeva ▶. Ora si vede subito il fotogramma del punto scelto, anche quando sposti la barra.',
    'Lettura del video più compatibile su Linux; se il browser non riesce a leggerlo, compare un messaggio al posto del nero.'
  ]},
  { v: '2.3.1', date: '31/10/2026', title: 'Video anche senza grafica 3D, scelta del microfono', items: [
    'Corretto: con la grafica 3D (WebGL) disattivata nel browser il riquadro video restava nero. Ora OnAir passa da solo a una modalità di disegno semplice.',
    'Dispositivi: nuovo pulsante «Trova il microfono giusto»: parli e OnAir sceglie il microfono che ti sente meglio.',
    'Avviso quando OnAir è aperto come file: in quel modo il browser chiede i permessi ogni volta e non lascia scegliere i dispositivi.'
  ]},
  { v: '2.3.0', date: '31/10/2026', title: 'Tasti personalizzabili, guadagno microfono, anteprima video', items: [
    'Teleprompter: scegli quando parte il testo (dopo la sigla, con la registrazione, a mano). Di base parte alla fine della sigla.',
    'Tutte le scorciatoie da tastiera si cambiano in Impostazioni; le etichette sui pulsanti si aggiornano da sole.',
    'Guadagno d\'ingresso del microfono fino a +30 dB (in Dispositivi e nella striscia VOCE), con indicazione basso / buono / troppo alto.',
    'Sessioni: l\'anteprima mostra anche il video registrato, sincronizzato con l\'audio.',
    'Video più fluido: formato più leggero da comprimere, la webcam viene letta solo quando arriva un fotogramma nuovo, risoluzione 540p leggera.',
    'Contatore dei fotogrammi al secondo di webcam e video, e avviso se il browser ha l\'accelerazione grafica spenta.',
    'Pulsante Effetto: spento mostra e registra la webcam senza effetto.'
  ]},
  { v: '2.2.0', date: '31/10/2026', title: 'Video per YouTube e controllo dispositivi', items: [
    'All\'avvio si apre il controllo dispositivi: scegli microfono, uscita audio (cuffie) e webcam, con barra del microfono, prova suono e anteprima webcam.',
    'Se la webcam sparisce (scollegata, occupata da OBS, non trovata) OnAir lo dice e spiega cosa fare; ↻ Ricarica elenco la cerca di nuovo senza riavviare.',
    'Pulsanti MIC e CAM in alto: mostrano lo stato e aprono il controllo dispositivi.',
    'Video con effetto: contorni colorati (giallo di base) su nero, con disturbo regolabile, specchio e 720p/1080p.',
    'Il video segue il re-take e le pause come l\'audio: si taglia allo stesso punto.',
    'Esportazione video WebM per YouTube (VP9 + Opus) con lo stesso mix e volume dell\'MP3.'
  ]},
  { v: '2.1.1', date: '31/10/2026', title: 'Correzione TERMINA', items: [
    'Premendo TERMINA la registrazione si mette subito in pausa e il contatore si ferma; la conferma (o la ripresa) avviene nel pannello.'
  ]},
  { v: '2.1.0', date: '31/10/2026', title: 'Teleprompter, riascolto e mixer completo', items: [
    'Teleprompter: carichi o incolli il testo, scorre alla velocità che scegli, a specchio se serve.',
    'Segnali nel testo ([SIGLA], [SOTTOFONDO], [CAPITOLO], [PAUSA]…): quando la riga di lettura li raggiunge, OnAir li lancia da solo.',
    'Il teleprompter segue il re-take: torna al punto del testo da cui riparti.',
    'Re-take: puoi riascoltarti prima di decidere (prima del taglio, parte da tagliare, o clic sull\'onda).',
    'Sessioni: anteprima del mix con barra di avanzamento, senza dover esportare.',
    'Mixer completo per ogni fonte: gain, bassi, medi, alti; per la voce anche compressore e taglio dei bassi.',
    'Livello predefinito per ogni fonte: ↺ lo ripristina, ★ salva le impostazioni attuali come predefinite.',
    'L\'anteprima e il file esportato hanno esattamente lo stesso suono.'
  ]},
  { v: '2.0.1', date: '31/10/2026', title: 'Correzione avvio', items: [
    'Il pulsante ACCENDI LO STUDIO non partiva aprendo index.html con doppio clic: ora OnAir usa un metodo di registrazione di riserva e si avvia comunque.',
    'Gli errori di avvio ora sono ben visibili.'
  ]},
  { v: '2.0.0', date: '30/10/2026', title: 'Nasce OnAir: web app al posto di Python + OBS + Audacity', items: [
    'Gira nel browser: PC Linux, Windows e (in prova) smartphone.',
    'Registra direttamente la voce dal microfono, senza OBS.',
    'Re-take vero: torni indietro dei secondi che scegli, senti gli ultimi istanti e riparti. Anche sigla, sottofondo e capitoli tornano al punto giusto.',
    'I capitoli fermano il sottofondo, che poi riparte da dove si era interrotto.',
    'Mix finale ritoccabile dopo la registrazione.',
    'Esportazione diretta in MP3 o WAV, normalizzata a −16 LUFS per Spotify.',
    'Indicatori di livello veri; registrazione salvata mentre parli.',
    'Marchio GPverse e versione visibile nell\'app.'
  ]},
  { v: '1.0.0', date: '2026', title: 'PG_PodcastDeck (Python + OBS Studio)', items: [
    'Versione originale fatta con Gemini: console PyQt5 che comandava OBS via WebSocket.'
  ]}
];
const ROADMAP = [
  'Idee per il futuro: trasferire le sessioni tra PC e tablet, voce del teleprompter che segue la lettura'
];

const $ = (id) => document.getElementById(id);
const CHS = ['intro', 'bg', 'cap'];
const ALL = ['voice', 'intro', 'bg', 'cap'];
const CH_LABEL = { voice: 'VOCE', intro: 'SIGLA', bg: 'SOTTOFONDO', cap: 'CAPITOLI' };
const dbl = (db) => Math.pow(10, db / 20);

/* ------------------------------------------------------------ Parametri mixer */
const BASE_P = () => ({ gain: 0, low: 0, mid: 0, high: 0, vol: 100, comp: 0, hp: false });
const FACTORY = { voice: { vol: 100, comp: 30, hp: true }, intro: { vol: 80 }, bg: { vol: 30 }, cap: { vol: 90 } };
const fullP = (ch, p) => ({ ...BASE_P(), ...FACTORY[ch], ...(p || {}) });
function normMix(m) {
  const o = {};
  for (const ch of ALL) { const v = m && m[ch]; o[ch] = typeof v === 'number' ? fullP(ch, { vol: Math.min(150, v) }) : fullP(ch, v); }
  return o;
}

/* Catena di una fonte: gain → (taglia bassi) → bassi → medi → alti → (compressore) → volume → mute.
 * La stessa catena serve per l'ascolto in cuffia, l'anteprima e l'esportazione: il suono è identico. */
class Strip {
  constructor(ctx, ch, dest) {
    this.ctx = ctx; this.ch = ch; const c = ctx;
    this.input = c.createGain(); let n = this.input;
    if (ch === 'voice') { this.hp = c.createBiquadFilter(); this.hp.type = 'highpass'; this.hp.Q.value = 0.707; n.connect(this.hp); n = this.hp; }
    this.lo = c.createBiquadFilter(); this.lo.type = 'lowshelf'; this.lo.frequency.value = 120;
    this.mi = c.createBiquadFilter(); this.mi.type = 'peaking'; this.mi.frequency.value = 1500; this.mi.Q.value = 0.8;
    this.hi = c.createBiquadFilter(); this.hi.type = 'highshelf'; this.hi.frequency.value = 7000;
    n.connect(this.lo); this.lo.connect(this.mi); this.mi.connect(this.hi); n = this.hi;
    if (ch === 'voice') { this.comp = c.createDynamicsCompressor(); this.mk = c.createGain(); n.connect(this.comp); this.comp.connect(this.mk); n = this.mk; }
    this.fader = c.createGain(); this.mute = c.createGain(); n.connect(this.fader); this.fader.connect(this.mute);
    this.output = this.mute; if (dest) this.mute.connect(dest);
    this.first = true;
  }
  set(p, muted = false) {
    const live = (typeof AudioContext !== 'undefined' && this.ctx instanceof AudioContext) && !this.first;
    const t = this.ctx.currentTime;
    const S = (param, v) => { if (live) param.setTargetAtTime(v, t, 0.015); else param.value = v; };
    S(this.input.gain, dbl(p.gain));
    if (this.hp) S(this.hp.frequency, p.hp ? 85 : 10);
    S(this.lo.gain, p.low); S(this.mi.gain, p.mid); S(this.hi.gain, p.high);
    if (this.comp) {
      const a = p.comp / 100;
      this.comp.threshold.value = -6 - 30 * a; this.comp.ratio.value = 1 + 5 * a; this.comp.knee.value = 8;
      this.comp.attack.value = 0.006; this.comp.release.value = 0.16; S(this.mk.gain, dbl(9 * a));
    }
    S(this.fader.gain, p.vol / 100); S(this.mute.gain, muted ? 0 : 1);
    this.first = false;
  }
}

/* ------------------------------------------------------------------ Storage */
const DB = {
  db: null, ok: false,
  mem: { files: new Map(), state: new Map(), sessions: new Map(), chunks: new Map() },
  async open() {
    try {
      this.db = await new Promise((res, rej) => {
        const r = indexedDB.open('gpverse-onair', 1);
        r.onupgradeneeded = () => { for (const s of ['files', 'state', 'sessions', 'chunks']) if (!r.result.objectStoreNames.contains(s)) r.result.createObjectStore(s); };
        r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
        setTimeout(() => rej(new Error('timeout')), 4000);
      });
      this.ok = true;
    } catch (e) { console.warn('IndexedDB non disponibile, uso la memoria', e); this.ok = false; }
  },
  _tx(store, mode, fn) {
    return new Promise((res, rej) => {
      const t = this.db.transaction(store, mode); const req = fn(t.objectStore(store));
      t.oncomplete = () => res(req ? req.result : undefined); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
    });
  },
  async get(s, k) { if (!this.ok) return this.mem[s].get(k); try { return await this._tx(s, 'readonly', o => o.get(k)); } catch (e) { return this.mem[s].get(k); } },
  async put(s, k, v) { if (!this.ok) { this.mem[s].set(k, v); return; } try { await this._tx(s, 'readwrite', o => o.put(v, k)); } catch (e) { console.warn(e); this.mem[s].set(k, v); } },
  async del(s, k) { this.mem[s].delete(k); if (!this.ok) return; try { await this._tx(s, 'readwrite', o => o.delete(k)); } catch (e) { console.warn(e); } },
  async delRange(s, lo, hi) {
    for (const k of [...this.mem[s].keys()]) if (k >= lo && k <= hi) this.mem[s].delete(k);
    if (!this.ok) return; try { await this._tx(s, 'readwrite', o => o.delete(IDBKeyRange.bound(lo, hi))); } catch (e) { console.warn(e); }
  },
  async all(s) {
    if (!this.ok) return [...this.mem[s].values()];
    try { return await this._tx(s, 'readonly', o => o.getAll()); } catch (e) { return [...this.mem[s].values()]; }
  }
};
const ckey = (sid, i) => sid + ':' + String(i).padStart(7, '0');

/* ------------------------------------------------------------------ Stato */
const S = {
  deck: { intro: null, bg: [], caps: [] },
  mix: normMix(null),
  defaults: normMix(null),
  mutes: { voice: false, intro: false, bg: false, cap: false },
  settings: { retakeSec: 5, preroll: 3, ns: false, micId: '', outId: '', camId: '', micGain: 0, keys: null, video: { on: true, thr: 0.16, gl: 0.35, col: '#ffd400', mirror: false, res: 720, fx: true } },
  names: new Map()
};
async function saveDeck() { await DB.put('state', 'deck', { deck: S.deck, mix: S.mix, defaults: S.defaults, mutes: S.mutes }); }
async function saveSettings() { await DB.put('state', 'settings', S.settings); }

/* ------------------------------------------------------------------ Motore */
const E = {
  ctx: null, sr: 48000, strips: {}, bus: {}, an: {}, master: null, micOk: false, micStream: null, micSrc: null, micAn: null, node: null,
  buffers: new Map(), voices: { intro: null, bg: null, cap: null },
  bg: { idx: 0, pos: 0, status: 'stopped' }, capIdx: 0
};

const WORKLET_SRC = `
class OnAirRec extends AudioWorkletProcessor {
  constructor(){ super(); this.buf = new Float32Array(1024); this.n = 0; this.f0 = 0; }
  process(inputs){
    const inp = inputs[0];
    if (inp && inp[0]) {
      const a = inp[0], b = inp[1];
      if (this.n === 0) this.f0 = currentFrame;
      for (let k = 0; k < a.length; k++) this.buf[this.n + k] = b ? (a[k] + b[k]) * 0.5 : a[k];
      this.n += a.length;
      if (this.n >= 1024) { const d = this.buf.slice(0, this.n); this.port.postMessage({ f: this.f0, d }, [d.buffer]); this.n = 0; }
    }
    return true;
  }
}
registerProcessor('onair-rec', OnAirRec);`;

async function initAudio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  E.ctx = new AC({ latencyHint: 'interactive' });
  await E.ctx.resume();
  E.sr = E.ctx.sampleRate;
  E.master = E.ctx.createGain(); E.master.connect(E.ctx.destination);
  for (const ch of ALL) {
    const an = E.ctx.createAnalyser(); an.fftSize = 2048; an.connect(E.master);
    const st = new Strip(E.ctx, ch, an); E.strips[ch] = st; E.bus[ch] = st.input; E.an[ch] = an;
  }
  E.bus.mon = E.strips.voice.input;
  E.micAn = E.ctx.createAnalyser(); E.micAn.fftSize = 2048;
  E.micGain = E.ctx.createGain(); E.micGain.gain.value = dbl(S.settings.micGain || 0); E.micGain.connect(E.micAn);
  applyLevels();
  const sink = E.ctx.createGain(); sink.gain.value = 0; sink.connect(E.ctx.destination);
  try {
    // Metodo principale (AudioWorklet). Aprendo index.html come file il browser lo blocca: in quel caso uso il metodo di riserva.
    if (!E.ctx.audioWorklet) throw new Error('AudioWorklet non supportato');
    const url = URL.createObjectURL(new Blob([WORKLET_SRC], { type: 'application/javascript' }));
    await E.ctx.audioWorklet.addModule(url);
    E.node = new AudioWorkletNode(E.ctx, 'onair-rec', { numberOfInputs: 1, numberOfOutputs: 1, channelCount: 2, channelCountMode: 'explicit' });
    E.node.port.onmessage = (ev) => onFrames(ev.data.f, ev.data.d);
    E.recMode = 'worklet';
  } catch (err) {
    console.warn('AudioWorklet non disponibile, uso ScriptProcessor', err);
    const sp = E.ctx.createScriptProcessor(2048, 2, 1);
    sp.onaudioprocess = (ev) => {
      const ib = ev.inputBuffer, a = ib.getChannelData(0), b = ib.numberOfChannels > 1 ? ib.getChannelData(1) : null;
      const d = new Float32Array(a.length);
      for (let k = 0; k < a.length; k++) d[k] = b ? (a[k] + b[k]) * 0.5 : a[k];
      onFrames(Math.round(ev.playbackTime * E.sr) - a.length, d);
    };
    E.node = sp; E.recMode = 'script';
  }
  E.node.connect(sink); E.micGain.connect(E.node);
}

async function initMic() {
  if (E.micStream) { E.micStream.getTracks().forEach(t => t.stop()); E.micStream = null; }
  if (E.micSrc) { try { E.micSrc.disconnect(); } catch (e) {} E.micSrc = null; }
  try {
    E.micStream = await navigator.mediaDevices.getUserMedia({ audio: {
      deviceId: S.settings.micId ? { exact: S.settings.micId } : undefined,
      echoCancellation: false, noiseSuppression: !!S.settings.ns, autoGainControl: false, channelCount: 1 } });
    E.micSrc = E.ctx.createMediaStreamSource(E.micStream);
    E.micSrc.connect(E.micGain);
    E.micOk = true;
  } catch (e) {
    console.warn('Microfono', e); E.micOk = false;
    if (S.settings.micId) { S.settings.micId = ''; saveSettings(); }
  }
  renderStatus();
}

function setMicGain(db) { S.settings.micGain = db; saveSettings(); if (E.micGain) E.micGain.gain.setTargetAtTime(dbl(db), E.ctx.currentTime, 0.02); const o = $('dMicGainO'); if (o) o.textContent = '+' + db + ' dB'; const r = $('dMicGain'); if (r) r.value = db; const lr = $('liveStrips-voice-in'); if (lr) { lr.value = db; lr.nextElementSibling.textContent = '+' + db + ' dB'; } }
function applyLevels() { if (!E.ctx) return; for (const ch of ALL) E.strips[ch].set(S.mix[ch], S.mutes[ch]); }

async function decodeFile(id, sr) {
  const rec = await DB.get('files', id); if (!rec) return null;
  const ab = await rec.blob.arrayBuffer();
  if (!sr || sr === E.sr) return await E.ctx.decodeAudioData(ab);
  const off = new OfflineAudioContext(2, 1, sr); return await off.decodeAudioData(ab);
}
async function loadBuffer(id) {
  if (!id || E.buffers.has(id)) return E.buffers.get(id);
  try { const b = await decodeFile(id); if (b) E.buffers.set(id, b); return b; }
  catch (e) { toast('Non riesco a leggere ' + (S.names.get(id) || 'un file audio')); return null; }
}
async function preloadDeck() { const ids = [S.deck.intro, ...S.deck.bg, ...S.deck.caps].filter(Boolean); for (const id of ids) await loadBuffer(id); renderDeck(); }

/* ---------------------------------------------------------------- Registratore */
const R = {
  state: 'idle', session: null, CH: 48000, chunks: [], cur: null, curFill: 0, cIdx: 0, len: 0,
  fromFrame: Infinity, untilFrame: Infinity, Tanchor: 0, ctxAnchor: 0, fade: 480, fadeIn: 480,
  holdMode: 'pause', holdN: 0, autosave: null, prerollTimer: null, tpLog: []
};
const isRec = () => R.state === 'rec' || R.state === 'preroll';
const blocked = () => R.state === 'hold' || R.state === 'preroll';
const tlAt = (t) => R.Tanchor + (t - R.ctxAnchor);
const now = () => E.ctx.currentTime;

function onFrames(f, d) {
  if (!R.session) return;
  const a = Math.max(f, R.fromFrame), b = Math.min(f + d.length, R.untilFrame);
  if (b > a) appendVoice(d.subarray(a - f, b - f));
}
function appendVoice(x) {
  let i = 0;
  while (i < x.length) {
    const n = Math.min(x.length - i, R.CH - R.curFill);
    for (let k = 0; k < n; k++) {
      let v = x[i + k];
      if (R.fadeIn < R.fade) { v *= R.fadeIn / R.fade; R.fadeIn++; }
      v = v < -1 ? -1 : v > 1 ? 1 : v;
      R.cur[R.curFill + k] = v < 0 ? v * 32768 : v * 32767;
    }
    R.curFill += n; i += n; R.len += n;
    if (R.curFill === R.CH) sealChunk();
  }
}
function sealChunk() {
  const done = R.cur; R.chunks[R.cIdx] = done; DB.put('chunks', ckey(R.session.id, R.cIdx), done);
  R.cIdx++; R.cur = new Int16Array(R.CH); R.curFill = 0;
  const old = R.cIdx - 120; if (old >= 0) R.chunks[old] = null; // in memoria solo gli ultimi 2 minuti
}
async function chunkData(sess, idx, live) {
  if (live) { if (idx === R.cIdx) return R.cur.subarray(0, R.curFill); if (R.chunks[idx]) return R.chunks[idx]; }
  return await DB.get('chunks', ckey(sess.id, idx));
}
async function readVoice(sess, s, e, live, cache) {
  const out = new Float32Array(Math.max(0, e - s)); const CH = sess.sr;
  if (e <= 0) return out;
  const len = live ? R.len : sess.len;
  const a = Math.max(0, s), b = Math.min(e, len);
  for (let idx = Math.floor(a / CH); idx * CH < b; idx++) {
    let d = cache && cache.get(idx);
    if (!d) { d = await chunkData(sess, idx, live); if (cache && d) { if (cache.size > 3) cache.delete(cache.keys().next().value); cache.set(idx, d); } }
    if (!d) continue;
    const c0 = idx * CH, from = Math.max(a, c0), to = Math.min(b, c0 + d.length);
    for (let n = from; n < to; n++) out[n - s] = d[n - c0] / 32768;
  }
  return out;
}
async function truncateVoice(n) {
  if (n >= R.len) return;
  const idx = Math.floor(n / R.CH);
  const src = idx === R.cIdx ? R.cur : (R.chunks[idx] || await DB.get('chunks', ckey(R.session.id, idx)));
  const cur = new Int16Array(R.CH); const fill = n - idx * R.CH;
  if (src) cur.set(src.subarray(0, fill));
  for (let k = 0; k < Math.min(R.fade, fill); k++) { const p = fill - 1 - k; cur[p] = Math.round(cur[p] * (k / R.fade)); }
  R.chunks.length = idx; R.cur = cur; R.curFill = fill; R.cIdx = idx; R.len = n;
  await DB.delRange('chunks', ckey(R.session.id, idx), ckey(R.session.id, 9999999));
}
async function persistSession() {
  if (!R.session) return;
  R.session.len = R.len;
  if (R.session.video) R.session.video.nGroups = V.gIdx;
  await DB.put('chunks', ckey(R.session.id, R.cIdx), R.cur.slice(0, R.curFill));
  await DB.put('sessions', R.session.id, R.session);
}
function waitFlush(target, ms = 400) {
  return new Promise(res => { const t0 = performance.now(); (function poll() { if (R.len >= target || performance.now() - t0 > ms) res(); else setTimeout(poll, 8); })(); });
}

/* ---------------------------------------------------------- Riproduzione dal vivo */
const posOf = (v, t) => v.offset + Math.max(0, t - v.startCtx);
function addSeg(seg) { R.session.segs.push(seg); return seg; }
function startVoice(ch, fileId, offset, when, extra = {}, noSeg = false) {
  const buf = E.buffers.get(fileId);
  if (!buf) { toast('File ancora in caricamento, riprova tra un attimo'); return null; }
  const off = Math.max(0, Math.min(offset, buf.duration - 0.01));
  const src = E.ctx.createBufferSource(); src.buffer = buf; src.connect(E.bus[ch]); src.start(when, off);
  const v = { ch, fileId, src, startCtx: when, offset: off, dur: buf.duration, manual: false, seg: null, extra };
  if (!noSeg && isRec()) v.seg = addSeg({ ch, fileId, tStart: tlAt(when), off, tEnd: null, ...extra });
  src.onended = () => onVoiceEnded(v);
  E.voices[ch] = v; return v;
}
function stopVoice(ch, when, byHold = false) {
  const v = E.voices[ch]; if (!v) return null;
  when = when ?? now();
  v.manual = true; try { v.src.stop(when); } catch (e) {}
  const pos = posOf(v, when);
  if (v.seg && v.seg.tEnd == null) { v.seg.tEnd = Math.max(v.seg.tStart, tlAt(when)); if (byHold) v.seg.byHold = true; }
  E.voices[ch] = null; return pos;
}
function onVoiceEnded(v) {
  if (v.manual || E.voices[v.ch] !== v) return;
  const endCtx = v.startCtx + (v.dur - v.offset);
  if (v.seg && v.seg.tEnd == null) v.seg.tEnd = tlAt(endCtx);
  E.voices[v.ch] = null;
  if (v.ch === 'bg') { E.bg.idx = (E.bg.idx + 1) % Math.max(1, S.deck.bg.length); E.bg.pos = 0; bgPlay(); }
  if (v.ch === 'cap' && E.bg.status === 'held') bgPlay();
  if (v.ch === 'intro') TP.onIntroEnd();
  renderDeck();
}

/* Sigla */
function introPlay() { if (blocked() || !S.deck.intro) return; stopVoice('intro'); startVoice('intro', S.deck.intro, 0, now()); renderDeck(); }
function introStop() { if (blocked()) return; const was = !!E.voices.intro; stopVoice('intro'); if (was) TP.onIntroEnd(); renderDeck(); }

/* Sottofondo */
function bgPlay() {
  if (!S.deck.bg.length) { E.bg.status = 'stopped'; return; }
  if (E.bg.idx >= S.deck.bg.length) { E.bg.idx = 0; E.bg.pos = 0; }
  const v = startVoice('bg', S.deck.bg[E.bg.idx], E.bg.pos, now(), { bgIdx: E.bg.idx });
  E.bg.status = v ? 'playing' : 'paused';
}
function bgToggle() {
  if (blocked() || !S.deck.bg.length) return;
  if (E.bg.status === 'playing') { E.bg.pos = stopVoice('bg') || 0; E.bg.status = 'paused'; }
  else if (E.bg.status === 'held') toast('Il sottofondo riparte da solo alla fine del capitolo');
  else bgPlay();
  renderDeck();
}
function bgJump(i) {
  if (blocked() || !S.deck.bg.length) return;
  const n = S.deck.bg.length; i = ((i % n) + n) % n;
  const wasPlaying = E.bg.status === 'playing';
  if (wasPlaying) stopVoice('bg');
  E.bg.idx = i; E.bg.pos = 0;
  if (wasPlaying) bgPlay(); else if (E.bg.status !== 'held') E.bg.status = 'paused';
  renderDeck();
}

/* Capitoli */
function capPlay(i) {
  if (blocked() || i < 0 || i >= S.deck.caps.length) return;
  if (E.voices.cap) stopVoice('cap');
  if (E.bg.status === 'playing') { E.bg.pos = stopVoice('bg') || 0; E.bg.status = 'held'; }
  const held = E.bg.status === 'held' ? { idx: E.bg.idx, pos: E.bg.pos } : null;
  startVoice('cap', S.deck.caps[i], 0, now(), { capIdx: i, heldBg: held });
  E.capIdx = i + 1; renderDeck();
}
function capStop() { if (blocked() || !E.voices.cap) return; stopVoice('cap'); if (E.bg.status === 'held') bgPlay(); renderDeck(); }

/* ------------------------------------------------------------ Registrazione */
function fmt(t, tenths = true) {
  t = Math.max(0, t); const h = Math.floor(t / 3600), m = Math.floor(t / 60) % 60, s = Math.floor(t) % 60;
  const base = [h, m, s].map(x => String(x).padStart(2, '0')).join(':');
  return tenths ? base + '.' + Math.floor((t * 10) % 10) : base;
}
function sessionName() {
  const d = new Date(); return 'Puntata ' + d.toLocaleDateString('it-IT') + ' ' + d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
}
async function recStart() {
  if (R.state !== 'idle') return;
  if (!E.micOk) { toast('Microfono non disponibile: controlla il permesso nel browser o scegline un altro in Impostazioni'); return; }
  const id = 's' + Date.now();
  const lat = (E.ctx.outputLatency || 0) + (E.ctx.baseLatency || 0) + 0.01;
  const names = {}; for (const fid of [S.deck.intro, ...S.deck.bg, ...S.deck.caps].filter(Boolean)) names[fid] = S.names.get(fid);
  R.session = { id, name: sessionName(), created: Date.now(), sr: E.sr, len: 0, segs: [], retakes: 0, status: 'rec', latency: lat, names,
    mix: JSON.parse(JSON.stringify(S.mix)), appVersion: APP.version, capIdx0: E.capIdx };
  R.CH = E.sr; R.chunks = []; R.cur = new Int16Array(R.CH); R.curFill = 0; R.cIdx = 0; R.len = 0;
  R.fade = Math.round(0.01 * E.sr); R.fadeIn = 0;
  const t = now() + 0.05;
  R.Tanchor = 0; R.ctxAnchor = t; R.fromFrame = Math.round(t * E.sr); R.untilFrame = Infinity;
  R.state = 'rec';
  for (const ch of CHS) { const v = E.voices[ch]; if (v) v.seg = addSeg({ ch, fileId: v.fileId, tStart: 0, off: posOf(v, t), tEnd: null, ...v.extra }); }
  R.tpLog = []; TP.onRecStart();
  if (S.settings.video.on && S.settings.camId !== 'none' && V.codec) {
    if (CAM.ok) V.start(R.session); else toast('Webcam non attiva: registro solo l\'audio');
  }
  await DB.put('sessions', id, R.session);
  R.autosave = setInterval(persistSession, 3000);
  renderAll();
}
async function enterHold(mode) {
  if (R.state !== 'rec') return;
  const t = now();
  R.untilFrame = Math.round(t * E.sr);
  const T = tlAt(t);
  for (const ch of CHS) if (E.voices[ch]) stopVoice(ch, t, true);
  TP.onHold();
  R.state = 'hold'; R.holdMode = mode; renderAll();
  await Promise.all([waitFlush(Math.round(T * E.sr)), V.hold()]);
  const maxN = Math.min(60, R.len / E.sr);
  R.holdN = mode === 'retake' ? Math.min(S.settings.retakeSec, maxN) : 0;
  openHold();
}
async function commitHold() {
  if (R.state !== 'hold') return;
  stopListen();
  const N = Math.max(0, R.holdN);
  const nS = Math.max(0, Math.round(R.len - N * E.sr));
  const Tq = nS / E.sr;
  $('holdModal').hidden = true;
  await truncateVoice(nS);
  await V.truncate(Tq);
  if (N > 0) R.session.retakes++;

  // Taglia la scaletta musicale al punto di ripartenza
  const kept = [], open = [];
  for (const s of R.session.segs) {
    if (s.tStart >= Tq - 1e-6) continue;
    if (s.byHold || s.tEnd > Tq) { s.tEnd = Math.min(s.tEnd ?? Tq, Tq); open.push(s); }
    delete s.byHold; kept.push(s);
  }
  R.session.segs = kept;

  // Ricostruisce lo stato del deck a quell'istante
  const last = (ch) => { let r = null; for (const s of kept) if (s.ch === ch && (!r || s.tStart >= r.tStart)) r = s; return r; };
  const openOf = (ch) => open.find(s => s.ch === ch);
  const lc = last('cap'); E.capIdx = lc ? lc.capIdx + 1 : (R.session.capIdx0 || 0);
  const ob = openOf('bg'), oc = openOf('cap'), lb = last('bg');
  if (ob) E.bg = { idx: ob.bgIdx, pos: ob.off + (Tq - ob.tStart), status: 'playing' };
  else if (oc && oc.heldBg) E.bg = { idx: oc.heldBg.idx, pos: oc.heldBg.pos, status: 'held' };
  else if (lb) E.bg = { idx: lb.bgIdx, pos: lb.off + (lb.tEnd - lb.tStart), status: 'paused' };
  else if (E.bg.status === 'playing' || E.bg.status === 'held') E.bg.status = 'paused';

  // Pre-ascolto: voce e musica degli ultimi secondi, poi si riparte
  const P = Math.min(S.settings.preroll, Tq);
  const base = now() + 0.12, end = base + P, w0 = Tq - P;
  R.Tanchor = Tq; R.ctxAnchor = end; R.fromFrame = Math.round(end * E.sr); R.untilFrame = Infinity; R.fadeIn = 0;
  R.state = 'preroll';
  TP.onResume(Tq, w0);
  if (P > 0) {
    const pre = await readVoice(R.session, nS - Math.round(P * E.sr), nS, true);
    const b = E.ctx.createBuffer(1, pre.length, E.sr); b.copyToChannel(pre, 0);
    const s = E.ctx.createBufferSource(); s.buffer = b; s.connect(E.bus.mon); s.start(base);
    for (const sg of kept) {
      if (open.includes(sg) || sg.tEnd <= w0) continue;
      const buf = E.buffers.get(sg.fileId); if (!buf) continue;
      const a = Math.max(sg.tStart, w0);
      const src = E.ctx.createBufferSource(); src.buffer = buf; src.connect(E.bus[sg.ch]);
      src.start(base + (a - w0), sg.off + (a - sg.tStart)); src.stop(base + (sg.tEnd - w0));
    }
  }
  for (const sg of open) {
    const a = Math.max(sg.tStart, w0);
    const extra = {}; for (const k of ['bgIdx', 'capIdx', 'heldBg']) if (k in sg) extra[k] = sg[k];
    const v = startVoice(sg.ch, sg.fileId, sg.off + (a - sg.tStart), base + (a - w0), extra, true);
    if (v) v.seg = addSeg({ ch: sg.ch, fileId: sg.fileId, tStart: Tq, off: sg.off + (Tq - sg.tStart), tEnd: null, ...extra });
  }
  persistSession();
  clearTimeout(R.prerollTimer);
  R.prerollTimer = setTimeout(() => { if (R.state === 'preroll') { R.state = 'rec'; renderAll(); } }, Math.max(0, (end - now()) * 1000));
  renderAll();
}
async function recFinish() {
  stopListen();
  if (R.state === 'rec') {
    const t = now(); R.untilFrame = Math.round(t * E.sr);
    for (const ch of CHS) if (E.voices[ch]) stopVoice(ch, t);
    R.state = 'hold'; await waitFlush(Math.round(tlAt(t) * E.sr));
  } else if (R.state !== 'hold') return;
  await V.stop();
  for (const s of R.session.segs) { if (s.tEnd == null || s.tEnd > R.len / E.sr) s.tEnd = R.len / E.sr; delete s.byHold; }
  clearInterval(R.autosave);
  R.session.status = 'done';
  await persistSession();
  const sid = R.session.id;
  R.session = null; R.state = 'idle'; R.fromFrame = Infinity;
  E.bg = { idx: 0, pos: 0, status: 'stopped' }; E.capIdx = 0; // la prossima puntata riparte da capo
  TP.onFinish();
  $('holdModal').hidden = true;
  renderAll();
  openSessions(sid);
}

/* ------------------------------------------------------------- Pannello pausa / re-take */
let LS = null; // ascolto in corso nel pannello
function openHold() {
  const m = $('holdModal'); m.hidden = false;
  $('holdTitle').textContent = { retake: 'RE-TAKE', pause: 'IN PAUSA', end: 'VUOI TERMINARE LA REGISTRAZIONE?' }[R.holdMode];
  const r = $('holdRange'); r.max = String(Math.max(0, Math.min(60, R.len / E.sr)).toFixed(1));
  waveCache = null;
  updateHold(); drawHoldWave();
  $('holdEnd').classList.toggle('go', R.holdMode === 'end');
  (R.holdMode === 'end' ? $('holdEnd') : $('holdGo')).focus();
}
function setHoldN(n) {
  const maxN = Math.min(60, R.len / E.sr);
  R.holdN = Math.round(Math.max(0, Math.min(maxN, n)) * 2) / 2; updateHold(); drawHoldWave();
}
function updateHold() {
  const T = R.len / E.sr;
  $('holdN').textContent = R.holdN % 1 ? R.holdN.toFixed(1) : String(R.holdN);
  $('holdRange').value = String(R.holdN);
  $('holdFrom').textContent = fmt(T); $('holdTo').textContent = fmt(T - R.holdN);
  const P = Math.min(S.settings.preroll, T - R.holdN);
  $('holdPre').textContent = P > 0 ? `Prima di ripartire senti gli ultimi ${P % 1 ? P.toFixed(1) : P} s` : 'Si riparte subito';
  $('lsCut').disabled = R.holdN <= 0;
}
let waveCache = null;
async function drawHoldWave() {
  const cv = $('holdWave'); const W = cv.width;
  const span = 30, T = R.len / E.sr, t0 = Math.max(0, T - span);
  if (!waveCache || waveCache.len !== R.len) {
    const d = await readVoice(R.session, Math.round(t0 * E.sr), R.len, true);
    const cols = W, per = Math.max(1, Math.floor(d.length / cols)), peaks = new Float32Array(cols);
    for (let c = 0; c < cols; c++) { let p = 0; for (let k = c * per; k < (c + 1) * per && k < d.length; k++) { const a = Math.abs(d[k]); if (a > p) p = a; } peaks[c] = p; }
    waveCache = { len: R.len, peaks, t0, dur: d.length / E.sr };
  }
  paintWave();
}
function paintWave() {
  if (!waveCache) return;
  const cv = $('holdWave'), g = cv.getContext('2d'); const W = cv.width, H = cv.height, span = 30;
  const { peaks, dur, t0 } = waveCache; const used = dur > 0 ? Math.min(W, Math.round(W * dur / span)) : 0;
  waveCache.used = used;
  g.clearRect(0, 0, W, H);
  const cut = used - Math.round(used * (R.holdN / Math.max(dur, 0.001)));
  for (let x = 0; x < used; x++) {
    const p = Math.min(1, peaks[Math.floor(x * peaks.length / Math.max(1, used))] * 1.6), h = Math.max(2, p * (H - 20));
    g.fillStyle = x >= cut ? 'rgba(255,61,110,.85)' : 'rgba(58,232,255,.8)';
    g.fillRect(x, (H - h) / 2, 1, h);
  }
  g.fillStyle = '#ffc04a'; g.fillRect(Math.max(0, cut - 1), 0, 3, H);
  if (LS) {
    const t = LS.from + Math.max(0, E.ctx.currentTime - LS.t0);
    const x = Math.round((t - t0) / Math.max(dur, 0.001) * used);
    g.fillStyle = '#ffffff'; g.fillRect(x - 1, 0, 2, H);
  }
  g.fillStyle = 'rgba(111,135,166,.9)'; g.font = '22px "JetBrains Mono", monospace';
  g.fillText('ultimi ' + Math.round(dur) + ' s', 10, 26);
}
async function listen(fromSec, toSec) {
  stopListen();
  fromSec = Math.max(0, fromSec); toSec = Math.min(R.len / E.sr, toSec);
  if (toSec - fromSec < 0.05) return;
  const d = await readVoice(R.session, Math.round(fromSec * E.sr), Math.round(toSec * E.sr), true);
  const buf = E.ctx.createBuffer(1, d.length, E.sr); buf.copyToChannel(d, 0);
  const s = E.ctx.createBufferSource(); s.buffer = buf; s.connect(E.bus.mon);
  const t0 = E.ctx.currentTime + 0.04; s.start(t0);
  LS = { s, t0, from: fromSec };
  s.onended = () => { if (LS && LS.s === s) { LS = null; paintWave(); } };
}
function stopListen() { if (LS) { try { LS.s.stop(); } catch (e) {} LS = null; paintWave(); } }

/* ------------------------------------------------------------- Mix finale: anteprima ed export */
async function prepSession(sess, decodeSr) {
  const total = sess.len, srT = sess.sr;
  const bufs = new Map();
  for (const id of new Set(sess.segs.map(s => s.fileId))) {
    let b = decodeSr === E.sr ? E.buffers.get(id) : null;
    if (!b) { try { b = await decodeFile(id, decodeSr); if (b && decodeSr === E.sr) E.buffers.set(id, b); } catch (e) { b = null; } }
    if (b) bufs.set(id, b);
  }
  const segs = sess.segs.map(s => ({ ...s, S: Math.round(s.tStart * srT), E: Math.round((s.tEnd ?? total / srT) * srT), O: Math.round(s.off * srT) })).filter(s => s.E > s.S && bufs.has(s.fileId));
  for (const s of segs) {
    s.cPrev = segs.some(o => o !== s && o.ch === s.ch && o.fileId === s.fileId && Math.abs(o.E - s.S) <= 2 && Math.abs(o.O + (o.E - o.S) - s.O) <= 2);
    s.cNext = segs.some(o => o !== s && o.ch === s.ch && o.fileId === s.fileId && Math.abs(s.E - o.S) <= 2 && Math.abs(s.O + (s.E - s.S) - o.O) <= 2);
  }
  return { bufs, segs, srT, lat: Math.round((sess.latency || 0) * srT) };
}
/* Programma un pezzo di musica nell'intervallo [a, b) della timeline (in campioni), dove "base" è l'istante del contesto che corrisponde ad a. */
function schedSeg(c, prep, s, a, b, dest, base) {
  const srT = prep.srT, buf = prep.bufs.get(s.fileId);
  const startAt = Math.max(s.S, a), stopAt = Math.min(s.E, b); if (stopAt <= startAt) return null;
  const offset = (s.O + startAt - s.S) / srT; if (offset >= buf.duration) return null;
  const when = base + (startAt - a) / srT, dur = (stopAt - startAt) / srT;
  const src = c.createBufferSource(); src.buffer = buf; const env = c.createGain(); src.connect(env); env.connect(dest);
  const F = 0.015, tS = base + (s.S - a) / srT, tE = base + (s.E - a) / srT;
  if (!s.cPrev && s.S >= a) { env.gain.setValueAtTime(0, tS); env.gain.linearRampToValueAtTime(1, tS + F); }
  if (!s.cNext && s.E <= b) { env.gain.setValueAtTime(1, Math.max(when, tE - F)); env.gain.linearRampToValueAtTime(0, tE); }
  src.start(Math.max(0, when), offset, dur); return src;
}
async function renderMix(sess, mix, sink, onProg, phase, outSr) {
  const prep = await prepSession(sess, sess.sr);
  const sr = sess.sr, total = sess.len, W = sr * 10, PAD = sr, cache = new Map(); outSr = outSr || sr;
  const os = (x) => Math.round(x / sr * outSr);
  for (let a = 0; a < total; a += W) {
    const s0 = Math.max(0, a - PAD), b = Math.min(total, a + W), len = b - s0;
    const o0 = os(s0), oa = os(a), ob = os(b);
    const oc = new OfflineAudioContext(2, ob - o0, outSr);
    const st = {}; for (const ch of ALL) { st[ch] = new Strip(oc, ch, oc.destination); st[ch].set(mix[ch], false); }
    const v = await readVoice(sess, s0 + prep.lat, b + prep.lat, false, cache);
    const vb = oc.createBuffer(1, len, sr); vb.copyToChannel(v, 0);
    const vs = oc.createBufferSource(); vs.buffer = vb; vs.connect(st.voice.input); vs.start(0);
    for (const s of prep.segs) schedSeg(oc, prep, s, s0, b, st[s.ch].input, 0);
    const out = await oc.startRendering();
    sink(out.getChannelData(0).subarray(oa - o0), out.getChannelData(1).subarray(oa - o0));
    onProg(phase, b / total);
    await new Promise(r => setTimeout(r, 0));
  }
}
class VidPlayer {
  constructor(sess, canvas) { this.sess = sess; this.v = sess.video; this.cv = canvas; this.g = canvas.getContext('2d'); this.q = []; this.gen = 0; this.dec = null; this.idx = null; }
  async index() {
    if (this.idx) return;
    if (this.v.gt) { this.idx = this.v.gt.map((x, i) => x ? { i, t0: x[0], k: x[1] } : null).filter(Boolean); return; }
    this.idx = [];
    for (let i = 0; i < (this.v.nGroups || 0); i++) { const g = await DB.get('chunks', vkey(this.sess.id, i)); if (g) { const k = g.ch.find(c => c.key); this.idx.push({ i, t0: g.t0, k: k ? k.ts : null }); } }
  }
  async start(from) {
    this.stop(); const gen = ++this.gen;
    await this.index(); if (gen !== this.gen) return;
    if (!this.idx.length) { this.msg('In questa sessione non c\'è video registrato'); return; }
    const us = from * 1e6; let si = 0;
    for (let j = 0; j < this.idx.length; j++) { if (this.idx[j].t0 > us) break; if (this.idx[j].k != null && this.idx[j].k <= us) si = j; }
    this.shown = false; this.err = null;
    this.dec = new VideoDecoder({ output: (f) => { if (gen !== this.gen) { f.close(); return; } this.q.push(f); }, error: (e) => { console.warn('decoder', e); this.err = e; this.msg('Il browser non riesce a leggere questo video (' + e.message + ')'); } });
    let cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h, hardwareAcceleration: 'prefer-software' };
    try { const sup = await VideoDecoder.isConfigSupported(cfg); if (!sup.supported) { cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h }; } } catch (e) { cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h }; }
    if (gen !== this.gen) return;
    this.dec.configure(cfg);
    this.next = si; this.started = false; this.pump(gen);
  }
  async pump(gen) {
    if (this.busy || !this.dec) return; this.busy = true;
    try {
      while (gen === this.gen && this.next < this.idx.length && this.q.length < 24 && this.dec.decodeQueueSize < 12) {
        const g = await DB.get('chunks', vkey(this.sess.id, this.idx[this.next].i)); this.next++;
        if (!g || gen !== this.gen) continue;
        for (const c of g.ch) { if (!this.started) { if (!c.key) continue; this.started = true; } this.dec.decode(new EncodedVideoChunk({ type: c.key ? 'key' : 'delta', timestamp: c.ts, data: c.d })); }
      }
    } catch (e) { console.warn(e); }
    this.busy = false;
  }
  draw(pos) {
    if (this.err) return;
    const us = pos * 1e6; let f = null;
    while (this.q.length && this.q[0].timestamp <= us + 16000) { if (f) f.close(); f = this.q.shift(); }
    if (f) { this.g.drawImage(f, 0, 0, this.cv.width, this.cv.height); f.close(); this.shown = true; }
    else if (!this.shown && this.q.length) { this.g.drawImage(this.q[0], 0, 0, this.cv.width, this.cv.height); this.shown = true; }
    if (this.q.length < 12) this.pump(this.gen);
  }
  msg(t) { const g = this.g, W = this.cv.width, H = this.cv.height; g.fillStyle = '#000'; g.fillRect(0, 0, W, H); g.fillStyle = '#ffc04a'; g.font = Math.round(H / 22) + 'px sans-serif'; g.textAlign = 'center'; g.fillText(t, W / 2, H / 2, W * 0.9); g.textAlign = 'start'; }
  stop() { this.gen++; if (this.dec) { try { this.dec.close(); } catch (e) {} this.dec = null; } for (const f of this.q) f.close(); this.q = []; this.busy = false; }
}
class Preview {
  constructor(sess, onTick) {
    this.sess = sess; this.onTick = onTick; this.total = sess.len / sess.sr; this.pos = 0; this.playing = false; this.gen = 0;
    this.out = E.ctx.createGain(); this.out.connect(E.ctx.destination);
    this.st = {}; for (const ch of ALL) { this.st[ch] = new Strip(E.ctx, ch, this.out); this.st[ch].set(sess.mix[ch], false); }
    this.srcs = []; this.cache = new Map();
    this.vid = null;
  }
  attachVideo(canvas) { if (this.sess.video && this.sess.video.nGroups && typeof VideoDecoder !== 'undefined') { this.vid = new VidPlayer(this.sess, canvas); this.vid.start(0); } }
  async play(from) {
    this.stop(); const gen = ++this.gen;
    if (!this.prep) this.prep = await prepSession(this.sess, E.sr);
    if (gen !== this.gen) return;
    from = Math.max(0, Math.min(this.total - 0.1, from));
    const c = E.ctx; this.t0 = c.currentTime + 0.1; this.from = from; this.playing = true;
    const a = Math.round(from * this.prep.srT);
    for (const s of this.prep.segs) { const src = schedSeg(c, this.prep, s, a, this.sess.len, this.st[s.ch].input, this.t0); if (src) this.srcs.push(src); }
    this.vNext = a; this.pump(gen); this.timer = setInterval(() => this.pump(gen), 300);
    if (this.vid) this.vid.start(from);
  }
  async pump(gen) {
    if (this.busy || !this.playing || gen !== this.gen) return; this.busy = true;
    const srT = this.prep.srT, a0 = Math.round(this.from * srT), ahead = Math.round((this.position() + 4) * srT);
    while (this.playing && gen === this.gen && this.vNext < Math.min(ahead, this.sess.len)) {
      const b = Math.min(this.sess.len, this.vNext + srT * 2);
      const v = await readVoice(this.sess, this.vNext + this.prep.lat, b + this.prep.lat, false, this.cache);
      if (!this.playing || gen !== this.gen) break;
      const buf = E.ctx.createBuffer(1, v.length, srT); buf.copyToChannel(v, 0);
      const s = E.ctx.createBufferSource(); s.buffer = buf; s.connect(this.st.voice.input);
      s.start(Math.max(E.ctx.currentTime, this.t0 + (this.vNext - a0) / srT)); this.srcs.push(s);
      this.vNext = b;
    }
    this.busy = false;
    if (this.playing && this.position() >= this.total) { this.stop(); this.pos = 0; }
    this.onTick && this.onTick();
  }
  position() { return this.playing ? Math.min(this.total, this.from + Math.max(0, E.ctx.currentTime - this.t0)) : this.pos; }
  stop() {
    if (this.playing) this.pos = this.position();
    this.playing = false; this.gen++; clearInterval(this.timer);
    for (const s of this.srcs) { try { s.stop(); } catch (e) {} } this.srcs = [];
    this.onTick && this.onTick();
  }
  set(ch) { this.st[ch].set(this.sess.mix[ch], false); }
  seekVideo(t) { if (this.vid) this.vid.start(t); }
  destroy() { this.stop(); if (this.vid) this.vid.stop(); try { this.out.disconnect(); } catch (e) {} }
}

/* Misura del volume (EBU R128 / ITU BS.1770) e limitatore finale */
function kCoefs(fs) {
  let G = 3.999843853973347, f0 = 1681.974450955533, Q = 0.7071752369554196;
  let A = Math.pow(10, G / 40), w = 2 * Math.PI * f0 / fs, c = Math.cos(w), al = Math.sin(w) / (2 * Q), sA = Math.sqrt(A);
  let a0 = (A + 1) - (A - 1) * c + 2 * sA * al;
  const s1 = { b0: A * ((A + 1) + (A - 1) * c + 2 * sA * al) / a0, b1: -2 * A * ((A - 1) + (A + 1) * c) / a0, b2: A * ((A + 1) + (A - 1) * c - 2 * sA * al) / a0,
    a1: 2 * ((A - 1) - (A + 1) * c) / a0, a2: ((A + 1) - (A - 1) * c - 2 * sA * al) / a0 };
  f0 = 38.13547087602444; Q = 0.5003270373238773; w = 2 * Math.PI * f0 / fs; c = Math.cos(w); al = Math.sin(w) / (2 * Q); a0 = 1 + al;
  const s2 = { b0: (1 + c) / 2 / a0, b1: -(1 + c) / a0, b2: (1 + c) / 2 / a0, a1: -2 * c / a0, a2: (1 - al) / a0 };
  return [s1, s2];
}
class LoudnessMeter {
  constructor(sr) { this.f = kCoefs(sr); this.z = [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]; this.sub = Math.round(0.1 * sr); this.acc = 0; this.cnt = 0; this.subs = []; this.peak = 0; }
  push(L, Rr) {
    const [a, b] = this.f; const z = this.z;
    for (let i = 0; i < L.length; i++) {
      let p = 0;
      for (let c = 0; c < 2; c++) {
        const x = c ? Rr[i] : L[i]; const ax = Math.abs(x); if (ax > this.peak) this.peak = ax;
        const z1 = z[c][0], z2 = z[c][1];
        const y1 = a.b0 * x + z1[0]; z1[0] = a.b1 * x - a.a1 * y1 + z1[1]; z1[1] = a.b2 * x - a.a2 * y1;
        const y2 = b.b0 * y1 + z2[0]; z2[0] = b.b1 * y1 - b.a1 * y2 + z2[1]; z2[1] = b.b2 * y1 - b.a2 * y2;
        p += y2 * y2;
      }
      this.acc += p;
      if (++this.cnt === this.sub) { this.subs.push(this.acc / this.sub); this.acc = 0; this.cnt = 0; }
    }
  }
  result() {
    const bl = []; for (let i = 3; i < this.subs.length; i++) bl.push((this.subs[i] + this.subs[i - 1] + this.subs[i - 2] + this.subs[i - 3]) / 4);
    const L = p => -0.691 + 10 * Math.log10(p);
    const g1 = bl.filter(p => p > 0 && L(p) > -70); if (!g1.length) return -Infinity;
    const rel = L(g1.reduce((s, v) => s + v, 0) / g1.length) - 10;
    const g2 = g1.filter(p => L(p) > rel); return L(g2.reduce((s, v) => s + v, 0) / g2.length);
  }
}
class Limiter {
  constructor(sr, ceilDb = -1) {
    this.c = Math.pow(10, ceilDb / 20); this.look = Math.max(1, Math.round(0.005 * sr));
    this.bl = new Float32Array(this.look); this.br = new Float32Array(this.look);
    this.cap = this.look + 2; this.qv = new Float32Array(this.cap); this.qi = new Float64Array(this.cap); this.qh = 0; this.qn = 0;
    this.n = 0; this.g = 1; this.rel = 1 - Math.exp(-1 / (0.08 * sr));
  }
  process(L, Rr, oL, oR) {
    const cap = this.cap;
    for (let i = 0; i < L.length; i++) {
      const xl = L[i], xr = Rr[i]; const pk = Math.max(Math.abs(xl), Math.abs(xr)); const gr = pk > this.c ? this.c / pk : 1;
      const n = this.n++;
      while (this.qn > 0 && this.qv[(this.qh + this.qn - 1) % cap] >= gr) this.qn--;
      const p = (this.qh + this.qn) % cap; this.qv[p] = gr; this.qi[p] = n; this.qn++;
      const m = n - this.look;
      while (this.qn > 1 && this.qi[this.qh] < m) { this.qh = (this.qh + 1) % cap; this.qn--; }
      const gt = this.qv[this.qh];
      if (gt < this.g) this.g = gt; else this.g += (gt - this.g) * this.rel;
      const wi = n % this.look; oL[i] = this.bl[wi] * this.g; oR[i] = this.br[wi] * this.g; this.bl[wi] = xl; this.br[wi] = xr;
    }
  }
}
async function produceAudio(sess, opts, onProg, outSr, emit) {
  outSr = outSr || sess.sr; let gain = 1, lufs = null;
  if (opts.normalize) {
    const m = new LoudnessMeter(outSr);
    await renderMix(sess, sess.mix, (L, Rr) => m.push(L, Rr), onProg, 0, outSr);
    lufs = m.result();
    if (isFinite(lufs)) gain = Math.pow(10, (-16 - lufs) / 20);
  }
  const lim = new Limiter(outSr, -1); let skip = lim.look;
  const out = (oL, oR) => { let s0 = 0; if (skip > 0) { s0 = Math.min(skip, oL.length); skip -= s0; } const n = oL.length - s0; if (n > 0) emit(oL, oR, s0, n); };
  await renderMix(sess, sess.mix, (L, Rr) => {
    const l = new Float32Array(L.length), r = new Float32Array(L.length);
    for (let i = 0; i < L.length; i++) { l[i] = L[i] * gain; r[i] = Rr[i] * gain; }
    const oL = new Float32Array(L.length), oR = new Float32Array(L.length); lim.process(l, r, oL, oR); out(oL, oR);
  }, onProg, opts.normalize ? 1 : 0, outSr);
  const z = new Float32Array(lim.look), oL = new Float32Array(lim.look), oR = new Float32Array(lim.look); lim.process(z, z, oL, oR); out(oL, oR);
  return lufs;
}
async function exportSession(sess, opts, onProg) {
  if (opts.format === 'webm') return exportVideo(sess, opts, onProg);
  const sr = sess.sr; const parts = []; let enc = null, frames = 0;
  if (opts.format !== 'wav') enc = new lamejs.Mp3Encoder(2, sr, opts.format === 'mp3-192' ? 192 : 128);
  const toI = (a) => a < 0 ? Math.max(-32768, a * 32768) : Math.min(32767, a * 32767);
  const lufs = await produceAudio(sess, opts, onProg, sr, (oL, oR, s0, n) => {
    if (enc) {
      const il = new Int16Array(n), ir = new Int16Array(n);
      for (let i = 0; i < n; i++) { il[i] = toI(oL[s0 + i]); ir[i] = toI(oR[s0 + i]); }
      for (let i = 0; i < n; i += 11520) { const mp = enc.encodeBuffer(il.subarray(i, i + 11520), ir.subarray(i, i + 11520)); if (mp.length) parts.push(new Uint8Array(mp)); }
    } else {
      const it = new Int16Array(n * 2);
      for (let i = 0; i < n; i++) { it[2 * i] = toI(oL[s0 + i]); it[2 * i + 1] = toI(oR[s0 + i]); }
      parts.push(it);
    }
    frames += n;
  });
  let blob;
  if (enc) { const f = enc.flush(); if (f.length) parts.push(new Uint8Array(f)); blob = new Blob(parts, { type: 'audio/mpeg' }); }
  else {
    const h = new DataView(new ArrayBuffer(44)); const dataLen = frames * 4;
    const w = (o, s) => { for (let i = 0; i < s.length; i++) h.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); h.setUint32(4, 36 + dataLen, true); w(8, 'WAVE'); w(12, 'fmt '); h.setUint32(16, 16, true); h.setUint16(20, 1, true); h.setUint16(22, 2, true);
    h.setUint32(24, sr, true); h.setUint32(28, sr * 4, true); h.setUint16(32, 4, true); h.setUint16(34, 16, true); w(36, 'data'); h.setUint32(40, dataLen, true);
    blob = new Blob([h.buffer, ...parts], { type: 'audio/wav' });
  }
  return { blob, lufs };
}

/* ------------------------------------------------------------------ Webcam + effetto */
const FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_tex; uniform vec2 u_px; uniform vec2 u_scale; uniform vec2 u_off; uniform vec2 u_res;
uniform float u_time; uniform float u_thr; uniform float u_gl; uniform float u_mirror; uniform float u_has; uniform float u_fx; uniform vec3 u_col;
float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
float lum(vec2 uv){ return dot(texture2D(u_tex, uv).rgb, vec3(0.299,0.587,0.114)); }
float edge(vec2 uv){
  vec2 d = u_px * 1.5;
  float tl=lum(uv+d*vec2(-1.,1.)), t=lum(uv+d*vec2(0.,1.)), tr=lum(uv+d*vec2(1.,1.));
  float l=lum(uv+d*vec2(-1.,0.)), r=lum(uv+d*vec2(1.,0.));
  float bl=lum(uv+d*vec2(-1.,-1.)), b=lum(uv+d*vec2(0.,-1.)), br=lum(uv+d*vec2(1.,-1.));
  float gx = -tl-2.*l-bl+tr+2.*r+br; float gy = -bl-2.*b-br+tl+2.*t+tr;
  return length(vec2(gx,gy));
}
void main(){
  if (u_fx < 0.5 && u_has > 0.5) {
    vec2 ruv = v_uv; if (u_mirror > 0.5) ruv.x = 1.0 - ruv.x;
    gl_FragColor = vec4(texture2D(u_tex, ruv * u_scale + u_off).rgb, 1.0); return;
  }
  vec2 uv = v_uv;
  float tt = floor(u_time*12.0);
  float band = floor(uv.y*36.0);
  float rb = rnd(vec2(band, tt));
  float shift = rb > 1.0 - 0.18*u_gl ? (rnd(vec2(tt, band)) - 0.5) * 0.09 * u_gl : 0.0;
  float jolt = step(0.965, rnd(vec2(tt, 3.7))) * u_gl;
  uv.x += shift + jolt * (rnd(vec2(band*0.31, tt)) - 0.5) * 0.05;
  vec2 cuv = uv;
  if (u_mirror > 0.5) cuv.x = 1.0 - cuv.x;
  cuv = cuv * u_scale + u_off;
  vec3 col = vec3(0.0);
  if (u_has > 0.5) {
    float k = 0.12;
    float m  = smoothstep(u_thr, u_thr + k, edge(cuv));
    float mr = smoothstep(u_thr, u_thr + k, edge(cuv + vec2(0.005*u_gl, 0.0)));
    float mb = smoothstep(u_thr, u_thr + k, edge(cuv - vec2(0.005*u_gl, 0.0)));
    col = u_col * m;
    col = max(col, vec3(1.0, 0.15, 0.3) * mr * 0.55 * u_gl);
    col = max(col, vec3(0.2, 0.9, 1.0) * mb * 0.45 * u_gl);
  } else {
    float n = rnd(floor(v_uv * vec2(160.0, 90.0)) + tt);
    col = vec3(n * 0.12) + u_col * step(0.985, rnd(vec2(band, tt))) * 0.5;
  }
  col *= 0.86 + 0.14 * sin(v_uv.y * u_res.y * 3.14159);
  col += (rnd(v_uv * (u_time + 1.0)) - 0.5) * 0.07 * u_gl;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
const VERT = `attribute vec2 p; varying vec2 v_uv; void main(){ v_uv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`;
const hash2 = (a, b) => { let h = (a * 374761393 + b * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const C2D = {
  setup(canvas) {
    this.cv = canvas; this.g = canvas.getContext('2d');
    this.sw = 480; this.sh = 270;
    this.small = document.createElement('canvas'); this.small.width = this.sw; this.small.height = this.sh; this.sg = this.small.getContext('2d', { willReadFrequently: true });
    this.edge = document.createElement('canvas'); this.edge.width = this.sw; this.edge.height = this.sh; this.eg = this.edge.getContext('2d');
    this.img = this.eg.createImageData(this.sw, this.sh); this.lum = new Float32Array(this.sw * this.sh);
  },
  crop(video, ca) { const vw = video.videoWidth, vh = video.videoHeight, va = vw / vh; return va > ca ? [(vw - vh * ca) / 2, 0, vh * ca, vh] : [0, (vh - vw / ca) / 2, vw, vw / ca]; },
  render(t, video, has, fresh, vs) {
    const g = this.g, W = this.cv.width, H = this.cv.height, sw = this.sw, sh = this.sh;
    if (has && vs.fx === false) {
      const [x, y, w, h] = this.crop(video, W / H); g.save(); if (vs.mirror) { g.translate(W, 0); g.scale(-1, 1); } g.drawImage(video, x, y, w, h, 0, 0, W, H); g.restore(); return;
    }
    const c = vs.col, cr = parseInt(c.slice(1, 3), 16), cg = parseInt(c.slice(3, 5), 16), cb = parseInt(c.slice(5, 7), 16);
    const tt = Math.floor(t / 1000 * 12), gl = vs.gl;
    if (has && fresh) {
      const [x, y, w, h] = this.crop(video, sw / sh);
      this.sg.save(); if (vs.mirror) { this.sg.translate(sw, 0); this.sg.scale(-1, 1); } this.sg.drawImage(video, x, y, w, h, 0, 0, sw, sh); this.sg.restore();
      const d = this.sg.getImageData(0, 0, sw, sh).data, L = this.lum, o = this.img.data;
      for (let i = 0, j = 0; i < L.length; i++, j += 4) L[i] = (d[j] * 0.299 + d[j + 1] * 0.587 + d[j + 2] * 0.114) / 255;
      const lo = vs.thr * 0.85, hi = lo + 0.14;
      for (let yy = 0; yy < sh; yy++) for (let xx = 0; xx < sw; xx++) {
        const k = (yy * sw + xx) * 4;
        if (xx === 0 || yy === 0 || xx === sw - 1 || yy === sh - 1) { o[k] = o[k + 1] = o[k + 2] = 0; o[k + 3] = 255; continue; }
        const i = yy * sw + xx;
        const tl = L[i - sw - 1], tp = L[i - sw], tr = L[i - sw + 1], l = L[i - 1], r = L[i + 1], bl = L[i + sw - 1], bt = L[i + sw], br = L[i + sw + 1];
        const gx = -tl - 2 * l - bl + tr + 2 * r + br, gy = -bl - 2 * bt - br + tl + 2 * tp + tr;
        let m = (Math.sqrt(gx * gx + gy * gy) - lo) / (hi - lo); m = m < 0 ? 0 : m > 1 ? 1 : m;
        o[k] = cr * m; o[k + 1] = cg * m; o[k + 2] = cb * m; o[k + 3] = 255;
      }
      this.eg.putImageData(this.img, 0, 0);
    } else if (!has) {
      const o = this.img.data; for (let k = 0; k < o.length; k += 4) { const n = Math.random() * 30; o[k] = o[k + 1] = o[k + 2] = n; o[k + 3] = 255; }
      this.eg.putImageData(this.img, 0, 0);
    }
    g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
    g.imageSmoothingEnabled = true;
    const bands = 36, bh = H / bands, sbh = sh / bands, jolt = hash2(tt, 37) > 0.965 ? gl : 0;
    for (let b = 0; b < bands; b++) {
      const rb = hash2(b, tt); let shift = rb > 1 - 0.18 * gl ? (hash2(tt, b + 99) - 0.5) * 0.09 * gl * W : 0;
      shift += jolt * (hash2(b * 3, tt) - 0.5) * 0.05 * W;
      g.drawImage(this.edge, 0, b * sbh, sw, sbh, shift, b * bh, W, bh + 1);
    }
    if (gl > 0.01) { g.globalAlpha = 0.07 * gl; g.fillStyle = '#fff'; for (let k = 0; k < 40; k++) g.fillRect(Math.random() * W, Math.random() * H, 2, 2); g.globalAlpha = 1; }
    g.fillStyle = 'rgba(0,0,0,0.14)'; for (let yy = 0; yy < H; yy += 4) g.fillRect(0, yy, W, 1);
  }
};
const CAM = {
  stream: null, video: null, canvas: null, gl: null, prog: null, tex: null, u: {}, ok: false, err: null, lost: false, chosen: '', fresh: false, rvfc: false, camFrames: 0, soft: false,
  setup() {
    this.video = $('camVideo'); this.video.hidden = false;
    Object.assign(this.video.style, { position: 'fixed', left: '-10px', top: '-10px', width: '2px', height: '2px', opacity: '0', pointerEvents: 'none' });
    this.canvas = $('vCanvas');
    let gl = null;
    for (const kind of ['webgl', 'experimental-webgl', 'webgl2']) { try { gl = this.canvas.getContext(kind, { antialias: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; } if (gl) break; }
    if (!gl) {
      this.mode = '2d'; C2D.setup(this.canvas); this.resize();
      const w = $('vWarn'); w.hidden = false;
      w.textContent = 'Il browser ha la grafica 3D disattivata: uso la modalità semplice (contorni un po\' meno fini). Per la qualità piena in Chrome attiva Impostazioni → Sistema → «Usa l\'accelerazione grafica quando disponibile» e riavvia Chrome; in chrome://gpu deve comparire «WebGL: Hardware accelerated».';
      return;
    }
    this.mode = 'gl'; this.gl = gl;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    const p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(p); gl.useProgram(p); this.prog = p;
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(p, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    this.tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, this.tex);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
    for (const n of ['u_tex', 'u_px', 'u_scale', 'u_off', 'u_res', 'u_time', 'u_thr', 'u_gl', 'u_mirror', 'u_has', 'u_col', 'u_fx']) this.u[n] = gl.getUniformLocation(p, n);
    this.resize();
    try { const dbg = gl.getExtension('WEBGL_debug_renderer_info'); const rn = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : ''; this.soft = /swiftshader|llvmpipe|software/i.test(rn); this.renderer = rn; } catch (e) {}
    if (this.soft) { const w = $('vWarn'); w.hidden = false; w.textContent = 'Il browser sta disegnando il video senza la scheda grafica: può andare a scatti. In Chrome attiva Impostazioni → Sistema → «Usa l\'accelerazione grafica», poi riavvia. Intanto usa 540p.'; }
  },
  resize() {
    const r = S.settings.video.res === 1080 ? [1920, 1080] : S.settings.video.res === 540 ? [960, 540] : [1280, 720];
    this.canvas.width = r[0]; this.canvas.height = r[1]; if (this.gl) this.gl.viewport(0, 0, r[0], r[1]);
  },
  async init(id) {
    this.stop(); this.chosen = id;
    if (id === 'none') { this.err = null; this.lost = false; renderStatus(); return; }
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: id ? { exact: id } : undefined, width: { ideal: 1280 }, height: { ideal: 720 }, frameRate: { ideal: 30 } } });
      const tr = this.stream.getVideoTracks()[0];
      tr.onended = () => { this.ok = false; this.lost = true; renderStatus(); toast('Webcam persa! Apri Dispositivi e premi ↻ Ricarica elenco'); if (!$('devModal').hidden) DEV.refresh(); };
      this.video.srcObject = this.stream; await this.video.play();
      this.ok = true; this.err = null; this.lost = false; this.fresh = true;
      if (this.video.requestVideoFrameCallback) { const v = this.video; const cb = () => { if (v.srcObject !== this.stream) return; this.fresh = true; this.camFrames++; v.requestVideoFrameCallback(cb); }; v.requestVideoFrameCallback(cb); this.rvfc = true; }
    } catch (e) { console.warn('Webcam', e); this.ok = false; this.err = e; }
    renderStatus();
  },
  stop() { if (this.stream) { this.stream.getTracks().forEach(t => { t.onended = null; t.stop(); }); this.stream = null; } this.ok = false; },
  render(t) {
    if (this.mode === '2d') {
      const has = this.ok && this.video.readyState >= 2 && this.video.videoWidth > 0;
      const fresh = this.fresh || !this.rvfc; if (has && !this.rvfc) this.camFrames++;
      C2D.render(t, this.video, has, fresh, S.settings.video); this.fresh = false; return;
    }
    const gl = this.gl; if (!gl) return;
    const vs = S.settings.video, W = this.canvas.width, H = this.canvas.height;
    const has = this.ok && this.video.readyState >= 2 && this.video.videoWidth > 0;
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    let sx = 1, sy = 1;
    if (has) {
      if (this.fresh || !this.rvfc) { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.video); this.fresh = false; if (!this.rvfc) this.camFrames++; }
      const va = this.video.videoWidth / this.video.videoHeight, ca = W / H;
      if (va > ca) sx = ca / va; else sy = va / ca;
      gl.uniform2f(this.u.u_px, 1 / this.video.videoWidth, 1 / this.video.videoHeight);
    }
    gl.uniform2f(this.u.u_scale, sx, sy); gl.uniform2f(this.u.u_off, (1 - sx) / 2, (1 - sy) / 2);
    gl.uniform2f(this.u.u_res, W, H); gl.uniform1f(this.u.u_time, t / 1000);
    gl.uniform1f(this.u.u_thr, vs.thr); gl.uniform1f(this.u.u_gl, vs.gl); gl.uniform1f(this.u.u_mirror, vs.mirror ? 1 : 0); gl.uniform1f(this.u.u_has, has ? 1 : 0); gl.uniform1f(this.u.u_fx, vs.fx === false ? 0 : 1);
    const c = vs.col; gl.uniform3f(this.u.u_col, parseInt(c.slice(1, 3), 16) / 255, parseInt(c.slice(3, 5), 16) / 255, parseInt(c.slice(5, 7), 16) / 255);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  },
  status() {
    if (this.chosen === 'none') return ['NO CAM', '', 'Hai scelto di registrare solo l\'audio'];
    if (this.ok) return ['CAM OK', 'on', ''];
    if (this.lost) return ['CAM PERSA', 'bad', 'La webcam si è scollegata. Ricollegala e premi ↻ Ricarica elenco.'];
    const n = this.err && this.err.name;
    if (n === 'NotReadableError' || n === 'AbortError') return ['CAM OCCUPATA', 'bad', 'La webcam è occupata da un altro programma (per esempio OBS) o bloccata dal sistema. Chiudi l\'altro programma, scollega e ricollega la webcam, poi premi ↻ Ricarica elenco.'];
    if (n === 'NotAllowedError') return ['CAM NEGATA', 'bad', 'Permesso negato: consenti la webcam dal lucchetto nella barra degli indirizzi, poi premi ↻ Ricarica elenco.'];
    if (n) return ['NESSUNA CAM', 'bad', 'Webcam non trovata. Ricollegala e premi ↻ Ricarica elenco.'];
    return ['CAM…', '', ''];
  }
};

/* ------------------------------------------------------------------ Registratore video (WebCodecs) */
const vkey = (sid, i) => sid + ':v:' + String(i).padStart(6, '0');
const V = {
  codec: null, mux: null, enc: null, sid: null, groups: [], pend: [], gIdx: 0, lastTs: -1, frameN: 0, forceKey: true, meta: null, W: 1280, H: 720, active: false,
  async probe() {
    if (typeof VideoEncoder === 'undefined') return;
    for (const [codec, mux] of [['vp8', 'V_VP8'], ['vp09.00.10.08', 'V_VP9']]) {
      try { const r = await VideoEncoder.isConfigSupported({ codec, width: 1280, height: 720, bitrate: 2500000, framerate: 30 }); if (r.supported) { this.codec = codec; this.mux = mux; return; } } catch (e) {}
    }
  },
  start(sess) {
    this.W = CAM.canvas.width; this.H = CAM.canvas.height;
    this.sid = sess.id; this.groups = []; this.pend = []; this.gIdx = 0; this.lastTs = -1; this.frameN = 0; this.forceKey = true; this.meta = null;
    this.enc = new VideoEncoder({ output: (c, m) => this.onChunk(c, m), error: (e) => { console.error(e); toast('Errore video: ' + e.message); this.active = false; } });
    this.enc.configure({ codec: this.codec, width: this.W, height: this.H, bitrate: this.H >= 1080 ? 5000000 : 2500000, framerate: 30, latencyMode: 'realtime' });
    sess.video = { codec: this.codec, mux: this.mux, w: this.W, h: this.H, fps: 30, nGroups: 0 };
    this.active = true;
  },
  frame(canvas, tl) {
    if (!this.active || !this.enc || this.enc.state !== 'configured') return;
    const ts = Math.round(tl * 1e6); if (ts < 0 || ts - this.lastTs < 31000) return;
    if (this.enc.encodeQueueSize > 4) return;
    const f = new VideoFrame(canvas, { timestamp: ts, duration: 33333 });
    const key = this.forceKey || this.frameN % 60 === 0;
    this.enc.encode(f, { keyFrame: key }); f.close();
    this.forceKey = false; this.frameN++; this.lastTs = ts; this.encFrames = (this.encFrames || 0) + 1;
  },
  onChunk(c, m) {
    const d = new ArrayBuffer(c.byteLength); c.copyTo(d);
    if (m && m.decoderConfig && !this.meta) { this.meta = m.decoderConfig; if (R.session && R.session.video) R.session.video.meta = { decoderConfig: { codec: m.decoderConfig.codec } }; }
    this.pend.push({ ts: c.timestamp, key: c.type === 'key', d });
    if (c.timestamp - this.pend[0].ts >= 1e6) this.flushGroup();
  },
  flushGroup() {
    if (!this.pend.length) return;
    const g = { idx: this.gIdx++, t0: this.pend[0].ts, t1: this.pend[this.pend.length - 1].ts, ch: this.pend }; this.pend = [];
    this.groups.push({ idx: g.idx, t0: g.t0, t1: g.t1 }); DB.put('chunks', vkey(this.sid, g.idx), g);
    if (R.session && R.session.video) { const sv = R.session.video; sv.nGroups = this.gIdx; sv.gt = sv.gt || []; const k = g.ch.find(c => c.key); sv.gt[g.idx] = [g.t0, k ? k.ts : null]; }
  },
  async hold() { if (!this.active) return; try { await this.enc.flush(); } catch (e) {} this.flushGroup(); },
  async truncate(Tq) {
    if (!this.active) return;
    const us = Math.round(Tq * 1e6);
    this.pend = this.pend.filter(c => c.ts < us);
    while (this.groups.length) {
      const g = this.groups[this.groups.length - 1];
      const sv = R.session && R.session.video;
      if (g.t0 >= us) { await DB.del('chunks', vkey(this.sid, g.idx)); if (sv && sv.gt) sv.gt[g.idx] = null; this.groups.pop(); continue; }
      if (g.t1 >= us) { const full = await DB.get('chunks', vkey(this.sid, g.idx)); if (full) { full.ch = full.ch.filter(c => c.ts < us); full.t1 = full.ch.length ? full.ch[full.ch.length - 1].ts : full.t0; g.t1 = full.t1; await DB.put('chunks', vkey(this.sid, g.idx), full); if (sv && sv.gt) { const k = full.ch.find(c => c.key); sv.gt[g.idx] = [full.t0, k ? k.ts : null]; } } }
      break;
    }
    this.lastTs = us - 31000; this.forceKey = true;
  },
  async stop() { if (!this.active) return; await this.hold(); try { this.enc.close(); } catch (e) {} this.enc = null; this.active = false; }
};

/* ------------------------------------------------------------------ Controllo dispositivi */
const DEV = {
  asked: false, first: false,
  async permissions() {
    try { const s = await navigator.mediaDevices.getUserMedia({ audio: true }); s.getTracks().forEach(t => t.stop()); } catch (e) {}
    if (S.settings.camId !== 'none' && !CAM.ok) { try { const s = await navigator.mediaDevices.getUserMedia({ video: true }); s.getTracks().forEach(t => t.stop()); } catch (e) { CAM.err = e; } }
    this.asked = true;
  },
  async scan() {
    let d = []; try { d = await navigator.mediaDevices.enumerateDevices(); } catch (e) {}
    const pick = (k) => d.filter(x => x.kind === k && x.deviceId !== 'default' && x.deviceId !== 'communications');
    this.noIds = d.some(x => !x.deviceId);
    return { mic: pick('audioinput'), out: pick('audiooutput'), cam: pick('videoinput') };
  },
  fill(sel, items, current, first, label) {
    sel.replaceChildren();
    for (const [v, t] of first) { const o = document.createElement('option'); o.value = v; o.textContent = t; sel.append(o); }
    items.forEach((x, i) => { if (!x.deviceId) return; const o = document.createElement('option'); o.value = x.deviceId; o.textContent = x.label || `${label} ${i + 1}`; sel.append(o); });
    const ok = [...sel.options].some(o => o.value === current);
    sel.value = ok ? current : sel.options[0] ? sel.options[0].value : '';
    return ok;
  },
  async refresh() {
    const L = await this.scan(); this.L = L;
    const fw = $('devFile'); if (fw) { const file = location.protocol === 'file:'; fw.hidden = !(file || this.noIds); fw.textContent = (file ? 'OnAir è aperto come file: il browser chiede i permessi a ogni avvio' : 'Il browser non ha ancora dato l\'elenco completo dei dispositivi') + (this.noIds ? ' e non lascia scegliere microfono e webcam per nome (usa quelli predefiniti di sistema).' : '.') + (file ? ' Per ricordare tutto, avvia OnAir con avvia_onair.sh (vedi LEGGIMI).' : ' Premi ↻ Ricarica elenco dopo aver dato i permessi.'); }
    const st = (id, txt, cls) => { const e = $(id); e.textContent = txt; e.className = 'st ' + cls; };
    const micOk = this.fill($('dMic'), L.mic, S.settings.micId || '', [['', 'Predefinito di sistema']], 'Microfono');
    if (!micOk && S.settings.micId) { S.settings.micId = ''; saveSettings(); await initMic(); }
    st('dMicSt', E.micOk ? 'OK' : 'NON ATTIVO', E.micOk ? 'ok' : 'bad');
    const canSink = E.ctx && typeof E.ctx.setSinkId === 'function';
    this.fill($('dOut'), canSink ? L.out : [], S.settings.outId || '', [['', 'Predefinita di sistema']], 'Uscita');
    $('dOut').disabled = !canSink;
    $('dOutNote').textContent = canSink ? '' : 'Questo browser usa sempre l\'uscita di sistema: scegli le cuffie dalle impostazioni audio di Mint.';
    st('dOutSt', 'OK', 'ok');
    const prevCam = S.settings.camId || '';
    const camFound = this.fill($('dCam'), L.cam, prevCam, [['', L.cam.length ? 'Prima webcam disponibile' : '— nessuna webcam trovata —'], ['none', 'Nessuna webcam (solo audio)']], 'Webcam');
    let why = '';
    if (prevCam && prevCam !== 'none' && !camFound) why = 'La webcam usata l\'ultima volta non c\'è più. Ricollegala e premi ↻ Ricarica elenco, oppure scegline un\'altra.';
    if (!CAM.ok && $('dCam').value !== 'none') await CAM.init($('dCam').value);
    const [txt, cls, msg] = CAM.status();
    st('dCamSt', txt.replace('CAM ', '').replace('NO CAM', 'SOLO AUDIO'), cls === 'on' ? 'ok' : cls === 'bad' ? 'bad' : 'warn');
    const w = $('dCamWhy'); w.textContent = msg || why; w.hidden = !(msg || why);
    $('dCamPrev').srcObject = CAM.stream || null;
  },
  async open(first = false) {
    this.first = first; $('devModal').hidden = false; $('devGo').textContent = first ? 'ENTRA IN STUDIO' : 'FATTO';
    if (!this.asked) await this.permissions();
    await this.refresh();
  },
  async findMic() {
    if (isRec() || blocked()) return toast('Prova i microfoni a registrazione ferma');
    const mics = (this.L ? this.L.mic : []).filter(m => m.deviceId);
    if (mics.length < 2) return toast(this.noIds ? 'Il browser non mi dà l\'elenco dei microfoni: avvia OnAir con avvia_onair.sh' : 'C\'è un solo microfono: è già quello giusto');
    const btn = $('dMicFind'), out = $('dMicFound'); btn.disabled = true; out.hidden = false;
    const res = [];
    for (const m of mics) {
      out.textContent = `Parla adesso… provo «${m.label || 'microfono'}»`;
      let st = null; let pk = -100;
      try {
        st = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: { exact: m.deviceId }, echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
        const src = E.ctx.createMediaStreamSource(st), an = E.ctx.createAnalyser(); an.fftSize = 2048; src.connect(an);
        const t0 = performance.now(); while (performance.now() - t0 < 1600) { pk = Math.max(pk, peakDb(an)); await new Promise(r => setTimeout(r, 40)); }
        src.disconnect();
      } catch (e) { pk = -100; }
      if (st) st.getTracks().forEach(t => t.stop());
      res.push({ m, pk });
    }
    res.sort((a, b) => b.pk - a.pk);
    const best = res[0];
    out.innerHTML = res.map((r, i) => `${i === 0 ? '✔ ' : '· '}${(r.m.label || 'microfono').replace(/[<>&]/g, '')}: ${r.pk <= -99 ? 'non disponibile' : Math.round(r.pk) + ' dB'}`).join('<br>') + (best.pk > -45 ? '<br>Ho scelto il primo: è quello che ti sente meglio.' : '<br>Non ho sentito la voce: riprova parlando durante la prova.');
    if (best.pk > -45) { S.settings.micId = best.m.deviceId; saveSettings(); await initMic(); await this.refresh(); }
    btn.disabled = false;
  },
  close() { $('devModal').hidden = true; $('dCamPrev').srcObject = null; if (this.first) { this.first = false; if (!E.micOk) toast('Microfono non attivo: puoi usare la regia, ma non registrare'); } },
  wire() {
    $('dMicFind').addEventListener('click', () => this.findMic());
    $('dMicGain').value = S.settings.micGain || 0; $('dMicGainO').textContent = '+' + (S.settings.micGain || 0) + ' dB';
    $('dMicGain').addEventListener('input', (e) => setMicGain(+e.target.value));
    $('dMic').addEventListener('change', async (e) => { if (isRec() || blocked()) return toast('Cambia microfono a registrazione ferma'); S.settings.micId = e.target.value; saveSettings(); await initMic(); this.refresh(); });
    $('dOut').addEventListener('change', async (e) => { S.settings.outId = e.target.value; saveSettings(); await applySink(); });
    $('dOutTest').addEventListener('click', () => { const o = E.ctx.createOscillator(), g = E.ctx.createGain(); o.frequency.value = 660; g.gain.setValueAtTime(0.0001, now()); g.gain.exponentialRampToValueAtTime(0.3, now() + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, now() + 0.6); o.connect(g); g.connect(E.ctx.destination); o.start(); o.stop(now() + 0.65); });
    $('dCam').addEventListener('change', async (e) => { if (isRec() || blocked()) return toast('Cambia webcam a registrazione ferma'); S.settings.camId = e.target.value; saveSettings(); await CAM.init(e.target.value); this.refresh(); });
    $('devRefresh').addEventListener('click', async () => { this.asked = false; CAM.stop(); await this.permissions(); await this.refresh(); toast('Elenco aggiornato'); });
    $('devGo').addEventListener('click', () => this.close());
    if (navigator.mediaDevices && 'ondevicechange' in navigator.mediaDevices) navigator.mediaDevices.addEventListener('devicechange', () => { if (!$('devModal').hidden) this.refresh(); });
  }
};
async function applySink() {
  if (!E.ctx || typeof E.ctx.setSinkId !== 'function') return;
  try { await E.ctx.setSinkId(S.settings.outId || ''); } catch (e) { console.warn(e); toast('Non riesco a usare quell\'uscita: torno a quella di sistema'); S.settings.outId = ''; saveSettings(); try { await E.ctx.setSinkId(''); } catch (e2) {} }
}

/* ------------------------------------------------------------------ Export video (WebM per YouTube) */
async function exportVideo(sess, opts, onProg) {
  if (typeof AudioEncoder === 'undefined' || typeof WebMMuxer === 'undefined') throw new Error('questo browser non sa creare il video: usa Chrome o Edge aggiornati');
  const OUT = 48000; const achunks = []; let ameta = null, aerr = null;
  const aenc = new AudioEncoder({ output: (c, m) => { const d = new Uint8Array(c.byteLength); c.copyTo(d); achunks.push({ ts: c.timestamp, d }); if (m && m.decoderConfig && !ameta) ameta = m; }, error: (e) => { aerr = e; } });
  aenc.configure({ codec: 'opus', sampleRate: OUT, numberOfChannels: 2, bitrate: 160000 });
  let frames = 0;
  const lufs = await produceAudio(sess, opts, (ph, p) => onProg(ph, p * 0.9), OUT, (oL, oR, s0, n) => {
    const pl = new Float32Array(n * 2); pl.set(oL.subarray(s0, s0 + n), 0); pl.set(oR.subarray(s0, s0 + n), n);
    const ad = new AudioData({ format: 'f32-planar', sampleRate: OUT, numberOfFrames: n, numberOfChannels: 2, timestamp: Math.round(frames / OUT * 1e6), data: pl });
    aenc.encode(ad); ad.close(); frames += n;
  });
  await aenc.flush(); aenc.close(); if (aerr) throw aerr;
  const v = sess.video, endUs = Math.round(sess.len / sess.sr * 1e6);
  const target = new WebMMuxer.ArrayBufferTarget();
  const mx = new WebMMuxer.Muxer({ target, video: { codec: v.mux, width: v.w, height: v.h, frameRate: v.fps }, audio: { codec: 'A_OPUS', sampleRate: OUT, numberOfChannels: 2 }, firstTimestampBehavior: 'permissive' });
  let ai = 0, firstA = true, firstV = true, lastV = -1;
  const addA = () => { const a = achunks[ai++]; mx.addAudioChunkRaw(a.d, 'key', a.ts, firstA ? ameta || undefined : undefined); firstA = false; };
  for (let i = 0; i < (v.nGroups || 0); i++) {
    const g = await DB.get('chunks', vkey(sess.id, i)); if (!g) continue;
    for (const c of g.ch) {
      if (c.ts >= endUs || c.ts <= lastV) continue;
      if (firstV && !c.key) continue;
      while (ai < achunks.length && achunks[ai].ts <= c.ts) addA();
      mx.addVideoChunkRaw(new Uint8Array(c.d), c.key ? 'key' : 'delta', c.ts, firstV && v.meta ? v.meta : undefined);
      firstV = false; lastV = c.ts;
    }
    onProg(opts.normalize ? 1 : 0, 0.9 + 0.1 * (i + 1) / v.nGroups);
  }
  while (ai < achunks.length) addA();
  mx.finalize();
  return { blob: new Blob([target.buffer], { type: 'video/webm' }), lufs };
}

/* ------------------------------------------------------------------ Teleprompter */
const CUE_RE = /\[(SIGLA|STOP SIGLA|SOTTOFONDO|STOP SOTTOFONDO|CAPITOLO(?:\s+(\d{1,2}))?|STOP CAPITOLO|PAUSA)\]/gi;
const TP = {
  text: '', running: false, speed: 6, size: 42, mirror: false, auto: true, visible: true, startMode: 'intro',
  wasRunning: false, acc: 0, expect: 0, lastT: 0, lastLog: 0, cues: [],
  view: null, el: null,
  async load() {
    const st = await DB.get('state', 'prompter');
    if (st) for (const k of ['text', 'speed', 'size', 'mirror', 'auto', 'visible', 'startMode']) if (k in st) this[k] = st[k];
  },
  save() { const { text, speed, size, mirror, auto, visible, startMode } = this; DB.put('state', 'prompter', { text, speed, size, mirror, auto, visible, startMode }); },
  render() {
    const esc = (t) => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const paras = this.text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    this.el.innerHTML = paras.map(p => '<p>' + esc(p).replace(/\n/g, '<br>').replace(CUE_RE, (m, kind, n) => {
      const k = kind.toUpperCase().replace(/\s+\d+$/, '');
      return `<span class="cue" data-cue="${k}" data-n="${n || ''}">${esc(kind.toUpperCase())}</span>`;
    }) + '</p>').join('');
    this.cues = [...this.el.querySelectorAll('.cue')];
    $('ptEmpty').hidden = !!paras.length;
    this.layout(); this.syncFired();
  },
  layout() {
    const h = this.view.clientHeight || 300;
    this.el.style.paddingTop = Math.round(h * 0.3) + 'px'; this.el.style.paddingBottom = Math.round(h * 0.7) + 'px';
    this.el.style.setProperty('--pt-size', this.size + 'px');
    this.el.classList.toggle('mirror', this.mirror);
    $('ptSpeed').textContent = this.speed;
    $('ptAuto').setAttribute('aria-pressed', String(this.auto));
    $('ptMirror').setAttribute('aria-pressed', String(this.mirror));
    $('ptRun').setAttribute('aria-pressed', String(this.running)); $('ptStart').value = this.startMode;
    $('prompter').hidden = !this.visible; $('tpBtn').setAttribute('aria-pressed', String(this.visible)); $('stage').classList.toggle('no-pt', !this.visible);
  },
  lineY() { return this.view.clientHeight * 0.3; },
  cueY(c) { return c.offsetTop - this.view.scrollTop; },
  syncFired() { const ly = this.lineY(); for (const c of this.cues) c.dataset.fired = this.cueY(c) <= ly ? '1' : '0'; },
  setTop(y) { this.view.scrollTop = y; this.acc = this.view.scrollTop; this.expect = this.view.scrollTop; this.syncFired(); },
  toggle() { this.running = !this.running; this.lastT = performance.now(); this.layout(); },
  frame(t) {
    const dt = Math.min(0.1, (t - (this.lastT || t)) / 1000); this.lastT = t;
    if (!this.visible || !this.view) return;
    if (this.running) {
      this.acc += this.speed * 7 * (this.size / 42) * dt;
      this.view.scrollTop = this.acc; this.expect = this.view.scrollTop;
      if (this.view.scrollTop + this.view.clientHeight >= this.view.scrollHeight - 1) { this.running = false; this.layout(); }
    }
    if (R.state === 'rec' && this.auto) {
      const ly = this.lineY();
      for (const c of this.cues) {
        const y = this.cueY(c);
        if (c.dataset.fired !== '1' && y <= ly) { c.dataset.fired = '1'; this.fire(c); }
        else if (c.dataset.fired === '1' && y > ly + 4) c.dataset.fired = '0';
      }
    }
    if (R.state === 'rec' && t - this.lastLog > 200) { this.lastLog = t; R.tpLog.push({ t: tlAt(now()), y: this.view.scrollTop, run: this.running }); }
  },
  fire(c) {
    c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 900);
    const k = c.dataset.cue, n = +c.dataset.n;
    if (k === 'SIGLA') introPlay();
    else if (k === 'STOP SIGLA') introStop();
    else if (k === 'SOTTOFONDO') { if (E.bg.status === 'paused' || E.bg.status === 'stopped') bgToggle(); }
    else if (k === 'STOP SOTTOFONDO') { if (E.bg.status === 'playing') bgToggle(); }
    else if (k === 'CAPITOLO') capPlay(n ? n - 1 : E.capIdx);
    else if (k === 'STOP CAPITOLO') capStop();
    else if (k === 'PAUSA') { this.running = false; this.layout(); toast('Testo fermo: premi P per farlo ripartire'); }
  },
  onScroll() { if (Math.abs(this.view.scrollTop - this.expect) > 2) { this.acc = this.view.scrollTop; this.expect = this.view.scrollTop; this.syncFired(); } },
  onRecStart() {
    this.syncFired();
    const go = this.startMode === 'rec' || (this.startMode === 'intro' && !S.deck.intro);
    if (go && this.text.trim() && this.visible) { this.running = true; this.lastT = performance.now(); }
    this.layout();
  },
  onIntroEnd() { if (this.startMode === 'intro' && isRec() && !this.running && this.text.trim() && this.visible) { this.running = true; this.lastT = performance.now(); this.layout(); } },
  onHold() { this.wasRunning = this.running; this.running = false; this.layout(); },
  onResume(Tq, w0) {
    R.tpLog = R.tpLog.filter(e => e.t <= Tq + 0.01);
    let y = null, run = null; for (const e of R.tpLog) { if (e.t <= w0 + 0.01) y = e.y; run = e.run; }
    if (y != null) this.setTop(y);
    this.running = run != null ? run : this.wasRunning; this.lastT = performance.now(); this.layout();
  },
  onFinish() { this.running = false; this.layout(); },
  edit(on) {
    $('ptEditBox').hidden = !on; $('ptView').hidden = on;
    if (on) { $('ptArea').value = this.text; $('ptArea').focus(); }
  }
};

/* ------------------------------------------------------------------ UI */
let toastT = null;
function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 3200); }
const nameOf = (id) => S.names.get(id) || 'File mancante';

function renderStatus() {
  const mp = $('micPill'); mp.textContent = E.micOk ? 'MIC OK' : 'MIC OFF'; mp.className = 'pill click ' + (E.micOk ? 'on' : 'bad');
  const [ct, cc, cm] = CAM.status(); const cp = $('camPill'); cp.textContent = ct; cp.className = 'pill click ' + cc; cp.title = cm || 'Controllo dispositivi';
  if ($('vMsg')) { const vm = $('vMsg'); const vs = S.settings.video; vm.hidden = CAM.ok; vm.textContent = CAM.chosen === 'none' ? 'Webcam esclusa: registri solo l\'audio' : (cm || 'Webcam non attiva') ; $('vRec').hidden = !(V.active && isRec()); $('vOn').setAttribute('aria-pressed', String(vs.on)); }
  const sp = $('statePill');
  const map = { idle: ['PRONTO', ''], rec: ['● REC', 'rec'], hold: [R.holdMode === 'retake' ? 'RE-TAKE' : 'PAUSA', 'hold'], preroll: ['PRE-ASCOLTO', 'pre'] };
  const [txt, cls] = map[R.state]; sp.textContent = txt; sp.className = 'pill ' + cls;
  const rb = $('recBtn');
  rb.innerHTML = (R.state === 'idle' ? '● REGISTRA' : R.state === 'hold' ? '▶ RIPRENDI' : '❚❚ PAUSA') + '<span class="kbd" data-act="rec"></span>'; rb.lastChild.textContent = keyLabel('rec');
  rb.classList.toggle('paused', R.state !== 'idle');
  rb.disabled = R.state === 'preroll';
  $('retakeBtn').disabled = R.state !== 'rec';
  $('stopBtn').disabled = R.state === 'idle' || R.state === 'preroll';
  $('tcSub').textContent = R.state === 'idle' ? 'Nessuna registrazione in corso' : `${R.session.name} · re-take: ${R.session.retakes}`;
}
function li(cls, num, text, onClick, ops) {
  const el = document.createElement('li'); el.className = cls;
  el.innerHTML = `<span class="n">${num}</span><span class="t"></span><span class="ops"></span>`;
  el.querySelector('.t').textContent = text; el.title = text;
  el.addEventListener('click', onClick);
  for (const [label, title, fn] of ops) { const b = document.createElement('button'); b.textContent = label; b.title = title; b.addEventListener('click', (e) => { e.stopPropagation(); fn(); }); el.querySelector('.ops').append(b); }
  return el;
}
function emptyLi(text) { const el = document.createElement('li'); el.className = 'empty'; el.textContent = text; return el; }
function moveIn(arr, i, d) { const j = i + d; if (j < 0 || j >= arr.length) return; [arr[i], arr[j]] = [arr[j], arr[i]]; }

function renderDeck() {
  const iN = $('introName');
  iN.textContent = S.deck.intro ? nameOf(S.deck.intro) : 'Nessuna sigla caricata'; iN.classList.toggle('set', !!S.deck.intro);
  $('introPlay').disabled = !S.deck.intro;

  const bl = $('bgList'); bl.replaceChildren();
  if (!S.deck.bg.length) bl.append(emptyLi('Aggiungi uno o più brani: girano in loop uno dopo l\'altro.'));
  S.deck.bg.forEach((id, i) => {
    const cls = (i === E.bg.idx ? 'cur ' : '') + (i === E.bg.idx && E.bg.status === 'playing' ? 'play' : '');
    bl.append(li(cls, i === E.bg.idx && E.bg.status === 'playing' ? '▶' : '•', nameOf(id), () => { if (blocked()) return; if (E.bg.status === 'playing') stopVoice('bg'); E.bg.idx = i; E.bg.pos = 0; if (E.bg.status !== 'held') bgPlay(); renderDeck(); }, [
      ['▲', 'Sposta su', () => { if (isRec() || blocked()) return toast('Riordina a registrazione ferma'); moveIn(S.deck.bg, i, -1); saveDeck(); renderDeck(); }],
      ['✕', 'Togli dalla lista', () => { if (isRec() || blocked()) return toast('Modifica la lista a registrazione ferma'); if (i === E.bg.idx && E.bg.status === 'playing') { stopVoice('bg'); E.bg.status = 'stopped'; } S.deck.bg.splice(i, 1); if (E.bg.idx >= S.deck.bg.length) E.bg.idx = 0; saveDeck(); renderDeck(); }]
    ]));
  });
  $('bgTag').textContent = { playing: 'IN ONDA', paused: 'IN PAUSA', held: 'FERMO PER CAPITOLO', stopped: '' }[E.bg.status];

  const cl = $('capList'); cl.replaceChildren();
  if (!S.deck.caps.length) cl.append(emptyLi('Aggiungi gli stacchetti dei capitoli nell\'ordine in cui li lanci.'));
  S.deck.caps.forEach((id, i) => {
    const playing = E.voices.cap && E.voices.cap.extra.capIdx === i;
    const cls = (playing ? 'play ' : '') + (i === E.capIdx ? 'next' : '');
    cl.append(li(cls, i < 9 ? `[${i + 1}]` : '', nameOf(id), () => capPlay(i), [
      ['▲', 'Sposta su', () => { if (isRec() || blocked()) return toast('Riordina a registrazione ferma'); moveIn(S.deck.caps, i, -1); saveDeck(); renderDeck(); }],
      ['✕', 'Togli dalla lista', () => { if (isRec() || blocked()) return toast('Modifica la lista a registrazione ferma'); S.deck.caps.splice(i, 1); saveDeck(); renderDeck(); }]
    ]));
  });
  const nx = S.deck.caps[E.capIdx];
  $('capPlay').innerHTML = nx ? `▶ LANCIA [${E.capIdx + 1}]` : '▶ LANCIA PROSSIMO';
  $('capPlay').disabled = !nx;
}
function renderAll() { renderStatus(); renderDeck(); }

/* Strisce del mixer (dal vivo e nel mix finale) */
const KNOBS = [
  { k: 'gain', label: 'Gain', min: -12, max: 12, step: 0.5, unit: ' dB' },
  { k: 'low', label: 'Bassi', min: -12, max: 12, step: 0.5, unit: ' dB' },
  { k: 'mid', label: 'Medi', min: -12, max: 12, step: 0.5, unit: ' dB' },
  { k: 'high', label: 'Alti', min: -12, max: 12, step: 0.5, unit: ' dB' },
  { k: 'comp', label: 'Compr.', min: 0, max: 100, step: 1, unit: '%', voice: true }
];
const fmtK = (v, unit) => (unit === ' dB' && v > 0 ? '+' : '') + (Math.round(v * 10) / 10) + unit;
function buildMixer(host, mix, { onChange, meters = false, mutes = null }) {
  host.replaceChildren(); const refs = {};
  for (const ch of ALL) {
    const p = mix[ch]; const d = document.createElement('div'); d.className = 'strip'; const pre = host.id + '-' + ch;
    d.innerHTML = `<div class="h"><b>${CH_LABEL[ch]}</b><span class="v"></span><button class="rst" title="Riporta al predefinito">↺</button>${mutes ? '<button class="mute" aria-pressed="false">MUTE</button>' : ''}</div>
      ${meters ? '<div class="meter"><i></i></div>' : ''}
      ${mutes && ch === 'voice' ? `<label class="fad" for="${pre}-in" title="Guadagno del microfono: alza il livello registrato">Ingresso mic<span class="row" style="flex-wrap:nowrap"><input type="range" id="${pre}-in" min="0" max="30" step="1" style="flex:1"><output class="v">+0 dB</output></span></label>` : ''}
      <label class="fad" for="${pre}-vol">${mutes ? 'Volume cuffia' : 'Volume'}<input type="range" id="${pre}-vol" min="0" max="150" step="1"></label>
      <details class="eq"><summary>Gain ed EQ</summary><div class="knobs"></div><button class="def">★ Usa questi valori come predefiniti</button></details>`;
    const kn = d.querySelector('.knobs'); const ctl = {};
    for (const K of KNOBS) {
      if (K.voice && ch !== 'voice') continue;
      const id = `${pre}-${K.k}`;
      const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = K.label;
      const r = document.createElement('input'); r.type = 'range'; r.id = id; r.min = K.min; r.max = K.max; r.step = K.step;
      const o = document.createElement('output');
      r.addEventListener('input', () => { p[K.k] = +r.value; o.textContent = fmtK(p[K.k], K.unit); onChange(ch); });
      r.addEventListener('dblclick', () => { r.value = K.k === 'comp' ? fullP(ch).comp : 0; r.dispatchEvent(new Event('input')); });
      kn.append(lab, r, o); ctl[K.k] = { r, o, unit: K.unit };
    }
    if (ch === 'voice') {
      const w = document.createElement('label'); w.className = 'chk';
      w.innerHTML = `<input type="checkbox" id="${pre}-hp"> Taglia i bassi sotto 85 Hz (rimbombo)`;
      const cb = w.querySelector('input'); cb.addEventListener('change', () => { p.hp = cb.checked; onChange(ch); });
      kn.append(document.createElement('span'), w); ctl.hp = { cb };
    }
    const vol = d.querySelector('.fad input'), vv = d.querySelector('.v');
    vol.addEventListener('input', () => { p.vol = +vol.value; vv.textContent = p.vol + '%'; onChange(ch); });
    vol.addEventListener('dblclick', () => { vol.value = S.defaults[ch].vol; vol.dispatchEvent(new Event('input')); });
    const refresh = () => {
      vol.value = p.vol; vv.textContent = p.vol + '%';
      for (const K of KNOBS) if (ctl[K.k]) { ctl[K.k].r.value = p[K.k]; ctl[K.k].o.textContent = fmtK(p[K.k], K.unit); }
      if (ctl.hp) ctl.hp.cb.checked = !!p.hp;
    };
    refresh();
    d.querySelector('.rst').addEventListener('click', () => { Object.assign(p, fullP(ch, S.defaults[ch])); refresh(); onChange(ch); toast(`${CH_LABEL[ch]}: livelli predefiniti ripristinati`); });
    d.querySelector('.def').addEventListener('click', () => { S.defaults[ch] = { ...p }; saveDeck(); toast(`${CH_LABEL[ch]}: questi valori ora sono il predefinito`); });
    if (mutes) { const m = d.querySelector('.mute'); m.setAttribute('aria-pressed', String(mutes[ch])); m.addEventListener('click', () => { mutes[ch] = !mutes[ch]; m.setAttribute('aria-pressed', String(mutes[ch])); onChange(ch); }); }
    const inR = d.querySelector(`#${pre}-in`);
    if (inR) { inR.value = S.settings.micGain || 0; inR.nextElementSibling.textContent = '+' + inR.value + ' dB'; inR.addEventListener('input', () => setMicGain(+inR.value)); }
    host.append(d); refs[ch] = { meter: d.querySelector('.meter i'), refresh };
  }
  return refs;
}
let meterRefs = null;
const FPS = { t: 0 };
const MICPK = { v: -100, t: 0 };
const tbuf = new Float32Array(2048);
function peakDb(an) { an.getFloatTimeDomainData(tbuf); let p = 0; for (let i = 0; i < tbuf.length; i++) { const a = Math.abs(tbuf[i]); if (a > p) p = a; } return p > 0 ? 20 * Math.log10(p) : -100; }
function loop(t) {
  if (E.ctx) {
    const T = isRec() ? Math.max(0, tlAt(now())) : R.state === 'hold' ? R.len / E.sr : 0;
    $('tc').textContent = fmt(R.state === 'preroll' ? R.Tanchor : T);
    if (meterRefs) {
      const set = (ch, an) => { const db = peakDb(an); const pct = Math.max(0, Math.min(100, (db + 60) / 60 * 100)); const el = meterRefs[ch].meter; el.style.width = pct + '%'; el.style.setProperty('--mw', (el.parentElement.clientWidth || 300) + 'px'); };
      set('voice', E.micAn); for (const ch of CHS) set(ch, E.an[ch]);
      if (!$('devModal').hidden) {
        const db = peakDb(E.micAn); const el = $('dMicMeter'); el.style.width = Math.max(0, Math.min(100, (db + 60) / 60 * 100)) + '%'; el.style.setProperty('--mw', (el.parentElement.clientWidth || 300) + 'px');
        const ts = performance.now(); if (db > (MICPK.v - 0.5) || ts - MICPK.t > 2000) { MICPK.v = db; MICPK.t = ts; }
        const lv = $('dMicLvl'); const pk = MICPK.v;
        lv.textContent = pk < -45 ? 'non sento niente' : pk < -24 ? `basso (${Math.round(pk)} dB): alza il guadagno` : pk > -2 ? `troppo alto (${Math.round(pk)} dB): abbassa il guadagno` : `buono (${Math.round(pk)} dB)`;
        lv.style.color = pk < -24 || pk > -2 ? 'var(--warn)' : 'var(--ok)';
      }
    }
    const prog = (ch, el) => { const v = E.voices[ch]; el.style.width = v ? Math.min(100, posOf(v, now()) / v.dur * 100) + '%' : '0%'; };
    prog('intro', $('introProg')); prog('bg', $('bgProg')); prog('cap', $('capProg'));
    TP.frame(t || performance.now());
    CAM.render(t || performance.now());
    const tn = performance.now(); if (!FPS.t) FPS.t = tn;
    if (tn - FPS.t >= 1000) { const sec = (tn - FPS.t) / 1000; const cf = Math.round(CAM.camFrames / sec), ef = Math.round((V.encFrames || 0) / sec); CAM.camFrames = 0; V.encFrames = 0; FPS.t = tn;
      const el = $('vFps'); if (el) el.textContent = CAM.ok ? `Webcam: ${cf} fps` + (V.active && R.state === 'rec' ? ` · video registrato: ${ef} fps` : '') + (cf && cf < 20 ? ' — la webcam è lenta: di solito è poca luce' : '') : '—'; }
    if (R.state === 'rec' && V.active) V.frame(CAM.canvas, tlAt(now()));
    if (LS && R.state === 'hold') paintWave();
    if (PV && PV.playing) PV.tick();
    if (PV && PV.vid) PV.vid.draw(PV.position());
  }
  requestAnimationFrame(loop);
}

/* Sessioni */
let PV = null; // anteprima aperta
async function openSessions(selId) {
  $('sessModal').hidden = false;
  const list = $('sessList'); list.replaceChildren();
  const all = (await DB.all('sessions')).sort((a, b) => b.created - a.created);
  if (!all.length) { const e = document.createElement('li'); e.innerHTML = '<span class="note">Ancora nessuna registrazione. Premi Spazio per iniziare la prima.</span>'; list.append(e); return; }
  for (const s of all) {
    if (R.session && s.id === R.session.id) continue;
    s.mix = normMix(s.mix);
    const el = document.createElement('li'); if (s.id === selId) el.classList.add('sel');
    const dur = s.len / s.sr;
    const missing = [...new Set(s.segs.map(g => g.fileId))].filter(id => !S.names.has(id));
    el.innerHTML = `<div class="row"><input aria-label="Nome sessione" style="flex:1;min-width:0"><button class="go-mix main-act">Ascolta, mixa ed esporta</button><button class="del danger">Elimina</button></div>
      <div class="meta"><span>${new Date(s.created).toLocaleString('it-IT')}</span><span>${fmt(dur, false)}</span><span>re-take: ${s.retakes}</span><span>${s.video && s.video.nGroups ? 'audio + video ' + s.video.h + 'p' : 'solo audio'}</span><span>${s.status === 'done' ? 'completa' : 'interrotta (recuperata)'}</span></div>
      ${missing.length ? `<span class="note">Attenzione: ${missing.length} file musicali non sono più nella libreria e mancheranno nel mix.</span>` : ''}
      <div class="exp" hidden></div>`;
    const inp = el.querySelector('input'); inp.value = s.name;
    inp.addEventListener('change', async () => { s.name = inp.value.trim() || s.name; await DB.put('sessions', s.id, s); });
    const del = el.querySelector('.del'); let armed = false;
    del.addEventListener('click', async () => {
      if (!armed) { armed = true; del.textContent = 'Conferma eliminazione'; setTimeout(() => { armed = false; del.textContent = 'Elimina'; }, 4000); return; }
      if (PV && PV.sess.id === s.id) { PV.destroy(); PV = null; }
      await DB.delRange('chunks', ckey(s.id, 0), ckey(s.id, 9999999)); await DB.delRange('chunks', s.id + ':v:', s.id + ':v:~'); await DB.del('sessions', s.id); el.remove(); toast('Sessione eliminata');
    });
    el.querySelector('.go-mix').addEventListener('click', () => openExport(el, s));
    list.append(el);
    if (s.id === selId) openExport(el, s);
  }
}
function closeSessions() { $('sessModal').hidden = true; if (PV) { PV.destroy(); PV = null; } }
function openExport(el, s) {
  const box = el.querySelector('.exp');
  if (!box.hidden) { box.hidden = true; if (PV && PV.sess === s) { PV.destroy(); PV = null; } return; }
  document.querySelectorAll('#sessList .exp').forEach(b => { b.hidden = true; });
  if (PV) { PV.destroy(); PV = null; }
  box.hidden = false;
  const dur = s.len / s.sr;
  const hasV = s.video && s.video.nGroups > 0;
  box.innerHTML = `${hasV ? `<canvas class="pvv" width="${s.video.w}" height="${s.video.h}"></canvas>` : ''}<div class="pv"><button class="pv-play" aria-label="Ascolta">▶</button><input type="range" class="pv-seek" min="0" max="${dur.toFixed(2)}" step="0.1" value="0" aria-label="Posizione"><output class="pv-t">00:00:00 / ${fmt(dur, false)}</output></div>
    <p class="note" style="margin:0">Anteprima del mix: muovi i livelli mentre ascolti. Qui il volume non è ancora normalizzato: il file esportato a −16 LUFS suonerà più forte.</p>
    <div class="strips"></div>
    <div class="form"><label>Formato</label><select class="fmt"><option value="mp3-128">MP3 128 kbps (Spotify)</option><option value="mp3-192">MP3 192 kbps</option><option value="wav">WAV senza perdita</option></select>
    <label>Volume standard −16 LUFS</label><select class="norm"><option value="1">Sì, normalizza</option><option value="0">No, lascia com'è</option></select></div>
    <div class="row"><button class="run main-act">ESPORTA</button><span class="note msg"></span></div><div class="bar" hidden><i></i></div><div class="out"></div>`;
  const playB = box.querySelector('.pv-play'), seek = box.querySelector('.pv-seek'), tOut = box.querySelector('.pv-t');
  let dragging = false;
  PV = new Preview(s, () => { playB.textContent = PV && PV.playing ? '❚❚' : '▶'; });
  if (hasV) PV.attachVideo(box.querySelector('.pvv'));
  PV.tick = () => { const p = PV.position(); if (!dragging) seek.value = p.toFixed(1); tOut.textContent = `${fmt(p, false)} / ${fmt(dur, false)}`; };
  playB.addEventListener('click', () => { if (PV.playing) PV.stop(); else PV.play(+seek.value); });
  seek.addEventListener('input', () => { dragging = true; tOut.textContent = `${fmt(+seek.value, false)} / ${fmt(dur, false)}`; });
  seek.addEventListener('change', () => { dragging = false; PV.pos = +seek.value; if (PV.playing) PV.play(+seek.value); else PV.seekVideo(+seek.value); });
  const host = box.querySelector('.strips'); host.id = 'mix-' + s.id;
  let saveT = null;
  buildMixer(host, s.mix, { onChange: (ch) => { if (PV) PV.set(ch); clearTimeout(saveT); saveT = setTimeout(() => DB.put('sessions', s.id, s), 400); } });
  if (s.video && s.video.nGroups > 0) { const o = document.createElement('option'); o.value = 'webm'; o.textContent = 'Video WebM per YouTube (con effetto)'; box.querySelector('.fmt').append(o); }
  if (typeof lamejs === 'undefined') { box.querySelector('.fmt').value = 'wav'; box.querySelectorAll('.fmt option').forEach(o => { if (o.value !== 'wav') o.disabled = true; }); }
  box.querySelector('.run').addEventListener('click', async (ev) => {
    const btn = ev.currentTarget; btn.disabled = true; if (PV) PV.stop();
    const bar = box.querySelector('.bar'), bi = bar.querySelector('i'), msg = box.querySelector('.msg'), out = box.querySelector('.out');
    bar.hidden = false; out.replaceChildren();
    const fmtv = box.querySelector('.fmt').value, norm = box.querySelector('.norm').value === '1';
    try {
      const res = await exportSession(s, { format: fmtv, normalize: norm }, (phase, p) => {
        const tot = norm ? (phase + p) / 2 : p; bi.style.width = (tot * 100).toFixed(1) + '%';
        msg.textContent = norm && phase === 0 ? 'Misuro il volume…' : 'Creo il file…';
      });
      const url = URL.createObjectURL(res.blob); const ext = fmtv === 'wav' ? 'wav' : fmtv === 'webm' ? 'webm' : 'mp3';
      const a = document.createElement('a'); a.className = 'dl'; a.href = url;
      a.download = (s.name || 'puntata').replace(/[\\/:*?"<>|]+/g, '-') + '.' + ext;
      a.textContent = '⬇ Scarica ' + a.download;
      out.append(a);
      msg.textContent = `Pronto · ${(res.blob.size / 1048576).toFixed(1)} MB` + (res.lufs != null && isFinite(res.lufs) ? ` · volume originale ${res.lufs.toFixed(1)} LUFS → −16` : '');
    } catch (e) { console.error(e); msg.textContent = 'Esportazione non riuscita: ' + e.message; }
    btn.disabled = false;
  });
}

/* Novità */
function openChangelog() {
  const b = $('clBody'); b.replaceChildren();
  for (const c of CHANGELOG) {
    const a = document.createElement('article'); a.innerHTML = `<h4>V${c.v}<span>${c.date}</span></h4><p class="note" style="margin:0 0 6px"></p><ul></ul>`;
    a.querySelector('p').textContent = c.title; for (const it of c.items) { const l = document.createElement('li'); l.textContent = it; a.querySelector('ul').append(l); }
    b.append(a);
  }
  const s = document.createElement('article'); s.className = 'soon'; s.innerHTML = '<h4>In arrivo</h4><ul></ul>';
  for (const it of ROADMAP) { const l = document.createElement('li'); l.textContent = it; s.querySelector('ul').append(l); }
  b.append(s); $('clModal').hidden = false;
}

/* Impostazioni */
async function openSettings() {
  $('setRetake').value = S.settings.retakeSec; $('setPre').value = S.settings.preroll; $('setNs').value = S.settings.ns ? '1' : '0';
  $('setModal').hidden = false;
}

/* File */
async function addFiles(files) {
  const ids = [];
  for (const f of files) {
    const id = 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    await DB.put('files', id, { name: f.name, type: f.type, blob: f });
    S.names.set(id, f.name); ids.push(id);
  }
  for (const id of ids) await loadBuffer(id);
  return ids;
}

/* Scorciatoie */
const ACTIONS = [
  ['rec', 'Registra / pausa / riprendi', ' '], ['retake', 'Re-take', 'r'], ['intro', 'Sigla', 's'], ['bg', 'Sottofondo play / pausa', 'b'],
  ['cap', 'Prossimo capitolo', 'Enter'], ['tpRun', 'Teleprompter: avvia / ferma', 'p'], ['tpShow', 'Teleprompter: mostra / nascondi', 't'],
  ['tpUp', 'Teleprompter: più veloce', 'ArrowUp'], ['tpDown', 'Teleprompter: più lento', 'ArrowDown'], ['video', 'Video sì / no', 'v']
];
const DEF_KEYS = Object.fromEntries(ACTIONS.map(a => [a[0], a[2]]));
const KEYS = () => S.settings.keys || (S.settings.keys = { ...DEF_KEYS });
const normKey = (k) => k.length === 1 ? k.toLowerCase() : k;
const keyLabel = (act) => { const k = KEYS()[act] || ''; return { ' ': 'Spazio', Enter: 'Invio', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Escape: 'Esc', Tab: 'Tab', Backspace: '⌫' }[k] || (k.length === 1 ? k.toUpperCase() : k); };
function renderKeys() {
  document.querySelectorAll('[data-act]').forEach(el => { el.textContent = keyLabel(el.dataset.act); });
  const lg = $('keysLegend'); if (lg) {
    lg.replaceChildren();
    const add = (k, t) => { const sp = document.createElement('span'); sp.innerHTML = `<span class="kbd"></span> `; sp.firstChild.textContent = k; sp.append(t); lg.append(sp); };
    for (const [a, t] of ACTIONS) add(keyLabel(a), t.toLowerCase());
    add('1–9', 'capitolo diretto'); add('← →', 'nel re-take: più / meno secondi');
  }
  const kl = $('keyList'); if (kl) {
    kl.replaceChildren();
    for (const [a, t] of ACTIONS) {
      const l = document.createElement('span'); l.textContent = t;
      const b = document.createElement('button'); b.textContent = keyLabel(a);
      b.addEventListener('click', () => { document.querySelectorAll('#keyList button.wait').forEach(x => { x.classList.remove('wait'); }); b.classList.add('wait'); b.textContent = 'premi un tasto…'; KEYCAP = a; });
      kl.append(l, b);
    }
  }
  if ($('recBtn')) renderStatus();
}
let KEYCAP = null;
document.addEventListener('keydown', (e) => {
  if (!KEYCAP) return;
  e.preventDefault(); e.stopImmediatePropagation();
  const act = KEYCAP; KEYCAP = null;
  if (e.key === 'Escape') { renderKeys(); return; }
  const k = normKey(e.key);
  if (/^[1-9]$/.test(k)) { toast('I tasti 1–9 sono riservati ai capitoli'); renderKeys(); return; }
  const keys = KEYS(); const other = Object.keys(keys).find(x => x !== act && keys[x] === k);
  if (other) { keys[other] = keys[act]; toast(`Scambiato con «${ACTIONS.find(x => x[0] === other)[1]}»`); }
  keys[act] = k; saveSettings(); renderKeys();
}, true);

/* Tastiera */
document.addEventListener('keydown', (e) => {
  const tg = e.target; if (tg && (tg.tagName === 'INPUT' && tg.type !== 'range' && tg.type !== 'checkbox' || tg.tagName === 'SELECT' || tg.tagName === 'TEXTAREA')) return;
  if (!E.ctx || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key;
  const anyModal = !$('sessModal').hidden || !$('setModal').hidden || !$('clModal').hidden || !$('devModal').hidden;
  if (k === 'Escape') { closeSessions(); for (const m of ['setModal', 'clModal']) $(m).hidden = true; if (!$('devModal').hidden) DEV.close(); if (R.state === 'hold') { stopListen(); setHoldN(0); } e.preventDefault(); return; }
  if (anyModal) return;
  const nk = normKey(k), keys = KEYS();
  const act = Object.keys(keys).find(a => keys[a] === nk);
  if (R.state === 'hold') {
    if (k === 'ArrowLeft' || k === '+') { setHoldN(R.holdN + 1); e.preventDefault(); }
    else if (k === 'ArrowRight' || k === '-') { setHoldN(R.holdN - 1); e.preventDefault(); }
    else if (k === 'Enter' || act === 'rec' || act === 'retake') { commitHold(); e.preventDefault(); }
    return;
  }
  if (/^[1-9]$/.test(k)) { capPlay(+k - 1); return; }
  if (!act) return;
  e.preventDefault();
  if (act === 'rec') { if (R.state === 'idle') recStart(); else if (R.state === 'rec') enterHold('pause'); }
  else if (act === 'retake') enterHold('retake');
  else if (act === 'intro') introPlay();
  else if (act === 'bg') bgToggle();
  else if (act === 'cap') capPlay(E.capIdx);
  else if (act === 'tpRun') TP.toggle();
  else if (act === 'tpShow') { TP.visible = !TP.visible; TP.layout(); TP.save(); }
  else if (act === 'tpUp') { TP.speed = Math.min(20, TP.speed + 1); TP.layout(); TP.save(); }
  else if (act === 'tpDown') { TP.speed = Math.max(1, TP.speed - 1); TP.layout(); TP.save(); }
  else if (act === 'video') { if (isRec() || blocked()) return toast('Attiva o disattiva il video a registrazione ferma'); S.settings.video.on = !S.settings.video.on; saveSettings(); renderStatus(); }
});

/* Collegamenti */
function wire() {
  $('recBtn').addEventListener('click', () => { if (R.state === 'idle') recStart(); else if (R.state === 'rec') enterHold('pause'); else if (R.state === 'hold') commitHold(); });
  $('retakeBtn').addEventListener('click', () => enterHold('retake'));
  // TERMINA mette subito in pausa (il contatore si ferma) e chiede conferma nel pannello
  $('stopBtn').addEventListener('click', () => { if (R.state === 'rec') enterHold('end'); else if (R.state === 'hold') { R.holdMode = 'end'; openHold(); } });
  $('holdMinus').addEventListener('click', () => setHoldN(R.holdN - 1));
  $('holdPlus').addEventListener('click', () => setHoldN(R.holdN + 1));
  $('holdRange').addEventListener('input', (e) => setHoldN(+e.target.value));
  $('holdGo').addEventListener('click', commitHold);
  $('holdEnd').addEventListener('click', recFinish);
  $('lsBefore').addEventListener('click', () => { const c = R.len / E.sr - R.holdN; listen(c - 4, c); });
  $('lsCut').addEventListener('click', () => { const c = R.len / E.sr - R.holdN; listen(c, R.len / E.sr); });
  $('lsStop').addEventListener('click', stopListen);
  $('holdWave').addEventListener('click', (e) => {
    if (!waveCache || !waveCache.used) return;
    const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width * e.currentTarget.width;
    if (x > waveCache.used) return;
    listen(waveCache.t0 + x / waveCache.used * waveCache.dur, R.len / E.sr);
  });

  $('introLoad').addEventListener('click', () => { if (isRec() || blocked()) return toast('Cambia la sigla a registrazione ferma'); $('fileIntro').click(); });
  $('fileIntro').addEventListener('change', async (e) => { const f = [...e.target.files]; e.target.value = ''; if (!f.length) return; const [id] = await addFiles(f); S.deck.intro = id; saveDeck(); renderDeck(); });
  $('introPlay').addEventListener('click', introPlay); $('introStop').addEventListener('click', introStop);

  $('bgAdd').addEventListener('click', () => { if (isRec() || blocked()) return toast('Aggiungi brani a registrazione ferma'); $('fileBg').click(); });
  $('fileBg').addEventListener('change', async (e) => { const f = [...e.target.files]; e.target.value = ''; if (!f.length) return; S.deck.bg.push(...await addFiles(f)); saveDeck(); renderDeck(); });
  $('bgPlay').addEventListener('click', bgToggle);
  $('bgNext').addEventListener('click', () => bgJump(E.bg.idx + 1));
  $('bgPrev').addEventListener('click', () => { const v = E.voices.bg; if (v && posOf(v, now()) > 3) { if (blocked()) return; stopVoice('bg'); E.bg.pos = 0; bgPlay(); renderDeck(); } else bgJump(E.bg.idx - 1); });

  $('capAdd').addEventListener('click', () => { if (isRec() || blocked()) return toast('Aggiungi capitoli a registrazione ferma'); $('fileCap').click(); });
  $('fileCap').addEventListener('change', async (e) => { const f = [...e.target.files]; e.target.value = ''; if (!f.length) return; S.deck.caps.push(...await addFiles(f)); saveDeck(); renderDeck(); });
  $('capPlay').addEventListener('click', () => capPlay(E.capIdx));
  $('capStop').addEventListener('click', capStop);
  $('capPrev').addEventListener('click', () => { if (blocked()) return; E.capIdx = Math.max(0, E.capIdx - 1); renderDeck(); });

  // Teleprompter
  TP.view = $('ptView'); TP.el = $('ptText');
  TP.view.addEventListener('scroll', () => TP.onScroll());
  window.addEventListener('resize', () => { const y = TP.view.scrollTop; TP.layout(); TP.setTop(y); });
  $('ptRun').addEventListener('click', () => TP.toggle());
  $('ptStart').addEventListener('change', (e) => { TP.startMode = e.target.value; TP.save(); });
  $('ptSlow').addEventListener('click', () => { TP.speed = Math.max(1, TP.speed - 1); TP.layout(); TP.save(); });
  $('ptFast').addEventListener('click', () => { TP.speed = Math.min(20, TP.speed + 1); TP.layout(); TP.save(); });
  $('ptSmall').addEventListener('click', () => { TP.size = Math.max(20, TP.size - 4); TP.layout(); TP.save(); });
  $('ptBig').addEventListener('click', () => { TP.size = Math.min(96, TP.size + 4); TP.layout(); TP.save(); });
  $('ptAuto').addEventListener('click', () => { TP.auto = !TP.auto; TP.layout(); TP.save(); });
  $('ptMirror').addEventListener('click', () => { TP.mirror = !TP.mirror; TP.layout(); TP.save(); });
  $('tpBtn').addEventListener('click', () => { TP.visible = !TP.visible; TP.layout(); TP.save(); });
  $('ptEditBtn').addEventListener('click', () => { if (isRec() || blocked()) return toast('Modifica il testo a registrazione ferma'); TP.edit(true); });
  $('ptCancel').addEventListener('click', () => TP.edit(false));
  $('ptSave').addEventListener('click', () => { TP.text = $('ptArea').value; TP.save(); TP.edit(false); TP.render(); TP.setTop(0); });
  document.querySelectorAll('[data-ins]').forEach(b => b.addEventListener('click', () => {
    const ta = $('ptArea'), v = b.dataset.ins, s0 = ta.selectionStart, s1 = ta.selectionEnd;
    ta.setRangeText(' ' + v + ' ', s0, s1, 'end'); ta.focus();
  }));
  $('ptLoad').addEventListener('click', () => { if (isRec() || blocked()) return toast('Carica il testo a registrazione ferma'); $('fileScript').click(); });
  $('fileScript').addEventListener('change', async (e) => { const f = e.target.files[0]; e.target.value = ''; if (!f) return; TP.text = await f.text(); TP.save(); TP.edit(false); TP.render(); TP.setTop(0); toast('Testo caricato: ' + f.name); });

  $('sessBtn').addEventListener('click', () => openSessions());
  $('setBtn').addEventListener('click', openSettings);
  $('verBtn').addEventListener('click', openChangelog);
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => { if (b.dataset.close === 'sessModal') closeSessions(); else $(b.dataset.close).hidden = true; }));
  for (const m of ['sessModal', 'setModal', 'clModal']) $(m).addEventListener('click', (e) => { if (e.target.id === m) { if (m === 'sessModal') closeSessions(); else $(m).hidden = true; } });

  $('setRetake').addEventListener('change', (e) => { S.settings.retakeSec = Math.max(1, Math.min(60, +e.target.value || 5)); saveSettings(); });
  $('setPre').addEventListener('change', (e) => { S.settings.preroll = Math.max(0, Math.min(10, +e.target.value || 0)); saveSettings(); });
  $('setNs').addEventListener('change', async (e) => { S.settings.ns = e.target.value === '1'; saveSettings(); if (R.state === 'idle') await initMic(); else toast('Vale dalla prossima registrazione'); });
  $('setDev').addEventListener('click', () => { $('setModal').hidden = true; DEV.open(); });
  $('keyReset').addEventListener('click', () => { S.settings.keys = { ...DEF_KEYS }; saveSettings(); renderKeys(); toast('Tasti predefiniti ripristinati'); });
  renderKeys();
  $('devBtn').addEventListener('click', () => DEV.open());
  $('micPill').addEventListener('click', () => DEV.open());
  $('camPill').addEventListener('click', () => DEV.open());
  DEV.wire();
  // Video
  const vs = S.settings.video;
  const vThr = $('vThr'), vGl = $('vGl');
  vThr.value = vs.thr; $('vThrO').textContent = vs.thr.toFixed(2); vGl.value = vs.gl; $('vGlO').textContent = Math.round(vs.gl * 100) + '%';
  $('vCol').value = vs.col; $('vMirror').setAttribute('aria-pressed', String(vs.mirror)); $('vRes').value = String(vs.res); $('vFx').setAttribute('aria-pressed', String(vs.fx !== false));
  $('vFx').addEventListener('click', (e) => { vs.fx = vs.fx === false; e.currentTarget.setAttribute('aria-pressed', String(vs.fx)); saveSettings(); });
  vThr.addEventListener('input', () => { vs.thr = +vThr.value; $('vThrO').textContent = vs.thr.toFixed(2); saveSettings(); });
  vGl.addEventListener('input', () => { vs.gl = +vGl.value; $('vGlO').textContent = Math.round(vs.gl * 100) + '%'; saveSettings(); });
  $('vCol').addEventListener('input', (e) => { vs.col = e.target.value; saveSettings(); });
  $('vMirror').addEventListener('click', (e) => { vs.mirror = !vs.mirror; e.currentTarget.setAttribute('aria-pressed', String(vs.mirror)); saveSettings(); });
  $('vRes').addEventListener('change', (e) => { if (isRec() || blocked()) { e.target.value = String(vs.res); return toast('Cambia risoluzione a registrazione ferma'); } vs.res = +e.target.value; CAM.resize(); saveSettings(); });
  $('vOn').addEventListener('click', () => { if (isRec() || blocked()) return toast('Attiva o disattiva il video a registrazione ferma'); vs.on = !vs.on; saveSettings(); renderStatus(); });
  if (!V.codec) { $('vOn').disabled = true; $('vOn').title = 'Questo browser non sa registrare video: usa Chrome o Edge aggiornati'; vs.on = false; }

  meterRefs = buildMixer($('liveStrips'), S.mix, { onChange: () => { applyLevels(); saveDeck(); }, meters: true, mutes: S.mutes });
}

/* Avvio */
async function recoverSessions() {
  for (const s of await DB.all('sessions')) {
    if (s.status === 'rec') {
      for (const g of s.segs) if (g.tEnd == null || g.tEnd > s.len / s.sr) g.tEnd = s.len / s.sr;
      s.status = 'recovered'; await DB.put('sessions', s.id, s);
      toast('Ho recuperato una registrazione interrotta: la trovi in Sessioni');
    }
  }
}
async function loadNames() {
  const ids = new Set([S.deck.intro, ...S.deck.bg, ...S.deck.caps].filter(Boolean));
  for (const s of await DB.all('sessions')) for (const g of s.segs || []) ids.add(g.fileId);
  for (const id of ids) { const f = await DB.get('files', id); if (f) S.names.set(id, f.name); }
  S.deck.bg = S.deck.bg.filter(id => S.names.has(id)); S.deck.caps = S.deck.caps.filter(id => S.names.has(id));
  if (S.deck.intro && !S.names.has(S.deck.intro)) S.deck.intro = null;
}
/* App installabile e uso senza internet */
let installEvt = null;
function initPWA() {
  const secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && secure) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => { const w = reg.installing; if (w) w.addEventListener('statechange', () => { if (w.state === 'activated' && navigator.serviceWorker.controller) toast('OnAir è stato aggiornato: ricarica la pagina quando hai finito'); }); });
    }).catch(e => console.warn('Service worker', e));
  }
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; const b = $('installBtn'); if (b) b.hidden = false; });
  window.addEventListener('appinstalled', () => { const b = $('installBtn'); if (b) b.hidden = true; toast('OnAir installato: lo trovi tra le app'); });
  const b = $('installBtn'); if (b) b.addEventListener('click', async () => { if (!installEvt) return; installEvt.prompt(); await installEvt.userChoice; installEvt = null; b.hidden = true; });
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
}
async function boot() {
  initPWA();
  for (const el of ['bootVer', 'verBtn', 'footVer']) $(el).textContent = 'V' + APP.version;
  document.title = APP.name + ' V' + APP.version;
  $('bootBtn').addEventListener('click', async () => {
    $('bootBtn').disabled = true; $('bootErr').hidden = true;
    try {
      await ready;
      await initAudio();
      await applySink();
      await V.probe();
      await initMic();
      $('boot').hidden = true; $('app').hidden = false;
      CAM.setup();
      wire(); renderAll(); TP.render(); requestAnimationFrame(loop);
      if (S.settings.camId !== 'none') await CAM.init(S.settings.camId); else CAM.chosen = 'none';
      await DEV.open(true);
      await preloadDeck(); await recoverSessions();
    } catch (e) {
      console.error(e); $('bootErr').textContent = 'Non riesco ad avviare l\'audio: ' + e.message + '. Usa Chrome, Edge o Firefox aggiornati.'; $('bootErr').hidden = false; $('bootBtn').disabled = false;
    }
  });
  const ready = (async () => {
    await DB.open();
    try {
      const st = await DB.get('state', 'deck');
      if (st) {
        Object.assign(S.deck, st.deck || {});
        S.mix = normMix(st.mix || st.levels); // st.levels: formato della V2.0.x
        if (st.defaults) S.defaults = normMix(st.defaults);
        Object.assign(S.mutes, st.mutes || {});
      }
      const se = await DB.get('state', 'settings'); if (se) { const vd = S.settings.video; Object.assign(S.settings, se); S.settings.video = { ...vd, ...(se.video || {}) }; if (se.keys) S.settings.keys = { ...DEF_KEYS, ...se.keys }; }
      await TP.load();
    } catch (e) { console.warn(e); }
    await loadNames();
    $('footInfo').textContent = DB.ok ? 'Dati salvati in questo browser' : 'Attenzione: questo browser non salva i dati, esporta prima di chiudere';
  })();
  window.addEventListener('beforeunload', (e) => { if (R.state !== 'idle') { persistSession(); e.preventDefault(); e.returnValue = ''; } });
}
boot();
