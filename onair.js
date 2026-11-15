/* GPverse OnAir — studio di registrazione per podcast
 * Versione: vedi APP.version e CHANGELOG.md (schema V.maior.minor.patch)
 */
'use strict';

const APP = { name: 'GPverse OnAir', version: '4.0.4' };

const CHANGELOG = [
  { v: '4.0.4', date: '15/11/2026', title: 'Re-take durante il riascolto', items: [
    'Corretto: durante i secondi di riascolto dopo un re-take, premere di nuovo R (o Spazio, o TERMINA) non faceva niente. La registrazione ripartiva, si rileggeva il pezzo e nella puntata restava anche l\'errore. Ora R durante il riascolto riapre il re-take e torna ancora più indietro; Spazio mette in pausa; TERMINA chiude.',
    'Durante il riascolto un avviso ricorda che R torna più indietro.',
    'Verificato con un microfono simulato a note diverse: dopo uno o più re-take la voce registrata e quella esportata sono tagliate senza sovrapposizioni, anche con sigla, sottofondo, capitoli, video e pulizia della voce attivi.'
  ] },
  { v: '4.0.3', date: '14/11/2026', title: 'Controllo completo dell\'app', items: [
    'Verificate con prove automatiche tutte le funzioni: Impostazioni, ogni scorciatoia, registrazione con pausa, re-take e termina, teleprompter nei tre modi, categorie audio, sessioni (rinomina, esportazioni Spotify, YouTube e WAV, capitoli, trasferimento .onair, eliminazione, recupero di una registrazione interrotta), montaggio, video, green screen, vista orizzontale, verticale e telefono.',
    'Corretto: aprendo Sessioni, i livelli di una sessione venivano adattati alle categorie di adesso invece che a quelle della sessione (eliminando una categoria, le sessioni vecchie ne avrebbero perso i livelli).',
    'Quando premi il tasto di una categoria vuota o di una lista di stacchetti già finita, OnAir ora te lo dice invece di non fare niente.'
  ] },
  { v: '4.0.2', date: '14/11/2026', title: '[PAUSA] con lo scorrimento a voce', items: [
    'Corretto: con «Scorre quando parlo» il segnale [PAUSA] fermava il testo per sempre (bisognava premere P). Ora il testo aspetta che tu faccia una pausa e riparte da solo quando riprendi a parlare; il pulsante Scorri diventa giallo mentre aspetta. P lo fa ripartire subito. A velocità fissa resta come prima.',
    'Con «Segue le parole che leggo» [PAUSA] non serve: il testo segue già la tua voce.',
    'I pulsanti dei segnali nell\'editor del testo ora corrispondono alle tue categorie audio.'
  ] },
  { v: '4.0.1', date: '14/11/2026', title: 'Sigla lanciata una volta sola', items: [
    'Corretto: con [SIGLA] appena sotto la riga di lettura la sigla partiva all\'avvio della registrazione e poi di nuovo quando il testo, scorrendo, raggiungeva il segnale. Ora un segnale partito all\'avvio non riparte più.'
  ] },
  { v: '4.0.0', date: '14/11/2026', title: 'Categorie audio a piacere', items: [
    'Non più solo Sigla, Sottofondo e Capitoli: in Impostazioni → Categorie audio crei tutte le categorie che vuoi (applausi, pubblicità, effetti, chiusura…), con nome, colore e comportamento.',
    'Tre comportamenti: Singolo (un brano, suona una volta), In loop (lista che gira, pausa e ripresa), Stacchetti (lista da lanciare uno alla volta). Per ognuna scegli se «ferma i loop» mentre suona e se crea capitoli YouTube.',
    'Ogni categoria ha il suo riquadro, la sua riga nel mixer, la sua traccia nel montaggio, il suo tasto (in Scorciatoie) e il suo segnale nel teleprompter: [APPLAUSI], [STOP APPLAUSI], [APPLAUSI 2].',
    'Le categorie valgono per tutte le puntate e si sincronizzano tra i dispositivi; ogni sessione registrata ricorda le sue. Le sessioni di prima restano come sono.',
    'Corretto: con «Parte con la registrazione» il segnale [SIGLA] scritto prima del titolo non partiva. Ora i segnali che si trovano sulla riga di lettura partono insieme alla registrazione.',
    'Corretto: tenendo premuto il tasto della sigla un attimo di troppo la sigla ripartiva da capo («benvenuti a…» due volte). I tasti tenuti premuti non ripetono più i comandi (tranne le frecce del teleprompter).',
    'Corretto: se un pezzo del video registrato è rovinato, l\'anteprima e l\'esportazione non si fermano più con «Decoding error»: saltano al fotogramma chiave successivo e vanno avanti.'
  ] },
  { v: '3.8.0', date: '14/11/2026', title: 'Teleprompter che segue la voce e specchietto dei tasti', items: [
    'Teleprompter, tre modi di scorrimento (menu nella barra o tasto M): velocità fissa; «Scorre quando parlo» (si ferma nelle pause, ignora i tasti); «Segue le parole che leggo» (riconosce le parole e porta sulla riga di lettura quella che stai dicendo; se salti o improvvisi, aspetta).',
    'Le parole già lette diventano più chiare. Nei segnali [SIGLA] [CAPITOLO]… non cambia niente: partono quando la riga li raggiunge.',
    '[SOTTOFONDO] durante la sigla: il sottofondo parte quando la sigla è finita del tutto, non prima.',
    'Specchietto delle scorciatoie: tasto H o pulsante «⌨ Tasti». «⧉ Finestra sempre in primo piano» lo apre in una finestrella che resta sopra le altre; si apre da sola quando registri (si può spegnere) e mostra cosa sta suonando e il prossimo capitolo. I tasti funzionano anche quando è attiva quella finestra.',
    'Nuovi tasti: M (come scorre il teleprompter), H (specchietto).'
  ] },
  { v: '3.7.1', date: '14/11/2026', title: 'Menu ⚙ del mixer a barre agganciato all\'ingranaggio', items: [
    'Corretto: nel mixer a barre il pannello ⚙ (gain, EQ, ingresso mic) compariva in un punto sbagliato dello schermo.',
    'Ora si apre come un menu a comparsa sopra l\'ingranaggio, con una freccia che lo indica (sotto, se in alto non c\'è spazio).',
    'Si può spostare trascinandolo dalla testata; si chiude con ✕ o cliccando fuori.'
  ] },
  { v: '3.7.0', date: '14/11/2026', title: 'Pulizia della voce: riduzione rumore AI e noise gate', items: [
    'Riduzione rumore AI (RNNoise, gira nel browser): toglie tastiera, clic del mouse, ventole e rumori di fondo dalla voce registrata.',
    'Noise gate: quando non parli abbassa il microfono, così nelle pause non entra niente. Soglia regolabile e spia «GATE» sulla riga della voce (verde = microfono aperto).',
    '«🎙 Prova»: registra 6 secondi e li fa riascoltare originali e puliti, per scegliere le impostazioni giuste.',
    'L\'audio dello studio ora lavora sempre a 48 kHz (come i video).',
    'Verificate tutte le voci di Impostazioni in vista orizzontale con il mixer a barre.'
  ] },
  { v: '3.6.1', date: '14/11/2026', title: 'Disposizione: modifiche salvate subito', items: [
    'Ogni modifica alla disposizione (colonna, ordine, visibilità, larghezza) si salva subito, in qualsiasi ordine la fai. Se parti da un set pronto, OnAir crea da solo una tua copia (es. «Classico (mio)»).',
    '«Duplica con un nuovo nome» al posto di «Salva come set personale»; tolto «Salva modifiche», non serve più.',
    'In «⚙ Regola» la scelta «Togli lo sfondo senza telo» (Persone o Scena vuota) è in cima.'
  ] },
  { v: '3.6.0', date: '14/11/2026', title: 'Modalità Persone (scontorno con intelligenza artificiale)', items: [
    'Nuova modalità «Persone» per togliere lo sfondo senza telo: un modello di riconoscimento delle persone (MediaPipe, gira nel browser, niente esce dal PC) scontorna te e gli ospiti. Non serve registrare la scena vuota e non teme luce che cambia né webcam urtata.',
    'La modalità «Con la scena vuota» resta per chi vuole mostrare anche oggetti nuovi; ora avvisa se la webcam si è mossa.',
    'Corretto: «Disposizione rapida» (teleprompter a sinistra, al centro, a destra) non aveva effetto sui set personali. Ora vale per il set attivo.',
    'La modalità Persone richiede l\'accelerazione grafica (WebGL) attiva nel browser.'
  ] },
  { v: '3.5.1', date: '14/11/2026', title: 'Green screen virtuale più robusto', items: [
    'Corretto: entrando nell\'inquadratura ricompariva tutta la stanza, perché la webcam cambia da sola esposizione e bilanciamento del bianco. Ora OnAir misura il cambio di luce e lo compensa.',
    'Confronto su immagine leggermente sfocata e basato sul colore: non scattano più rumore, messa a fuoco e piccoli tremolii; le ombre leggere contano meno.',
    'Pulizia automatica dei puntini isolati.',
    '«👁 Vedi cosa resta»: bianco = resta, rosso = tolto, per regolare il cursore «Pulizia» (prima «Sensibilità»: più alto toglie di più).',
    'Con «⚙ Regola» aperto l\'anteprima resta visibile sopra i comandi.',
    'Avviso se la webcam ha cambiato formato dopo la registrazione della scena vuota.'
  ] },
  { v: '3.5.0', date: '14/11/2026', title: 'Disposizione personalizzabile anche in orizzontale', items: [
    'In vista orizzontale i set di pannelli si personalizzano di nuovo: per ogni pannello scegli colonna (sinistra, centro, destra o in basso a tutta larghezza), ordine e visibilità.',
    'Larghezza di ogni colonna: stretta, media, larga, molto larga. Le colonne vuote spariscono.',
    'Ogni set ricorda due disposizioni: una per la vista orizzontale e una per quella verticale.',
    'Nuovo pulsante «Salva modifiche» per aggiornare un set personale senza crearne uno nuovo.'
  ] },
  { v: '3.4.0', date: '14/11/2026', title: 'Mixer a barre e regolazioni video a comparsa', items: [
    'Nuovo mixer «a barre»: una riga per fonte (indicatore di livello, fader, ↺, MUTE, ⚙), in due colonne con il livello voce di lato. In vista orizzontale è quello di base e occupa metà spazio.',
    '⚙ apre gain, EQ e (sulla voce) ingresso del microfono in un pannello sopra la riga; si chiude con ✕ o cliccando fuori.',
    'Con più fonti le righe del mixer scorrono in verticale.',
    'Vista orizzontale: il riquadro VIDEO mostra solo l\'anteprima, grande e intera; contorni, inquadratura, green screen, sfondo e logo si aprono con «⚙ Regola».',
    'Il pulsante del mixer passa tra a barre, console e compatto; in Impostazioni scegli lo stile per la vista orizzontale e per quella verticale.'
  ] },
  { v: '3.3.1', date: '14/11/2026', title: 'Vista orizzontale senza tagli', items: [
    'Corretto: in vista orizzontale video, sottofondo e capitoli venivano tagliati in altezza.',
    'L\'anteprima video si rimpicciolisce per stare nel riquadro; i comandi video scorrono sotto.',
    'Sottofondo e capitoli hanno più spazio (la sigla occupa solo quello che serve) e i pulsanti restano sempre visibili.',
    'Mixer più basso: fader adattati all\'altezza dello schermo, «Ingresso mic» su una riga, «Gain ed EQ» si apre sopra la fonte senza allungare il mixer.'
  ] },
  { v: '3.3.0', date: '14/11/2026', title: 'Green screen virtuale e sfondi dietro di te', items: [
    'Green screen virtuale: «🎬 Registra la scena vuota», esci dall\'inquadratura per qualche secondo e OnAir memorizza la stanza. Poi si vede solo ciò che è nuovo: tu, un ospite, un oggetto.',
    'Sensibilità regolabile; esposizione, bilanciamento del bianco e messa a fuoco della webcam vengono bloccati se la webcam lo permette.',
    'Sfondo anche dietro di te (con green screen a colore o virtuale): nero, sfocato, immagine oppure video in loop caricato da te.',
    'La scena vuota resta salvata su questo dispositivo: la rifai solo se sposti la webcam o cambia la luce.'
  ] },
  { v: '3.2.0', date: '14/11/2026', title: 'Impostazioni sincronizzate tra i tuoi dispositivi', items: [
    'Sincronizzazione tramite un tuo repository GitHub privato: carichi le impostazioni da un PC e le ritrovi sull\'altro.',
    'Scegli cosa sincronizzare: testo e sigla/brani, livelli del mixer, video e sovrimpressioni, disposizioni e tasti, piattaforme.',
    'All\'avvio OnAir ti avvisa se sull\'altro dispositivo ci sono impostazioni più recenti; invio automatico facoltativo dopo le modifiche.',
    'Il token resta solo su questo dispositivo, non finisce mai nei file .onair né nella sincronizzazione.'
  ] },
  { v: '3.1.0', date: '14/11/2026', title: 'Vista orizzontale per monitor 16:9', items: [
    'Nuova vista orizzontale: in registrazione tutto sta in uno schermo 16:9 senza scorrere (video, mixer, teleprompter e comandi affiancati).',
    'Anche il montaggio è orizzontale: timeline larga, anteprima video ed esportazione di lato, tracce più alte.',
    'Impostazioni → Vista: automatica (orizzontale su schermi larghi), sempre orizzontale o sempre verticale; scegli dove mettere il video.'
  ] },
  { v: '3.0.0', date: '08/11/2026', title: 'Montaggio, mixer console e nuovi colori', items: [
    'Montaggio: timeline a tracce (voce con forma d\'onda, sigla, sottofondo, capitoli) con righello, cursore, zoom, scorrimento e annulla/ripristina.',
    'Blocchi musicali: spostali, accorciali dai bordi, dividili al cursore, eliminali; per ognuno volume e dissolvenze in entrata e in uscita.',
    'Taglio: selezioni un tratto e lo elimini da voce, musica e video insieme; tutto quello che segue si sposta indietro. Puoi anche solo silenziare la voce in un tratto.',
    'Capitoli YouTube come bandierine sul righello, da trascinare; il video tagliato viene ricodificato all\'esportazione.',
    'Mixer a scelta: vista console (fader verticali, indicatori con scala e picco) o compatta; curva dell\'EQ disegnata in ogni fonte.',
    'Livello voce dal vivo in LUFS, misurato come suonerà nel file, con indicazione basso / buono / alto.',
    'Colori dei canali: voce ciano, sigla magenta, sottofondo giallo, capitoli verde.'
  ]},
  { v: '2.9.0', date: '08/11/2026', title: 'Backup e trasferimento tra dispositivi', items: [
    'Impostazioni → Backup e trasferimento: salvi tutto lo studio (audio di sigla, sottofondi e capitoli, testo, logo, sfondo, mixer, disposizioni, tasti, piattaforme) in un file .onair e lo carichi su un altro dispositivo.',
    'Sessioni: «⬇ Trasferisci» salva una registrazione completa (voce, video, musica usata, mix e capitoli) in un file .onair; «⬆ Importa sessione» la apre su un altro dispositivo, pronta da rimixare ed esportare.',
    'Microfono, uscita audio e webcam scelti restano quelli del dispositivo su cui carichi lo studio.'
  ]},
  { v: '2.8.0', date: '08/11/2026', title: 'Spotify, YouTube e capitoli', items: [
    'Impostazioni → Canale e piattaforme: impostazioni separate per Spotify (formato, volume) e YouTube (volume, qualità audio, capitoli).',
    'Sessioni: pulsanti «Esporta per Spotify» ed «Esporta per YouTube» che usano quelle impostazioni; resta l\'esportazione personalizzata.',
    'Capitoli YouTube creati in automatico dagli stacchetti, modificabili (orario e titolo), con controllo delle regole di YouTube e pulsante per copiarli nella descrizione.'
  ]},
  { v: '2.7.0', date: '08/11/2026', title: 'Sfondo, logo e Iscriviti', items: [
    'Sfondo dove non arriva la webcam: nero, sfocato come al TG (il video stesso, allargato e sfumato) o un\'immagine tua. Si attiva e disattiva quando vuoi.',
    'Logo in sovraimpressione (PNG), senza effetto: angolo, dimensione e opacità.',
    'Animazione «Iscriviti» in alto al centro con il nome del canale, campanella e clic: tasto I, pulsante o segnale [ISCRIVITI] nel teleprompter.',
    'Sfondo, logo e Iscriviti finiscono nel video registrato.'
  ]},
  { v: '2.6.0', date: '08/11/2026', title: 'Teleprompter a mano, disposizioni, green screen di ogni colore', items: [
    'Teleprompter: ↑ e ↓ spostano il testo (tenendoli premuti scorre), anche mentre va da solo; la velocità ora è su Shift+↑ / Shift+↓.',
    'Disposizione dei pannelli: set pronti (Classico, Teleprompter davanti, Solo lettura) e set personali con ordine, larghezza e visibilità di ogni pannello.',
    'Green screen di qualsiasi colore, anche un muro bianco o grigio: con i colori neutri OnAir guarda anche la luminosità.'
  ]},
  { v: '2.5.0', date: '08/11/2026', title: 'Inquadratura e green screen', items: [
    'Video: «Scegli area» — trascini un rettangolo sull\'anteprima e tutto quello che sta fuori diventa nero (per nascondere ciò che va oltre il telo).',
    'Video: «Ingrandisci area» allarga l\'area scelta a tutto lo schermo, senza deformarla.',
    'Video: «Green screen» — il telo verde diventa nero, così l\'effetto disegna solo i tuoi contorni. «Scegli il verde» per cliccare sul telo e prenderne il colore; «Tolleranza verde» per regolarlo.',
    'Area e green screen valgono sia con l\'effetto sia con la webcam normale, dal vivo e nella registrazione.'
  ]},
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
  'Idee per il futuro: teleprompter che segue la voce, automazioni di volume disegnate sulla timeline'
];

const $ = (id) => document.getElementById(id);
/* ------------------------------------------------------------ Categorie audio
   Ogni categoria ha un comportamento: single (suona una volta), loop (lista che gira, si mette in pausa e riparte),
   list (stacchetti da lanciare uno alla volta). «duck»: mentre suona zittisce i loop, che poi ripartono da dove erano. */
const CAT_TYPES = { single: 'Singolo: un brano, suona una volta', loop: 'In loop: lista che gira, pausa e ripresa', list: 'Stacchetti: lista da lanciare uno alla volta' };
const DEF_CATS = () => [
  { id: 'intro', name: 'Sigla', type: 'single', color: '#ff2bd6', key: 's', duck: false, chap: false, cue: 'SIGLA' },
  { id: 'bg', name: 'Sottofondo', type: 'loop', color: '#ffe600', key: 'b', duck: false, chap: false, cue: 'SOTTOFONDO' },
  { id: 'cap', name: 'Capitoli', type: 'list', color: '#38ff7a', key: 'Enter', duck: true, chap: true, cue: 'CAPITOLO' }];
const CATS = () => { let st; try { st = S.settings; } catch (e) { return DEF_CATS(); } return st.cats || (st.cats = DEF_CATS()); };
const catsOf = (sess) => (sess && sess.cats) || DEF_CATS();
const catOf = (id, cats) => (cats || CATS()).find(c => c.id === id);
const cueWord = (c) => String(c.cue || c.name).trim().toUpperCase().replace(/\s+/g, ' ');
const chsOf = (cats) => (cats || CATS()).map(c => c.id);
const allOf = (cats) => ['voice', ...chsOf(cats)];
const chLabel = (ch, cats) => ch === 'voice' ? 'VOCE' : ((catOf(ch, cats) || catOf(ch, DEF_CATS()) || { name: ch }).name || ch).toUpperCase();
const chColor = (ch, cats) => ch === 'voice' ? '#00e5ff' : (catOf(ch, cats) || catOf(ch, DEF_CATS()) || { color: '#9aa7b8' }).color;
const dbl = (db) => Math.pow(10, db / 20);

/* ------------------------------------------------------------ Parametri mixer */
const BASE_P = () => ({ gain: 0, low: 0, mid: 0, high: 0, vol: 100, comp: 0, hp: false });
const FACTORY = { voice: { vol: 100, comp: 30, hp: true }, intro: { vol: 80 }, bg: { vol: 30 }, cap: { vol: 90 } };
const TYPE_VOL = { single: 80, loop: 30, list: 90 };
const fullP = (ch, p, cats) => ({ ...BASE_P(), ...(FACTORY[ch] || { vol: TYPE_VOL[(catOf(ch, cats) || {}).type] || 80 }), ...(p || {}) });
function normMix(m, cats) {
  const o = {};
  for (const ch of allOf(cats)) { const v = m && m[ch]; o[ch] = typeof v === 'number' ? fullP(ch, { vol: Math.min(150, v) }, cats) : fullP(ch, v, cats); }
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
  deck: {},
  mix: normMix(null),
  defaults: normMix(null),
  mutes: { voice: false, intro: false, bg: false, cap: false },
  settings: { orient: 'auto', wideLay: 'center', mixStyle: 'console', mixStyleWide: 'bars', channel: '', ov: { bg: 'none', behind: true, logoOn: false, logoPos: 'tr', logoSize: 0.14, logoOp: 0.9 }, plat: { sp: { fmt: 'mp3-128', lufs: '-16' }, yt: { lufs: '-14', abr: '160000', ch: '1', chName: 'file', intro: 'Introduzione' } }, retakeSec: 5, preroll: 3, ns: false, nsAi: false, gate: false, gateThr: -35, micId: '', outId: '', camId: '', micGain: 0, keys: null, video: { on: true, thr: 0.16, gl: 0.35, col: '#ffd400', mirror: false, res: 720, fx: true, mask: null, zoom: false, key: false, kc: '#33b34d', tol: 0.09, vbg: false, vtol: 0.15, vmode: 'scene' } },
  names: new Map()
};
async function saveDeck() { await DB.put('state', 'deck', { deck: S.deck, mix: S.mix, defaults: S.defaults, mutes: S.mutes }); SYNC.changed(); }
async function saveSettings() { await DB.put('state', 'settings', S.settings); SYNC.changed(); }

/* ------------------------------------------------------------------ Motore */
const E = {
  ctx: null, sr: 48000, strips: {}, bus: {}, an: {}, master: null, micOk: false, micStream: null, micSrc: null, micAn: null, node: null,
  buffers: new Map(), voices: { intro: null, bg: null, cap: null },
  loops: {}, next: {}
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
  // 48 kHz fisso: è la frequenza della riduzione rumore AI e dell'audio dei video (Opus)
  try { E.ctx = new AC({ latencyHint: 'interactive', sampleRate: 48000 }); } catch (e) { E.ctx = new AC({ latencyHint: 'interactive' }); }
  await E.ctx.resume();
  E.sr = E.ctx.sampleRate;
  E.master = E.ctx.createGain(); E.master.connect(E.ctx.destination);
  for (const ch of allOf()) ensureStrip(ch);
  E.bus.mon = E.strips.voice.input;
  E.micAn = E.ctx.createAnalyser(); E.micAn.fftSize = 2048;
  E.micGain = E.ctx.createGain(); E.micGain.gain.value = dbl(S.settings.micGain || 0); E.micGain.connect(E.micAn); LV.setup();
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

/* Pulizia della voce prima della registrazione: riduzione rumore AI (RNNoise) e noise gate */
const GATE_SRC = `
class OnAirGate extends AudioWorkletProcessor {
  static get parameterDescriptors() { return [{ name: 'thr', defaultValue: -42 }, { name: 'on', defaultValue: 1 }, { name: 'pre', defaultValue: 1 }]; }
  constructor() {
    super(); const sr = sampleRate; this.L = Math.round(0.025 * sr); this.buf = new Float32Array(this.L); this.w = 0;
    this.ms = 0; this.g = 1; this.hold = 0; this.open = true; this.above = 0; this.n = 0; this.last = null;
    this.kR = Math.exp(-1 / (0.02 * sr)); this.need = Math.round(0.03 * sr); this.holdN = Math.round(0.25 * sr);
    this.atk = Math.exp(-1 / (0.003 * sr)); this.rel = Math.exp(-1 / (0.1 * sr));
    // filtro passa-banda per la voce (circa 150-3000 Hz) sul segnale che comanda il gate: i clic dei tasti contano meno
    const hp = Math.exp(-2 * Math.PI * 150 / sr), lp = Math.exp(-2 * Math.PI * 3000 / sr); this.hpA = hp; this.lpA = lp; this.h1 = 0; this.hx = 0; this.l1 = 0;
  }
  process(inputs, outputs, p) {
    const a = inputs[0] && inputs[0][0], o = outputs[0] && outputs[0][0]; if (!o) return true;
    if (!a) { o.fill(0); return true; }
    const on = p.on[0] > 0.5, pre = Math.max(1e-3, p.pre[0]), thr = Math.pow(10, p.thr[0] / 20) / pre, t2 = thr * thr, tc2 = t2 * 0.25;
    for (let k = 0; k < a.length; k++) {
      const x = a[k];
      const d = this.buf[this.w]; this.buf[this.w] = x; this.w = (this.w + 1) % this.L;   // ritardo di 25 ms: il gate «vede» in anticipo
      if (!on) { o[k] = d; this.open = true; continue; }
      const h = this.hpA * (this.h1 + x - this.hx); this.h1 = h; this.hx = x; this.l1 = this.l1 * this.lpA + h * (1 - this.lpA);
      this.ms = this.ms * this.kR + this.l1 * this.l1 * (1 - this.kR);
      if (this.ms > t2) { if (++this.above > this.need) { this.open = true; this.hold = this.holdN; } }
      else { this.above = Math.max(0, this.above - 2); if (this.hold > 0) this.hold--; else if (this.ms < tc2) this.open = false; }
      const t = this.open ? 1 : 0.032; this.g = t + (this.g - t) * (t > this.g ? this.atk : this.rel); o[k] = d * this.g;
    }
    if (++this.n % 8 === 0 && this.last !== this.open) { this.last = this.open; this.port.postMessage(this.open); }
    return true;
  }
}
registerProcessor('onair-gate', OnAirGate);`;
const NS = {
  rnn: null, gate: null, loaded: false, err: null,
  async load() {
    if (this.loaded) return; const ctx = E.ctx;
    try { await ctx.audioWorklet.addModule(URL.createObjectURL(new Blob([GATE_SRC], { type: 'application/javascript' }))); this.gate = new AudioWorkletNode(ctx, 'onair-gate', { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1], channelCount: 1, channelCountMode: 'explicit' }); this.gate.port.onmessage = (e) => { this.open = e.data; document.querySelectorAll('#liveStrips .gled, #setGateLed').forEach(l => l.classList.toggle('closed', !e.data)); }; } catch (e) { console.warn('gate', e); this.gate = null; }
    try {
      if (ctx.sampleRate !== 48000) throw new Error('serve l\'audio a 48 kHz');
      const simd = WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
      const bin = await (await fetch(simd ? 'lib/ns/rnnoise_simd.wasm' : 'lib/ns/rnnoise.wasm')).arrayBuffer();
      await ctx.audioWorklet.addModule('lib/ns/rnnoise-worklet.js');
      this.rnn = new AudioWorkletNode(ctx, '@sapphi-red/web-noise-suppressor/rnnoise', { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1], channelCount: 1, channelCountMode: 'explicit', processorOptions: { maxChannels: 1, wasmBinary: bin } });
    } catch (e) { console.warn('rnnoise', e); this.rnn = null; this.err = e.message || String(e); }
    this.loaded = true;
  },
  /* micSrc → [RNNoise] → [gate] → micGain (registrazione e indicatori) */
  async wire() {
    if (!E.micSrc) return; const st = S.settings;
    if ((st.nsAi || st.gate) && E.recMode === 'worklet') await this.load();
    for (const n of [E.micSrc, this.rnn, this.gate]) if (n) try { n.disconnect(); } catch (e) {}
    let n = E.micSrc;
    if (st.nsAi && this.rnn) { n.connect(this.rnn); n = this.rnn; }
    if (st.gate && this.gate) { n.connect(this.gate); n = this.gate; this.setGate(); }
    n.connect(E.micGain);
    document.querySelectorAll('#liveStrips .gled, #setGateLed').forEach(l => { l.hidden = !(st.gate && this.gate); l.classList.remove('closed'); });
  },
  setGate() { if (!this.gate) return; const t = E.ctx.currentTime; this.gate.parameters.get('thr').setValueAtTime(S.settings.gateThr ?? -35, t); this.gate.parameters.get('on').setValueAtTime(S.settings.gate ? 1 : 0, t); this.gate.parameters.get('pre').setValueAtTime(dbl(S.settings.micGain || 0), t); },
  /* Prova: registra 6 secondi prima e dopo la pulizia, da riascoltare a confronto */
  async test(onTick) {
    const mk = () => { const d = E.ctx.createMediaStreamDestination(); return { d, rec: new MediaRecorder(d.stream), parts: [] }; };
    const raw = mk(), clean = mk(); E.micSrc.connect(raw.d); E.micGain.connect(clean.d);
    for (const r of [raw, clean]) { r.rec.ondataavailable = (e) => r.parts.push(e.data); r.rec.start(); }
    for (let k = 6; k > 0; k--) { onTick && onTick(k); await new Promise(r => setTimeout(r, 1000)); }
    const stop = (r) => new Promise(res => { r.rec.onstop = res; r.rec.stop(); }); await Promise.all([stop(raw), stop(clean)]);
    try { E.micSrc.disconnect(raw.d); E.micGain.disconnect(clean.d); } catch (e) {}
    return { raw: URL.createObjectURL(new Blob(raw.parts, { type: raw.rec.mimeType })), clean: URL.createObjectURL(new Blob(clean.parts, { type: clean.rec.mimeType })) };
  }
};
async function initMic() {
  if (E.micStream) { E.micStream.getTracks().forEach(t => t.stop()); E.micStream = null; }
  if (E.micSrc) { try { E.micSrc.disconnect(); } catch (e) {} E.micSrc = null; }
  try {
    E.micStream = await navigator.mediaDevices.getUserMedia({ audio: {
      deviceId: S.settings.micId ? { exact: S.settings.micId } : undefined,
      echoCancellation: false, noiseSuppression: !!S.settings.ns, autoGainControl: false, channelCount: 1 } });
    E.micSrc = E.ctx.createMediaStreamSource(E.micStream);
    await NS.wire();
    E.micOk = true;
  } catch (e) {
    console.warn('Microfono', e); E.micOk = false;
    if (S.settings.micId) { S.settings.micId = ''; saveSettings(); }
  }
  renderStatus();
}

function setMicGain(db) { S.settings.micGain = db; saveSettings(); NS.setGate(); if (E.micGain) E.micGain.gain.setTargetAtTime(dbl(db), E.ctx.currentTime, 0.02); const o = $('dMicGainO'); if (o) o.textContent = '+' + db + ' dB'; const r = $('dMicGain'); if (r) r.value = db; const lr = $('liveStrips-voice-in'); if (lr) { lr.value = db; lr.nextElementSibling.textContent = '+' + db + ' dB'; } }
function ensureStrip(ch) {
  if (E.strips[ch] || !E.ctx) return;
  const an = E.ctx.createAnalyser(); an.fftSize = 2048; an.connect(E.master);
  const st = new Strip(E.ctx, ch, an); E.strips[ch] = st; E.bus[ch] = st.input; E.an[ch] = an;
  if (!S.mix[ch]) S.mix[ch] = fullP(ch, S.defaults[ch]); if (!(ch in S.mutes)) S.mutes[ch] = false;
  st.set(S.mix[ch], S.mutes[ch]);
}
function applyLevels() { if (!E.ctx) return; for (const ch of allOf()) { ensureStrip(ch); E.strips[ch].set(S.mix[ch], S.mutes[ch]); } }

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
async function preloadDeck() { for (const id of deckIds()) await loadBuffer(id); renderDeck(); }
/* Contenuto del deck per categoria: single → un file (o null), loop/list → elenco */
function normDeck() {
  if (S.deck.caps && !S.deck.cap) S.deck.cap = S.deck.caps; delete S.deck.caps;
  for (const c of CATS()) { const v = S.deck[c.id]; S.deck[c.id] = c.type === 'single' ? (Array.isArray(v) ? (v[0] || null) : (v || null)) : (Array.isArray(v) ? v : (v ? [v] : [])); }
}
const dk = (id) => { const c = catOf(id), v = S.deck[id]; if (c && c.type === 'single') return v || null; return Array.isArray(v) ? v : (S.deck[id] = v ? [v] : []); };
const dkList = (id) => { const v = dk(id); return Array.isArray(v) ? v : (v ? [v] : []); };
const deckIds = () => [...new Set(CATS().flatMap(c => dkList(c.id)).filter(Boolean))];

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
  const c = catOf(v.ch);
  if (c && c.type === 'loop') { const L = loopSt(v.ch); L.idx = (L.idx + 1) % Math.max(1, dkList(v.ch).length); L.pos = 0; loopPlay(v.ch); }
  else if (c) afterEnd(v.ch);
  renderDeck();
}

/* Comandi generici per categoria */
const loopSt = (id) => E.loops[id] || (E.loops[id] = { idx: 0, pos: 0, status: 'stopped' });
const catName = (id) => (catOf(id) || { name: id }).name;
const ducking = () => Object.values(E.voices).some(v => v && (catOf(v.ch) || {}).duck);
const singlePlaying = () => CATS().some(c => c.type === 'single' && E.voices[c.id]);
function holdLoops() {
  const held = {};
  for (const c of CATS()) if (c.type === 'loop') {
    const L = loopSt(c.id); if (L.status === 'playing') { L.pos = stopVoice(c.id) || 0; L.status = 'held'; }
    if (L.status === 'held') held[c.id] = { idx: L.idx, pos: L.pos };
  }
  return held;
}
function releaseLoops() { if (ducking()) return; for (const c of CATS()) if (c.type === 'loop' && loopSt(c.id).status === 'held') loopPlay(c.id); }
function afterEnd(id) { const c = catOf(id); if (!c) return; if (c.duck) releaseLoops(); if (c.type === 'single') TP.onSingleEnd(id); }
function singlePlay(id) {
  const f = dk(id), c = catOf(id); if (blocked() || !f || !c) return;
  stopVoice(id); const held = c.duck ? holdLoops() : null;
  startVoice(id, f, 0, now(), held ? { held } : {}); renderDeck();
}
function singleStop(id) { if (blocked()) return; const was = !!E.voices[id]; stopVoice(id); if (was) afterEnd(id); renderDeck(); }
function loopPlay(id) {
  const L = loopSt(id), arr = dkList(id);
  if (!arr.length) { L.status = 'stopped'; return; }
  if (L.idx >= arr.length) { L.idx = 0; L.pos = 0; }
  const v = startVoice(id, arr[L.idx], L.pos, now(), { bgIdx: L.idx });
  L.status = v ? 'playing' : 'paused';
}
function loopToggle(id) {
  const L = loopSt(id); if (blocked() || !dkList(id).length) return;
  if (L.status === 'playing') { L.pos = stopVoice(id) || 0; L.status = 'paused'; }
  else if (L.status === 'held') toast(catName(id) + ': riparte da solo quando finisce lo stacchetto');
  else loopPlay(id);
  renderDeck();
}
function loopJump(id, i) {
  const arr = dkList(id); if (blocked() || !arr.length) return;
  const L = loopSt(id), n = arr.length; i = ((i % n) + n) % n;
  const was = L.status === 'playing'; if (was) stopVoice(id);
  L.idx = i; L.pos = 0;
  if (was) loopPlay(id); else if (L.status !== 'held') L.status = 'paused';
  renderDeck();
}
function listPlay(id, i) {
  const arr = dkList(id), c = catOf(id); if (blocked() || !c || i < 0 || i >= arr.length) return;
  if (E.voices[id]) stopVoice(id);
  const held = c.duck ? holdLoops() : null;
  startVoice(id, arr[i], 0, now(), { capIdx: i, ...(held ? { held } : {}) });
  E.next[id] = i + 1; renderDeck();
}
function listStop(id) { if (blocked() || !E.voices[id]) return; stopVoice(id); afterEnd(id); renderDeck(); }
/* Il tasto della categoria: sigla → play, loop → play/pausa, stacchetti → lancia il prossimo */
function catAction(id) {
  const c = catOf(id); if (!c) return;
  if (c.type === 'single') { if (!dk(id)) toast(c.name + ': nessun file caricato'); singlePlay(id); }
  else if (c.type === 'loop') { if (!dkList(id).length) toast(c.name + ': nessun brano caricato'); loopToggle(id); }
  else { const n = E.next[id] || 0, L = dkList(id); if (!L.length) toast(c.name + ': lista vuota'); else if (n >= L.length) toast(c.name + ': lista finita · usa ⏮ o il numero (1–9) per rilanciarne uno'); listPlay(id, n); }
}
function catStop(id) { const c = catOf(id); if (!c) return; if (c.type === 'single') singleStop(id); else if (c.type === 'list') listStop(id); else if (loopSt(id).status === 'playing') loopToggle(id); }
const firstList = () => CATS().find(c => c.type === 'list');
const firstSingle = () => CATS().find(c => c.type === 'single');

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
  HELP.onRecStart();
  if (!E.micOk) { toast('Microfono non disponibile: controlla il permesso nel browser o scegline un altro in Impostazioni'); return; }
  const id = 's' + Date.now();
  const lat = (E.ctx.outputLatency || 0) + (E.ctx.baseLatency || 0) + 0.01;
  const names = {}; for (const fid of deckIds()) names[fid] = S.names.get(fid);
  R.session = { id, name: sessionName(), created: Date.now(), sr: E.sr, len: 0, segs: [], retakes: 0, status: 'rec', latency: lat, names,
    mix: JSON.parse(JSON.stringify(S.mix)), appVersion: APP.version, cats: JSON.parse(JSON.stringify(CATS())), next0: { ...E.next } };
  R.CH = E.sr; R.chunks = []; R.cur = new Int16Array(R.CH); R.curFill = 0; R.cIdx = 0; R.len = 0;
  R.fade = Math.round(0.01 * E.sr); R.fadeIn = 0;
  const t = now() + 0.05;
  R.Tanchor = 0; R.ctxAnchor = t; R.fromFrame = Math.round(t * E.sr); R.untilFrame = Infinity;
  R.state = 'rec';
  for (const ch of chsOf()) { const v = E.voices[ch]; if (v) v.seg = addSeg({ ch, fileId: v.fileId, tStart: 0, off: posOf(v, t), tEnd: null, ...v.extra }); }
  R.tpLog = []; TP.onRecStart();
  if (S.settings.video.on && S.settings.camId !== 'none' && V.codec) {
    if (CAM.ok) V.start(R.session); else toast('Webcam non attiva: registro solo l\'audio');
  }
  await DB.put('sessions', id, R.session);
  R.autosave = setInterval(persistSession, 3000);
  renderAll();
}
async function enterHold(mode) {
  // durante il pre-ascolto di un re-take si può tornare ancora più indietro (prima il tasto veniva ignorato)
  if (R.state === 'preroll') {
    clearTimeout(R.prerollTimer); for (const x of R.preSrcs || []) try { x.stop(); } catch (e) {} R.preSrcs = [];
    // la musica ripartita per il pre-ascolto si ferma; i suoi pezzi originali tornano «aperti» così riprendono dal nuovo punto
    const Tq = R.Tanchor;
    for (const ch of chsOf()) {
      const v = E.voices[ch]; if (!v) continue; v.manual = true; try { v.src.stop(); } catch (e) {} E.voices[ch] = null;
      const cont = v.seg; if (!cont) continue;
      R.session.segs = R.session.segs.filter(x => x !== cont);
      const orig = R.session.segs.find(x => x.ch === ch && x.fileId === cont.fileId && x.tEnd != null && Math.abs(x.tEnd - Tq) < 1e-3);
      if (orig) orig.byHold = true;
    }
    R.state = 'rec';
  }
  if (R.state !== 'rec') return;
  const t = now();
  R.untilFrame = Math.round(t * E.sr);
  const T = tlAt(t);
  for (const ch of chsOf()) if (E.voices[ch]) stopVoice(ch, t, true);
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
  for (const c of CATS()) {
    if (c.type === 'list') { const lc = last(c.id); E.next[c.id] = lc ? lc.capIdx + 1 : ((R.session.next0 || {})[c.id] || 0); }
    if (c.type !== 'loop') continue;
    const L = loopSt(c.id), ob = openOf(c.id), lb = last(c.id);
    const hs = open.find(s2 => s2.held && s2.held[c.id]), held = hs ? hs.held[c.id] : null;
    if (ob) Object.assign(L, { idx: ob.bgIdx, pos: ob.off + (Tq - ob.tStart), status: 'playing' });
    else if (held) Object.assign(L, { idx: held.idx, pos: held.pos, status: 'held' });
    else if (lb) Object.assign(L, { idx: lb.bgIdx, pos: lb.off + (lb.tEnd - lb.tStart), status: 'paused' });
    else if (L.status === 'playing' || L.status === 'held') L.status = 'paused';
  }

  // Pre-ascolto: voce e musica degli ultimi secondi, poi si riparte
  R.preSrcs = [];
  const P = Math.min(S.settings.preroll, Tq);
  const base = now() + 0.12, end = base + P, w0 = Tq - P;
  R.Tanchor = Tq; R.ctxAnchor = end; R.fromFrame = Math.round(end * E.sr); R.untilFrame = Infinity; R.fadeIn = 0;
  R.state = 'preroll';
  TP.onResume(Tq, w0);
  if (P > 0) {
    toast(`Riascolti gli ultimi ${Math.round(P)} s, poi si registra · ${keyLabel('retake')} per tornare ancora più indietro`);
    const pre = await readVoice(R.session, nS - Math.round(P * E.sr), nS, true);
    const b = E.ctx.createBuffer(1, pre.length, E.sr); b.copyToChannel(pre, 0);
    const s = E.ctx.createBufferSource(); s.buffer = b; s.connect(E.bus.mon); s.start(base); R.preSrcs.push(s);
    for (const sg of kept) {
      if (open.includes(sg) || sg.tEnd <= w0) continue;
      const buf = E.buffers.get(sg.fileId); if (!buf) continue;
      const a = Math.max(sg.tStart, w0);
      const src = E.ctx.createBufferSource(); src.buffer = buf; src.connect(E.bus[sg.ch]);
      src.start(base + (a - w0), sg.off + (a - sg.tStart)); src.stop(base + (sg.tEnd - w0)); R.preSrcs.push(src);
    }
  }
  for (const sg of open) {
    const a = Math.max(sg.tStart, w0);
    const extra = {}; for (const k of ['bgIdx', 'capIdx', 'held']) if (k in sg) extra[k] = sg[k];
    const v = startVoice(sg.ch, sg.fileId, sg.off + (a - sg.tStart), base + (a - w0), extra, true);
    if (v) v.seg = addSeg({ ch: sg.ch, fileId: sg.fileId, tStart: Tq, off: sg.off + (Tq - sg.tStart), tEnd: null, cont: true, ...extra });
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
    for (const ch of chsOf()) if (E.voices[ch]) stopVoice(ch, t);
    R.state = 'hold'; await waitFlush(Math.round(tlAt(t) * E.sr));
  } else if (R.state !== 'hold') return;
  await V.stop();
  for (const s of R.session.segs) { if (s.tEnd == null || s.tEnd > R.len / E.sr) s.tEnd = R.len / E.sr; delete s.byHold; }
  clearInterval(R.autosave);
  R.session.status = 'done';
  await persistSession();
  const sid = R.session.id;
  R.session = null; R.state = 'idle'; R.fromFrame = Infinity;
  E.loops = {}; E.next = {}; // la prossima puntata riparte da capo
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
/* ------------------------------------------------------------- Montaggio: tempo finale e mappa della voce
 * La timeline finale (dopo i tagli) è quella su cui stanno musica e capitoli.
 * Voce e video restano registrati come sono: vmap dice quale pezzo di registrazione va in quale punto. */
const sessDur = (sess) => sess.outLen ?? sess.len / sess.sr;
const sessLenS = (sess) => Math.round(sessDur(sess) * sess.sr);
const vmapOf = (sess) => sess.vmap && sess.vmap.length ? sess.vmap : [{ o: 0, s: 0, d: sess.len / sess.sr }];
const isIdentity = (sess) => (!sess.vmap || (sess.vmap.length === 1 && sess.vmap[0].o === 0 && sess.vmap[0].s === 0 && Math.abs(sess.vmap[0].d - sess.len / sess.sr) < 1e-3));
function outToSrc(sess, t) { for (const p of vmapOf(sess)) if (t >= p.o - 1e-6 && t < p.o + p.d) return p.s + (t - p.o); return null; }
function srcToOut(sess, t) { for (const p of vmapOf(sess)) if (t >= p.s - 1e-6 && t < p.s + p.d) return p.o + (t - p.s); return null; }
async function readVoiceOut(sess, oa, ob, cache) {
  const sr = sess.sr, lat = Math.round((sess.latency || 0) * sr);
  const mutes = sess.vmutes || [];
  let out;
  if (isIdentity(sess)) out = await readVoice(sess, oa + lat, ob + lat, false, cache);
  else {
    out = new Float32Array(Math.max(0, ob - oa)); const F = Math.round(0.006 * sr), map = vmapOf(sess);
    for (let i = 0; i < map.length; i++) {
      const p = map[i], po = Math.round(p.o * sr), ps = Math.round(p.s * sr), pd = Math.round(p.d * sr);
      const x0 = Math.max(oa, po), x1 = Math.min(ob, po + pd); if (x1 <= x0) continue;
      const v = await readVoice(sess, ps + (x0 - po) + lat, ps + (x1 - po) + lat, false, cache);
      const prevJoin = i > 0 && Math.abs((map[i - 1].s + map[i - 1].d) - p.s) > 1e-3, nextJoin = i < map.length - 1 && Math.abs((p.s + p.d) - map[i + 1].s) > 1e-3;
      for (let n = 0; n < v.length; n++) {
        const k = x0 + n - po; let e = 1;
        if (prevJoin && k < F) e = k / F; if (nextJoin && pd - k < F) e = Math.min(e, (pd - k) / F);
        out[x0 - oa + n] = v[n] * e;
      }
    }
  }
  if (mutes.length) {
    const F = Math.round(0.01 * sr);
    for (const m of mutes) {
      const ma = Math.round(m.a * sr), mb = Math.round(m.b * sr); if (mb <= oa || ma >= ob) continue;
      for (let x = Math.max(oa, ma - F); x < Math.min(ob, mb + F); x++) { const e = x < ma ? (ma - x) / F : x >= mb ? (x - mb) / F : 0; out[x - oa] *= Math.min(1, e); }
    }
  }
  return out;
}
/* Operazioni di montaggio (tempo finale, in secondi) */
const EDIT = {
  snap(sess) { return JSON.stringify({ segs: sess.segs, vmap: sess.vmap || null, vmutes: sess.vmutes || [], chapters: sess.chapters || null, outLen: sess.outLen ?? null }); },
  restore(sess, j) { const o = JSON.parse(j); sess.segs = o.segs; sess.vmap = o.vmap; sess.vmutes = o.vmutes; sess.chapters = o.chapters; if (o.outLen == null) delete sess.outLen; else sess.outLen = o.outLen; },
  cut(sess, a, b) {
    const D = sessDur(sess); a = Math.max(0, a); b = Math.min(D, b); const L = b - a; if (L <= 0.01) return;
    const map = []; for (const p of vmapOf(sess)) {
      const e = p.o + p.d;
      if (p.o < a) map.push({ o: p.o, s: p.s, d: Math.min(e, a) - p.o });
      if (e > b) { const st = Math.max(p.o, b); map.push({ o: st - L, s: p.s + (st - p.o), d: e - st }); }
    }
    sess.vmap = map.filter(p => p.d > 1e-4);
    const segs = []; for (const g of sess.segs) {
      const gE = g.tEnd ?? D;
      if (gE <= a) { segs.push(g); continue; }
      if (g.tStart >= b) { segs.push({ ...g, tStart: g.tStart - L, tEnd: gE - L }); continue; }
      if (g.tStart < a) segs.push({ ...g, tEnd: a, fout: 0 });
      if (gE > b) segs.push({ ...g, tStart: a, off: g.off + (b - g.tStart), tEnd: gE - L, fin: 0, cont: true });
    }
    sess.segs = segs;
    const mutes = []; for (const m of sess.vmutes || []) { if (m.b <= a) mutes.push(m); else if (m.a >= b) mutes.push({ a: m.a - L, b: m.b - L }); else { const na = Math.min(m.a, a), nb = m.b > b ? m.b - L : a; if (nb > na) mutes.push({ a: na, b: nb }); } }
    sess.vmutes = mutes;
    if (sess.chapters) { const seen = new Set(); sess.chapters = sess.chapters.map(c => ({ ...c, t: c.t >= b ? Math.round(c.t - L) : c.t > a ? Math.floor(a) : c.t })).filter(c => { if (seen.has(c.t)) return false; seen.add(c.t); return true; }); }
    sess.outLen = D - L;
  },
  mute(sess, a, b) {
    const m = [...(sess.vmutes || []), { a, b }].sort((x, y) => x.a - y.a), out = [];
    for (const x of m) { const l = out[out.length - 1]; if (l && x.a <= l.b) l.b = Math.max(l.b, x.b); else out.push({ ...x }); }
    sess.vmutes = out;
  },
  unmute(sess, a, b) {
    const out = []; for (const m of sess.vmutes || []) { if (m.b <= a || m.a >= b) out.push(m); else { if (m.a < a) out.push({ a: m.a, b: a }); if (m.b > b) out.push({ a: b, b: m.b }); } }
    sess.vmutes = out;
  },
  split(sess, g, t) {
    if (t <= g.tStart + 0.05 || t >= g.tEnd - 0.05) return null;
    const right = { ...g, tStart: t, off: g.off + (t - g.tStart), fin: 0, cont: true }; g.tEnd = t; g.fout = 0;
    sess.segs.splice(sess.segs.indexOf(g) + 1, 0, right); return right;
  }
};

async function prepSession(sess, decodeSr) {
  const total = sessLenS(sess), srT = sess.sr;
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
  const F = 0.015, tS = base + (s.S - a) / srT, tE = base + (s.E - a) / srT, w = Math.max(0, when);
  const g = dbl(s.gain || 0), fin = Math.max(s.cPrev ? 0 : F, s.fin || 0), fout = Math.max(s.cNext ? 0 : F, s.fout || 0);
  const val = (t) => g * Math.max(0, Math.min(1, fin > 0 ? (t - tS) / fin : 1, fout > 0 ? (tE - t) / fout : 1));
  env.gain.setValueAtTime(val(w), w);
  if (fin > 0 && tS + fin > w) env.gain.linearRampToValueAtTime(val(tS + fin), tS + fin);
  if (fout > 0) { if (tE - fout > w) env.gain.setValueAtTime(val(tE - fout), tE - fout); env.gain.linearRampToValueAtTime(0, tE); }
  src.start(w, offset, dur); return src;
}
async function renderMix(sess, mix, sink, onProg, phase, outSr) {
  const prep = await prepSession(sess, sess.sr);
  const sr = sess.sr, total = sessLenS(sess), W = sr * 10, PAD = sr, cache = new Map(); outSr = outSr || sr;
  const os = (x) => Math.round(x / sr * outSr);
  for (let a = 0; a < total; a += W) {
    const s0 = Math.max(0, a - PAD), b = Math.min(total, a + W), len = b - s0;
    const o0 = os(s0), oa = os(a), ob = os(b);
    const oc = new OfflineAudioContext(2, ob - o0, outSr);
    const st = {}; for (const ch of allOf(catsOf(sess))) { st[ch] = new Strip(oc, ch, oc.destination); st[ch].set(mix[ch] || fullP(ch, null, catsOf(sess)), false); }
    const v = await readVoiceOut(sess, s0, b, cache);
    const vb = oc.createBuffer(1, len, sr); vb.copyToChannel(v, 0);
    const vs = oc.createBufferSource(); vs.buffer = vb; vs.connect(st.voice.input); vs.start(0);
    for (const s of prep.segs) if (st[s.ch]) schedSeg(oc, prep, s, s0, b, st[s.ch].input, 0);
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
    this.shown = false; this.err = null; this.fails = 0;
    this.mkDec(gen);
    let cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h, hardwareAcceleration: 'prefer-software' };
    try { const sup = await VideoDecoder.isConfigSupported(cfg); if (!sup.supported) { cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h }; } } catch (e) { cfg = { codec: this.v.codec, codedWidth: this.v.w, codedHeight: this.v.h }; }
    if (gen !== this.gen) return;
    this.cfg = cfg; this.dec.configure(cfg);
    this.next = si; this.started = false; this.pump(gen);
  }
  /* Se un pezzo di video è rovinato o manca, non si ferma tutto: si riparte dal fotogramma chiave successivo */
  mkDec(gen) {
    this.dec = new VideoDecoder({
      output: (f) => { if (gen !== this.gen) { f.close(); return; } this.q.push(f); },
      error: (e) => {
        console.warn('decoder', e); if (gen !== this.gen) return;
        if (++this.fails > 30) { this.err = e; this.msg('Il browser non riesce a leggere questo video (' + e.message + ')'); return; }
        try { this.dec.close(); } catch (e2) {}
        this.mkDec(gen); if (this.cfg) this.dec.configure(this.cfg); this.started = false; this.busy = false; this.pump(gen);
      }
    });
  }
  async pump(gen) {
    if (this.busy || !this.dec) return; this.busy = true;
    try {
      while (gen === this.gen && this.next < this.idx.length && this.q.length < 24 && this.dec.decodeQueueSize < 12) {
        const g = await DB.get('chunks', vkey(this.sess.id, this.idx[this.next].i)); this.next++;
        if (!g) { this.started = false; continue; } if (gen !== this.gen) continue;
        for (const c of g.ch) { if (this.dec.state !== 'configured') break; if (!this.started) { if (!c.key) continue; this.started = true; } this.dec.decode(new EncodedVideoChunk({ type: c.key ? 'key' : 'delta', timestamp: c.ts, data: c.d })); }
      }
    } catch (e) { console.warn(e); }
    this.busy = false;
  }
  show(outT) { const src = outToSrc(this.sess, Math.max(0, Math.min(sessDur(this.sess) - 0.01, outT))); this.lastOut = outT; this.curSrc = src ?? 0; this.start(this.curSrc); }
  draw(outPos) {
    if (this.err) return;
    if (this.lastOut != null) { const src = outToSrc(this.sess, outPos); if (src != null && Math.abs(src - (this.curSrc + (outPos - this.lastOut))) > 0.25) { this.show(outPos); return; } }
    if (this.lastOut != null) { this.curSrc += outPos - this.lastOut; this.lastOut = outPos; }
    const pos = this.curSrc ?? outPos;
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
    this.sess = sess; this.onTick = onTick; this.total = sessDur(sess); this.pos = 0; this.playing = false; this.gen = 0;
    this.out = E.ctx.createGain(); this.out.connect(E.ctx.destination);
    this.st = {}; for (const ch of allOf(catsOf(sess))) { this.st[ch] = new Strip(E.ctx, ch, this.out); this.st[ch].set(sess.mix[ch] || fullP(ch, null, catsOf(sess)), false); }
    this.srcs = []; this.cache = new Map();
    this.vid = null;
  }
  attachVideo(canvas) { if (this.sess.video && this.sess.video.nGroups && typeof VideoDecoder !== 'undefined') { this.vid = new VidPlayer(this.sess, canvas); this.vid.show(0); } }
  async play(from) {
    this.stop(); const gen = ++this.gen;
    if (!this.prep) this.prep = await prepSession(this.sess, E.sr);
    if (gen !== this.gen) return;
    from = Math.max(0, Math.min(this.total - 0.1, from));
    const c = E.ctx; this.t0 = c.currentTime + 0.1; this.from = from; this.playing = true;
    const a = Math.round(from * this.prep.srT);
    for (const s of this.prep.segs) { if (!this.st[s.ch]) continue; const src = schedSeg(c, this.prep, s, a, sessLenS(this.sess), this.st[s.ch].input, this.t0); if (src) this.srcs.push(src); }
    this.vNext = a; this.pump(gen); this.timer = setInterval(() => this.pump(gen), 300);
    if (this.vid) this.vid.show(from);
  }
  async pump(gen) {
    if (this.busy || !this.playing || gen !== this.gen) return; this.busy = true;
    const srT = this.prep.srT, a0 = Math.round(this.from * srT), ahead = Math.round((this.position() + 4) * srT);
    const LS = sessLenS(this.sess);
    while (this.playing && gen === this.gen && this.vNext < Math.min(ahead, LS)) {
      const b = Math.min(LS, this.vNext + srT * 2);
      const v = await readVoiceOut(this.sess, this.vNext, b, this.cache);
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
  seekVideo(t) { if (this.vid) this.vid.show(t); }
  invalidate() { this.prep = null; this.total = sessDur(this.sess); }
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
    if (isFinite(lufs)) gain = Math.pow(10, ((opts.target ?? -16) - lufs) / 20);
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
uniform vec4 u_mask; uniform vec4 u_view; uniform float u_key; uniform vec2 u_kc; uniform float u_tol; uniform float u_kmode; uniform vec3 u_krgb;
float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
vec2 cbcr(vec3 c){ return vec2(-0.1687*c.r - 0.3313*c.g + 0.5*c.b, 0.5*c.r - 0.4187*c.g - 0.0813*c.b); }
float keyA(vec3 c){ if (u_key < 0.5) return 1.0; if (u_kmode > 0.5) return smoothstep(u_tol * 2.2, u_tol * 2.2 + 0.1, distance(c, u_krgb)); return smoothstep(u_tol, u_tol + 0.06, distance(cbcr(c), u_kc)); }
uniform sampler2D u_mtex; uniform float u_usemask;
float alphaAt(vec2 uv){ return u_usemask > 0.5 ? texture2D(u_mtex, uv).r : 1.0; }
float lum(vec2 uv){ vec3 c = texture2D(u_tex, uv).rgb; return dot(c, vec3(0.299,0.587,0.114)) * alphaAt(uv); }
vec2 toFrame(vec2 uv){ return u_view.xy + vec2(uv.x, 1.0 - uv.y) * (u_view.zw - u_view.xy); }
float inMask(vec2 f){ return step(u_mask.x, f.x) * step(f.x, u_mask.z) * step(u_mask.y, f.y) * step(f.y, u_mask.w); }
vec2 toCam(vec2 f){ vec2 c = vec2(u_mirror > 0.5 ? 1.0 - f.x : f.x, 1.0 - f.y); return c * u_scale + u_off; }
float edge(vec2 uv){
  vec2 d = u_px * 1.5;
  float tl=lum(uv+d*vec2(-1.,1.)), t=lum(uv+d*vec2(0.,1.)), tr=lum(uv+d*vec2(1.,1.));
  float l=lum(uv+d*vec2(-1.,0.)), r=lum(uv+d*vec2(1.,0.));
  float bl=lum(uv+d*vec2(-1.,-1.)), b=lum(uv+d*vec2(0.,-1.)), br=lum(uv+d*vec2(1.,-1.));
  float gx = -tl-2.*l-bl+tr+2.*r+br; float gy = -bl-2.*b-br+tl+2.*t+tr;
  return length(vec2(gx,gy));
}
uniform float u_dbg;
void main(){
  if (u_dbg > 0.5) { vec2 fd = toFrame(v_uv); float ad = u_has > 0.5 ? alphaAt(toCam(fd)) : 0.0; gl_FragColor = vec4(mix(vec3(0.5,0.0,0.15), vec3(1.0), ad) * inMask(fd), 1.0); return; }
  if (u_fx < 0.5 && u_has > 0.5) {
    vec2 f0 = toFrame(v_uv); vec2 cu0 = toCam(f0); vec3 c0 = texture2D(u_tex, cu0).rgb; float im0 = inMask(f0);
    float a0 = im0 > 0.5 ? alphaAt(cu0) : 1.0;
    gl_FragColor = vec4(c0 * a0 * im0, a0); return;
  }
  vec2 uv = v_uv;
  float tt = floor(u_time*12.0);
  float band = floor(uv.y*36.0);
  float rb = rnd(vec2(band, tt));
  float shift = rb > 1.0 - 0.18*u_gl ? (rnd(vec2(tt, band)) - 0.5) * 0.09 * u_gl : 0.0;
  float jolt = step(0.965, rnd(vec2(tt, 3.7))) * u_gl;
  uv.x += shift + jolt * (rnd(vec2(band*0.31, tt)) - 0.5) * 0.05;
  vec2 f = toFrame(uv);
  vec2 cuv = toCam(f);
  vec3 col = vec3(0.0);
  if (u_has > 0.5) {
    float k = 0.12;
    float m  = smoothstep(u_thr, u_thr + k, edge(cuv));
    float mr = smoothstep(u_thr, u_thr + k, edge(cuv + vec2(0.005*u_gl, 0.0)));
    float mb = smoothstep(u_thr, u_thr + k, edge(cuv - vec2(0.005*u_gl, 0.0)));
    col = u_col * m;
    col = max(col, vec3(1.0, 0.15, 0.3) * mr * 0.55 * u_gl);
    col = max(col, vec3(0.2, 0.9, 1.0) * mb * 0.45 * u_gl);
    float im = inMask(f);
    col *= im;
    float aa = im > 0.5 ? max(alphaAt(cuv), m) : 1.0;
    col *= 0.86 + 0.14 * sin(v_uv.y * u_res.y * 3.14159);
    col += (rnd(v_uv * (u_time + 1.0)) - 0.5) * 0.07 * u_gl * aa;
    gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(aa)), aa); return;
  } else {
    float n = rnd(floor(v_uv * vec2(160.0, 90.0)) + tt);
    col = vec3(n * 0.12) + u_col * step(0.985, rnd(vec2(band, tt))) * 0.5;
  }
  col *= 0.86 + 0.14 * sin(v_uv.y * u_res.y * 3.14159);
  col += (rnd(v_uv * (u_time + 1.0)) - 0.5) * 0.07 * u_gl;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
/* Differenza tra un pixel e la scena vuota: colore (poco sensibile alla luce) + luminosità relativa */
function vbgDiff(cr, cg, cb, br, bg, bb) {
  const Lc = cr * 0.299 + cg * 0.587 + cb * 0.114, Lb = br * 0.299 + bg * 0.587 + bb * 0.114;
  const sc = cr + cg + cb + 3, sb = br + bg + bb + 3;
  const x = cr / sc - br / sb, y = cg / sc - bg / sb, z = cb / sc - bb / sb;
  const lw = Math.min(1, Math.max(Lc, Lb) / 60);
  return Math.max(Math.sqrt(x * x + y * y + z * z) * 2.2 * lw, Math.abs(Lc - Lb) / (Lb + 20) * 0.45);
}
const MFRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_tex; uniform sampler2D u_bgt; uniform vec2 u_px;
uniform float u_key; uniform float u_kmode; uniform float u_tol; uniform vec2 u_kc; uniform vec3 u_krgb; uniform float u_vbg; uniform float u_vtol; uniform vec3 u_gain; uniform sampler2D u_seg; uniform float u_segon;
float vdiff(vec3 c, vec3 b){
  float Lc = dot(c, vec3(0.299,0.587,0.114)), Lb = dot(b, vec3(0.299,0.587,0.114));
  vec3 nc = c / (c.r + c.g + c.b + 0.012), nb = b / (b.r + b.g + b.b + 0.012);
  float lw = min(1.0, max(Lc, Lb) / 0.235);
  return max(length(nc - nb) * 2.2 * lw, abs(Lc - Lb) / (Lb + 0.078) * 0.45);
}
vec2 cbcr(vec3 c){ return vec2(-0.1687*c.r - 0.3313*c.g + 0.5*c.b, 0.5*c.r - 0.4187*c.g - 0.0813*c.b); }
void main(){
  float a = 1.0;
  if (u_key > 0.5) {
    vec3 c = texture2D(u_tex, v_uv).rgb;
    if (u_kmode > 0.5) a *= smoothstep(u_tol * 2.2, u_tol * 2.2 + 0.1, distance(c, u_krgb));
    else a *= smoothstep(u_tol, u_tol + 0.06, distance(cbcr(c), u_kc));
  }
  if (u_vbg > 0.5) {
    vec3 sc = vec3(0.0), sb = vec3(0.0);
    for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
      vec2 o = vec2(float(i), float(j)) * u_px * 3.0;
      sc += texture2D(u_tex, v_uv + o).rgb; sb += texture2D(u_bgt, v_uv + o).rgb;
    }
    float acc = vdiff(sc / 25.0, min(sb / 25.0 * u_gain, vec3(1.0)));
    vec2 e = step(vec2(0.004), v_uv) * step(v_uv, vec2(0.996)); acc *= e.x * e.y;
    a *= smoothstep(u_vtol, u_vtol + 0.07, acc);
  }
  if (u_segon > 0.5) a *= smoothstep(0.35, 0.65, texture2D(u_seg, v_uv).r);
  gl_FragColor = vec4(a, a, a, 1.0);
}`;
const VERT = `attribute vec2 p; varying vec2 v_uv; void main(){ v_uv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`;
/* Inquadratura: area tenuta (mask), eventuale ingrandimento (view) e colore del green screen */
function frameGeom() {
  const vs = S.settings.video, ed = CAM.edit;
  const m = (vs.mask && !ed) ? vs.mask : [0, 0, 1, 1];
  let view = [0, 0, 1, 1];
  if (vs.zoom && vs.mask && !ed) {
    const cx = (m[0] + m[2]) / 2, cy = (m[1] + m[3]) / 2, k = Math.min(1 / (m[2] - m[0]), 1 / (m[3] - m[1]));
    view = [cx - 0.5 / k, cy - 0.5 / k, cx + 0.5 / k, cy + 0.5 / k];
  }
  const ai = vs.vmode === 'ai', on = !!vs.vbg && ed !== 'pick' && ed !== 'scene';
  return { mask: m, view, key: !!vs.key && ed !== 'pick', vbg: on && !ai && !!CAM.bgCanvas, seg: on && ai && SEG.ready };
}
/* Scontorno delle persone con un modello di intelligenza artificiale (MediaPipe Selfie Segmentation, in locale nel browser) */
const SEG = {
  ready: false, busy: false, loading: null, stamp: 0, err: null,
  load() {
    if (this.loading) return this.loading;
    this.loading = (async () => {
      if (!window.SelfieSegmentation) await new Promise((res, rej) => { const sc = document.createElement('script'); sc.src = 'lib/mp/selfie_segmentation.js'; sc.onload = res; sc.onerror = () => rej(new Error('file del modello non trovato')); document.head.append(sc); });
      const m = new window.SelfieSegmentation({ locateFile: (f) => 'lib/mp/' + f });
      m.setOptions({ modelSelection: 1, selfieMode: false });
      m.onResults((r) => this.take(r.segmentationMask));
      await m.initialize();
      this.m = m; this.canvas = document.createElement('canvas'); this.canvas.width = 256; this.canvas.height = 144; this.g = this.canvas.getContext('2d', { willReadFrequently: true });
      this.ready = true; this.err = null;
    })().catch((e) => { this.loading = null; this.err = e; throw e; });
    return this.loading;
  },
  take(mask) {
    if (!mask) return;
    const g = this.g; g.clearRect(0, 0, 256, 144); g.drawImage(mask, 0, 0, 256, 144);
    const im = g.getImageData(0, 0, 256, 144), d = im.data; let useA = false;
    for (let j = 3; j < d.length; j += 4 * 37) if (d[j] < 250) { useA = true; break; }
    const P = this.prev || (this.prev = new Float32Array(256 * 144));
    for (let j = 0, i = 0; j < d.length; j += 4, i++) { const v = (useA ? d[j + 3] : d[j]) * 0.75 + P[i] * 0.25; P[i] = v; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = 255; }
    g.putImageData(im, 0, 0); this.stamp++; CAM.segUpload();
  },
  tick(video) {
    if (!this.ready || this.busy || !video.videoWidth) return;
    this.busy = true; this.m.send({ image: video }).catch((e) => console.warn(e)).finally(() => { this.busy = false; });
  }
};

const hexRgb = (c) => [parseInt(c.slice(1, 3), 16) / 255, parseInt(c.slice(3, 5), 16) / 255, parseInt(c.slice(5, 7), 16) / 255];
const isNeutral = ([r, g, b]) => Math.max(r, g, b) - Math.min(r, g, b) < 0.16;
const cbcrOf = ([r, g, b]) => [-0.1687 * r - 0.3313 * g + 0.5 * b, 0.5 * r - 0.4187 * g - 0.0813 * b];
const hash2 = (a, b) => { let h = (a * 374761393 + b * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const C2D = {
  setup(canvas) {
    this.cv = canvas; this.g = canvas.getContext('2d');
    this.sw = 480; this.sh = 270;
    this.small = document.createElement('canvas'); this.small.width = this.sw; this.small.height = this.sh; this.sg = this.small.getContext('2d', { willReadFrequently: true });
    this.edge = document.createElement('canvas'); this.edge.width = this.sw; this.edge.height = this.sh; this.eg = this.edge.getContext('2d');
    this.img = this.eg.createImageData(this.sw, this.sh); this.lum = new Float32Array(this.sw * this.sh);
  },
  crop(video, ca) { const vw = video.videoWidth || video.width, vh = video.videoHeight || video.height, va = vw / vh; return va > ca ? [(vw - vh * ca) / 2, 0, vh * ca, vh] : [0, (vh - vw / ca) / 2, vw, vw / ca]; },
  /* Disegna nel canvas (dw×dh) la porzione "view" dell'inquadratura, a specchio se serve */
  drawView(ctx, video, dw, dh, view, mirror) {
    const [cx, cy, cw, ch] = this.crop(video, 16 / 9);
    const fx0 = mirror ? 1 - view[2] : view[0], fx1 = mirror ? 1 - view[0] : view[2];
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, dw, dh);
    ctx.save(); if (mirror) { ctx.translate(dw, 0); ctx.scale(-1, 1); }
    ctx.drawImage(video, cx + fx0 * cw, cy + view[1] * ch, (fx1 - fx0) * cw, (view[3] - view[1]) * ch, 0, 0, dw, dh);
    ctx.restore();
  },
  maskOut(ctx, dw, dh, view, mask) {
    const X = (f) => (f - view[0]) / (view[2] - view[0]) * dw, Y = (f) => (f - view[1]) / (view[3] - view[1]) * dh;
    const x0 = X(mask[0]), x1 = X(mask[2]), y0 = Y(mask[1]), y1 = Y(mask[3]);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, dw, Math.max(0, y0)); ctx.fillRect(0, y1, dw, dh - y1); ctx.fillRect(0, y0, Math.max(0, x0), y1 - y0); ctx.fillRect(x1, y0, dw - x1, y1 - y0);
  },
  /* Maschera "cosa resta" (1 = tieni, 0 = togli): green screen a colore e/o scena vuota registrata */
  alphaMask(d, fg, vs) {
    const n = this.sw * this.sh; if (!this.A || this.A.length !== n) { this.A = new Float32Array(n); this.D = new Float32Array(n); }
    const A = this.A; A.fill(1);
    if (fg.key) {
      const krgb = hexRgb(vs.kc || '#33b34d'), neutral = isNeutral(krgb), kk = cbcrOf(krgb), tol = vs.tol ?? 0.09, nt = tol * 2.2;
      for (let i = 0, j = 0; i < n; i++, j += 4) {
        const r = d[j] / 255, gg = d[j + 1] / 255, b = d[j + 2] / 255; let a;
        if (neutral) { const dr = r - krgb[0], dg = gg - krgb[1], db = b - krgb[2]; const dd = Math.sqrt(dr * dr + dg * dg + db * db); a = dd <= nt ? 0 : dd >= nt + 0.1 ? 1 : (dd - nt) / 0.1; }
        else { const cbv = -0.1687 * r - 0.3313 * gg + 0.5 * b - kk[0], crv = 0.5 * r - 0.4187 * gg - 0.0813 * b - kk[1]; const dd = Math.sqrt(cbv * cbv + crv * crv); a = dd <= tol ? 0 : dd >= tol + 0.06 ? 1 : (dd - tol) / 0.06; }
        A[i] = a;
      }
    }
    if (fg.seg && SEG.canvas) {
      const sw = this.sw, sh = this.sh;
      if (!this.segc) { this.segc = document.createElement('canvas'); this.segc.width = sw; this.segc.height = sh; this.segg = this.segc.getContext('2d', { willReadFrequently: true }); }
      const sk = SEG.stamp + '|' + fg.view.join(',') + '|' + vs.mirror;
      if (this.segKey !== sk) { this.drawView(this.segg, SEG.canvas, sw, sh, fg.view, vs.mirror); this.segData = this.segg.getImageData(0, 0, sw, sh).data; this.segKey = sk; }
      const Sd = this.segData; for (let i = 0, j = 0; i < n; i++, j += 4) { const v = Sd[j] / 255; A[i] *= v <= 0.35 ? 0 : v >= 0.65 ? 1 : (v - 0.35) / 0.3; }
    }
    if (fg.vbg) {
      const sw = this.sw, sh = this.sh, key = fg.view.join(',') + '|' + vs.mirror + '|' + CAM.bgStamp;
      if (this.bgKey !== key) { const c = document.createElement('canvas'); c.width = sw; c.height = sh; const g2 = c.getContext('2d', { willReadFrequently: true }); this.drawView(g2, CAM.bgCanvas, sw, sh, fg.view, vs.mirror); this.bgData = g2.getImageData(0, 0, sw, sh).data; this.bgKey = key; }
      const D = this.D, vt = vs.vtol ?? 0.15, G = CAM.gain, qw = 120, qh = 68;
      // Confronto su immagini rimpicciolite (quindi sfocate): non scattano rumore, messa a fuoco e piccoli tremolii
      if (!this.qc) { this.qc = document.createElement('canvas'); this.qc.width = qw; this.qc.height = qh; this.qg = this.qc.getContext('2d', { willReadFrequently: true }); this.Dq = new Float32Array(qw * qh); }
      if (this.bqKey !== key) { this.qg.imageSmoothingQuality = 'high'; this.drawView(this.qg, CAM.bgCanvas, qw, qh, fg.view, vs.mirror); this.bq = this.qg.getImageData(0, 0, qw, qh).data.slice(); this.bqKey = key; }
      this.qg.drawImage(this.small, 0, 0, qw, qh); const q = this.qg.getImageData(0, 0, qw, qh).data, Bq = this.bq, Dq = this.Dq;
      for (let i = 0, j = 0; i < Dq.length; i++, j += 4) Dq[i] = vbgDiff(q[j], q[j + 1], q[j + 2], Bq[j] * G[0], Bq[j + 1] * G[1], Bq[j + 2] * G[2]);
      for (let y = 0, i = 0; y < sh; y++) { const fy = Math.min(qh - 1.001, Math.max(0, (y + 0.5) * qh / sh - 0.5)), y0 = fy | 0, ty = fy - y0;
        for (let x = 0; x < sw; x++, i++) { const fx = Math.min(qw - 1.001, Math.max(0, (x + 0.5) * qw / sw - 0.5)), x0 = fx | 0, tx = fx - x0, k = y0 * qw + x0;
          D[i] = (Dq[k] * (1 - tx) + Dq[k + 1] * tx) * (1 - ty) + (Dq[k + qw] * (1 - tx) + Dq[k + qw + 1] * tx) * ty; } }
      if (!this.M || this.M.length !== n) { this.M = new Float32Array(n); this.M2 = new Float32Array(n); }
      const M = this.M, M2 = this.M2; M.fill(0);
      for (let y = 1; y < sh - 1; y++) for (let x = 1; x < sw - 1; x++) {
        const i = y * sw + x; const v = (D[i - sw - 1] + D[i - sw] + D[i - sw + 1] + D[i - 1] + D[i] + D[i + 1] + D[i + sw - 1] + D[i + sw] + D[i + sw + 1]) / 9;
        M[i] = v <= vt ? 0 : v >= vt + 0.07 ? 1 : (v - vt) / 0.07;
      }
      // Pulizia: toglie i puntini isolati (erosione) e poi riallarga la sagoma (dilatazione)
      M2.fill(0);
      for (let y = 1; y < sh - 1; y++) for (let x = 1; x < sw - 1; x++) { const i = y * sw + x; M2[i] = Math.min(M[i], M[i - 1], M[i + 1], M[i - sw], M[i + sw]); }
      for (let y = 1; y < sh - 1; y++) for (let x = 1; x < sw - 1; x++) { const i = y * sw + x; A[i] *= Math.max(M2[i], M2[i - 1], M2[i + 1], M2[i - sw], M2[i + sw], M2[i - sw - 1], M2[i - sw + 1], M2[i + sw - 1], M2[i + sw + 1]); }
      for (let x = 0; x < sw; x++) { A[x] = 0; A[(sh - 1) * sw + x] = 0; } for (let y = 0; y < sh; y++) { A[y * sw] = 0; A[y * sw + sw - 1] = 0; }
    }
    return A;
  },
  render(t, video, has, fresh, vs) {
    const g = this.g, W = this.cv.width, H = this.cv.height, sw = this.sw, sh = this.sh;
    const fg = frameGeom(), keyed = fg.key || fg.vbg || fg.seg;
    if (CAM.dbg && keyed && has) {
      this.drawView(this.sg, video, sw, sh, fg.view, vs.mirror); const A = this.alphaMask(this.sg.getImageData(0, 0, sw, sh).data, fg, vs);
      const o = this.img.data; for (let i = 0, k = 0; i < A.length; i++, k += 4) { o[k] = 128 + 127 * A[i]; o[k + 1] = 255 * A[i]; o[k + 2] = 38 + 217 * A[i]; o[k + 3] = 255; }
      this.eg.putImageData(this.img, 0, 0); this.maskOut(this.eg, sw, sh, fg.view, fg.mask); g.clearRect(0, 0, W, H); g.drawImage(this.edge, 0, 0, W, H); return;
    }
    if (has && vs.fx === false) {
      g.clearRect(0, 0, W, H); this.drawView(g, video, W, H, fg.view, vs.mirror);
      if (keyed) {
        this.drawView(this.sg, video, sw, sh, fg.view, vs.mirror); const A = this.alphaMask(this.sg.getImageData(0, 0, sw, sh).data, fg, vs);
        if (!this.mimg) { this.mc = document.createElement('canvas'); this.mc.width = sw; this.mc.height = sh; this.mg = this.mc.getContext('2d'); this.mimg = this.mg.createImageData(sw, sh); }
        const o = this.mimg.data; for (let i = 0, k = 0; i < A.length; i++, k += 4) { o[k] = o[k + 1] = o[k + 2] = 255; o[k + 3] = A[i] * 255; }
        this.mg.putImageData(this.mimg, 0, 0); g.save(); g.globalCompositeOperation = 'destination-in'; g.imageSmoothingEnabled = true; g.drawImage(this.mc, 0, 0, W, H); g.restore();
      }
      this.maskOut(g, W, H, fg.view, fg.mask); return;
    }
    const c = vs.col, cr = parseInt(c.slice(1, 3), 16), cg = parseInt(c.slice(3, 5), 16), cb = parseInt(c.slice(5, 7), 16);
    const tt = Math.floor(t / 1000 * 12), gl = vs.gl;
    if (has && fresh) {
      this.drawView(this.sg, video, sw, sh, fg.view, vs.mirror);
      const d = this.sg.getImageData(0, 0, sw, sh).data, L = this.lum, o = this.img.data;
      const A = keyed ? this.alphaMask(d, fg, vs) : null;
      for (let i = 0, j = 0; i < L.length; i++, j += 4) L[i] = (d[j] * 0.299 + d[j + 1] * 0.587 + d[j + 2] * 0.114) / 255 * (A ? A[i] : 1);
      const lo = vs.thr * 0.85, hi = lo + 0.14;
      for (let yy = 0; yy < sh; yy++) for (let xx = 0; xx < sw; xx++) {
        const k = (yy * sw + xx) * 4, i = yy * sw + xx;
        if (xx === 0 || yy === 0 || xx === sw - 1 || yy === sh - 1) { o[k] = o[k + 1] = o[k + 2] = 0; o[k + 3] = A ? A[i] * 255 : 255; continue; }
        const tl = L[i - sw - 1], tp = L[i - sw], tr = L[i - sw + 1], l = L[i - 1], r = L[i + 1], bl = L[i + sw - 1], bt = L[i + sw], br = L[i + sw + 1];
        const gx = -tl - 2 * l - bl + tr + 2 * r + br, gy = -bl - 2 * bt - br + tl + 2 * tp + tr;
        let m = (Math.sqrt(gx * gx + gy * gy) - lo) / (hi - lo); m = m < 0 ? 0 : m > 1 ? 1 : m;
        const a = A ? Math.max(A[i], m) : 1;
        o[k] = a > 0 ? cr * m / a : 0; o[k + 1] = a > 0 ? cg * m / a : 0; o[k + 2] = a > 0 ? cb * m / a : 0; o[k + 3] = a * 255;
      }
      this.eg.putImageData(this.img, 0, 0);
      this.maskOut(this.eg, sw, sh, fg.view, fg.mask);
    } else if (!has) {
      const o = this.img.data; for (let k = 0; k < o.length; k += 4) { const n = Math.random() * 30; o[k] = o[k + 1] = o[k + 2] = n; o[k + 3] = 255; }
      this.eg.putImageData(this.img, 0, 0);
    }
    g.clearRect(0, 0, W, H);
    g.imageSmoothingEnabled = true;
    const bands = 36, bh = H / bands, sbh = sh / bands, jolt = hash2(tt, 37) > 0.965 ? gl : 0;
    for (let b = 0; b < bands; b++) {
      const rb = hash2(b, tt); let shift = rb > 1 - 0.18 * gl ? (hash2(tt, b + 99) - 0.5) * 0.09 * gl * W : 0;
      shift += jolt * (hash2(b * 3, tt) - 0.5) * 0.05 * W;
      g.drawImage(this.edge, 0, b * sbh, sw, sbh, shift, b * bh, W, bh + 1);
    }
    g.save(); g.globalCompositeOperation = 'source-atop';
    if (gl > 0.01) { g.globalAlpha = 0.07 * gl; g.fillStyle = '#fff'; for (let k = 0; k < 40; k++) g.fillRect(Math.random() * W, Math.random() * H, 2, 2); g.globalAlpha = 1; }
    g.fillStyle = 'rgba(0,0,0,0.14)'; for (let yy = 0; yy < H; yy += 4) g.fillRect(0, yy, W, 1);
    g.restore();
  }
};
const CAM = {
  stream: null, video: null, canvas: null, gl: null, prog: null, tex: null, u: {}, ok: false, err: null, lost: false, chosen: '', fresh: false, rvfc: false, camFrames: 0, soft: false, edit: null,
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
    for (const n of ['u_tex', 'u_px', 'u_scale', 'u_off', 'u_res', 'u_time', 'u_thr', 'u_gl', 'u_mirror', 'u_has', 'u_col', 'u_fx', 'u_mask', 'u_view', 'u_mtex', 'u_usemask', 'u_dbg']) this.u[n] = gl.getUniformLocation(p, n);
    gl.uniform1i(this.u.u_tex, 0); gl.uniform1i(this.u.u_mtex, 1);
    // Secondo passaggio: maschera "cosa resta" (green screen e scena vuota) a bassa risoluzione, poi letta sfumata
    const mp = gl.createProgram(); gl.attachShader(mp, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(mp, sh(gl.FRAGMENT_SHADER, MFRAG)); gl.linkProgram(mp); this.mprog = mp; this.mu = {};
    for (const n of ['u_tex', 'u_bgt', 'u_px', 'u_key', 'u_kmode', 'u_tol', 'u_kc', 'u_krgb', 'u_vbg', 'u_vtol', 'u_gain', 'u_seg', 'u_segon']) this.mu[n] = gl.getUniformLocation(mp, n);
    gl.useProgram(mp); gl.uniform1i(this.mu.u_tex, 0); gl.uniform1i(this.mu.u_bgt, 2); gl.uniform1i(this.mu.u_seg, 3); gl.useProgram(p);
    const mkTex = (w, h) => { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null); return t; };
    this.MW = 480; this.MH = 270; this.mtex = mkTex(this.MW, this.MH); this.fbo = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.mtex, 0); gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    this.bgtex = mkTex(1, 1); this.segtex = mkTex(1, 1); this.ploc = loc; this.mploc = gl.getAttribLocation(mp, 'p');
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex);
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
      if (S.settings.video.vbg && this.bgCanvas) this.lockCamera();
      if (this.video.requestVideoFrameCallback) { const v = this.video; const cb = () => { if (v.srcObject !== this.stream) return; this.fresh = true; this.camFrames++; v.requestVideoFrameCallback(cb); }; v.requestVideoFrameCallback(cb); this.rvfc = true; }
    } catch (e) { console.warn('Webcam', e); this.ok = false; this.err = e; }
    renderStatus();
  },
  stop() { if (this.stream) { this.stream.getTracks().forEach(t => { t.onended = null; t.stop(); }); this.stream = null; } this.ok = false; },
  /* Green screen virtuale: registra la scena vuota (media di ~20 fotogrammi) */
  async captureScene(onTick) {
    const v = this.video, W = v.videoWidth, H = v.videoHeight; if (!W) throw new Error('webcam non attiva');
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d', { willReadFrequently: true });
    const N = 20, acc = new Float32Array(W * H * 3);
    for (let f = 0; f < N; f++) {
      await new Promise(r => setTimeout(r, 70)); g.drawImage(v, 0, 0, W, H); const d = g.getImageData(0, 0, W, H).data;
      for (let i = 0, j = 0; i < acc.length; i += 3, j += 4) { acc[i] += d[j]; acc[i + 1] += d[j + 1]; acc[i + 2] += d[j + 2]; }
      onTick && onTick((f + 1) / N);
    }
    const out = g.createImageData(W, H); for (let i = 0, j = 0; i < acc.length; i += 3, j += 4) { out.data[j] = acc[i] / N; out.data[j + 1] = acc[i + 1] / N; out.data[j + 2] = acc[i + 2] / N; out.data[j + 3] = 255; }
    g.putImageData(out, 0, 0); this.setScene(c, Date.now());
    c.toBlob((b) => { if (b) DB.put('files', 'vbg-scene', { name: 'scena vuota', type: 'image/png', blob: b, t: this.bgStamp }); }, 'image/png');
  },
  segUpload() {
    if (!this.gl || !this.segtex || !SEG.canvas) return; const gl = this.gl;
    gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, this.segtex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, SEG.canvas); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex);
  },
  setScene(canvas, stamp) {
    this.bgCanvas = canvas; this.bgStamp = stamp; this.aspWarn = false; this.gain = [1, 1, 1]; this.gbKey = null;
    if (this.gl) { const gl = this.gl; gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this.bgtex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex); }
  },
  async loadScene() {
    const f = await DB.get('files', 'vbg-scene'); if (!f) return;
    try { const bm = await createImageBitmap(f.blob); const c = document.createElement('canvas'); c.width = bm.width; c.height = bm.height; c.getContext('2d').drawImage(bm, 0, 0); this.setScene(c, f.t || Date.now()); } catch (e) { console.warn(e); }
  },
  /* Blocca esposizione, bilanciamento del bianco e messa a fuoco, se la webcam lo permette */
  async lockCamera() {
    const tr = this.stream && this.stream.getVideoTracks()[0]; if (!tr || !tr.getCapabilities) return 'non so se la webcam regola la luce da sola';
    const caps = tr.getCapabilities(), adv = {}, done = [];
    if ((caps.exposureMode || []).includes('manual')) { adv.exposureMode = 'manual'; done.push('esposizione'); }
    if ((caps.whiteBalanceMode || []).includes('manual')) { adv.whiteBalanceMode = 'manual'; done.push('bilanciamento del bianco'); }
    if ((caps.focusMode || []).includes('manual')) { adv.focusMode = 'manual'; done.push('messa a fuoco'); }
    if (!done.length) return 'la webcam non permette di bloccare l\'esposizione: tieni la luce costante';
    try { await tr.applyConstraints({ advanced: [adv] }); return 'bloccati: ' + done.join(', '); } catch (e) { return 'non sono riuscito a bloccare l\'esposizione: tieni la luce costante'; }
  },
  async unlockCamera() { const tr = this.stream && this.stream.getVideoTracks()[0]; if (!tr || !tr.getCapabilities) return; const caps = tr.getCapabilities(), adv = {}; if ((caps.exposureMode || []).includes('continuous')) adv.exposureMode = 'continuous'; if ((caps.whiteBalanceMode || []).includes('continuous')) adv.whiteBalanceMode = 'continuous'; if ((caps.focusMode || []).includes('continuous')) adv.focusMode = 'continuous'; try { await tr.applyConstraints({ advanced: [adv] }); } catch (e) {} },
  sampleAt(fx, fy) {
    if (!this.ok || !this.video.videoWidth) return null;
    const v = this.video, c = document.createElement('canvas'); c.width = 160; c.height = 90; const g = c.getContext('2d', { willReadFrequently: true });
    C2D.drawView(g, v, 160, 90, [0, 0, 1, 1], S.settings.video.mirror);
    const x = Math.max(2, Math.min(157, Math.round(fx * 160))), y = Math.max(2, Math.min(87, Math.round(fy * 90)));
    const d = g.getImageData(x - 2, y - 2, 5, 5).data; let r = 0, gg = 0, b = 0;
    for (let i = 0; i < d.length; i += 4) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; }
    const h = (n) => Math.round(n / 25).toString(16).padStart(2, '0'); return '#' + h(r) + h(gg) + h(b);
  },
  gain: [1, 1, 1], gainT: 0,
  /* Compensa esposizione e bilanciamento del bianco automatici: guadagno per canale tra fotogramma attuale e scena vuota.
     Si usa la moda (non la media) dei rapporti, così la persona in primo piano non falsa la stima. */
  updGain() {
    const now = performance.now(); if (now - this.gainT < 150 || !this.bgCanvas || !this.video.videoWidth) return; this.gainT = now;
    if (!this.gs) { this.gs = document.createElement('canvas'); this.gs.width = 64; this.gs.height = 36; this.gg = this.gs.getContext('2d', { willReadFrequently: true }); }
    if (this.gbKey !== this.bgStamp) { this.gg.drawImage(this.bgCanvas, 0, 0, 64, 36); this.gbd = this.gg.getImageData(0, 0, 64, 36).data.slice(); this.gbKey = this.bgStamp; }
    this.gg.drawImage(this.video, 0, 0, 64, 36); const c = this.gg.getImageData(0, 0, 64, 36).data, b = this.gbd;
    for (let k = 0; k < 3; k++) {
      const H = new Float32Array(81), S2 = new Float32Array(81); let cnt = 0;
      for (let j = k; j < c.length; j += 4) { if (b[j] < 14 || b[j] > 245 || c[j] < 6 || c[j] > 250) continue; const lr = Math.log2(c[j] / b[j]); if (lr < -1 || lr > 1) continue; const bi = Math.round((lr + 1) * 40); H[bi]++; S2[bi] += lr; cnt++; }
      if (cnt < 60) continue;
      let best = 1, bv = -1; for (let i = 1; i < 80; i++) { const v = H[i - 1] + H[i] + H[i + 1]; if (v > bv) { bv = v; best = i; } }
      const g = Math.pow(2, (S2[best - 1] + S2[best] + S2[best + 1]) / Math.max(1, bv));
      this.gain[k] = Math.max(0.5, Math.min(2, this.gain[k] * 0.6 + g * 0.4));
    }
    // La webcam si è mossa? Se quasi tutta l'immagine è diversa dalla scena vuota per più di 2 secondi, avvisa
    let big = 0; for (let j = 0; j < c.length; j += 4) if (vbgDiff(c[j], c[j + 1], c[j + 2], b[j] * this.gain[0], b[j + 1] * this.gain[1], b[j + 2] * this.gain[2]) > 0.25) big++;
    this.bumpN = big / (c.length / 4) > 0.6 ? (this.bumpN || 0) + 1 : 0;
    if (this.bumpN > 14 && now - (this.bumpT || 0) > 30000) { this.bumpT = now; toast('Sembra che la webcam si sia mossa: registra di nuovo la scena vuota, oppure usa la modalità «Persone»'); }
  },
  render(t) {
    const vsr = S.settings.video;
    if (vsr.vbg && vsr.vmode === 'ai' && this.ok) {
      if (SEG.ready) SEG.tick(this.video);
      else if (!SEG.loading && !SEG.err) { toast('Carico il modello che riconosce le persone…'); SEG.load().then(() => { toast('Modalità Persone pronta'); if (window.syncFrameUI) syncFrameUI(); }).catch(() => { toast('Modalità Persone non disponibile: serve l\'accelerazione grafica (WebGL) attiva nel browser'); if (window.syncFrameUI) syncFrameUI(); }); }
    } else if (vsr.vbg && this.bgCanvas && this.ok) {
      this.updGain();
      const va = this.video.videoWidth / this.video.videoHeight, ba = this.bgCanvas.width / this.bgCanvas.height;
      if (va && Math.abs(va - ba) > 0.02 && !this.aspWarn) { this.aspWarn = true; toast('La webcam ha cambiato formato da quando hai registrato la scena vuota: registrala di nuovo'); }
    }
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
    const fg0 = frameGeom(), useMask = has && (fg0.key || fg0.vbg || fg0.seg);
    if (useMask) {
      const rgb = hexRgb(vs.kc || '#33b34d'), kc = cbcrOf(rgb);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, null); gl.activeTexture(gl.TEXTURE0);
      gl.useProgram(this.mprog); gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo); gl.viewport(0, 0, this.MW, this.MH);
      gl.enableVertexAttribArray(this.mploc); gl.vertexAttribPointer(this.mploc, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this.bgtex); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.uniform2f(this.mu.u_px, 1 / this.video.videoWidth, 1 / this.video.videoHeight);
      gl.uniform1f(this.mu.u_key, fg0.key ? 1 : 0); gl.uniform1f(this.mu.u_kmode, isNeutral(rgb) ? 1 : 0); gl.uniform1f(this.mu.u_tol, vs.tol ?? 0.09); gl.uniform2f(this.mu.u_kc, kc[0], kc[1]); gl.uniform3f(this.mu.u_krgb, rgb[0], rgb[1], rgb[2]);
      gl.uniform1f(this.mu.u_vbg, fg0.vbg ? 1 : 0); gl.uniform1f(this.mu.u_vtol, vs.vtol ?? 0.15); gl.uniform3f(this.mu.u_gain, ...this.gain); gl.uniform1f(this.mu.u_segon, fg0.seg ? 1 : 0);
      gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, this.segtex); gl.activeTexture(gl.TEXTURE0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, W, H); gl.useProgram(this.prog);
      gl.enableVertexAttribArray(this.ploc); gl.vertexAttribPointer(this.ploc, 2, gl.FLOAT, false, 0, 0);
    }
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this.mtex); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.uniform1f(this.u.u_usemask, useMask ? 1 : 0); gl.uniform1f(this.u.u_dbg, this.dbg && useMask ? 1 : 0);
    gl.uniform2f(this.u.u_scale, sx, sy); gl.uniform2f(this.u.u_off, (1 - sx) / 2, (1 - sy) / 2);
    gl.uniform2f(this.u.u_res, W, H); gl.uniform1f(this.u.u_time, t / 1000);
    gl.uniform1f(this.u.u_thr, vs.thr); gl.uniform1f(this.u.u_gl, vs.gl); gl.uniform1f(this.u.u_mirror, vs.mirror ? 1 : 0); gl.uniform1f(this.u.u_has, has ? 1 : 0); gl.uniform1f(this.u.u_fx, vs.fx === false ? 0 : 1);
    gl.uniform4f(this.u.u_mask, ...fg0.mask); gl.uniform4f(this.u.u_view, ...fg0.view);
    const c = vs.col; gl.uniform3f(this.u.u_col, parseInt(c.slice(1, 3), 16) / 255, parseInt(c.slice(3, 5), 16) / 255, parseInt(c.slice(5, 7), 16) / 255);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
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

/* ------------------------------------------------------------------ Compositore: sfondo, webcam, logo, Iscriviti */
const OUT = {
  cv: null, g: null, blur: null, bg: null, logo: null, sub: null,
  setup() {
    this.cv = $('vOut'); this.g = this.cv.getContext('2d');
    this.blur = document.createElement('canvas'); this.blur.width = 48; this.blur.height = 27; this.bg2 = this.blur.getContext('2d');
    this.blur2 = document.createElement('canvas'); this.blur2.width = 16; this.blur2.height = 9; this.bg3 = this.blur2.getContext('2d');
    this.resize();
  },
  resize() { if (!this.cv) return; this.cv.width = CAM.canvas.width; this.cv.height = CAM.canvas.height; },
  async loadImages() {
    for (const [k, id] of [['bg', 'ov-bg'], ['logo', 'ov-logo']]) {
      const f = await DB.get('files', id);
      if (f) { const img = new Image(); img.src = URL.createObjectURL(f.blob); try { await img.decode(); this[k] = img; } catch (e) { this[k] = null; } if (k === 'bg' && $('ovBgName')) $('ovBgName').textContent = f.name; }
    }
    const fv = await DB.get('files', 'ov-bgv');
    if (fv) { if (this.bgv) { this.bgv.pause(); URL.revokeObjectURL(this.bgv.src); } const v = document.createElement('video'); v.muted = true; v.loop = true; v.playsInline = true; v.src = URL.createObjectURL(fv.blob); v.play().catch(() => {}); this.bgv = v; if ($('ovBgvName')) $('ovBgvName').textContent = fv.name; }
  },
  region() {
    const fg = frameGeom(), v = fg.view, m = fg.mask;
    const X = (f) => (f - v[0]) / (v[2] - v[0]), Y = (f) => (f - v[1]) / (v[3] - v[1]);
    const r = [X(Math.max(0, m[0])), Y(Math.max(0, m[1])), X(Math.min(1, m[2])), Y(Math.min(1, m[3]))].map(x => Math.max(0, Math.min(1, x)));
    return r;
  },
  /* Disegna lo sfondo scelto (sfocato, immagine o video) su tutta l'uscita */
  drawBg(g, W, H, src, r) {
    const ov = S.settings.ov;
    if (ov.bg === 'blur') {
      const rx = r[0] * W, ry = r[1] * H, rw = Math.max(4, (r[2] - r[0]) * W), rh = Math.max(4, (r[3] - r[1]) * H);
      const ca = 16 / 9, ra = rw / rh; let sx = rx, sy = ry, sw = rw, sh = rh;
      if (ra > ca) { sw = rh * ca; sx = rx + (rw - sw) / 2; } else { sh = rw / ca; sy = ry + (rh - sh) / 2; }
      const fg = frameGeom(), raw = (fg.vbg || fg.key || fg.seg) ? null : src;
      this.bg2.imageSmoothingEnabled = true; this.bg2.fillStyle = '#000'; this.bg2.fillRect(0, 0, 48, 27);
      if (raw) this.bg2.drawImage(raw, sx / W * raw.width, sy / H * raw.height, sw / W * raw.width, sh / H * raw.height, 0, 0, 48, 27);
      else if (fg.vbg) C2D.drawView(this.bg2, CAM.bgCanvas, 48, 27, fg.view, S.settings.video.mirror);
      else if (CAM.video && CAM.video.videoWidth) C2D.drawView(this.bg2, CAM.video, 48, 27, fg.view, S.settings.video.mirror);
      this.bg3.imageSmoothingEnabled = true; this.bg3.drawImage(this.blur, 0, 0, 16, 9);
      g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; g.drawImage(this.blur2, 0, 0, W, H);
      g.globalAlpha = 0.5; g.drawImage(this.blur, 0, 0, W, H); g.globalAlpha = 1;
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, 0, W, H); return;
    }
    const m = ov.bg === 'image' ? this.bg : ov.bg === 'video' && this.bgv && this.bgv.readyState >= 2 ? this.bgv : null;
    if (!m) { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); return; }
    const iw = m.naturalWidth || m.videoWidth, ih = m.naturalHeight || m.videoHeight, s2 = Math.max(W / iw, H / ih);
    g.drawImage(m, (W - iw * s2) / 2, (H - ih * s2) / 2, iw * s2, ih * s2);
  },
  render(t) {
    const g = this.g, W = this.cv.width, H = this.cv.height, src = CAM.canvas, ov = S.settings.ov, fg = frameGeom();
    const keyed = fg.key || fg.vbg || fg.seg, behind = keyed && ov.behind !== false && ov.bg !== 'none' && !CAM.edit;
    const r = this.region(), full = CAM.edit || ov.bg === 'none' || (r[0] < 0.002 && r[1] < 0.002 && r[2] > 0.998 && r[3] > 0.998);
    // Se non c'è niente da sovrapporre si mostra direttamente la webcam elaborata (più leggero)
    const pass = full && !keyed && !(ov.logoOn && this.logo) && !this.sub;
    if (pass !== this.pass) { this.pass = pass; src.style.display = pass ? 'block' : 'none'; this.cv.style.display = pass ? 'none' : 'block'; }
    if (pass) return;
    if (ov.bg === 'video' && this.bgv && this.bgv.paused) this.bgv.play().catch(() => {});
    if (behind) { this.drawBg(g, W, H, src, r); g.drawImage(src, 0, 0, W, H); }
    else if (full) { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); g.drawImage(src, 0, 0, W, H); }
    else {
      const rx = r[0] * W, ry = r[1] * H, rw = (r[2] - r[0]) * W, rh = (r[3] - r[1]) * H;
      this.drawBg(g, W, H, src, r);
      g.fillStyle = '#000'; g.fillRect(rx, ry, rw, rh);
      g.drawImage(src, rx / W * src.width, ry / H * src.height, rw / W * src.width, rh / H * src.height, rx, ry, rw, rh);
    }
    if (ov.logoOn && this.logo) {
      const lw = W * ov.logoSize, lh = lw * this.logo.naturalHeight / this.logo.naturalWidth, mg = W * 0.025;
      const x = ov.logoPos[1] === 'l' ? mg : W - mg - lw, y = ov.logoPos[0] === 't' ? mg : H - mg - lh;
      g.globalAlpha = ov.logoOp; g.drawImage(this.logo, x, y, lw, lh); g.globalAlpha = 1;
    }
    if (this.sub) SUB.draw(g, W, H, (t - this.sub) / 1000) || (this.sub = null);
  }
};
const SUB = {
  start() { OUT.sub = performance.now(); },
  rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); },
  bell(g, cx, cy, s, ang) {
    g.save(); g.translate(cx, cy - s * 0.45); g.rotate(ang); g.translate(0, s * 0.45);
    g.fillStyle = '#fff'; g.beginPath(); g.moveTo(-s * 0.42, s * 0.28); g.quadraticCurveTo(-s * 0.36, s * 0.18, -s * 0.34, -s * 0.05); g.quadraticCurveTo(-s * 0.32, -s * 0.42, 0, -s * 0.44);
    g.quadraticCurveTo(s * 0.32, -s * 0.42, s * 0.34, -s * 0.05); g.quadraticCurveTo(s * 0.36, s * 0.18, s * 0.42, s * 0.28); g.closePath(); g.fill();
    g.beginPath(); g.arc(0, s * 0.36, s * 0.1, 0, Math.PI * 2); g.fill(); g.restore();
  },
  cursor(g, x, y, s, press) {
    g.save(); g.translate(x, y); g.scale(s * (press ? 0.85 : 1), s * (press ? 0.85 : 1));
    g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 17); g.lineTo(4.2, 13); g.lineTo(7.2, 20); g.lineTo(10, 18.8); g.lineTo(7, 12); g.lineTo(12.5, 12); g.closePath();
    g.fillStyle = '#fff'; g.fill(); g.lineWidth = 1.4; g.strokeStyle = '#000'; g.stroke(); g.restore();
  },
  /* Ritorna false quando l'animazione è finita */
  draw(g, W, H, t) {
    const D = 6.2; if (t > D) return false;
    const ease = (x) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
    const inP = ease(t / 0.45), outP = t > D - 0.5 ? ease((t - (D - 0.5)) / 0.5) : 0;
    const name = (S.settings.channel || '').trim();
    const h = H * 0.13, pad = h * 0.22, fs = h * 0.34;
    g.save(); g.font = `700 ${fs}px "Exo 2", system-ui, sans-serif`;
    const clicked = t > 2.45, btxt = clicked ? 'ISCRITTO ✓' : 'ISCRIVITI';
    const bw = Math.max(g.measureText('ISCRITTO ✓').width, g.measureText('ISCRIVITI').width) + pad * 2.4, bh = h - pad * 1.4;
    g.font = `600 ${fs * 0.9}px "Exo 2", system-ui, sans-serif`; const nw = name ? g.measureText(name).width + pad * 1.5 : 0;
    const bellS = h * 0.62, total = pad + nw + bw + pad * 0.8 + bellS + pad;
    const x0 = (W - total) / 2, y0 = H * 0.04 - (1 - inP) * (h + H * 0.06) - outP * (h + H * 0.06);
    g.globalAlpha = Math.min(inP, 1 - outP);
    g.fillStyle = 'rgba(4,6,11,0.82)'; this.rr(g, x0, y0, total, h, h * 0.28); g.fill();
    g.strokeStyle = 'rgba(58,232,255,0.7)'; g.lineWidth = Math.max(1.5, h * 0.03); g.stroke();
    let x = x0 + pad;
    if (name) { g.fillStyle = '#d5f4ff'; g.textBaseline = 'middle'; g.fillText(name, x, y0 + h / 2); x += nw; }
    const pressT = t > 2.25 && t < 2.45, sc = pressT ? 0.93 : 1, by = y0 + (h - bh) / 2;
    g.save(); g.translate(x + bw / 2, by + bh / 2); g.scale(sc, sc);
    g.fillStyle = clicked ? '#3a4c66' : '#e8203a'; this.rr(g, -bw / 2, -bh / 2, bw, bh, bh * 0.3); g.fill();
    g.fillStyle = '#fff'; g.font = `700 ${fs}px "Exo 2", system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(btxt, 0, 2); g.restore();
    const bx = x + bw + pad * 0.8 + bellS / 2, ring = t > 2.7 && t < 4 ? Math.sin((t - 2.7) * 22) * 0.45 * (1 - (t - 2.7) / 1.3) : 0;
    this.bell(g, bx, y0 + h / 2, bellS, ring);
    if (t > 1.2 && t < 3.6) { // il cursore arriva e clicca
      const k = ease((t - 1.2) / 1.0), tx = x + bw * 0.62, ty = by + bh * 0.62, sx = tx + W * 0.08, sy = ty + H * 0.16;
      this.cursor(g, sx + (tx - sx) * k, sy + (ty - sy) * k, h / 26, pressT);
    }
    g.restore(); return true;
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
    this.W = OUT.cv.width; this.H = OUT.cv.height;
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
  aenc.configure({ codec: 'opus', sampleRate: OUT, numberOfChannels: 2, bitrate: +(opts.abr || 160000) });
  let frames = 0;
  const lufs = await produceAudio(sess, opts, (ph, p) => onProg(ph, p * 0.9), OUT, (oL, oR, s0, n) => {
    const pl = new Float32Array(n * 2); pl.set(oL.subarray(s0, s0 + n), 0); pl.set(oR.subarray(s0, s0 + n), n);
    const ad = new AudioData({ format: 'f32-planar', sampleRate: OUT, numberOfFrames: n, numberOfChannels: 2, timestamp: Math.round(frames / OUT * 1e6), data: pl });
    aenc.encode(ad); ad.close(); frames += n;
  });
  await aenc.flush(); aenc.close(); if (aerr) throw aerr;
  const v = sess.video, endUs = Math.round(sessDur(sess) * 1e6);
  const target = new WebMMuxer.ArrayBufferTarget();
  const mx = new WebMMuxer.Muxer({ target, video: { codec: v.mux, width: v.w, height: v.h, frameRate: v.fps }, audio: { codec: 'A_OPUS', sampleRate: OUT, numberOfChannels: 2 }, firstTimestampBehavior: 'permissive' });
  let ai = 0, firstA = true, firstV = true, lastV = -1;
  const addA = () => { const a = achunks[ai++]; mx.addAudioChunkRaw(a.d, 'key', a.ts, firstA ? ameta || undefined : undefined); firstA = false; };
  if (!isIdentity(sess)) {
    // Video montato: si decodifica la registrazione e si ricodificano solo i pezzi tenuti, con i nuovi orari
    const map = vmapOf(sess); let verr = null, nOut = 0, lastPiece = -1, firstOut = true, lastOutTs = -1;
    const enc = new VideoEncoder({ output: (c, m) => {
      const d = new Uint8Array(c.byteLength); c.copyTo(d);
      while (ai < achunks.length && achunks[ai].ts <= c.timestamp) addA();
      mx.addVideoChunkRaw(d, c.type, c.timestamp, firstOut ? (m && m.decoderConfig ? m : (v.meta || undefined)) : undefined); firstOut = false;
    }, error: (e) => { verr = e; } });
    enc.configure({ codec: v.codec, width: v.w, height: v.h, bitrate: v.h >= 1080 ? 5000000 : 2500000, framerate: v.fps || 30 });
    const onFrame = (f) => {
      const t = f.timestamp / 1e6; let pi = -1;
      for (let k = 0; k < map.length; k++) if (t >= map[k].s - 1e-4 && t < map[k].s + map[k].d) { pi = k; break; }
      if (pi < 0) { f.close(); return; }
      const ts = Math.round((map[pi].o + (t - map[pi].s)) * 1e6); if (ts <= lastOutTs || ts >= endUs) { f.close(); return; }
      const nf = new VideoFrame(f, { timestamp: ts, duration: 33333 }); f.close();
      enc.encode(nf, { keyFrame: nOut % 60 === 0 || pi !== lastPiece }); nf.close(); nOut++; lastPiece = pi; lastOutTs = ts;
    };
    // un pezzo rovinato non blocca l'esportazione: si riparte dal fotogramma chiave successivo
    let dec, dbad = false, dfails = 0;
    const mkDec = () => { dec = new VideoDecoder({ output: onFrame, error: (e) => { console.warn('decoder', e); dbad = true; if (++dfails > 30) verr = e; } }); dec.configure({ codec: v.codec, codedWidth: v.w, codedHeight: v.h }); };
    mkDec();
    let started = false;
    for (let i = 0; i < (v.nGroups || 0); i++) {
      const g = await DB.get('chunks', vkey(sess.id, i)); if (!g) { started = false; continue; }
      for (const c of g.ch) {
        if (dbad) { try { dec.close(); } catch (e) {} dbad = false; mkDec(); started = false; }
        if (!started) { if (!c.key) continue; started = true; }
        while (dec.decodeQueueSize > 8 || enc.encodeQueueSize > 8) await new Promise(r => setTimeout(r, 4));
        if (verr) throw verr;
        dec.decode(new EncodedVideoChunk({ type: c.key ? 'key' : 'delta', timestamp: c.ts, data: c.d }));
      }
      onProg(opts.normalize ? 1 : 0, 0.9 + 0.1 * (i + 1) / v.nGroups);
    }
    try { await dec.flush(); } catch (e) {} await enc.flush(); try { dec.close(); } catch (e) {} enc.close(); if (verr) throw verr;
    while (ai < achunks.length) addA();
    mx.finalize();
    return { blob: new Blob([target.buffer], { type: 'video/webm' }), lufs };
  }
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
/* Parole: minuscole, senza accenti né punteggiatura (per confrontare testo e voce riconosciuta) */
const normW = (w) => String(w).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
/* «Quando parlo»: il testo scorre solo mentre c'è voce nel microfono */
const VAD = {
  floor: -60, last: 0, buf: null, fb: null, t: 0, run: 0,
  speaking(t) {
    if (!E.micAn) return true;
    if (t - this.t > 30) {
      this.t = t; const an = E.micAn, b = this.buf || (this.buf = new Float32Array(an.fftSize)); an.getFloatTimeDomainData(b);
      let s = 0; for (let i = 0; i < b.length; i++) s += b[i] * b[i]; const db = 10 * Math.log10(s / b.length + 1e-12);
      this.floor = db < this.floor ? db : this.floor + 0.03; this.floor = Math.max(-80, Math.min(-35, this.floor));
      // voce = energia concentrata tra 100 e 1000 Hz; i clic dei tasti hanno soprattutto acuti
      const f = this.fb || (this.fb = new Float32Array(an.frequencyBinCount)); an.getFloatFrequencyData(f);
      const hz = E.ctx.sampleRate / an.fftSize; let lo = 0, hi = 0;
      for (let i = Math.round(100 / hz); i < Math.round(1000 / hz); i++) lo += Math.pow(10, f[i] / 10);
      for (let i = Math.round(2000 / hz); i < Math.round(8000 / hz); i++) hi += Math.pow(10, f[i] / 10);
      const voiced = db > Math.max(this.floor + 12, -52) && lo > hi * 1.5;
      this.run = voiced ? this.run + 1 : 0;
      if (this.run >= 3) this.last = t;   // almeno ~90 ms di voce di fila
    }
    return t - this.last < 450;
  }
};
/* «Segue le parole»: riconoscimento vocale del browser; il testo va avanti man mano che leggi */
const VF = {
  rec: null, on: false, words: [], pos: 0, target: null, err: null, readTo: 0,
  supported() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
  index() { if (!TP.el) return; this.words = [...TP.el.querySelectorAll('.w')].map(el => ({ el, n: normW(el.textContent) })); this.resync(); },
  resync() {
    if (!TP.view || !this.words.length) { this.pos = 0; this.target = null; return; }
    const y = TP.view.scrollTop + TP.lineY() - 2; let i = this.words.findIndex(w => w.el.offsetTop + w.el.offsetHeight > y); if (i < 0) i = this.words.length;
    this.pos = i; this.target = null; this.mark(i);
  },
  mark(i) {
    const a = Math.min(this.readTo, i), b = Math.max(this.readTo, i);
    for (let k = a; k < b && k < this.words.length; k++) this.words[k].el.classList.toggle('rd', k < i);
    this.readTo = i;
  },
  start() {
    if (this.on) return; if (!this.supported()) return this.fail('il browser non ha il riconoscimento vocale');
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition, r = new SR();
    r.lang = 'it-IT'; r.continuous = true; r.interimResults = true; r.maxAlternatives = 1;
    r.onresult = (e) => { let txt = ''; for (let i = e.resultIndex; i < e.results.length; i++) txt += ' ' + e.results[i][0].transcript; this.hear(txt); };
    r.onerror = (e) => { if (['not-allowed', 'service-not-allowed', 'network', 'language-not-supported', 'audio-capture'].includes(e.error)) this.fail(e.error === 'network' ? 'serve la connessione a internet' : e.error); };
    r.onend = () => { if (this.on) setTimeout(() => { if (this.on) this.go(); }, 150); };
    this.rec = r; this.on = true; this.resync(); this.go(); TP.layout();
  },
  go() { const tr = E.micStream && E.micStream.getAudioTracks()[0]; try { tr ? this.rec.start(tr) : this.rec.start(); } catch (e) { try { this.rec.start(); } catch (e2) {} } },
  stop() { if (!this.on) return; this.on = false; try { this.rec.abort(); } catch (e) {} this.rec = null; TP.layout && TP.el && TP.layout(); },
  fail(why) { this.err = why; this.stop(); TP.mode = 'voice'; TP.save(); TP.layout(); toast('«Segue le parole» non disponibile (' + why + '): passo a «Quando parlo»'); },
  hear(txt) {
    const tail = txt.split(/\s+/).map(normW).filter(Boolean).slice(-6); if (!tail.length || !this.words.length) return;
    const W = this.words, L = tail.length, sim = (a, b) => a === b ? 1 : (a.length >= 4 && b.length >= 4 && a.slice(0, 4) === b.slice(0, 4)) ? 0.7 : 0;
    let best = -1, bs = 0;
    for (let j = Math.max(0, this.pos - 8); j < Math.min(W.length, this.pos + 80); j++) {
      let sc = 0; for (let t = 0; t < L && j - t >= 0; t++) sc += sim(tail[L - 1 - t], W[j - t].n) * (t === 0 ? 1.2 : 1);
      sc -= Math.abs(j - this.pos) * 0.008;
      if (sc > bs) { bs = sc; best = j; }
    }
    if (best < 0) return;
    const near = best >= this.pos && best <= this.pos + 3 && W[best].n.length >= 5 && tail[L - 1] === W[best].n;
    if (bs < 1.6 && !near) return;
    if (best + 1 < this.pos - 2 && bs < 3) return;
    this.pos = best + 1; this.target = W[best].el; this.mark(this.pos);
  }
};
/* Segnali nel testo: [NOME] e [STOP NOME] per ogni categoria (con il numero per gli stacchetti: [CAPITOLO 3]), più [PAUSA] e [ISCRIVITI] */
function cueRe() {
  const esc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+');
  const words = CATS().map(cueWord).filter(Boolean).sort((a, b) => b.length - a.length).map(esc).join('|');
  return new RegExp('\\[((?:STOP\\s+)?(?:' + (words || 'NESSUNO') + ')|PAUSA|ISCRIVITI)(?:\\s+(\\d{1,2}))?\\]', 'giu');
}
const TP = {
  text: '', running: false, speed: 6, size: 42, mirror: false, auto: true, visible: true, startMode: 'intro', mode: 'fixed', pendingLoops: new Set(),
  wasRunning: false, acc: 0, expect: 0, lastT: 0, lastLog: 0, cues: [],
  view: null, el: null,
  async load() {
    const st = await DB.get('state', 'prompter');
    if (st) for (const k of ['text', 'speed', 'size', 'mirror', 'auto', 'visible', 'startMode', 'mode']) if (k in st) this[k] = st[k];
  },
  save() { const { text, speed, size, mirror, auto, visible, startMode, mode } = this; DB.put('state', 'prompter', { text, speed, size, mirror, auto, visible, startMode, mode }); SYNC.changed(); },
  render() {
    const esc = (t) => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const paras = this.text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    // ogni parola in uno <span class="w">: serve al teleprompter che segue la voce
    const plain = (t) => esc(t).replace(/[^\s]+/g, (w) => `<span class="w">${w}</span>`).replace(/\n/g, '<br>');
    const re = cueRe();
    this.el.innerHTML = paras.map(p => {
      let out = '', i = 0;
      for (const m of p.matchAll(re)) {
        out += plain(p.slice(i, m.index)); const kind = m[1].replace(/\s+/g, ' '), n = m[2], k = kind.toUpperCase();
        const cc = catOf((CATS().find(c => cueWord(c) === k.replace(/^STOP /, '')) || {}).id);
        out += `<span class="cue" data-cue="${esc(k)}" data-n="${n || ''}"${cc ? ` style="--cc:${cc.color}"` : ''}>${esc(k + (n ? ' ' + n : ''))}</span>`; i = m.index + m[0].length;
      }
      return '<p>' + out + plain(p.slice(i)) + '</p>';
    }).join('');
    VF.index();
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
    $('ptRun').setAttribute('aria-pressed', String(this.running)); $('ptStart').value = this.startMode; $('ptMode').value = this.mode;
    $('ptRun').classList.toggle('listen', this.running && this.mode === 'follow' && VF.on); $('ptRun').classList.toggle('waiting', !!(this.running && this.voiceWait)); $('ptSpeedGrp').hidden = this.mode === 'follow';
    $('prompter').hidden = !this.visible || (!ORIENT.wide && LAY.cur && LAY.cur.hidden && LAY.cur.hidden.includes('prompter')); $('tpBtn').setAttribute('aria-pressed', String(this.visible));
  },
  lineY() { return this.view.clientHeight * 0.3; },
  cueY(c) { return c.offsetTop - this.view.scrollTop; },
  syncFired() { const ly = this.lineY(); for (const c of this.cues) c.dataset.fired = (this.cueY(c) <= ly || c.dataset.pre === '1') ? '1' : '0'; },
  setTop(y) { this.view.scrollTop = y; this.acc = this.view.scrollTop; this.expect = this.view.scrollTop; this.syncFired(); VF.resync(); },
  toggle() { if (this.voiceWait && this.running) { this.voiceWait = null; this.lastT = performance.now(); this.layout(); return; } this.running = !this.running; this.voiceWait = null; this.lastT = performance.now(); this.layout(); },
  nudge(dir) { if (!this.view) return; this.push = (this.push || 0) + dir * this.size * 1.45 * 0.6; },
  frame(t) {
    const dt = Math.min(0.1, (t - (this.lastT || t)) / 1000); this.lastT = t;
    if (!this.visible || !this.view) return;
    if (this.push) {
      const step = Math.sign(this.push) * Math.min(Math.abs(this.push), Math.max(4, Math.abs(this.push) * 0.35));
      this.push -= step; if (Math.abs(this.push) < 0.5) this.push = 0;
      this.acc = Math.max(0, this.acc + step); this.view.scrollTop = this.acc; this.expect = this.view.scrollTop;
      if (step < 0) this.syncFired();
      if (!this.push) VF.resync();
    }
    const follow = this.mode === 'follow';
    if (follow && this.running && !VF.on) VF.start(); else if (VF.on && (!follow || !this.running)) VF.stop();
    if (this.running && follow) {
      // segue le parole riconosciute: la parola appena letta va verso la riga di lettura
      if (VF.target) { const want = Math.max(0, VF.target.offsetTop - this.lineY() + VF.target.offsetHeight * 0.2); const d = want - this.acc;
        if (d > 0 || d < -this.view.clientHeight * 0.5) { this.acc += d * Math.min(1, dt * 3.5); this.view.scrollTop = this.acc; this.expect = this.view.scrollTop; } }
    } else if (this.running) {
      let talk = this.mode === 'voice' ? VAD.speaking(t) : true;
      if (this.voiceWait) { if (!talk) this.voiceWait.quiet = true; else if (this.voiceWait.quiet) { this.voiceWait = null; this.layout(); } if (this.voiceWait) talk = false; }
      if (talk) this.acc += this.speed * 7 * (this.size / 42) * dt;
      this.view.scrollTop = this.acc; this.expect = this.view.scrollTop;
      if (this.view.scrollTop + this.view.clientHeight >= this.view.scrollHeight - 1) { this.running = false; this.layout(); }
    }
    if (R.state === 'rec' && this.auto) {
      const ly = this.lineY();
      for (const c of this.cues) {
        const y = this.cueY(c);
        if (c.dataset.pre === '1') { if (y <= ly) delete c.dataset.pre; continue; }
        if (c.dataset.fired !== '1' && y <= ly) { c.dataset.fired = '1'; this.fire(c); }
        else if (c.dataset.fired === '1' && y > ly + 4) c.dataset.fired = '0';
      }
    }
    if (R.state === 'rec' && t - this.lastLog > 200) { this.lastLog = t; R.tpLog.push({ t: tlAt(now()), y: this.view.scrollTop, run: this.running }); }
  },
  fire(c) {
    c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 900);
    const k = c.dataset.cue, n = +c.dataset.n;
    if (k === 'ISCRIVITI') SUB.start();
    else if (k === 'PAUSA') {
      // a velocità fissa il testo si ferma finché premi P; nei modi a voce aspetta che tu taccia e poi riprenda a parlare
      if (this.mode === 'fixed') { this.running = false; this.layout(); toast('Testo fermo: premi P per farlo ripartire'); }
      else if (this.mode === 'voice') { this.voiceWait = { quiet: false }; this.layout(); toast('Pausa: il testo riparte quando riprendi a parlare'); }
    }
    else {
      const stop = /^STOP /.test(k), cat = CATS().find(x => cueWord(x) === k.replace(/^STOP /, '')); if (!cat) return;
      if (stop) catStop(cat.id);
      else if (cat.type === 'single') singlePlay(cat.id);
      else if (cat.type === 'list') listPlay(cat.id, n ? n - 1 : (E.next[cat.id] || 0));
      else if (singlePlaying()) { this.pendingLoops.add(cat.id); toast(cat.name + ': parte quando la sigla è finita'); }
      else if (['paused', 'stopped'].includes(loopSt(cat.id).status)) loopToggle(cat.id);
    }
  },
  onScroll() { if (Math.abs(this.view.scrollTop - this.expect) > 2) { this.acc = this.view.scrollTop; this.expect = this.view.scrollTop; this.syncFired(); } },
  onRecStart() {
    this.syncFired();
    // segnali appena sopra la riga di lettura (es. [SIGLA] prima del titolo): sono «adesso», quindi partono con la registrazione
    if (this.auto) { const ly = this.lineY(), lh = this.size * 1.45; for (const c of this.cues) { const y = this.cueY(c); if (y <= ly + lh * 0.6 && y > ly - lh * 1.9) { c.dataset.fired = '1'; if (y > ly) c.dataset.pre = '1'; this.fire(c); } } }
    const fs = firstSingle(), go = this.startMode === 'rec' || (this.startMode === 'intro' && !(fs && dk(fs.id)));
    if (go && this.text.trim() && this.visible) { this.running = true; this.lastT = performance.now(); }
    this.layout();
  },
  onSingleEnd(id) {
    // i loop chiesti durante la sigla partono quando nessuna sigla suona più
    if (this.pendingLoops.size && !singlePlaying()) { const l = [...this.pendingLoops]; this.pendingLoops.clear(); if (isRec()) for (const c of l) if (['paused', 'stopped'].includes(loopSt(c).status)) loopToggle(c); }
    const fs = firstSingle(); if (!fs || fs.id !== id) return;
    if (this.startMode === 'intro' && isRec() && !this.running && this.text.trim() && this.visible) { this.running = true; this.lastT = performance.now(); this.layout(); } },
  onHold() { this.wasRunning = this.running; this.running = false; this.voiceWait = null; this.pendingLoops.clear(); this.layout(); },
  onResume(Tq, w0) {
    R.tpLog = R.tpLog.filter(e => e.t <= Tq + 0.01);
    let y = null, run = null; for (const e of R.tpLog) { if (e.t <= w0 + 0.01) y = e.y; run = e.run; }
    if (y != null) this.setTop(y);
    this.running = run != null ? run : this.wasRunning; this.lastT = performance.now(); this.layout();
  },
  onFinish() { this.running = false; this.voiceWait = null; this.pendingLoops.clear(); for (const c of this.cues || []) delete c.dataset.pre; VF.stop(); this.layout(); HELP.onFinish(); },
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
  rb.disabled = false;
  $('retakeBtn').disabled = R.state !== 'rec' && R.state !== 'preroll';
  $('stopBtn').disabled = R.state === 'idle';
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

/* Riquadri del deck: uno per categoria, costruiti dalle categorie */
const LEGACY_FILE = { intro: 'fileIntro', bg: 'fileBg', cap: 'fileCap' };
const DECKUI = {
  cards: {},
  build() {
    const host = $('panels'); if (!host) return;
    host.querySelectorAll('.deckc').forEach(el => el.remove()); this.cards = {};
    const mixer = host.querySelector('[data-panel="mixer"]'), fl = firstList();
    for (const c of CATS()) {
      const el = document.createElement('section'); el.className = 'card pnl deckc'; el.dataset.panel = c.id; el.dataset.cat = c.id; el.style.setProperty('--cc', c.color);
      const multi = c.type !== 'single', fid = LEGACY_FILE[c.id] || 'file-' + c.id;
      const note = c.type === 'single' ? (c.duck ? 'Mentre suona, i loop si fermano e poi ripartono.' : '') : c.type === 'loop' ? 'I brani girano uno dopo l\'altro; si mette in pausa e riparte da dove era.' : (c.duck ? 'Mentre suona, i loop si fermano e poi ripartono da dove erano.' : 'Suona sopra i loop senza fermarli.');
      el.innerHTML = `<h2><span class="cn"></span> <span class="sp"></span><span class="tag"></span><span class="kbd" data-act="${c.id}"></span>${c === fl ? '<span class="kbd">1–9</span>' : ''}</h2>
        ${multi ? '<ul class="list"></ul>' : '<div class="fname"></div>'}
        <div class="prog"><i></i></div>
        <div class="row">${c.type === 'single' ? '<button data-a="load" title="Scegli il file">📂 Scegli</button><button data-a="play" class="main-act">▶ PLAY</button><button data-a="stop" title="Ferma">■</button>'
          : c.type === 'loop' ? '<button data-a="load" title="Aggiungi brani">＋ Brani</button><button data-a="prev" title="Brano precedente">⏮</button><button data-a="play" class="main-act">⏯ PLAY / PAUSA</button><button data-a="next" title="Brano successivo">⏭</button>'
          : '<button data-a="load" title="Aggiungi">＋ Aggiungi</button><button data-a="prev" title="Sposta il prossimo indietro">⏮</button><button data-a="play" class="main-act">▶ LANCIA</button><button data-a="stop" title="Ferma">■</button>'}</div>
        ${note ? `<p class="note">${note}</p>` : ''}
        <input type="file" id="${fid}" accept="audio/*,.mp3,.wav,.ogg,.m4a,.flac" ${multi ? 'multiple' : ''} hidden>`;
      el.querySelector('.cn').textContent = c.name.toUpperCase();
      if (mixer && mixer.parentElement === host) host.insertBefore(el, mixer); else host.append(el);
      const q = (a) => el.querySelector(`[data-a="${a}"]`), inp = el.querySelector('input[type=file]');
      q('load').addEventListener('click', () => { if (isRec() || blocked()) return toast('Cambia i file a registrazione ferma'); inp.click(); });
      inp.addEventListener('change', async (e) => {
        const f = [...e.target.files]; e.target.value = ''; if (!f.length) return; const ids = await addFiles(f);
        if (c.type === 'single') S.deck[c.id] = ids[0]; else dkList(c.id).push(...ids);
        saveDeck(); renderDeck();
      });
      q('play').addEventListener('click', () => c.type === 'list' ? listPlay(c.id, E.next[c.id] || 0) : catAction(c.id));
      if (q('stop')) q('stop').addEventListener('click', () => catStop(c.id));
      if (c.type === 'loop') {
        q('next').addEventListener('click', () => loopJump(c.id, loopSt(c.id).idx + 1));
        q('prev').addEventListener('click', () => { const v = E.voices[c.id], L = loopSt(c.id); if (v && posOf(v, now()) > 3) { if (blocked()) return; stopVoice(c.id); L.pos = 0; loopPlay(c.id); renderDeck(); } else loopJump(c.id, L.idx - 1); });
      }
      if (c.type === 'list') q('prev').addEventListener('click', () => { if (blocked()) return; E.next[c.id] = Math.max(0, (E.next[c.id] || 0) - 1); renderDeck(); });
      this.cards[c.id] = { el, prog: el.querySelector('.prog i') };
    }
    if (typeof renderKeys === 'function') renderKeys();
  }
};
function renderDeck() {
  for (const c of CATS()) {
    const card = DECKUI.cards[c.id]; if (!card) continue; const el = card.el, id = c.id;
    const editLock = (fn) => () => { if (isRec() || blocked()) return toast('Modifica la lista a registrazione ferma'); fn(); saveDeck(); renderDeck(); };
    if (c.type === 'single') {
      const f = dk(id), fn = el.querySelector('.fname');
      fn.textContent = f ? nameOf(f) : 'Nessun file caricato'; fn.classList.toggle('set', !!f);
      el.querySelector('[data-a="play"]').disabled = !f; el.querySelector('.tag').textContent = E.voices[id] ? 'IN ONDA' : '';
      continue;
    }
    const arr = dkList(id), ul = el.querySelector('.list'); ul.replaceChildren();
    if (c.type === 'loop') {
      const L = loopSt(id);
      if (!arr.length) ul.append(emptyLi('Aggiungi uno o più brani: girano in loop uno dopo l\'altro.'));
      arr.forEach((fid, i) => {
        const on = i === L.idx && L.status === 'playing';
        ul.append(li((i === L.idx ? 'cur ' : '') + (on ? 'play' : ''), on ? '▶' : '•', nameOf(fid), () => { if (blocked()) return; if (L.status === 'playing') stopVoice(id); L.idx = i; L.pos = 0; if (L.status !== 'held') loopPlay(id); renderDeck(); }, [
          ['▲', 'Sposta su', editLock(() => moveIn(arr, i, -1))],
          ['✕', 'Togli dalla lista', editLock(() => { if (i === L.idx && L.status === 'playing') { stopVoice(id); L.status = 'stopped'; } arr.splice(i, 1); if (L.idx >= arr.length) L.idx = 0; })]
        ]));
      });
      el.querySelector('.tag').textContent = { playing: 'IN ONDA', paused: 'IN PAUSA', held: 'IN ATTESA', stopped: '' }[L.status];
    } else {
      const nx = E.next[id] || 0;
      if (!arr.length) ul.append(emptyLi('Aggiungi i brani nell\'ordine in cui li lanci.'));
      arr.forEach((fid, i) => {
        const playing = E.voices[id] && E.voices[id].extra.capIdx === i;
        ul.append(li((playing ? 'play ' : '') + (i === nx ? 'next' : ''), c === firstList() && i < 9 ? `[${i + 1}]` : `${i + 1}`, nameOf(fid), () => listPlay(id, i), [
          ['▲', 'Sposta su', editLock(() => moveIn(arr, i, -1))],
          ['✕', 'Togli dalla lista', editLock(() => arr.splice(i, 1))]
        ]));
      });
      const b = el.querySelector('[data-a="play"]'); b.innerHTML = arr[nx] ? `▶ LANCIA [${nx + 1}]` : '▶ LANCIA'; b.disabled = !arr[nx];
      el.querySelector('.tag').textContent = E.voices[id] ? 'IN ONDA' : '';
    }
  }
  if (typeof HELP !== 'undefined') HELP.refresh();
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
/* Curva dell'EQ di una fonte (per il disegno nelle strisce) */
const EQR = {
  curve(ch, p) {
    if (!this.ctx) { this.ctx = new OfflineAudioContext(1, 1, 48000); this.freqs = new Float32Array(72).map((_, i) => 20 * Math.pow(1000, i / 71)); this.mag = new Float32Array(72); this.ph = new Float32Array(72); }
    const st = new Strip(this.ctx, ch, null); st.set(p, false); const db = new Float32Array(72).fill(p.gain || 0);
    for (const f of [st.hp, st.lo, st.mi, st.hi].filter(Boolean)) { f.getFrequencyResponse(this.freqs, this.mag, this.ph); for (let i = 0; i < 72; i++) db[i] += 20 * Math.log10(Math.max(1e-6, this.mag[i])); }
    return db;
  },
  draw(cv, ch, p) {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 140, h = cv.clientHeight || 36; if (cv.width !== Math.round(w * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
    const col = getComputedStyle(cv).getPropertyValue('--cc').trim() || '#00e5ff', db = this.curve(ch, p), Y = (v) => h / 2 - Math.max(-15, Math.min(15, v)) / 15 * (h / 2 - 3);
    g.strokeStyle = 'rgba(111,135,166,.35)'; g.lineWidth = 1; g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
    for (const f of [100, 1000, 10000]) { const x = Math.log(f / 20) / Math.log(1000) * w; g.beginPath(); g.moveTo(x, 2); g.lineTo(x, h - 2); g.stroke(); }
    g.beginPath(); for (let i = 0; i < 72; i++) { const x = i / 71 * w, y = Y(db[i]); i ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.strokeStyle = col; g.lineWidth = 2; g.stroke(); g.lineTo(w, h / 2); g.lineTo(0, h / 2); g.closePath(); g.globalAlpha = 0.15; g.fillStyle = col; g.fill(); g.globalAlpha = 1;
  }
};
/* Disegno degli indicatori di livello: orizzontali (compatto) o verticali con scala (console) */
function drawMeter(cv, db, ref) {
  const dpr = window.devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight; if (!w || !h) return;
  if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
  const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
  const vert = h > w, L = vert ? h : w, pos = (d) => Math.max(0, Math.min(1, (d + 60) / 60)) * L;
  const now2 = performance.now(); if (db > ref.hold || now2 - ref.holdT > 1500) { ref.hold = db; ref.holdT = now2; }
  g.fillStyle = '#02040a'; g.fillRect(0, 0, w, h);
  const grd = vert ? g.createLinearGradient(0, h, 0, 0) : g.createLinearGradient(0, 0, w, 0);
  grd.addColorStop(0, '#00c8a0'); grd.addColorStop(0.62, '#3aff9a'); grd.addColorStop(0.8, '#ffe600'); grd.addColorStop(0.92, '#ff8a00'); grd.addColorStop(1, '#ff2b4a');
  g.fillStyle = grd; const lv = pos(db);
  if (vert) { const bw = Math.max(6, w - 16); g.fillRect(w - bw, h - lv, bw, lv); g.fillStyle = '#fff'; g.fillRect(w - bw, h - pos(ref.hold) - 1, bw, 2);
    g.fillStyle = 'rgba(111,135,166,.9)'; g.font = '9px "JetBrains Mono", monospace'; g.textAlign = 'right'; g.textBaseline = 'middle';
    for (const d of [0, -6, -12, -24, -36, -48]) { const y = h - pos(d); g.fillRect(w - bw - 3, y, 2, 1); if (w > 22) g.fillText(String(-d), w - bw - 4, Math.max(5, Math.min(h - 5, y))); }
  } else { g.fillRect(0, 0, lv, h); g.fillStyle = '#fff'; g.fillRect(pos(ref.hold) - 1, 0, 2, h); }
  if (ref.out) { ref.out.textContent = ref.hold <= -59 ? '−∞' : ref.hold.toFixed(1); ref.out.classList.toggle('clip', ref.hold > -1); }
}
const inmicHtml = (pre) => `<label class="fad inmic" for="${pre}-in" title="Guadagno del microfono: alza il livello registrato"><span class="fl">Ingresso mic</span><span class="row" style="flex-wrap:nowrap"><input type="range" id="${pre}-in" min="0" max="30" step="1" style="flex:1"><output class="v">+0 dB</output></span></label>`;
const mixStyleNow = () => ORIENT.wide ? (S.settings.mixStyleWide || 'bars') : (S.settings.mixStyle || 'console');
/* Mixer a barre: "Gain ed EQ" si apre in un pannello sopra la riga, fuori dal mixer */
function placeEqPop(de) {
  const pop = de._pop || (de._pop = de.querySelector('.eqpop'));
  if (!de.open) { if (pop.parentElement !== de) de.append(pop); pop.classList.remove('eqfloat', 'below'); pop.style.cssText = ''; delete pop.dataset.moved; return; }
  document.querySelectorAll('#liveStrips details.eq[open]').forEach(o => { if (o !== de) o.open = false; });
  // Menu a comparsa agganciato all'ingranaggio, sopra la riga (sotto se in alto non c'è spazio); si sposta trascinando la testata
  if (pop.parentElement !== document.body) { document.body.append(pop); pop.classList.add('eqfloat'); pop.style.setProperty('--cc', getComputedStyle(de.closest('.strip')).getPropertyValue('--cc')); dragPop(pop); }
  if (pop.dataset.moved) return;
  const r = de.querySelector('summary').getBoundingClientRect(), w = Math.min(380, innerWidth - 24); pop.style.width = w + 'px';
  const h = pop.offsetHeight, left = Math.max(12, Math.min(innerWidth - w - 12, r.right - w + 14));
  const below = r.top - h - 12 < 8; pop.classList.toggle('below', below);
  pop.style.left = left + 'px'; pop.style.top = (below ? r.bottom + 10 : Math.max(8, r.top - h - 10)) + 'px';
  pop.style.setProperty('--ax', Math.max(14, Math.min(w - 14, r.left + r.width / 2 - left)) + 'px');
}
function dragPop(pop) {
  if (pop._drag) return; pop._drag = true; const hd = pop.querySelector('.eqpop-h'); if (!hd) return;
  hd.title = 'Trascina per spostare';
  hd.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return; e.preventDefault(); hd.setPointerCapture(e.pointerId);
    const r = pop.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
    const mv = (ev) => { pop.dataset.moved = '1'; pop.classList.remove('below'); pop.style.setProperty('--ax', '-99px');
      pop.style.left = Math.max(0, Math.min(innerWidth - r.width, ev.clientX - dx)) + 'px'; pop.style.top = Math.max(0, Math.min(innerHeight - 40, ev.clientY - dy)) + 'px'; };
    const up = () => { hd.removeEventListener('pointermove', mv); hd.removeEventListener('pointerup', up); };
    hd.addEventListener('pointermove', mv); hd.addEventListener('pointerup', up);
  });
}
function buildMixer(host, mix, { onChange, meters = false, mutes = null, cats = null }) {
  host.replaceChildren(); const refs = {};
  let style = host.id === 'liveStrips' ? mixStyleNow() : (S.settings.mixStyle || 'console'); if (style === 'bars' && host.id !== 'liveStrips') style = 'console';
  host.classList.toggle('console', style === 'console'); host.classList.toggle('bars', style === 'bars');
  const bars = style === 'bars', chs = allOf(cats || CATS()), rows = Math.ceil(chs.length / 2);
  chs.forEach((ch, k) => { if (!mix[ch]) mix[ch] = fullP(ch, S.defaults[ch], cats); });
  for (const [k, ch] of chs.entries()) {
    const p = mix[ch]; const d = document.createElement('div'); d.className = 'strip'; d.dataset.ch = ch; const pre = host.id + '-' + ch;
    d.style.setProperty('--cc', chColor(ch, cats || CATS()));
    if (bars) { d.style.gridColumn = String(Math.floor(k / rows) + 1); d.style.gridRow = String(k % rows + 1); }
    d.innerHTML = `<div class="h"><i class="dot"></i><b>${chLabel(ch, cats || CATS())}</b>${mutes && ch === 'voice' ? `<span class="gled" ${S.settings.gate && NS.gate ? '' : 'hidden'} title="Noise gate: verde = microfono aperto">GATE</span>` : ''}<span class="v"></span></div>
      <canvas class="eqc" title="Curva dell'EQ: apri «Gain ed EQ» per cambiarla"></canvas>
      <div class="cs-main">
        ${meters ? '<div class="mcol"><output class="pk">−∞</output><canvas class="mtr"></canvas></div>' : ''}
        <label class="fad" for="${pre}-vol"><span class="fl">${mutes ? 'Volume cuffia' : 'Volume'}</span><input type="range" class="vol" id="${pre}-vol" min="0" max="150" step="1"></label>
      </div>
      <div class="cs-btns"><button class="rst" title="Riporta al predefinito">↺</button>${mutes ? '<button class="mute" aria-pressed="false">MUTE</button>' : ''}</div>
      ${mutes && ch === 'voice' && !bars ? inmicHtml(pre) : ''}
      <details class="eq"><summary title="Gain, EQ${mutes && ch === 'voice' ? ' e ingresso del microfono' : ''}">Gain ed EQ</summary><div class="eqpop">${bars ? `<div class="eqpop-h"><b>${chLabel(ch, cats || CATS())}</b><button class="eqx" title="Chiudi">✕</button></div>` + (mutes && ch === 'voice' ? inmicHtml(pre) : '') : ''}<div class="knobs"></div><button class="def">★ Usa questi valori come predefiniti</button></div></details>`;
    const kn = d.querySelector('.knobs'); const ctl = {}; const eqc = d.querySelector('.eqc');
    const redrawEq = () => requestAnimationFrame(() => EQR.draw(eqc, ch, p));
    for (const K of KNOBS) {
      if (K.voice && ch !== 'voice') continue;
      const id = `${pre}-${K.k}`;
      const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = K.label;
      const r = document.createElement('input'); r.type = 'range'; r.id = id; r.min = K.min; r.max = K.max; r.step = K.step;
      const o = document.createElement('output');
      r.addEventListener('input', () => { p[K.k] = +r.value; o.textContent = fmtK(p[K.k], K.unit); onChange(ch); redrawEq(); });
      r.addEventListener('dblclick', () => { r.value = K.k === 'comp' ? fullP(ch).comp : 0; r.dispatchEvent(new Event('input')); });
      kn.append(lab, r, o); ctl[K.k] = { r, o, unit: K.unit };
    }
    if (ch === 'voice') {
      const w = document.createElement('label'); w.className = 'chk';
      w.innerHTML = `<input type="checkbox" id="${pre}-hp"> Taglia i bassi sotto 85 Hz (rimbombo)`;
      const cb = w.querySelector('input'); cb.addEventListener('change', () => { p.hp = cb.checked; onChange(ch); redrawEq(); });
      kn.append(document.createElement('span'), w); ctl.hp = { cb };
    }
    eqc.addEventListener('click', () => { const de = d.querySelector('details.eq'); de.open = !de.open; });
    if (bars) { const de = d.querySelector('details.eq'); de.addEventListener('toggle', () => placeEqPop(de)); d.querySelector('.eqx').addEventListener('click', () => { de.open = false; }); }
    const vol = d.querySelector('input.vol'), vv = d.querySelector('.h .v');
    vol.addEventListener('input', () => { p.vol = +vol.value; vv.textContent = p.vol + '%'; onChange(ch); });
    vol.addEventListener('dblclick', () => { vol.value = S.defaults[ch].vol; vol.dispatchEvent(new Event('input')); });
    const refresh = () => {
      vol.value = p.vol; vv.textContent = p.vol + '%';
      for (const K of KNOBS) if (ctl[K.k]) { ctl[K.k].r.value = p[K.k]; ctl[K.k].o.textContent = fmtK(p[K.k], K.unit); }
      if (ctl.hp) ctl.hp.cb.checked = !!p.hp; redrawEq();
    };
    refresh();
    d.querySelector('.rst').addEventListener('click', () => { Object.assign(p, fullP(ch, S.defaults[ch])); refresh(); onChange(ch); toast(`${chLabel(ch, cats || CATS())}: livelli predefiniti ripristinati`); });
    d.querySelector('.def').addEventListener('click', () => { S.defaults[ch] = { ...p }; saveDeck(); toast(`${chLabel(ch, cats || CATS())}: questi valori ora sono il predefinito`); });
    if (mutes) { const m = d.querySelector('.mute'); m.setAttribute('aria-pressed', String(mutes[ch])); m.addEventListener('click', () => { mutes[ch] = !mutes[ch]; m.setAttribute('aria-pressed', String(mutes[ch])); onChange(ch); }); }
    const inR = d.querySelector(`#${pre}-in`);
    if (inR) { inR.value = S.settings.micGain || 0; inR.nextElementSibling.textContent = '+' + inR.value + ' dB'; inR.addEventListener('input', () => setMicGain(+inR.value)); }
    host.append(d); refs[ch] = { cv: d.querySelector('.mtr'), out: d.querySelector('.pk'), hold: -100, holdT: 0, refresh };
  }
  if (meters) {
    const m = document.createElement('div'); m.className = 'strip master';
    m.innerHTML = `<div class="h"><i class="dot"></i><b>LIVELLO VOCE</b></div>
      <div class="lufs"><output class="lv-n">—</output><small>LUFS (3 s)</small></div>
      <div class="cs-main"><div class="mcol"><output class="pk">−∞</output><canvas class="mtr"></canvas></div><div class="lv-scale"><span>alto</span><span>buono</span><span>basso</span></div></div>
      <span class="note lv-hint">Parla: misuro la voce come suonerà nel file.</span>`;
    if (bars) m.style.gridRow = `1 / span ${rows}`;
    host.append(m); refs.master = { cv: m.querySelector('.mtr'), out: m.querySelector('.pk'), hold: -100, holdT: 0, num: m.querySelector('.lv-n'), hint: m.querySelector('.lv-hint') };
  }
  return refs;
}
/* Misura del volume della voce dal vivo (filtro K come la norma LUFS) */
const LV = {
  buf: null, hist: [],
  setup() {
    const c = E.ctx, hs = c.createBiquadFilter(), hp = c.createBiquadFilter(); hs.type = 'highshelf'; hs.frequency.value = 1500; hs.gain.value = 4; hp.type = 'highpass'; hp.frequency.value = 38; hp.Q.value = 0.5;
    this.an = c.createAnalyser(); this.an.fftSize = 32768; E.micGain.connect(hs); hs.connect(hp); hp.connect(this.an); this.buf = new Float32Array(this.an.fftSize);
  },
  read() {
    if (!this.an) return null; this.an.getFloatTimeDomainData(this.buf);
    const n = Math.min(this.buf.length, Math.round(0.4 * E.sr)); let ms = 0; for (let i = this.buf.length - n; i < this.buf.length; i++) ms += this.buf[i] * this.buf[i]; ms /= n;
    const t = performance.now(); this.hist.push([t, ms]); while (this.hist.length && t - this.hist[0][0] > 3000) this.hist.shift();
    const st = this.hist.reduce((a, x) => a + x[1], 0) / this.hist.length;
    const L = (v) => v > 1e-10 ? -0.691 + 10 * Math.log10(v) + 3.01 : -100; // +3 dB: nel file la voce è su due canali
    return { m: L(ms), s: L(st) };
  }
};
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
      const set = (ch, an) => { const r = meterRefs[ch]; if (r && r.cv) drawMeter(r.cv, peakDb(an), r); };
      set('voice', E.micAn); for (const ch of chsOf()) if (E.an[ch]) set(ch, E.an[ch]);
      const mr = meterRefs.master; if (mr) {
        set('master', E.micAn); const lv = LV.read();
        if (lv) { const v = lv.s; mr.num.textContent = v < -70 ? '—' : v.toFixed(1); const st = v < -70 ? ['Parla: misuro la voce come suonerà nel file.', 'var(--dim)'] : v < -30 ? ['Molto basso: alza «Ingresso mic» o avvicinati al microfono', 'var(--rec)'] : v < -24 ? ['Basso: alza un po\' «Ingresso mic»', 'var(--warn)'] : v > -10 ? ['Troppo alto: abbassa «Ingresso mic»', 'var(--rec)'] : ['Buono', 'var(--ok)'];
          mr.hint.textContent = st[0]; mr.num.style.color = st[1]; }
      }
      if (!$('devModal').hidden) {
        const db = peakDb(E.micAn); const el = $('dMicMeter'); el.style.width = Math.max(0, Math.min(100, (db + 60) / 60 * 100)) + '%'; el.style.setProperty('--mw', (el.parentElement.clientWidth || 300) + 'px');
        const ts = performance.now(); if (db > (MICPK.v - 0.5) || ts - MICPK.t > 2000) { MICPK.v = db; MICPK.t = ts; }
        const lv = $('dMicLvl'); const pk = MICPK.v;
        lv.textContent = pk < -45 ? 'non sento niente' : pk < -24 ? `basso (${Math.round(pk)} dB): alza il guadagno` : pk > -2 ? `troppo alto (${Math.round(pk)} dB): abbassa il guadagno` : `buono (${Math.round(pk)} dB)`;
        lv.style.color = pk < -24 || pk > -2 ? 'var(--warn)' : 'var(--ok)';
      }
    }
    const prog = (ch, el) => { const v = E.voices[ch]; el.style.width = v ? Math.min(100, posOf(v, now()) / v.dur * 100) + '%' : '0%'; };
    for (const id in DECKUI.cards) prog(id, DECKUI.cards[id].prog);
    TP.frame(t || performance.now());
    CAM.render(t || performance.now()); OUT.render(t || performance.now());
    const tn = performance.now(); if (!FPS.t) FPS.t = tn;
    if (tn - FPS.t >= 1000) { const sec = (tn - FPS.t) / 1000; const cf = Math.round(CAM.camFrames / sec), ef = Math.round((V.encFrames || 0) / sec); CAM.camFrames = 0; V.encFrames = 0; FPS.t = tn;
      const el = $('vFps'); if (el) el.textContent = CAM.ok ? `Webcam: ${cf} fps` + (V.active && R.state === 'rec' ? ` · video registrato: ${ef} fps` : '') + (cf && cf < 20 ? ' — la webcam è lenta: di solito è poca luce' : '') : '—'; }
    if (R.state === 'rec' && V.active) V.frame(OUT.pass ? CAM.canvas : OUT.cv, tlAt(now()));
    if (LS && R.state === 'hold') paintWave();
    if (PV && PV.playing) PV.tick();
    if (PV && PV.vid) PV.vid.draw(PV.position());
    if (ED.open) ED.frame();
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
    s.mix = normMix(s.mix, catsOf(s));
    const el = document.createElement('li'); if (s.id === selId) el.classList.add('sel');
    const dur = sessDur(s);
    const missing = [...new Set(s.segs.map(g => g.fileId))].filter(id => !S.names.has(id));
    el.innerHTML = `<div class="row"><input aria-label="Nome sessione" style="flex:1;min-width:0"><button class="go-mix main-act">Ascolta, mixa ed esporta</button><button class="xfer" title="Salva la sessione in un file .onair per aprirla su un altro dispositivo">⬇ Trasferisci</button><button class="del danger">Elimina</button></div>
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
    el.querySelector('.xfer').addEventListener('click', (ev) => exportSessionFile(s, ev.currentTarget));
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
  const dur = sessDur(s);
  const hasV = s.video && s.video.nGroups > 0;
  const ytOn = S.settings.plat.yt.ch === '1';
  if (ytOn && !s.chapters) s.chapters = autoChapters(s);
  box.innerHTML = `<div class="exl">${hasV ? `<canvas class="pvv" width="${s.video.w}" height="${s.video.h}"></canvas>` : ''}<div class="pv"><button class="pv-play" aria-label="Ascolta">▶</button><input type="range" class="pv-seek" min="0" max="${dur.toFixed(2)}" step="0.1" value="0" aria-label="Posizione"><output class="pv-t">00:00:00 / ${fmt(dur, false)}</output></div>
    <p class="note" style="margin:0">Anteprima del mix: muovi i livelli mentre ascolti. Qui il volume non è ancora normalizzato: il file esportato suonerà più forte.</p>
    <div class="row"><button class="ed-open main-act" title="Timeline a tracce: taglia, sposta, dividi, volumi e dissolvenze">🎬 Montaggio</button>${!isIdentity(s) || (s.vmutes || []).length ? '<span class="note">Sessione montata · durata ' + fmt(dur, false) + '</span>' : ''}</div>
    </div><div class="exr"><div class="strips"></div>
    ${ytOn ? `<h4 style="margin:6px 0 0;font:700 12px var(--f-display);letter-spacing:.16em;color:var(--violet)">CAPITOLI YOUTUBE</h4>
    <div class="chaps" style="display:flex;flex-direction:column;gap:6px"></div>
    <div class="row"><button class="ch-add">＋ Capitolo</button><button class="ch-auto">↻ Rigenera dagli stacchetti</button><button class="ch-copy main-act">📋 Copia per la descrizione</button><button class="ch-here" title="Aggiunge un capitolo nel punto dell'anteprima">＋ Qui (anteprima)</button></div>
    <span class="note ch-warn"></span>` : ''}
    <div class="exb"><button class="ex-sp">🎧 ESPORTA PER SPOTIFY</button><button class="ex-yt" ${hasV ? '' : 'disabled title="Questa sessione non ha video"'}>▶ ESPORTA PER YOUTUBE</button></div>
    <details class="eq"><summary>Esportazione personalizzata</summary>
    <div class="form" style="margin-top:8px"><label>Formato</label><select class="fmt"><option value="mp3-128">MP3 128 kbps</option><option value="mp3-192">MP3 192 kbps</option><option value="wav">WAV senza perdita</option></select>
    <label>Volume</label><select class="norm"><option value="-16">−16 LUFS</option><option value="-14">−14 LUFS</option><option value="-19">−19 LUFS</option><option value="off">Lascia com'è</option></select></div>
    <div class="row" style="margin-top:8px"><button class="run">ESPORTA</button></div></details>
    <div class="row"><span class="note msg"></span></div><div class="bar" hidden><i></i></div><div class="out"></div></div>`;
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
  buildMixer(host, s.mix, { cats: catsOf(s), onChange: (ch) => { if (PV) PV.set(ch); clearTimeout(saveT); saveT = setTimeout(() => DB.put('sessions', s.id, s), 400); } });
  if (s.video && s.video.nGroups > 0) { const o = document.createElement('option'); o.value = 'webm'; o.textContent = 'Video WebM (YouTube)'; box.querySelector('.fmt').append(o); }
  if (typeof lamejs === 'undefined') { box.querySelector('.fmt').value = 'wav'; box.querySelectorAll('.fmt option').forEach(o => { if (o.value !== 'wav' && o.value !== 'webm') o.disabled = true; }); }
  const saveS = () => DB.put('sessions', s.id, s);
  box.querySelector('.ed-open').addEventListener('click', () => ED.start(s, box));
  // Capitoli
  if (ytOn) {
    const list = box.querySelector('.chaps'), warn = box.querySelector('.ch-warn');
    const render = () => {
      list.replaceChildren(); s.chapters.sort((a, b) => a.t - b.t);
      s.chapters.forEach((c, i) => {
        const row = document.createElement('div'); row.className = 'chap';
        const ti = document.createElement('input'); ti.className = 't'; ti.value = fmtCh(c.t); ti.setAttribute('aria-label', 'Orario capitolo');
        const tx = document.createElement('input'); tx.value = c.title; tx.setAttribute('aria-label', 'Titolo capitolo');
        const del = document.createElement('button'); del.textContent = '✕'; del.title = 'Elimina capitolo';
        ti.addEventListener('change', () => { const v = parseCh(ti.value); if (v == null) { ti.classList.add('bad'); return; } ti.classList.remove('bad'); c.t = Math.min(v, Math.floor(dur)); saveS(); render(); });
        tx.addEventListener('input', () => { c.title = tx.value; saveS(); check(); });
        del.addEventListener('click', () => { s.chapters.splice(i, 1); saveS(); render(); });
        row.append(ti, tx, del); list.append(row);
      });
      check();
    };
    const check = () => { const p = chapterProblems(s.chapters, dur); warn.textContent = p.length ? '⚠ ' + p.join(' · ') : '✓ Rispetta le regole dei capitoli di YouTube'; warn.style.color = p.length ? 'var(--warn)' : 'var(--ok)'; };
    box.querySelector('.ch-add').addEventListener('click', () => { const last = s.chapters.length ? s.chapters[s.chapters.length - 1].t : 0; s.chapters.push({ t: Math.min(Math.floor(dur) - 1, last + 30), title: 'Nuovo capitolo' }); saveS(); render(); });
    box.querySelector('.ch-here').addEventListener('click', () => { const t = Math.floor(PV ? PV.position() : 0); s.chapters.push({ t, title: 'Nuovo capitolo' }); saveS(); render(); toast('Capitolo aggiunto a ' + fmtCh(t)); });
    box.querySelector('.ch-auto').addEventListener('click', () => { s.chapters = autoChapters(s); saveS(); render(); toast('Capitoli ricreati dagli stacchetti'); });
    box.querySelector('.ch-copy').addEventListener('click', () => copyText(chaptersText(s.chapters), 'Capitoli copiati: incollali nella descrizione del video'));
    render();
  }
  const runExport = async (opts, btn) => {
    box.querySelectorAll('.exb button, .run').forEach(b => { b.disabled = true; }); if (PV) PV.stop();
    const bar = box.querySelector('.bar'), bi = bar.querySelector('i'), msg = box.querySelector('.msg'), out = box.querySelector('.out');
    bar.hidden = false; out.replaceChildren();
    const norm = opts.target != null; opts.normalize = norm;
    try {
      const res = await exportSession(s, opts, (phase, p) => {
        const tot = norm ? (phase + p) / 2 : p; bi.style.width = (tot * 100).toFixed(1) + '%';
        msg.textContent = norm && phase === 0 ? 'Misuro il volume…' : 'Creo il file…';
      });
      const url = URL.createObjectURL(res.blob); const ext = opts.format === 'wav' ? 'wav' : opts.format === 'webm' ? 'webm' : 'mp3';
      const a = document.createElement('a'); a.className = 'dl'; a.href = url;
      a.download = (s.name || 'puntata').replace(/[\\/:*?"<>|]+/g, '-') + (opts.tag ? ' - ' + opts.tag : '') + '.' + ext;
      a.textContent = '⬇ Scarica ' + a.download;
      out.append(a);
      msg.textContent = `Pronto · ${(res.blob.size / 1048576).toFixed(1)} MB` + (res.lufs != null && isFinite(res.lufs) ? ` · volume originale ${res.lufs.toFixed(1)} LUFS → ${opts.target}` : '');
      if (opts.format === 'webm' && ytOn && s.chapters && s.chapters.length) {
        const p = document.createElement('p'); p.className = 'note'; p.textContent = 'Ricorda: incolla i capitoli nella descrizione del video (📋 Copia per la descrizione).'; out.append(p);
      }
    } catch (e) { console.error(e); msg.textContent = 'Esportazione non riuscita: ' + e.message; }
    box.querySelectorAll('.exb button, .run').forEach(b => { b.disabled = false; }); if (!hasV) box.querySelector('.ex-yt').disabled = true;
  };
  const tgt = (v) => v === 'off' ? null : +v;
  box.querySelector('.ex-sp').addEventListener('click', () => { const sp = S.settings.plat.sp; runExport({ format: typeof lamejs === 'undefined' ? 'wav' : sp.fmt, target: tgt(sp.lufs), tag: 'Spotify' }); });
  box.querySelector('.ex-yt').addEventListener('click', () => { const yt = S.settings.plat.yt; runExport({ format: 'webm', target: tgt(yt.lufs), abr: +yt.abr, tag: 'YouTube' }); });
  box.querySelector('.run').addEventListener('click', () => runExport({ format: box.querySelector('.fmt').value, target: tgt(box.querySelector('.norm').value), abr: +S.settings.plat.yt.abr }));
}

/* ------------------------------------------------------------------ File .onair (backup e trasferimento)
 * Formato: "ONAIR1\n" + lunghezza intestazione (4 byte) + intestazione JSON + dati binari in fila. */
const PACK = {
  async build(kind, items, label) {
    const head = { kind, app: APP.version, created: Date.now(), label, entries: [] }; const parts = [];
    for (const it of items) {
      const v = it.value; const e = { store: it.store, key: it.key };
      if (it.store === 'files') { e.t = 'file'; e.meta = { name: v.name, type: v.type }; e.len = v.blob.size; parts.push(v.blob); }
      else if (v instanceof Int16Array) { e.t = 'i16'; e.len = v.byteLength; parts.push(v.buffer.slice(v.byteOffset, v.byteOffset + v.byteLength)); }
      else if (v && Array.isArray(v.ch) && v.ch.length && v.ch[0].d) { e.t = 'vgroup'; e.meta = { idx: v.idx, t0: v.t0, t1: v.t1, ch: v.ch.map(c => ({ ts: c.ts, key: c.key, n: c.d.byteLength })) }; e.len = v.ch.reduce((a, c) => a + c.d.byteLength, 0); for (const c of v.ch) parts.push(c.d); }
      else { e.t = 'json'; const b = new TextEncoder().encode(JSON.stringify(v)); e.len = b.byteLength; parts.push(b); }
      head.entries.push(e);
    }
    const hb = new TextEncoder().encode(JSON.stringify(head)), lb = new Uint8Array(4); new DataView(lb.buffer).setUint32(0, hb.byteLength, true);
    return new Blob([new TextEncoder().encode('ONAIR1\n'), lb, hb, ...parts], { type: 'application/octet-stream' });
  },
  async read(file, onProg) {
    const magic = new TextDecoder().decode(await file.slice(0, 7).arrayBuffer());
    if (magic !== 'ONAIR1\n') throw new Error('non è un file di OnAir');
    const hl = new DataView(await file.slice(7, 11).arrayBuffer()).getUint32(0, true);
    const head = JSON.parse(new TextDecoder().decode(await file.slice(11, 11 + hl).arrayBuffer()));
    let pos = 11 + hl; const out = [];
    for (let i = 0; i < head.entries.length; i++) {
      const e = head.entries[i], sl = file.slice(pos, pos + e.len); pos += e.len; let value;
      if (e.t === 'file') value = { name: e.meta.name, type: e.meta.type, blob: new Blob([await sl.arrayBuffer()], { type: e.meta.type }) };
      else if (e.t === 'i16') value = new Int16Array(await sl.arrayBuffer());
      else if (e.t === 'vgroup') { const ab = await sl.arrayBuffer(); let o = 0; value = { idx: e.meta.idx, t0: e.meta.t0, t1: e.meta.t1, ch: e.meta.ch.map(c => { const d = ab.slice(o, o + c.n); o += c.n; return { ts: c.ts, key: c.key, d }; }) }; }
      else value = JSON.parse(new TextDecoder().decode(await sl.arrayBuffer()));
      out.push({ store: e.store, key: e.key, value });
      if (onProg && i % 20 === 0) onProg(i / head.entries.length);
    }
    return { head, items: out };
  },
  save(blob, name) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name.replace(/[\\/:*?"<>|]+/g, '-'); document.body.append(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 60000);
  }
};
const LOCAL_KEYS = ['micId', 'outId', 'camId'];
async function exportStudio() {
  const msg = $('bkMsg'); msg.textContent = 'Preparo il file…';
  const items = [];
  for (const k of ['deck', 'settings', 'prompter']) { const v = await DB.get('state', k); if (v) items.push({ store: 'state', key: k, value: v }); }
  const ids = new Set([...deckIds(), 'ov-bg', 'ov-logo'].filter(Boolean));
  for (const id of ids) { const f = await DB.get('files', id); if (f) items.push({ store: 'files', key: id, value: f }); }
  const blob = await PACK.build('studio', items, 'Studio');
  const d = new Date(); PACK.save(blob, `OnAir studio ${d.toLocaleDateString('it-IT').replace(/\//g, '-')}.onair`);
  msg.textContent = `File pronto (${(blob.size / 1048576).toFixed(1)} MB): lo trovi nei download.`;
}
async function importStudio(file) {
  const msg = $('bkMsg');
  try {
    const { head, items } = await PACK.read(file, (p) => { msg.textContent = `Leggo il file… ${Math.round(p * 100)}%`; });
    if (head.kind !== 'studio') throw new Error(head.kind === 'session' ? 'questo file è una sessione: aprilo da Sessioni → Importa sessione' : 'tipo di file sconosciuto');
    if (isRec() || blocked()) throw new Error('ferma prima la registrazione');
    await applyStudio(items, null);
    msg.textContent = 'Studio caricato: riavvio OnAir…'; toast('Studio caricato: riavvio OnAir');
    setTimeout(() => location.reload(), 1200);
  } catch (e) { console.error(e); msg.textContent = 'Non riesco a caricare lo studio: ' + e.message; }
}
async function exportSessionFile(s, btn) {
  const old = btn.textContent; btn.disabled = true; btn.textContent = 'Preparo…';
  try {
    const items = [{ store: 'sessions', key: s.id, value: s }];
    const nA = Math.ceil(s.len / s.sr) + 1;
    for (let i = 0; i <= nA; i++) { const c = await DB.get('chunks', ckey(s.id, i)); if (c) items.push({ store: 'chunks', key: ckey(s.id, i), value: c }); }
    if (s.video) for (let i = 0; i < (s.video.nGroups || 0); i++) { const g = await DB.get('chunks', vkey(s.id, i)); if (g) items.push({ store: 'chunks', key: vkey(s.id, i), value: g }); }
    for (const id of new Set(s.segs.map(g => g.fileId))) { const f = await DB.get('files', id); if (f) items.push({ store: 'files', key: id, value: f }); }
    const blob = await PACK.build('session', items, s.name);
    PACK.save(blob, (s.name || 'sessione') + '.onair');
    toast(`Sessione salvata (${(blob.size / 1048576).toFixed(1)} MB): la trovi nei download`);
  } catch (e) { console.error(e); toast('Non riesco a salvare la sessione: ' + e.message); }
  btn.disabled = false; btn.textContent = old;
}
async function importSessionFile(file) {
  try {
    toast('Leggo la sessione…');
    const { head, items } = await PACK.read(file);
    if (head.kind !== 'session') throw new Error(head.kind === 'studio' ? 'questo file è uno studio: caricalo da Impostazioni → Backup e trasferimento' : 'tipo di file sconosciuto');
    let sid = null;
    for (const it of items) { if (it.store === 'files' && await DB.get('files', it.key)) continue; await DB.put(it.store, it.key, it.value); if (it.store === 'sessions') sid = it.key; if (it.store === 'files') S.names.set(it.key, it.value.name); }
    toast('Sessione importata: «' + head.label + '»'); openSessions(sid);
  } catch (e) { console.error(e); toast('Non riesco a importare: ' + e.message); }
}

/* ------------------------------------------------------------------ Montaggio: timeline a tracce */
const TRK = [
  { ch: 'voice', label: 'VOCE', h: 96 }, { ch: 'intro', label: 'SIGLA', h: 46 }, { ch: 'bg', label: 'SOTTOFONDO', h: 46 }, { ch: 'cap', label: 'CAPITOLI', h: 46 }
];
const CHC = () => { const o = { voice: '#00e5ff' }; for (const c of catsOf(ED.s)) o[c.id] = c.color; for (const c of DEF_CATS()) o[c.id] = o[c.id] || c.color; return o; };
const ED = {
  open: false, s: null, cv: null, g: null, HW: 118, RH: 30, x0: 0, pps: 20, ph: 0, sel: null, selSeg: null, selCh: null, drag: null, undo: [], redo: [], peaks: null, peaksFor: null, dirty: true, saveT: null,
  async start(s, box) {
    this.s = s; TRK.length = 0; TRK.push({ ch: 'voice', label: 'VOCE', h: 96 }, ...catsOf(s).map(c => ({ ch: c.id, label: c.name.toUpperCase().slice(0, 14), h: 46 })));
    this.box = box; this.open = true; this.sel = null; this.selSeg = null; this.selCh = null; this.undo = []; this.redo = [];
    $('edModal').hidden = false; $('edName').textContent = s.name;
    const pvv = box.querySelector('.pvv'); this.pvv = pvv; this.pvvParent = pvv ? pvv.parentElement : null; if (pvv) { $('edVidHost').append(pvv); $('edVidHost').hidden = false; } else $('edVidHost').hidden = true;
    this.cv = $('edCanvas'); this.g = this.cv.getContext('2d'); this.resize();
    if (this.peaksFor !== s.id) { this.peaks = null; $('edMsg').textContent = 'Preparo la forma d\'onda…'; await this.buildPeaks(); this.peaksFor = s.id; }
    $('edMsg').textContent = '';
    this.fit(); this.ph = PV ? PV.position() : 0; this.renderInsp(); this.dirty = true;
  },
  close() {
    this.open = false; $('edModal').hidden = true; if (PV && PV.playing) PV.stop();
    if (this.pvv && this.pvvParent) this.pvvParent.prepend(this.pvv);
    clearTimeout(this.saveT); DB.put('sessions', this.s.id, this.s);
    openSessions(this.s.id);
  },
  async buildPeaks() {
    const s = this.s, sr = s.sr, n = Math.ceil(s.len / sr * 100), pk = new Float32Array(n), per = sr / 100;
    for (let i = 0; i * sr < s.len; i++) {
      const d = await DB.get('chunks', ckey(s.id, i)); if (!d) continue;
      for (let j = 0; j < d.length; j++) { const k = Math.floor((i * sr + j) / per), a = Math.abs(d[j]) / 32768; if (a > pk[k]) pk[k] = a; }
      if (i % 30 === 0) { $('edMsg').textContent = `Preparo la forma d'onda… ${Math.round(i * sr / s.len * 100)}%`; await new Promise(r => setTimeout(r, 0)); }
    }
    this.peaks = pk;
  },
  resize() {
    const r = this.cv.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    for (const t of TRK) t.base = t.base || t.h;
    let f = 1; // nella vista orizzontale le tracce si allargano per riempire lo schermo
    if (ORIENT.wide) { const body = this.cv.closest('.ed-body').getBoundingClientRect(); const baseH = this.RH + TRK.reduce((a, t) => a + t.base, 0) + 8; f = Math.max(1, Math.min(3.2, (body.height - 30) / baseH)); }
    for (const t of TRK) t.h = Math.round(t.base * f);
    this.W = Math.max(320, r.width); this.H = this.RH + TRK.reduce((a, t) => a + t.h, 0) + 8;
    this.cv.width = this.W * dpr; this.cv.height = this.H * dpr; this.cv.style.height = this.H + 'px'; this.g.setTransform(dpr, 0, 0, dpr, 0, 0); this.dirty = true;
  },
  dur() { return sessDur(this.s); },
  fit() { this.pps = Math.max(0.5, (this.W - this.HW - 10) / Math.max(1, this.dur())); this.x0 = 0; this.syncScroll(); },
  zoom(f, atX) { const t = atX != null ? this.xToT(atX) : this.ph; this.pps = Math.max(0.5, Math.min(800, this.pps * f)); this.x0 = Math.max(0, t - ((atX ?? (this.HW + (this.W - this.HW) / 2)) - this.HW) / this.pps); this.clampX(); this.syncScroll(); this.dirty = true; },
  clampX() { const vis = (this.W - this.HW) / this.pps; this.x0 = Math.max(0, Math.min(Math.max(0, this.dur() - vis * 0.9), this.x0)); },
  syncScroll() { const sc = $('edScroll'), vis = (this.W - this.HW) / this.pps; sc.max = Math.max(0, this.dur() - vis * 0.9).toFixed(2); sc.value = this.x0; sc.disabled = +sc.max <= 0; },
  tToX(t) { return this.HW + (t - this.x0) * this.pps; },
  xToT(x) { return Math.max(0, Math.min(this.dur(), this.x0 + (x - this.HW) / this.pps)); },
  trackAt(y) { let yy = this.RH; for (const t of TRK) { if (y >= yy && y < yy + t.h) return { ...t, y: yy }; yy += t.h; } return null; },
  trackY(ch) { let yy = this.RH; for (const t of TRK) { if (t.ch === ch) return yy; yy += t.h; } return 0; },
  segsOf(ch) { return this.s.segs.filter(g => g.ch === ch); },
  segAt(ch, x) { const t = this.xToT(x); const L = this.segsOf(ch); for (let i = L.length - 1; i >= 0; i--) { const g = L[i]; if (t >= g.tStart && t <= g.tEnd) return g; } return null; },
  push() { this.undo.push(EDIT.snap(this.s)); if (this.undo.length > 60) this.undo.shift(); this.redo = []; },
  changed() {
    this.dirty = true; clearTimeout(this.saveT); this.saveT = setTimeout(() => DB.put('sessions', this.s.id, this.s), 500);
    if (PV) { const was = PV.playing, p = PV.position(); PV.invalidate(); if (was) PV.play(Math.min(p, this.dur() - 0.1)); }
    this.ph = Math.min(this.ph, this.dur()); this.clampX(); this.syncScroll(); this.renderInsp();
  },
  doUndo() { if (!this.undo.length) return; this.redo.push(EDIT.snap(this.s)); EDIT.restore(this.s, this.undo.pop()); this.selSeg = null; this.changed(); toast('Annullato'); },
  doRedo() { if (!this.redo.length) return; this.undo.push(EDIT.snap(this.s)); EDIT.restore(this.s, this.redo.pop()); this.selSeg = null; this.changed(); },
  seek(t) { this.ph = Math.max(0, Math.min(this.dur(), t)); if (PV) { PV.pos = this.ph; if (PV.playing) PV.play(this.ph); else PV.seekVideo(this.ph); } this.dirty = true; this.renderInsp(); },
  togglePlay() { if (!PV) return; if (PV.playing) { PV.stop(); this.ph = PV.pos; } else PV.play(this.ph); },
  /* ----- azioni */
  cutSel() { if (!this.sel) return; const { a, b } = this.sel; this.push(); EDIT.cut(this.s, a, b); this.sel = null; this.seek(a); this.changed(); toast(`Tagliati ${(b - a).toFixed(1)} s`); },
  muteSel(on) { if (!this.sel) return; this.push(); if (on) EDIT.mute(this.s, this.sel.a, this.sel.b); else EDIT.unmute(this.s, this.sel.a, this.sel.b); this.changed(); },
  delSeg() { const g = this.selSeg; if (!g) return; this.push(); this.s.segs.splice(this.s.segs.indexOf(g), 1); this.selSeg = null; this.changed(); },
  splitSeg() {
    let g = this.selSeg; if (!g || !(this.ph > g.tStart && this.ph < g.tEnd)) { g = this.s.segs.find(x => x.ch !== 'voice' && this.ph > x.tStart + 0.05 && this.ph < x.tEnd - 0.05 && (!this.selCh || x.ch === this.selCh)); }
    if (!g) return toast('Metti il cursore sopra un blocco musicale per dividerlo');
    this.push(); const r = EDIT.split(this.s, g, this.ph); if (r) { this.selSeg = r; this.changed(); toast('Blocco diviso'); }
  },
  addChapter() { this.s.chapters = this.s.chapters || autoChapters(this.s); this.push(); this.s.chapters.push({ t: Math.floor(this.ph), title: 'Nuovo capitolo' }); this.s.chapters.sort((a, b) => a.t - b.t); this.selChap = this.s.chapters.find(c => c.t === Math.floor(this.ph)); this.changed(); },
  /* ----- input */
  down(e) {
    const r = this.cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; if (x < this.HW) return;
    this.cv.setPointerCapture(e.pointerId);
    if (y < this.RH) {
      const ch = (this.s.chapters || []).find(c => Math.abs(this.tToX(c.t) - x) < 7 && y > this.RH - 16);
      if (ch) { this.push(); this.drag = { kind: 'chap', c: ch, x0: x }; this.selChap = ch; this.selSeg = null; this.renderInsp(); return; }
      this.drag = { kind: 'ruler', x0: x, t0: this.xToT(x) }; return;
    }
    const tr = this.trackAt(y); if (!tr) return;
    if (tr.ch === 'voice') { this.drag = { kind: 'range', x0: x, t0: this.xToT(x) }; this.selSeg = null; this.selCh = 'voice'; return; }
    const g = this.segAt(tr.ch, x); this.selCh = tr.ch; this.selChap = null;
    if (!g) { this.selSeg = null; this.drag = { kind: 'range', x0: x, t0: this.xToT(x) }; this.renderInsp(); this.dirty = true; return; }
    this.selSeg = g; this.sel = null; const xs = this.tToX(g.tStart), xe = this.tToX(g.tEnd);
    const mode = x - xs < 8 ? 'trimL' : xe - x < 8 ? 'trimR' : 'move';
    this.drag = { kind: mode, g, x0: x, st: g.tStart, en: g.tEnd, off: g.off, snap: EDIT.snap(this.s), moved: false };
    this.renderInsp(); this.dirty = true;
  },
  move(e) {
    const r = this.cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, d = this.drag;
    if (!d) { const tr = this.trackAt(y); let cur = 'default'; if (x > this.HW && tr && tr.ch !== 'voice') { const g = this.segAt(tr.ch, x); if (g) { const xs = this.tToX(g.tStart), xe = this.tToX(g.tEnd); cur = (x - xs < 8 || xe - x < 8) ? 'ew-resize' : 'grab'; } } else if (x > this.HW && y > this.RH) cur = 'text'; this.cv.style.cursor = cur; return; }
    const dt = (x - d.x0) / this.pps; if (Math.abs(x - d.x0) > 3) d.moved = true;
    const snapT = (t) => { const cand = [this.ph, 0, ...this.s.segs.filter(o => o !== d.g).flatMap(o => [o.tStart, o.tEnd])]; for (const c of cand) if (Math.abs(this.tToX(c) - this.tToX(t)) < 7) return c; return t; };
    if (d.kind === 'ruler' || d.kind === 'range') { if (d.moved) { const t = this.xToT(x); this.sel = { a: Math.min(t, d.t0), b: Math.max(t, d.t0) }; } }
    else if (d.kind === 'chap') { d.c.t = Math.max(0, Math.floor(this.xToT(x))); }
    else if (d.kind === 'move') { const len = d.en - d.st; let ns = Math.max(0, d.st + dt); ns = snapT(ns); const ne = snapT(ns + len); if (ne !== ns + len) ns = ne - len; d.g.tStart = Math.max(0, ns); d.g.tEnd = d.g.tStart + len; }
    else if (d.kind === 'trimL') { let ns = snapT(Math.min(d.en - 0.1, Math.max(0, d.st + dt))); if (d.off + (ns - d.st) < 0) ns = d.st - d.off; d.g.tStart = ns; d.g.off = d.off + (ns - d.st); }
    else if (d.kind === 'trimR') { const buf = E.buffers.get(d.g.fileId), max = buf ? d.g.tStart + (buf.duration - d.g.off) : Infinity; d.g.tEnd = Math.min(max, Math.max(d.g.tStart + 0.1, snapT(d.en + dt))); }
    this.dirty = true;
  },
  up(e) {
    const d = this.drag; this.drag = null; if (!d) return;
    if (d.kind === 'ruler' || d.kind === 'range') { if (!d.moved) { this.sel = null; this.seek(d.t0); } this.renderInsp(); this.dirty = true; return; }
    if (d.kind === 'chap') { this.s.chapters.sort((a, b) => a.t - b.t); this.changed(); return; }
    if (d.moved) { this.undo.push(d.snap); this.redo = []; this.changed(); } else { this.seek(this.xToT(d.x0)); }
  },
  wheel(e) {
    e.preventDefault(); const r = this.cv.getBoundingClientRect();
    if (e.ctrlKey || e.metaKey) this.zoom(e.deltaY < 0 ? 1.25 : 0.8, e.clientX - r.left);
    else { this.x0 += (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) / this.pps; this.clampX(); this.syncScroll(); this.dirty = true; }
  },
  key(e) {
    if (!this.open) return; const tg = e.target; if (tg && (tg.tagName === 'INPUT' && tg.type !== 'range' || tg.tagName === 'TEXTAREA' || tg.tagName === 'SELECT')) return;
    const k = e.key, ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && k.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? this.doRedo() : this.doUndo(); return; }
    if (ctrl && k.toLowerCase() === 'y') { e.preventDefault(); this.doRedo(); return; }
    if (ctrl) return;
    if (k === ' ') { e.preventDefault(); this.togglePlay(); }
    else if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); if (this.sel) this.cutSel(); else if (this.selSeg) this.delSeg(); }
    else if (k.toLowerCase() === 's') this.splitSeg();
    else if (k.toLowerCase() === 'm') { if (this.sel) this.muteSel(true); }
    else if (k.toLowerCase() === 'c') this.addChapter();
    else if (k === 'ArrowLeft') { e.preventDefault(); this.seek(this.ph - (e.shiftKey ? 5 : 1)); }
    else if (k === 'ArrowRight') { e.preventDefault(); this.seek(this.ph + (e.shiftKey ? 5 : 1)); }
    else if (k === 'Home') this.seek(0);
    else if (k === '+') this.zoom(1.4); else if (k === '-') this.zoom(0.7);
    else if (k === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); if (this.sel || this.selSeg) { this.sel = null; this.selSeg = null; this.renderInsp(); this.dirty = true; } else this.close(); }
  },
  /* ----- pannello sotto la timeline */
  renderInsp() {
    const box = $('edInsp'); box.replaceChildren(); const s = this.s;
    const btn = (t, fn, cls = '', title = '') => { const b = document.createElement('button'); b.textContent = t; if (cls) b.className = cls; if (title) b.title = title; b.addEventListener('click', fn); return b; };
    const row = () => { const r = document.createElement('div'); r.className = 'row'; box.append(r); return r; };
    const info = (t) => { const p = document.createElement('div'); p.className = 'ed-info'; p.textContent = t; box.append(p); };
    if (this.selSeg) {
      const g = this.selSeg, nm = (s.names && s.names[g.fileId]) || S.names.get(g.fileId) || 'file';
      info(`${chLabel(g.ch, catsOf(this.sess))} · ${nm} · da ${fmt(g.tStart)} · durata ${(g.tEnd - g.tStart).toFixed(1)} s`);
      const kn = document.createElement('div'); kn.className = 'knobs'; box.append(kn);
      const slider = (label, key, min, max, step, unit, def) => {
        const id = 'ed-' + key, l = document.createElement('label'); l.htmlFor = id; l.textContent = label;
        const r = document.createElement('input'); r.type = 'range'; r.id = id; r.min = min; r.max = max; r.step = step; r.value = g[key] ?? def;
        const o = document.createElement('output'); const show = () => { o.textContent = (key === 'gain' && +r.value > 0 ? '+' : '') + (+r.value).toFixed(key === 'gain' ? 1 : 1) + unit; }; show();
        let snapped = false; r.addEventListener('pointerdown', () => { if (!snapped) { this.push(); snapped = true; } });
        r.addEventListener('input', () => { g[key] = +r.value; show(); this.dirty = true; });
        r.addEventListener('change', () => { snapped = false; this.changed(); });
        kn.append(l, r, o);
      };
      slider('Volume del blocco', 'gain', -24, 12, 0.5, ' dB', 0);
      slider('Dissolvenza in entrata', 'fin', 0, Math.min(15, (g.tEnd - g.tStart) / 2), 0.1, ' s', 0);
      slider('Dissolvenza in uscita', 'fout', 0, Math.min(15, (g.tEnd - g.tStart) / 2), 0.1, ' s', 0);
      const r = row(); r.append(btn('✂ Dividi al cursore (S)', () => this.splitSeg()), btn('🗑 Elimina blocco (Canc)', () => this.delSeg(), 'danger'));
    } else if (this.selChap) {
      const c = this.selChap; info(`Capitolo YouTube a ${fmtCh(c.t)}`);
      const r = row(); const inp = document.createElement('input'); inp.value = c.title; inp.className = 'ed-in'; inp.setAttribute('aria-label', 'Titolo capitolo');
      inp.addEventListener('change', () => { this.push(); c.title = inp.value; this.changed(); });
      r.append(inp, btn('🗑 Elimina capitolo', () => { this.push(); s.chapters.splice(s.chapters.indexOf(c), 1); this.selChap = null; this.changed(); }, 'danger'));
    } else if (this.sel) {
      const { a, b } = this.sel; info(`Selezione: ${fmt(a)} → ${fmt(b)} (${(b - a).toFixed(1)} s)`);
      const r = row();
      r.append(btn('✂ Taglia: elimina questo tratto (Canc)', () => this.cutSel(), 'go', 'Toglie il tratto da voce, musica e video: tutto quello che segue si sposta indietro'),
        btn('🔇 Silenzia la voce (M)', () => this.muteSel(true)), btn('🔊 Riattiva la voce', () => this.muteSel(false)),
        btn('▶ Ascolta', () => { if (PV) { PV.play(a); clearTimeout(this.stopT); this.stopT = setTimeout(() => { if (PV.playing) PV.stop(); }, (b - a) * 1000 + 150); } }),
        btn('Annulla selezione', () => { this.sel = null; this.renderInsp(); this.dirty = true; }));
    } else {
      info('Clicca per spostare il cursore · trascina sulla voce o sul righello per selezionare un tratto · trascina i blocchi per spostarli, i bordi per accorciarli · rotellina per scorrere, Ctrl+rotellina per lo zoom.');
      const r = row(); r.append(btn('✂ Dividi blocco al cursore (S)', () => this.splitSeg()), btn('🏁 Capitolo al cursore (C)', () => this.addChapter()));
    }
    $('edUndo').disabled = !this.undo.length; $('edRedo').disabled = !this.redo.length;
    $('edLen').textContent = 'durata ' + fmt(this.dur(), false) + (isIdentity(s) && !(s.vmutes || []).length ? '' : ' · montata');
  },
  /* ----- disegno */
  frame() {
    if (PV && PV.playing) { this.ph = PV.position(); const xp = this.tToX(this.ph); if (xp > this.W - 30) { this.x0 = this.ph - 20 / this.pps; this.clampX(); this.syncScroll(); } this.dirty = true; }
    $('edTime').textContent = fmt(this.ph); $('edPlay').textContent = PV && PV.playing ? '❚❚' : '▶';
    if (!this.dirty) return; this.dirty = false; this.draw();
  },
  draw() {
    const g = this.g, W = this.W, H = this.H, HW = this.HW, RH = this.RH, C = CHC(), D = this.dur(), s = this.s;
    g.fillStyle = '#05080f'; g.fillRect(0, 0, W, H);
    // righello
    g.fillStyle = '#0a1220'; g.fillRect(HW, 0, W - HW, RH);
    const steps = [0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800]; const st = steps.find(x => x * this.pps >= 70) || 3600;
    g.font = '11px "JetBrains Mono", monospace'; g.textBaseline = 'top';
    for (let t = Math.floor(this.x0 / st) * st; t <= Math.min(D, this.x0 + (W - HW) / this.pps); t += st) {
      const x = this.tToX(t); if (x < HW) continue; g.fillStyle = '#2a3a55'; g.fillRect(x, RH - 10, 1, 10); g.fillRect(x, RH, 1, H - RH);
      g.fillStyle = '#7f95b5'; g.fillText(fmtCh(t) + (st < 1 ? '.' + Math.round((t % 1) * 10) : ''), x + 3, 4);
    }
    // tracce
    let y = RH;
    for (const tr of TRK) {
      const col = C[tr.ch]; g.fillStyle = tr.ch === this.selCh ? '#0c1626' : '#08101c'; g.fillRect(HW, y, W - HW, tr.h);
      g.fillStyle = '#0b1322'; g.fillRect(0, y, HW, tr.h); g.fillStyle = col; g.fillRect(0, y, 5, tr.h);
      g.fillStyle = '#d5f4ff'; g.font = '700 11px Orbitron, sans-serif'; g.textBaseline = 'middle'; g.fillText(tr.label, 12, y + tr.h / 2);
      g.fillStyle = '#16233a'; g.fillRect(0, y + tr.h - 1, W, 1);
      g.save(); g.beginPath(); g.rect(HW, y, W - HW, tr.h); g.clip();
      if (tr.ch === 'voice') this.drawVoice(g, y, tr.h, col);
      else for (const sg of this.segsOf(tr.ch)) this.drawSeg(g, sg, y, tr.h, col);
      g.restore(); y += tr.h;
    }
    // selezione
    if (this.sel) { const xa = this.tToX(this.sel.a), xb = this.tToX(this.sel.b); g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(Math.max(HW, xa), 0, xb - Math.max(HW, xa), H); g.fillStyle = '#ffffff'; g.fillRect(xa, 0, 1, H); g.fillRect(xb, 0, 1, H); }
    // capitoli
    for (const c of s.chapters || []) {
      const x = this.tToX(c.t); if (x < HW - 2 || x > W) continue;
      g.fillStyle = c === this.selChap ? '#ffffff' : (C[(catsOf(s).find(x => x.chap) || {}).id] || '#38ff7a'); g.beginPath(); g.moveTo(x, RH - 15); g.lineTo(x + 11, RH - 10); g.lineTo(x, RH - 5); g.closePath(); g.fill(); g.fillRect(x, RH - 15, 1.5, H - RH + 15);
      g.font = '600 10px "Exo 2", sans-serif'; g.textBaseline = 'middle'; g.fillText(c.title.slice(0, 22), x + 13, RH - 10);
    }
    // fine e cursore
    const xe = this.tToX(D); if (xe < W) { g.fillStyle = 'rgba(0,0,0,0.6)'; g.fillRect(xe, RH, W - xe, H - RH); }
    const xp = this.tToX(this.ph); if (xp >= HW) { g.fillStyle = '#ffffff'; g.fillRect(xp - 1, 0, 2, H); g.beginPath(); g.moveTo(xp - 6, 0); g.lineTo(xp + 6, 0); g.lineTo(xp, 8); g.fill(); }
    g.fillStyle = '#0b1322'; g.fillRect(0, 0, HW, RH); g.fillStyle = '#6f87a6'; g.font = '600 10px "Exo 2", sans-serif'; g.textBaseline = 'middle'; g.fillText('TEMPO', 12, RH / 2);
  },
  drawVoice(g, y, h, col) {
    const s = this.s, pk = this.peaks, mid = y + h / 2; if (!pk) return;
    const x1 = Math.min(this.W, this.tToX(this.dur()));
    g.fillStyle = col;
    for (let x = this.HW; x < x1; x++) {
      const ta = this.xToT(x), tb = this.xToT(x + 1); const sa = outToSrc(s, ta); if (sa == null) continue;
      const n = Math.max(1, Math.round((tb - ta) * 100)), k0 = Math.floor(sa * 100); let p = 0;
      for (let k = k0; k < k0 + n && k < pk.length; k++) if (pk[k] > p) p = pk[k];
      const hh = Math.max(1, Math.min(1, p * 1.8) * (h / 2 - 6)); g.fillRect(x, mid - hh, 1, hh * 2);
    }
    for (const m of s.vmutes || []) { const xa = Math.max(this.HW, this.tToX(m.a)), xb = this.tToX(m.b); g.fillStyle = 'rgba(5,8,15,0.75)'; g.fillRect(xa, y, xb - xa, h); g.fillStyle = '#ff4d6d'; g.font = '600 10px "Exo 2", sans-serif'; g.textBaseline = 'top'; if (xb - xa > 50) g.fillText('🔇 silenzio', xa + 4, y + 4); }
    if (!isIdentity(s)) for (const p of vmapOf(s).slice(1)) { const x = this.tToX(p.o); g.fillStyle = '#ff4d6d'; g.fillRect(x - 1, y, 2, h); }
  },
  drawSeg(g, sg, y, h, col) {
    const xa = this.tToX(sg.tStart), xb = this.tToX(sg.tEnd); if (xb < this.HW || xa > this.W) return;
    const top = y + 4, hh = h - 8, w = Math.max(2, xb - xa);
    g.globalAlpha = 0.28; g.fillStyle = col; g.fillRect(xa, top, w, hh); g.globalAlpha = 1;
    g.strokeStyle = sg === this.selSeg ? '#ffffff' : col; g.lineWidth = sg === this.selSeg ? 2 : 1; g.strokeRect(xa + 0.5, top + 0.5, w - 1, hh - 1);
    g.fillStyle = col; g.beginPath(); // dissolvenze
    if (sg.fin > 0) { const xf = Math.min(xb, xa + sg.fin * this.pps); g.moveTo(xa, top + hh); g.lineTo(xf, top); g.lineTo(xa, top); g.closePath(); g.globalAlpha = 0.5; g.fill(); g.globalAlpha = 1; }
    g.beginPath(); if (sg.fout > 0) { const xf = Math.max(xa, xb - sg.fout * this.pps); g.moveTo(xb, top + hh); g.lineTo(xf, top); g.lineTo(xb, top); g.closePath(); g.globalAlpha = 0.5; g.fill(); g.globalAlpha = 1; }
    if (w > 40) {
      const nm = ((this.s.names && this.s.names[sg.fileId]) || S.names.get(sg.fileId) || '').replace(/\.[^.]+$/, '');
      g.fillStyle = '#ffffff'; g.font = '600 11px "Exo 2", sans-serif'; g.textBaseline = 'middle';
      g.fillText((sg.gain ? (sg.gain > 0 ? '+' : '') + sg.gain + ' dB · ' : '') + nm, Math.max(xa, this.HW) + 6, top + hh / 2, w - 10);
    }
  },
  wire() {
    const cv = $('edCanvas');
    cv.addEventListener('pointerdown', (e) => this.down(e)); cv.addEventListener('pointermove', (e) => this.move(e)); cv.addEventListener('pointerup', (e) => this.up(e));
    cv.addEventListener('wheel', (e) => this.wheel(e), { passive: false });
    $('edScroll').addEventListener('input', (e) => { this.x0 = +e.target.value; this.dirty = true; });
    $('edPlay').addEventListener('click', () => this.togglePlay());
    $('edUndo').addEventListener('click', () => this.doUndo()); $('edRedo').addEventListener('click', () => this.doRedo());
    $('edZoomIn').addEventListener('click', () => this.zoom(1.5)); $('edZoomOut').addEventListener('click', () => this.zoom(0.66)); $('edFit').addEventListener('click', () => { this.fit(); this.dirty = true; });
    $('edClose').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => this.key(e), true);
    window.addEventListener('resize', () => { if (this.open) { this.resize(); this.clampX(); this.syncScroll(); } });
  }
};

/* ------------------------------------------------------------------ Sincronizzazione tra dispositivi (repository privato GitHub)
 * Il token resta solo su questo dispositivo (non finisce nei file .onair né nella sincronizzazione). */
const SYNC_GROUPS = [
  ['testo', 'Testo del teleprompter'], ['audio', 'Sigla, sottofondi e capitoli (file audio)'], ['mixer', 'Mixer e livelli predefiniti'],
  ['video', 'Video: effetto, inquadratura, green screen, logo, sfondo'], ['layout', 'Disposizioni, vista, tasti, re-take'], ['plat', 'Canale e piattaforme']
];
const SYNC_KEYS = { audio: ['cats'], video: ['video', 'ov'], layout: ['layouts', 'layout', 'keys', 'mixStyle', 'mixStyleWide', 'orient', 'wideLay', 'retakeSec', 'preroll'], plat: ['plat', 'channel'] };
const SYNC = {
  cfg: null, timer: null,
  async load() {
    this.cfg = Object.assign({ repo: '', token: '', dev: '', groups: { testo: true, audio: true, mixer: true, video: true, layout: true, plat: true }, auto: false, check: true, last: 0 }, (await DB.get('state', 'sync')) || {});
    if (!this.cfg.dev) { const ua = navigator.userAgent; this.cfg.dev = /Android/.test(ua) ? 'Tablet Android' : /Windows/.test(ua) ? 'PC Windows' : /Linux/.test(ua) ? 'PC Linux' : 'Questo dispositivo'; }
  },
  save() { DB.put('state', 'sync', this.cfg); },
  ready() { return !!(this.cfg && this.cfg.repo && this.cfg.token); },
  async api(path, opt = {}) {
    const r = await fetch('https://api.github.com/repos/' + this.cfg.repo.trim() + path, { ...opt, headers: { Authorization: 'Bearer ' + this.cfg.token.trim(), 'X-GitHub-Api-Version': '2022-11-28', Accept: opt.raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json', ...(opt.body ? { 'Content-Type': 'application/json' } : {}) } });
    if (r.status === 404 && opt.allow404) return null;
    if (!r.ok) { const t = await r.text().catch(() => ''); throw new Error(r.status === 401 ? 'token non valido o scaduto' : r.status === 403 ? 'il token non ha il permesso di scrivere in quel repository' : r.status === 404 ? 'repository non trovato (controlla il nome o i permessi del token)' : `GitHub ha risposto ${r.status} ${t.slice(0, 120)}`); }
    return r;
  },
  async test() { const r = await this.api(''); const j = await r.json(); if (!j.private) return 'Attenzione: il repository è pubblico. Rendilo privato: dentro ci sono i tuoi file.'; return `Collegato a ${j.full_name} (privato).`; },
  b64(blob) { return new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(String(fr.result).split(',')[1]); fr.onerror = rej; fr.readAsDataURL(blob); }); },
  async putFile(path, b64, msg) {
    const old = await this.api('/contents/' + path, { allow404: true }); const sha = old ? (await old.json()).sha : undefined;
    await this.api('/contents/' + path, { method: 'PUT', body: JSON.stringify({ message: msg, content: b64, sha }) });
  },
  async push(status) {
    if (!this.ready()) throw new Error('imposta prima repository e token');
    status('Preparo i dati…');
    const items = [];
    for (const k of ['deck', 'settings', 'prompter']) { const v = await DB.get('state', k); if (v) items.push({ store: 'state', key: k, value: v }); }
    const ids = new Set([...deckIds(), 'ov-bg', 'ov-logo', 'ov-bgv'].filter(Boolean));
    for (const id of ids) { const f = await DB.get('files', id); if (f) items.push({ store: 'files', key: id, value: f }); }
    const blob = await PACK.build('studio', items, 'Sincronizzazione');
    if (blob.size > 70 * 1048576) throw new Error('lo studio è troppo grande per la sincronizzazione (oltre 70 MB): usa il file .onair');
    status(`Invio ${(blob.size / 1048576).toFixed(1)} MB…`);
    const when = Date.now();
    await this.putFile('studio.onair', await this.b64(blob), `OnAir: studio da ${this.cfg.dev}`);
    const meta = { updated: when, device: this.cfg.dev, app: APP.version, size: blob.size };
    await this.putFile('meta.json', btoa(unescape(encodeURIComponent(JSON.stringify(meta, null, 1)))), `OnAir: ${this.cfg.dev}`);
    this.cfg.last = when; this.save();
    return meta;
  },
  async remoteMeta() { const r = await this.api('/contents/meta.json', { raw: true, allow404: true }); return r ? r.json() : null; },
  async pull(status) {
    if (!this.ready()) throw new Error('imposta prima repository e token');
    const meta = await this.remoteMeta(); if (!meta) throw new Error('nel repository non c\'è ancora niente: prima invia da un dispositivo');
    status('Scarico…');
    const r = await this.api('/contents/studio.onair', { raw: true }); const blob = await r.blob();
    status('Applico le impostazioni scelte…');
    const { items } = await PACK.read(blob);
    await applyStudio(items, this.cfg.groups);
    this.cfg.last = meta.updated; this.save();
    return meta;
  },
  async startupCheck() {
    if (!this.ready() || !this.cfg.check) return;
    try {
      const meta = await this.remoteMeta();
      if (meta && meta.updated > (this.cfg.last || 0) && meta.device !== this.cfg.dev) {
        const b = $('syncBanner'); b.hidden = false;
        $('syncBannerTxt').textContent = `Su «${meta.device}» ci sono impostazioni più recenti (${new Date(meta.updated).toLocaleString('it-IT')}).`;
      }
    } catch (e) { console.warn('sync', e); }
  },
  changed() { // invio automatico dopo 2 minuti senza modifiche
    if (!this.cfg || !this.cfg.auto || !this.ready()) return;
    clearTimeout(this.timer); this.timer = setTimeout(async () => { if (isRec() || blocked()) { this.changed(); return; } try { await this.push(() => {}); toast('Impostazioni inviate agli altri dispositivi'); } catch (e) { console.warn(e); } }, 120000);
  }
};
async function applyStudio(items, groups) {
  const g = groups || { testo: 1, audio: 1, mixer: 1, video: 1, layout: 1, plat: 1 };
  const cur = { deck: (await DB.get('state', 'deck')) || {}, settings: (await DB.get('state', 'settings')) || {}, prompter: await DB.get('state', 'prompter') };
  for (const it of items) {
    if (it.store === 'files') { const isOv = String(it.key).startsWith('ov-'); if ((isOv && g.video) || (!isOv && g.audio)) await DB.put('files', it.key, it.value); continue; }
    if (it.store !== 'state') continue;
    const v = it.value;
    if (it.key === 'prompter' && g.testo) cur.prompter = { ...(cur.prompter || {}), text: v.text, speed: v.speed, size: v.size, mirror: v.mirror, auto: v.auto, startMode: v.startMode, mode: v.mode };
    if (it.key === 'deck') { if (g.audio) cur.deck.deck = v.deck; if (g.mixer) { cur.deck.mix = v.mix; cur.deck.defaults = v.defaults; } }
    if (it.key === 'settings') for (const [grp, keys] of Object.entries(SYNC_KEYS)) if (g[grp]) for (const k of keys) if (k in v) cur.settings[k] = v[k];
  }
  await DB.put('state', 'deck', cur.deck); await DB.put('state', 'settings', cur.settings); if (cur.prompter) await DB.put('state', 'prompter', cur.prompter);
}

/* Capitoli YouTube */
function fmtCh(t) { t = Math.max(0, Math.floor(t)); const h = Math.floor(t / 3600), m = Math.floor(t / 60) % 60, sec = t % 60; return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`; }
function parseCh(v) { const p = String(v).trim().split(':').map(x => x.trim()); if (!p.length || p.some(x => !/^\d+$/.test(x)) || p.length > 3) return null; return p.reduce((a, x) => a * 60 + (+x), 0); }
function autoChapters(s) {
  const yt = S.settings.plat.yt, list = [{ t: 0, title: yt.intro || 'Introduzione' }]; let n = 0;
  const chapCh = catsOf(s).filter(c => c.chap).map(c => c.id);
  const caps = s.segs.filter(g => chapCh.includes(g.ch) && !g.cont && g.off < 0.5).sort((a, b) => a.tStart - b.tStart);
  for (const g of caps) {
    n++; const raw = (s.names && s.names[g.fileId]) || S.names.get(g.fileId) || '';
    const title = yt.chName === 'num' || !raw ? `Capitolo ${n}` : raw.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' ').trim();
    const t = Math.floor(g.tStart);
    if (t < 10) list[0].title = title; else list.push({ t, title }); // uno stacchetto nei primi 10 s dà il nome al capitolo iniziale
  }
  return list;
}
function chapterProblems(ch, dur) {
  const p = [], c = [...ch].sort((a, b) => a.t - b.t);
  if (!c.length || c[0].t !== 0) p.push('il primo capitolo deve essere a 00:00');
  if (c.length < 3) p.push('servono almeno 3 capitoli');
  for (let i = 1; i < c.length; i++) if (c[i].t - c[i - 1].t < 10) { p.push(`«${c[i - 1].title}» dura meno di 10 secondi`); break; }
  if (c.length && dur - c[c.length - 1].t < 10) p.push('l\'ultimo capitolo dura meno di 10 secondi');
  if (c.some(x => !x.title.trim())) p.push('c\'è un capitolo senza titolo');
  return p;
}
const chaptersText = (ch) => [...ch].sort((a, b) => a.t - b.t).map(c => `${fmtCh(c.t)} ${c.title.trim()}`).join('\n');
async function copyText(text, okMsg) {
  try { await navigator.clipboard.writeText(text); toast(okMsg); }
  catch (e) { const ta = document.createElement('textarea'); ta.value = text; document.body.append(ta); ta.select(); try { document.execCommand('copy'); toast(okMsg); } catch (e2) { toast('Copia non riuscita: seleziona il testo a mano'); } ta.remove(); }
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
  LAY.renderSettings();
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

/* Vista orizzontale (monitor 16:9) o verticale (tablet, telefono) */
const ORIENT = {
  wide: false,
  apply() {
    const o = S.settings.orient || 'auto';
    const wide = o === 'wide' || (o === 'auto' && innerWidth >= 1180 && innerWidth / innerHeight >= 1.3);
    const changed = wide !== this.wide; this.wide = wide;
    document.body.classList.toggle('wide', wide); document.body.classList.toggle('short', wide && innerHeight < 980); document.body.dataset.wl = S.settings.wideLay || 'center';
    const host = $('panels'); if (!host) return;
    if (wide) {
      WIDE.build(LAY.cur || LAY.all()[S.settings.layout] || LAY_PRESETS.classico);
      const top = host.getBoundingClientRect().top + scrollY; host.style.height = Math.max(520, innerHeight - top - 18) + 'px';
    } else { WIDE.unbuild(); host.style.height = ''; if (changed) LAY.apply(S.settings.layout || 'classico'); }
    if (TP.view) { const y = TP.view.scrollTop; TP.layout(); TP.setTop(y); }
    if (ED.open) { ED.resize(); ED.clampX(); ED.syncScroll(); }
    if (changed && this.onWide) this.onWide();
    if (!wide) this.adjust(false);
    requestAnimationFrame(() => this.fitVideo());
  },
  /* In orizzontale l'anteprima video si rimpicciolisce per stare nel suo riquadro (i comandi scorrono sotto) */
  fitVideo() {
    const card = $('vcard'), box = $('vBox'); if (!card || !box) return;
    if (!this.wide || card.hidden) { box.style.width = ''; box.style.alignSelf = ''; return; }
    const cs = getComputedStyle(card), px = (k) => parseFloat(cs[k]) || 0;
    const inner = card.clientWidth - px('paddingLeft') - px('paddingRight');
    const h2 = card.querySelector('h2').offsetHeight;
    const adj = card.classList.contains('adj'), full = card.clientHeight - px('paddingTop') - px('paddingBottom') - h2 - 12;
    const avail = adj ? Math.max(full * 0.45, full - 300) : full;
    const w = Math.max(200, Math.min(inner, avail * 16 / 9));
    box.style.width = w + 'px'; box.style.alignSelf = 'center';
    // Con «Regola» aperto i comandi stanno sotto l'anteprima, che resta visibile mentre regoli
    const ctl = card.querySelector('.vctl'); if (ctl) ctl.style.top = adj ? (box.offsetTop + w * 9 / 16 + 8) + 'px' : '';
  },
  /* Vista orizzontale: i comandi video stanno in un pannello «⚙ Regola» sopra l'anteprima */
  adjust(on) { const c = $('vcard'); if (!c) return; c.classList.toggle('adj', !!on); $('vAdjust').setAttribute('aria-pressed', String(!!on)); requestAnimationFrame(() => this.fitVideo()); }
};

/* Disposizione dei pannelli */
const PANELS_BASE = [['transport', 'Registrazione (contatore e pulsanti)'], ['prompter', 'Teleprompter'], ['video', 'Video']];
const panelsAll = () => [...PANELS_BASE, ...CATS().map(c => [c.id, c.name]), ['mixer', 'Mixer']];
const panelName = (p) => (panelsAll().find(x => x[0] === p) || [p, p])[1];
const LAY_PRESETS = {
  classico: { name: 'Classico', order: ['transport', 'prompter', 'video', 'intro', 'bg', 'cap', 'mixer'], w: { transport: '1', prompter: '2/3', video: '1/3', intro: '1/3', bg: '1/3', cap: '1/3', mixer: '1' }, hidden: [], tall: false },
  davanti: { name: 'Teleprompter davanti (sotto la webcam)', order: ['prompter', 'transport', 'video', 'cap', 'bg', 'intro', 'mixer'], w: { prompter: '1', transport: '1', video: '1/3', cap: '1/3', bg: '1/3', intro: '1/3', mixer: '1' }, hidden: [], tall: true },
  lettura: { name: 'Solo lettura', order: ['prompter', 'transport', 'cap', 'bg', 'intro', 'video', 'mixer'], w: { prompter: '1', transport: '1', cap: '1/2', bg: '1/2', intro: '1/3', video: '1/3', mixer: '1' }, hidden: ['intro', 'video', 'mixer'], tall: true }
};
/* Vista orizzontale: pannelli in colonne (sinistra, centro, destra) più una fascia in basso */
const WCOLS = [['0', 'Sinistra'], ['1', 'Centro'], ['2', 'Destra'], ['b', 'In basso (tutta larghezza)']];
const WIDE = {
  def() {
    const wl = S.settings.wideLay || 'center', order = ['transport', 'video', 'prompter', 'intro', 'bg', 'cap', 'mixer'];
    const m = { center: [{ transport: '0', video: '0', prompter: '1', intro: '2', bg: '2', cap: '2' }, [1, 1.35, 0.95]], left: [{ prompter: '0', transport: '1', video: '1', intro: '2', bg: '2', cap: '2' }, [1.35, 1, 0.95]], right: [{ transport: '0', video: '0', intro: '1', bg: '1', cap: '1', prompter: '2' }, [1, 0.95, 1.35]] }[wl] || [];
    return { order, col: { ...m[0], mixer: 'b' }, w: m[1] };
  },
  of(L) {
    const d = this.def(), ids = panelsAll().map(x => x[0]), W = (L && L.wide) || d;
    const order = [...W.order, ...d.order.filter(p => !W.order.includes(p))].filter(p => ids.includes(p));
    for (const p of ids) if (!order.includes(p)) order.splice(order.indexOf('mixer') < 0 ? order.length : order.indexOf('mixer'), 0, p);
    const col = { ...d.col, ...(W.col || {}) }; for (const p of ids) if (!(p in col)) col[p] = '2';
    return { order, col, w: W.w || d.w };
  },
  build(L) {
    const host = $('panels'), W = this.of(L), hidden = (L && L.hidden) || [];
    let cols = [...host.querySelectorAll(':scope>.wcol')], bot = host.querySelector(':scope>.wbot');
    if (!cols.length) { cols = [0, 1, 2].map(() => { const d = document.createElement('div'); d.className = 'wcol'; host.append(d); return d; }); bot = document.createElement('div'); bot.className = 'wbot'; host.append(bot); }
    const vis = [false, false, false]; let botVis = false;
    for (const p of W.order) {
      const el = host.querySelector(`[data-panel="${p}"]`); if (!el) continue;
      const c = W.col[p] ?? '0', tgt = c === 'b' ? bot : cols[+c]; tgt.append(el);
      el.hidden = hidden.includes(p) || (p === 'prompter' && !TP.visible);
      if (!el.hidden) { if (c === 'b') botVis = true; else vis[+c] = true; }
    }
    cols.forEach((c, i) => { c.hidden = !vis[i]; }); bot.hidden = !botVis;
    host.style.gridTemplateColumns = cols.map((c, i) => vis[i] ? `minmax(0,${W.w[i]}fr)` : null).filter(Boolean).join(' ') || '1fr';
  },
  unbuild() {
    const host = $('panels'); if (!host.querySelector(':scope>.wcol')) return;
    for (const [p] of panelsAll()) { const el = host.querySelector(`[data-panel="${p}"]`); if (el) host.append(el); }
    host.querySelectorAll(':scope>.wcol,:scope>.wbot').forEach(d => d.remove()); host.style.gridTemplateColumns = '';
  }
};
const LAY = {
  cur: null,
  all() {
    const out = {}, ids = panelsAll().map(x => x[0]);
    for (const [k, L0] of Object.entries({ ...LAY_PRESETS, ...(S.settings.layouts || {}) })) {
      const L = { ...L0, order: L0.order.filter(p => ids.includes(p)), w: { ...L0.w } };
      for (const p of ids) if (!L.order.includes(p)) { const mi = L.order.indexOf('mixer'); L.order.splice(mi < 0 ? L.order.length : mi, 0, p); L.w[p] = L.w[p] || '1/3'; }
      out[k] = L;
    }
    return out;
  },
  apply(id) {
    const all = this.all(); const L = all[id] || all.classico; S.settings.layout = all[id] ? id : 'classico'; this.cur = L;
    const host = $('panels');
    L.order.forEach((p, i) => { const el = host.querySelector(`[data-panel="${p}"]`); if (!el) return; el.style.order = i; el.dataset.w = L.w[p] || '1'; el.hidden = L.hidden.includes(p) || (p === 'prompter' && !TP.visible); });
    $('prompter').dataset.tall = L.tall ? '1' : '0';
    if (TP.view) { const y = TP.view.scrollTop; TP.layout(); TP.setTop(y); }
    if (typeof ORIENT !== 'undefined' && ORIENT.wide) ORIENT.apply();
  },
  edit: null,
  renderSettings() {
    const all = this.all(), sel = $('laySel'); if (!sel) return;
    sel.replaceChildren();
    for (const [id, L] of Object.entries(all)) { const o = document.createElement('option'); o.value = id; o.textContent = (LAY_PRESETS[id] ? '' : '★ ') + L.name; sel.append(o); }
    sel.value = S.settings.layout || 'classico';
    $('layDel').disabled = !!LAY_PRESETS[sel.value];
    this.edit = JSON.parse(JSON.stringify(all[sel.value] || all.classico));
    this.renderList();
  },
  renderList() {
    const E2 = this.edit, box = $('layList'); box.replaceChildren();
    const lab = (t) => { const s = document.createElement('span'); s.textContent = t; return s; };
    const wide = ORIENT.wide; $('layMode').textContent = wide ? 'Stai modificando la vista orizzontale: per ogni pannello scegli la colonna e l\'ordine. La vista verticale si modifica da uno schermo verticale (o con Vista: verticale).' : 'Stai modificando la vista verticale: ordine e larghezza dei pannelli.';
    $('layCols').hidden = !wide;
    if (wide) {
      const W = E2.wide = WIDE.of(E2);
      W.order.forEach((p, i) => {
        const vis = document.createElement('input'); vis.type = 'checkbox'; vis.checked = !E2.hidden.includes(p); vis.title = 'Visibile'; vis.setAttribute('aria-label', 'Mostra ' + p);
        vis.addEventListener('change', () => { E2.hidden = E2.hidden.filter(x => x !== p); if (!vis.checked) E2.hidden.push(p); this.preview(); });
        const c = document.createElement('select'); for (const [v, t] of WCOLS) { const o = document.createElement('option'); o.value = v; o.textContent = t; c.append(o); }
        c.value = W.col[p] ?? '0'; c.addEventListener('change', () => { W.col[p] = c.value; this.preview(); });
        const up = document.createElement('button'); up.textContent = '▲'; up.title = 'Sposta su'; up.disabled = i === 0; up.addEventListener('click', () => { W.order.splice(i, 1); W.order.splice(i - 1, 0, p); this.renderList(); this.preview(); });
        const dn = document.createElement('button'); dn.textContent = '▼'; dn.title = 'Sposta giù'; dn.disabled = i === W.order.length - 1; dn.addEventListener('click', () => { W.order.splice(i, 1); W.order.splice(i + 1, 0, p); this.renderList(); this.preview(); });
        box.append(vis, lab(panelName(p)), c, up, dn);
      });
      const cb = $('layCols'); cb.replaceChildren(lab('Larghezza colonne:'));
      ['Sinistra', 'Centro', 'Destra'].forEach((n, i) => {
        const s2 = document.createElement('select'); s2.setAttribute('aria-label', 'Larghezza colonna ' + n);
        for (const [v, t] of [[0.7, 'stretta'], [1, 'media'], [1.35, 'larga'], [1.8, 'molto larga']]) { const o = document.createElement('option'); o.value = v; o.textContent = n + ': ' + t; s2.append(o); }
        const cur = W.w[i]; s2.value = [0.7, 1, 1.35, 1.8].reduce((a, b) => Math.abs(b - cur) < Math.abs(a - cur) ? b : a);
        s2.addEventListener('change', () => { W.w = [...W.w]; W.w[i] = +s2.value; this.preview(); }); cb.append(s2);
      });
      return;
    }
    E2.order.forEach((p, i) => {
      const vis = document.createElement('input'); vis.type = 'checkbox'; vis.checked = !E2.hidden.includes(p); vis.title = 'Visibile'; vis.setAttribute('aria-label', 'Mostra ' + p);
      vis.addEventListener('change', () => { E2.hidden = E2.hidden.filter(x => x !== p); if (!vis.checked) E2.hidden.push(p); this.preview(); });
      const w = document.createElement('select'); for (const [v, t] of [['1', 'Intera'], ['2/3', '2/3'], ['1/2', 'Metà'], ['1/3', '1/3']]) { const o = document.createElement('option'); o.value = v; o.textContent = t; w.append(o); }
      w.value = E2.w[p] || '1'; w.addEventListener('change', () => { E2.w[p] = w.value; this.preview(); });
      const up = document.createElement('button'); up.textContent = '▲'; up.title = 'Sposta su'; up.disabled = i === 0; up.addEventListener('click', () => { E2.order.splice(i, 1); E2.order.splice(i - 1, 0, p); this.renderList(); this.preview(); });
      const dn = document.createElement('button'); dn.textContent = '▼'; dn.title = 'Sposta giù'; dn.disabled = i === E2.order.length - 1; dn.addEventListener('click', () => { E2.order.splice(i, 1); E2.order.splice(i + 1, 0, p); this.renderList(); this.preview(); });
      box.append(vis, lab(panelName(p)), w, up, dn);
    });
    const tall = document.createElement('input'); tall.type = 'checkbox'; tall.checked = !!E2.tall; tall.addEventListener('change', () => { E2.tall = tall.checked; this.preview(); });
    const tl = lab('Teleprompter più alto'); tl.style.gridColumn = '2 / 6';
    box.append(tall, tl);
  },
  /* Ogni modifica si salva subito: se il set attivo è uno di quelli pronti, ne crea una copia personale */
  commit() {
    const id = S.settings.layout, data = JSON.parse(JSON.stringify(this.edit)); S.settings.layouts = S.settings.layouts || {};
    if (LAY_PRESETS[id] || !S.settings.layouts[id]) {
      const nid = 'u' + Date.now().toString(36), base = (LAY_PRESETS[id] || {}).name || 'Set';
      let name = base + ' (mio)', k = 2; const names = Object.values(S.settings.layouts).map(l => l.name); while (names.includes(name)) name = base + ' (mio ' + k++ + ')';
      S.settings.layouts[nid] = { ...data, name }; S.settings.layout = nid; this.edit.name = name;
      const sel = $('laySel'), o = document.createElement('option'); o.value = nid; o.textContent = '★ ' + name; sel.append(o); sel.value = nid; $('layDel').disabled = false;
      toast('Modifiche salvate nel nuovo set «' + name + '»');
    } else S.settings.layouts[id] = { ...data, name: S.settings.layouts[id].name };
    this.cur = S.settings.layouts[S.settings.layout]; saveSettings();
  },
  preview() { // applica e salva subito le modifiche
    const host = $('panels'), L = this.edit; this.commit();
    if (ORIENT.wide) { WIDE.build(L); requestAnimationFrame(() => ORIENT.fitVideo()); if (TP.view) TP.layout(); return; }
    L.order.forEach((p, i) => { const el = host.querySelector(`[data-panel="${p}"]`); if (!el) return; el.style.order = i; el.dataset.w = L.w[p] || '1'; el.hidden = L.hidden.includes(p) || (p === 'prompter' && !TP.visible); });
    $('prompter').dataset.tall = L.tall ? '1' : '0';
  },
  wire() {
    $('laySel').addEventListener('change', (e) => { this.apply(e.target.value); saveSettings(); this.renderSettings(); });
    $('laySave').addEventListener('click', () => {
      const name = $('layName').value.trim(); if (!name) return toast('Dai un nome al set');
      const id = 'u' + Date.now().toString(36); S.settings.layouts = S.settings.layouts || {};
      S.settings.layouts[id] = { ...JSON.parse(JSON.stringify(this.edit)), name }; $('layName').value = '';
      this.apply(id); saveSettings(); this.renderSettings(); toast('Set «' + name + '» salvato');
    });
    $('layDel').addEventListener('click', () => { const id = $('laySel').value; if (LAY_PRESETS[id]) return; delete S.settings.layouts[id]; this.apply('classico'); saveSettings(); this.renderSettings(); toast('Set eliminato'); });
  }
};

/* Scorciatoie */
const ACTIONS_BASE = [
  ['rec', 'Registra / pausa / riprendi', ' '], ['retake', 'Re-take', 'r'], ['tpRun', 'Teleprompter: avvia / ferma', 'p'], ['tpShow', 'Teleprompter: mostra / nascondi', 't'],
  ['tpBack', 'Teleprompter: testo indietro', 'ArrowUp'], ['tpFwd', 'Teleprompter: testo avanti', 'ArrowDown'],
  ['tpUp', 'Teleprompter: più veloce', 'Shift+ArrowUp'], ['tpDown', 'Teleprompter: più lento', 'Shift+ArrowDown'], ['video', 'Video sì / no', 'v'], ['sub', 'Animazione «Iscriviti»', 'i'], ['tpMode', 'Teleprompter: come scorre', 'm'], ['help', 'Specchietto delle scorciatoie', 'h']
];
let ACTIONS = [], DEF_KEYS = {};
/* Le azioni delle categorie (una per categoria) si aggiungono a quelle fisse */
function rebuildActions() {
  const verb = { single: 'play', loop: 'play / pausa', list: 'lancia il prossimo' };
  const cat = CATS().map(c => [c.id, c.name + ': ' + verb[c.type], c.key || '']);
  ACTIONS = [...ACTIONS_BASE.slice(0, 2), ...cat, ...ACTIONS_BASE.slice(2)];
  DEF_KEYS = Object.fromEntries(ACTIONS.map(a => [a[0], a[2]]));
}
rebuildActions();
const KEYS = () => {
  const k = S.settings.keys || (S.settings.keys = { ...DEF_KEYS });
  // azioni nuove: prendono il tasto predefinito se non è già usato
  for (const [a, d] of Object.entries(DEF_KEYS)) if (!(a in k)) k[a] = Object.values(k).includes(d) ? '' : d;
  for (const a of Object.keys(k)) if (!(a in DEF_KEYS)) delete k[a];
  return k;
};
const normKey = (k, shift) => k.length === 1 ? k.toLowerCase() : (shift && !['Shift'].includes(k) ? 'Shift+' + k : k);
const KNAMES = { ' ': 'Spazio', Enter: 'Invio', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Escape: 'Esc', Tab: 'Tab', Backspace: '⌫' };
const keyLabel = (act) => { let k = KEYS()[act] || ''; let pre = ''; if (k.startsWith('Shift+')) { pre = 'Shift+'; k = k.slice(6); } return pre + (KNAMES[k] || (k.length === 1 ? k.toUpperCase() : k)); };
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
  if (e.key === 'Shift') { KEYCAP = act; return; }
  const k = normKey(e.key, e.shiftKey);
  if (/^[1-9]$/.test(k)) { toast('I tasti 1–9 sono riservati ai capitoli'); renderKeys(); return; }
  const keys = KEYS(); const other = Object.keys(keys).find(x => x !== act && keys[x] === k);
  if (other) { keys[other] = keys[act]; toast(`Scambiato con «${ACTIONS.find(x => x[0] === other)[1]}»`); }
  keys[act] = k; saveSettings(); renderKeys();
}, true);

/* Specchietto delle scorciatoie: finestra nell'app (H) o finestra piccola sempre in primo piano */
const HELP_GROUPS = [['Registrazione', ['rec', 'retake']], ['Audio', null], ['Teleprompter', ['tpRun', 'tpMode', 'tpBack', 'tpFwd', 'tpUp', 'tpDown', 'tpShow']], ['Video', ['video', 'sub']], ['Aiuto', ['help']]];
const HELP = {
  pip: null, iv: null,
  html() {
    const e2 = (t) => String(t).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const st = { idle: 'PRONTO', rec: '● REGISTRAZIONE', hold: R.holdMode === 'retake' ? '↶ RE-TAKE' : '❚❚ PAUSA', preroll: '▶ PRE-ASCOLTO' }[R.state] || '';
    const name = (a) => (ACTIONS.find(x => x[0] === a) || [, a])[1].replace(/^Teleprompter: /, '');
    const on = { tpRun: TP.running, video: S.settings.video.on }; for (const c of CATS()) on[c.id] = !!E.voices[c.id];
    const extra = { tpMode: { fixed: 'velocità fissa', voice: 'quando parli', follow: 'segue le parole' }[TP.mode] };
    for (const c of CATS()) if (c.type === 'list') { const a = dkList(c.id), nx = E.next[c.id] || 0; extra[c.id] = a[nx] ? 'prossimo: ' + nameOf(a[nx]).replace(/\.[^.]+$/, '') : ''; } else if (c.type === 'loop' && loopSt(c.id).status === 'held') extra[c.id] = 'in attesa';
    let h = `<div class="st">${st}${R.state === 'hold' ? ' · ← → secondi · Invio conferma · Esc annulla' : ''}</div>`;
    for (const [g, acts0] of HELP_GROUPS) {
      const acts = acts0 || chsOf();
      h += `<section><h4>${g.toUpperCase()}</h4>`;
      for (const a of acts) h += `<div class="hr${on[a] ? ' on' : ''}"><span>${e2(name(a))}${extra[a] ? ` <small style="opacity:.7">(${e2(extra[a])})</small>` : ''}</span><span class="kbd">${e2(keyLabel(a))}</span></div>`;
      if (g === 'Audio' && firstList()) h += `<div class="hr"><span>${e2(firstList().name)}: numero diretto</span><span class="kbd">1–9</span></div>`;
      h += '</section>';
    }
    return h;
  },
  toggle() { const m = $('helpModal'); m.hidden = !m.hidden; if (!m.hidden) $('helpBody').innerHTML = this.html(); },
  async openPip() {
    if (this.pip && !this.pip.closed) return true;
    try { if (window.documentPictureInPicture) { this.setup(await documentPictureInPicture.requestWindow({ width: 300, height: 600 })); return true; } } catch (e) { console.warn('pip', e); }
    const w = window.open('', 'onair-tasti', 'popup,width=320,height=620'); if (w) { this.setup(w); return true; }
    return false;
  },
  setup(w) {
    this.pip = w; const d = w.document; d.title = 'OnAir · tasti';
    d.head.innerHTML = `<meta charset="utf-8"><style>
      body{margin:0;padding:10px;background:#05070d;color:#dfe9f5;font:14px system-ui,sans-serif}
      .st{font:700 13px monospace;color:#22e4ff;margin:2px 0 8px}
      section{border:1px solid #1d2a40;border-radius:8px;padding:6px 9px;margin-bottom:8px}
      h4{margin:0 0 4px;font:700 10px sans-serif;letter-spacing:.18em;color:#8d7bff}
      .hr{display:flex;justify-content:space-between;gap:8px;padding:2px 0;font-size:13px}.hr.on{color:#2cff9a}
      .kbd{font:700 11px monospace;border:1px solid #33435e;border-radius:4px;padding:1px 6px;white-space:nowrap;color:#fff}</style>`;
    d.body.innerHTML = '<div id="b"></div>';
    d.addEventListener('keydown', (e) => onKeyMain(e));
    w.addEventListener('pagehide', () => { this.pip = null; clearInterval(this.iv); });
    clearInterval(this.iv); this.iv = setInterval(() => this.refresh(), 500); this.refresh();
  },
  refresh() {
    if (this.pip && !this.pip.closed) { const b = this.pip.document.getElementById('b'); if (b) b.innerHTML = this.html(); }
    if (!$('helpModal').hidden) $('helpBody').innerHTML = this.html();
  },
  onRecStart() { if (S.settings.helpOnRec !== false) this.openPip(); },
  onFinish() { if (this.pip && !this.pip.closed && S.settings.helpOnRec !== false) { this.pip.close(); this.pip = null; clearInterval(this.iv); } }
};

/* Tastiera (anche dalla finestra dello specchietto) */
document.addEventListener('keydown', (e) => onKeyMain(e));
function onKeyMain(e) {
  const tg = e.target; if (tg && (tg.tagName === 'INPUT' && tg.type !== 'range' && tg.type !== 'checkbox' || tg.tagName === 'SELECT' || tg.tagName === 'TEXTAREA')) return;
  if (!E.ctx || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key;
  if (ED.open) return;
  const anyModal = !$('sessModal').hidden || !$('setModal').hidden || !$('clModal').hidden || !$('devModal').hidden;
  if (k === 'Escape') { closeSessions(); for (const m of ['setModal', 'clModal', 'helpModal']) $(m).hidden = true; if (!$('devModal').hidden) DEV.close(); if (R.state === 'hold') { stopListen(); setHoldN(0); } e.preventDefault(); return; }
  if (anyModal) return;
  const nk = normKey(k, e.shiftKey), keys = KEYS();
  const act = Object.keys(keys).find(a => keys[a] === nk);
  if (R.state === 'hold') {
    if (k === 'ArrowLeft' || k === '+') { setHoldN(R.holdN + 1); e.preventDefault(); }
    else if (k === 'ArrowRight' || k === '-') { setHoldN(R.holdN - 1); e.preventDefault(); }
    else if (k === 'Enter' || act === 'rec' || act === 'retake') { commitHold(); e.preventDefault(); }
    return;
  }
  if (/^[1-9]$/.test(k)) { if (e.repeat) return; const fl = firstList(); if (fl) listPlay(fl.id, +k - 1); return; }
  if (!act) return;
  e.preventDefault();
  // tenendo premuto un tasto la tastiera lo ripete: solo le frecce del teleprompter devono ripetersi (prima la sigla ripartiva da capo)
  if (e.repeat && !['tpBack', 'tpFwd', 'tpUp', 'tpDown'].includes(act)) return;
  const tk = performance.now(); if (onKeyMain.last && onKeyMain.last.k === nk && tk - onKeyMain.last.t < 80) return; onKeyMain.last = { k: nk, t: tk };
  if (act === 'help') { HELP.toggle(); return; }
  if (!$('helpModal').hidden) $('helpModal').hidden = true;
  if (act === 'rec') { if (R.state === 'idle') recStart(); else if (R.state === 'rec' || R.state === 'preroll') enterHold('pause'); }
  else if (act === 'retake') enterHold('retake');
  else if (catOf(act)) catAction(act);
  else if (act === 'tpRun') TP.toggle();
  else if (act === 'tpShow') { TP.visible = !TP.visible; TP.layout(); TP.save(); }
  else if (act === 'sub') SUB.start();
  else if (act === 'tpBack') TP.nudge(-1);
  else if (act === 'tpFwd') TP.nudge(1);
  else if (act === 'tpUp') { TP.speed = Math.min(20, TP.speed + 1); TP.layout(); TP.save(); }
  else if (act === 'tpDown') { TP.speed = Math.max(1, TP.speed - 1); TP.layout(); TP.save(); }
  else if (act === 'video') { if (isRec() || blocked()) return toast('Attiva o disattiva il video a registrazione ferma'); S.settings.video.on = !S.settings.video.on; saveSettings(); renderStatus(); }
  else if (act === 'tpMode') { const L = ['fixed', 'voice', 'follow'], n = { fixed: 'velocità fissa', voice: 'scorre quando parli', follow: 'segue le parole che leggi' }; TP.mode = L[(L.indexOf(TP.mode) + 1) % 3]; TP.save(); TP.layout(); toast('Teleprompter: ' + n[TP.mode]); }
  HELP.refresh();
}

/* Pulsanti dei segnali nell'editor del testo, uno per categoria */
function renderInsButtons() {
  const box = $('ptIns'); if (!box) return; const ins = [], help = [];
  const e2 = (t) => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  for (const c of CATS()) {
    const w = cueWord(c);
    if (c.type === 'single') { ins.push(`[${w}]`); help.push(`[${w}] fa partire ${c.name}`); }
    else if (c.type === 'loop') { ins.push(`[${w}]`, `[STOP ${w}]`); help.push(`[${w}] avvia ${c.name} · [STOP ${w}] lo mette in pausa`); }
    else { ins.push(`[${w}]`, `[${w} 2]`); help.push(`[${w}] lancia il prossimo di ${c.name} · [${w} 2] il numero 2 · [STOP ${w}] lo ferma`); }
  }
  ins.push('[PAUSA]', '[ISCRIVITI]');
  box.innerHTML = ins.map(v => `<button data-ins="${e2(v)}">${e2(v.replace(/ 2\]$/, ' n]'))}</button>`).join('');
  $('ptInsNote').textContent = help.join(' · ') + ' · [PAUSA] ferma il testo (a velocità fissa riparte con P, con «Scorre quando parlo» quando riprendi a parlare) · [ISCRIVITI] lancia l\'animazione «Iscriviti».';
}
/* Impostazioni → Categorie audio */
const CAT_COLORS = ['#00b3ff', '#ff7a00', '#b46bff', '#ff4d6d', '#7dff3a', '#00ffd0', '#ffb3f0', '#ffffff'];
const CATUI = {
  render() {
    const box = $('catList'); if (!box) return; box.replaceChildren(); const cats = CATS();
    cats.forEach((c, i) => {
      const r = document.createElement('div'); r.className = 'catrow'; r.style.setProperty('--cc', c.color);
      r.innerHTML = `<input type="color" title="Colore" aria-label="Colore"><input type="text" class="nm" aria-label="Nome" maxlength="24">
        <select class="ty" aria-label="Comportamento">${Object.entries(CAT_TYPES).map(([k, t]) => `<option value="${k}">${t}</option>`).join('')}</select>
        <input type="text" class="cu" aria-label="Segnale nel teleprompter" title="Segnale nel teleprompter: [${cueWord(c)}]" maxlength="24">
        <label class="chk" title="Mentre suona, i loop (es. il sottofondo) si fermano e poi ripartono"><input type="checkbox" class="du"> ferma i loop</label>
        <label class="chk" title="Ogni brano lanciato crea un capitolo YouTube"><input type="checkbox" class="ch"> capitoli YT</label>
        <button class="up" title="Sposta su">▲</button><button class="dn" title="Sposta giù">▼</button><button class="rm danger" title="Elimina la categoria">✕</button>`;
      const q = (k) => r.querySelector(k);
      q('input[type=color]').value = c.color; q('.nm').value = c.name; q('.ty').value = c.type; q('.cu').value = c.cue || ''; q('.cu').placeholder = cueWord(c);
      q('.du').checked = !!c.duck; q('.du').disabled = c.type === 'loop'; q('.ch').checked = !!c.chap; q('.ch').disabled = c.type === 'loop';
      q('.up').disabled = i === 0; q('.dn').disabled = i === cats.length - 1; q('.rm').disabled = cats.length <= 1;
      const set = (fn) => { if (R.state !== 'idle') { this.render(); return toast('Cambia le categorie a registrazione ferma'); } fn(); this.apply(); };
      q('input[type=color]').addEventListener('change', (e) => set(() => { c.color = e.target.value; }));
      q('.nm').addEventListener('change', (e) => set(() => { const v = e.target.value.trim(); if (v) c.name = v; }));
      q('.cu').addEventListener('change', (e) => set(() => { c.cue = e.target.value.trim().toUpperCase(); }));
      q('.ty').addEventListener('change', (e) => set(() => { if (E.voices[c.id]) stopVoice(c.id); delete E.loops[c.id]; c.type = e.target.value; if (c.type === 'loop') { c.duck = false; c.chap = false; } }));
      q('.du').addEventListener('change', (e) => set(() => { c.duck = e.target.checked; }));
      q('.ch').addEventListener('change', (e) => set(() => { c.chap = e.target.checked; }));
      q('.up').addEventListener('click', () => set(() => { cats.splice(i, 1); cats.splice(i - 1, 0, c); }));
      q('.dn').addEventListener('click', () => set(() => { cats.splice(i, 1); cats.splice(i + 1, 0, c); }));
      q('.rm').addEventListener('click', () => {
        const n = dkList(c.id).length; if (!confirm(`Eliminare la categoria «${c.name}»?` + (n ? ` I suoi ${n} brani escono dal deck (restano nelle sessioni già registrate).` : ''))) return;
        set(() => { if (E.voices[c.id]) stopVoice(c.id); cats.splice(i, 1); delete S.deck[c.id]; delete E.loops[c.id]; delete E.next[c.id]; });
      });
      box.append(r);
    });
  },
  add() {
    if (R.state !== 'idle') return toast('Aggiungi categorie a registrazione ferma');
    const cats = CATS(), used = cats.map(c => c.color), color = CAT_COLORS.find(c => !used.includes(c)) || CAT_COLORS[cats.length % CAT_COLORS.length];
    let n = 1; while (cats.some(c => c.name === 'Categoria ' + n)) n++;
    cats.push({ id: 'c' + Date.now().toString(36), name: 'Categoria ' + n, type: 'list', color, key: '', duck: false, chap: false, cue: '' });
    this.apply(); toast('Nuova categoria: dalle un nome e scegli come si comporta');
  },
  /* Dopo ogni modifica: tasti, deck, mixer, disposizione e segnali del teleprompter si ricostruiscono */
  apply() {
    rebuildActions(); normDeck(); for (const ch of allOf()) ensureStrip(ch);
    DECKUI.build(); LAY.apply(S.settings.layout || 'classico'); ORIENT.apply(); if (ORIENT.onWide) ORIENT.onWide();
    renderKeys(); renderDeck(); TP.render(); renderInsButtons(); LAY.renderSettings(); this.render();
    saveSettings(); saveDeck();
  }
};

/* Collegamenti */
function wire() {
  DECKUI.build();
  CATUI.render(); $('catAdd').addEventListener('click', () => CATUI.add());
  $('catReset').addEventListener('click', () => { if (R.state !== 'idle') return toast('A registrazione ferma'); if (!confirm('Tornare alle tre categorie di base (Sigla, Sottofondo, Capitoli)? Le altre categorie e i loro brani escono dal deck.')) return; for (const ch of Object.keys(E.voices)) if (E.voices[ch]) stopVoice(ch); S.settings.cats = DEF_CATS(); E.loops = {}; E.next = {}; CATUI.apply(); });
  $('recBtn').addEventListener('click', () => { if (R.state === 'idle') recStart(); else if (R.state === 'rec' || R.state === 'preroll') enterHold('pause'); else if (R.state === 'hold') commitHold(); });
  $('retakeBtn').addEventListener('click', () => enterHold('retake'));
  // TERMINA mette subito in pausa (il contatore si ferma) e chiede conferma nel pannello
  $('stopBtn').addEventListener('click', () => { if (R.state === 'rec' || R.state === 'preroll') enterHold('end'); else if (R.state === 'hold') { R.holdMode = 'end'; openHold(); } });
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

  // Teleprompter
  TP.view = $('ptView'); TP.el = $('ptText');
  TP.view.addEventListener('scroll', () => TP.onScroll());
  window.addEventListener('resize', () => { const y = TP.view.scrollTop; TP.layout(); TP.setTop(y); });
  $('ptRun').addEventListener('click', () => TP.toggle());
  $('ptStart').addEventListener('change', (e) => { TP.startMode = e.target.value; TP.save(); });
  $('ptMode').addEventListener('change', (e) => { TP.mode = e.target.value; TP.save(); TP.layout(); if (TP.mode === 'follow' && !VF.supported()) VF.fail('il browser non ha il riconoscimento vocale'); });
  $('helpBtn').addEventListener('click', () => HELP.toggle());
  $('helpPip').addEventListener('click', async () => { if (!(await HELP.openPip())) toast('Il browser ha bloccato la finestra: consenti i popup per questo sito'); else $('helpModal').hidden = true; });
  $('setHelpRec').value = S.settings.helpOnRec === false ? '0' : '1';
  $('setHelpRec').addEventListener('change', (e) => { S.settings.helpOnRec = e.target.value === '1'; saveSettings(); });
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
  renderInsButtons();
  $('ptIns').addEventListener('click', (e) => {
    const b = e.target.closest('[data-ins]'); if (!b) return;
    const ta = $('ptArea'), v = b.dataset.ins, s0 = ta.selectionStart, s1 = ta.selectionEnd;
    ta.setRangeText(' ' + v + ' ', s0, s1, 'end'); ta.focus();
  });
  $('ptLoad').addEventListener('click', () => { if (isRec() || blocked()) return toast('Carica il testo a registrazione ferma'); $('fileScript').click(); });
  $('fileScript').addEventListener('change', async (e) => { const f = e.target.files[0]; e.target.value = ''; if (!f) return; TP.text = await f.text(); TP.save(); TP.edit(false); TP.render(); TP.setTop(0); toast('Testo caricato: ' + f.name); });

  $('sessBtn').addEventListener('click', () => openSessions());
  $('setBtn').addEventListener('click', openSettings);
  $('verBtn').addEventListener('click', openChangelog);
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => { if (b.dataset.close === 'sessModal') closeSessions(); else $(b.dataset.close).hidden = true; }));
  for (const m of ['sessModal', 'setModal', 'clModal']) $(m).addEventListener('click', (e) => { if (e.target.id === m) { if (m === 'sessModal') closeSessions(); else $(m).hidden = true; } });

  $('setRetake').addEventListener('change', (e) => { S.settings.retakeSec = Math.max(1, Math.min(60, +e.target.value || 5)); saveSettings(); });
  $('setPre').addEventListener('change', (e) => { S.settings.preroll = Math.max(0, Math.min(10, +e.target.value || 0)); saveSettings(); });
  const nsUI = () => { $('setNsAi').value = S.settings.nsAi ? '1' : '0'; $('setGate').value = S.settings.gate ? '1' : '0'; $('setGateThr').value = S.settings.gateThr ?? -35; $('setGateThrO').textContent = (S.settings.gateThr ?? -35) + ' dB'; $('setGateThr').disabled = !S.settings.gate; $('nsMsg').textContent = S.settings.nsAi && NS.loaded && !NS.rnn ? 'Riduzione AI non disponibile qui: ' + NS.err : ''; };
  nsUI();
  const nsChange = async () => { saveSettings(); if (R.state !== 'idle') { nsUI(); return toast('Vale dalla prossima registrazione'); } await NS.wire(); nsUI(); };
  $('setNsAi').addEventListener('change', (e) => { S.settings.nsAi = e.target.value === '1'; nsChange(); });
  $('setGate').addEventListener('change', (e) => { S.settings.gate = e.target.value === '1'; nsChange(); });
  $('setGateThr').addEventListener('input', (e) => { S.settings.gateThr = +e.target.value; $('setGateThrO').textContent = e.target.value + ' dB'; NS.setGate(); saveSettings(); });
  $('nsTest').addEventListener('click', async () => {
    if (R.state !== 'idle') return toast('Prova a registrazione ferma'); if (!E.micOk) return toast('Microfono non attivo');
    const b = $('nsTest'); b.disabled = true; $('nsPlay').hidden = true;
    try { const u = await NS.test((k) => { b.textContent = '🔴 Parla e scrivi… ' + k; }); $('nsRaw').src = u.raw; $('nsClean').src = u.clean; $('nsPlay').hidden = false; }
    catch (e) { toast('Prova non riuscita: ' + e.message); }
    b.disabled = false; b.textContent = '🎙 Prova: parla e scrivi per 6 secondi';
  });
  $('setNs').addEventListener('change', async (e) => { S.settings.ns = e.target.value === '1'; saveSettings(); if (R.state === 'idle') await initMic(); else toast('Vale dalla prossima registrazione'); });
  $('setDev').addEventListener('click', () => { $('setModal').hidden = true; DEV.open(); });
  LAY.wire(); LAY.apply(S.settings.layout || 'classico'); ORIENT.apply();
  window.addEventListener('resize', () => { clearTimeout(ORIENT.t); ORIENT.t = setTimeout(() => { const w = ORIENT.wide; ORIENT.apply(); if (w !== ORIENT.wide) LAY.renderSettings(); }, 120); });
  $('setOrient').value = S.settings.orient || 'auto'; $('setWideLay').value = S.settings.wideLay || 'center';
  $('setOrient').addEventListener('change', (e) => { S.settings.orient = e.target.value; saveSettings(); ORIENT.apply(); LAY.renderSettings(); });
  $('setWideLay').addEventListener('change', (e) => {
    // Disposizione rapida: vale anche per il set attivo (prima un set personale la ignorava)
    S.settings.wideLay = e.target.value; const id = S.settings.layout, L = (S.settings.layouts || {})[id];
    if (L) delete L.wide; if (LAY.cur) delete LAY.cur.wide;
    saveSettings(); ORIENT.apply(); LAY.renderSettings();
  });
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
  $('vRes').addEventListener('change', (e) => { if (isRec() || blocked()) { e.target.value = String(vs.res); return toast('Cambia risoluzione a registrazione ferma'); } vs.res = +e.target.value; CAM.resize(); OUT.resize(); saveSettings(); });
  // Sfondo, logo, Iscriviti
  const ov = S.settings.ov;
  $('ovBg').value = ov.bg; $('ovLogoPos').value = ov.logoPos; $('ovLogoSize').value = ov.logoSize; $('ovLogoOp').value = ov.logoOp;
  const syncOv = () => { $('ovLogoOn').setAttribute('aria-pressed', String(!!ov.logoOn)); $('ovLogoSizeO').textContent = Math.round(ov.logoSize * 100) + '%'; $('ovLogoOpO').textContent = Math.round(ov.logoOp * 100) + '%'; $('ovBgLoad').hidden = $('ovBgName').hidden = ov.bg !== 'image'; $('ovBgvLoad').hidden = $('ovBgvName').hidden = ov.bg !== 'video'; $('ovBehind').checked = ov.behind !== false; };
  syncOv();
  $('ovBg').addEventListener('change', (e) => { ov.bg = e.target.value; saveSettings(); syncOv(); if (ov.bg === 'image' && !OUT.bg) $('fileOvBg').click(); if (ov.bg === 'video' && !OUT.bgv) $('fileOvBgv').click(); });
  $('ovBgvLoad').addEventListener('click', () => $('fileOvBgv').click());
  $('ovBehind').addEventListener('change', (e) => { ov.behind = e.target.checked; saveSettings(); });
  $('fileOvBgv').addEventListener('change', async (e) => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    if (f.size > 200e6) return toast('Video troppo grande: usa un file sotto i 200 MB (bastano pochi secondi in loop)');
    await DB.put('files', 'ov-bgv', { name: f.name, type: f.type, blob: f }); await OUT.loadImages(); toast('Video di sfondo caricato: ' + f.name);
  });
  $('ovBgLoad').addEventListener('click', () => $('fileOvBg').click());
  $('ovLogoLoad').addEventListener('click', () => $('fileOvLogo').click());
  for (const [inp, key, id] of [['fileOvBg', 'bg', 'ov-bg'], ['fileOvLogo', 'logo', 'ov-logo']]) $(inp).addEventListener('change', async (e) => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    await DB.put('files', id, { name: f.name, type: f.type, blob: f }); await OUT.loadImages();
    if (key === 'logo') { ov.logoOn = true; saveSettings(); syncOv(); } toast((key === 'logo' ? 'Logo' : 'Sfondo') + ' caricato: ' + f.name);
  });
  $('ovLogoOn').addEventListener('click', () => { ov.logoOn = !ov.logoOn; if (ov.logoOn && !OUT.logo) { $('fileOvLogo').click(); } saveSettings(); syncOv(); });
  $('ovLogoPos').addEventListener('change', (e) => { ov.logoPos = e.target.value; saveSettings(); });
  $('ovLogoSize').addEventListener('input', (e) => { ov.logoSize = +e.target.value; saveSettings(); syncOv(); });
  $('ovLogoOp').addEventListener('input', (e) => { ov.logoOp = +e.target.value; saveSettings(); syncOv(); });
  $('ovSub').addEventListener('click', () => SUB.start());
  ED.wire();
  // Sincronizzazione
  const sc = SYNC.cfg;
  $('syRepo').value = sc.repo; $('syToken').value = sc.token; $('syDev').value = sc.dev; $('syAuto').checked = !!sc.auto; $('syCheck').checked = sc.check !== false;
  const gbox = $('syGroups'); gbox.replaceChildren();
  for (const [k, t] of SYNC_GROUPS) { const l = document.createElement('label'); l.className = 'chk'; l.innerHTML = `<input type="checkbox" id="syg-${k}"> `; l.append(t); const cb = l.querySelector('input'); cb.checked = sc.groups[k] !== false; cb.addEventListener('change', () => { sc.groups[k] = cb.checked; SYNC.save(); }); gbox.append(l); }
  for (const [id, k] of [['syRepo', 'repo'], ['syToken', 'token'], ['syDev', 'dev']]) $(id).addEventListener('change', (e) => { sc[k] = e.target.value.trim(); SYNC.save(); });
  $('syAuto').addEventListener('change', (e) => { sc.auto = e.target.checked; SYNC.save(); });
  $('syCheck').addEventListener('change', (e) => { sc.check = e.target.checked; SYNC.save(); });
  const syMsg = (t, c) => { const m = $('syMsg'); m.textContent = t; m.style.color = c || 'var(--dim)'; };
  const syncInfo = async () => { if (!SYNC.ready()) { syMsg('Non ancora collegato.'); return; } try { const m = await SYNC.remoteMeta(); syMsg(m ? `Ultimo invio: ${new Date(m.updated).toLocaleString('it-IT')} da «${m.device}» (${(m.size / 1048576).toFixed(1)} MB).` : 'Collegato, ma non è ancora stato inviato niente.'); } catch (e) { syMsg('Non riesco a collegarmi: ' + e.message, 'var(--rec)'); } };
  $('syTest').addEventListener('click', async () => { syMsg('Controllo…'); try { syMsg(await SYNC.test(), 'var(--ok)'); setTimeout(syncInfo, 1500); } catch (e) { syMsg('Non funziona: ' + e.message, 'var(--rec)'); } });
  $('syPush').addEventListener('click', async (e) => { const b = e.currentTarget; b.disabled = true; try { const m = await SYNC.push((t) => syMsg(t)); syMsg(`Inviato (${(m.size / 1048576).toFixed(1)} MB): sugli altri dispositivi premi «Ricevi».`, 'var(--ok)'); } catch (err) { syMsg('Invio non riuscito: ' + err.message, 'var(--rec)'); } b.disabled = false; });
  const doPull = async () => { if (isRec() || blocked()) { toast('Ferma prima la registrazione'); return; } try { const m = await SYNC.pull((t) => syMsg(t)); toast(`Impostazioni ricevute da «${m.device}»: riavvio OnAir`); setTimeout(() => location.reload(), 1200); } catch (err) { syMsg('Ricezione non riuscita: ' + err.message, 'var(--rec)'); toast('Ricezione non riuscita: ' + err.message); } };
  $('syPull').addEventListener('click', doPull);
  $('syncBannerGo').addEventListener('click', () => { $('syncBanner').hidden = true; doPull(); });
  $('syncBannerNo').addEventListener('click', () => { $('syncBanner').hidden = true; });
  $('setBtn').addEventListener('click', () => syncInfo());
  // Backup e trasferimento
  let onairMode = 'studio';
  $('bkSave').addEventListener('click', () => exportStudio());
  $('bkLoad').addEventListener('click', () => { onairMode = 'studio'; $('fileOnair').click(); });
  $('sessImport').addEventListener('click', () => { onairMode = 'session'; $('fileOnair').click(); });
  $('fileOnair').addEventListener('change', async (e) => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    let kind = onairMode; // il file dice da solo se è uno studio o una sessione
    try { const hl = new DataView(await f.slice(7, 11).arrayBuffer()).getUint32(0, true); kind = JSON.parse(new TextDecoder().decode(await f.slice(11, 11 + hl).arrayBuffer())).kind; } catch (err) {}
    if (kind === 'session') { if ($('sessModal').hidden) openSessions(); importSessionFile(f); } else { if ($('setModal').hidden) openSettings(); importStudio(f); }
  });
  // Canale e piattaforme
  const pl = S.settings.plat;
  $('setChan').value = S.settings.channel || ''; $('setChan').addEventListener('input', (e) => { S.settings.channel = e.target.value; saveSettings(); });
  for (const [id, obj, k] of [['spFmt', pl.sp, 'fmt'], ['spLufs', pl.sp, 'lufs'], ['ytLufs', pl.yt, 'lufs'], ['ytAbr', pl.yt, 'abr'], ['ytCh', pl.yt, 'ch'], ['ytChName', pl.yt, 'chName'], ['ytIntro', pl.yt, 'intro']]) {
    $(id).value = obj[k]; $(id).addEventListener('change', (e) => { obj[k] = e.target.value; saveSettings(); });
  }
  // Inquadratura e green screen
  const box = $('vBox'), areaBox = $('vAreaBox'), hint = $('vHint');
  const syncFrameUI = () => {
    $('vZoom').setAttribute('aria-pressed', String(!!vs.zoom)); $('vZoom').disabled = !vs.mask;
    $('vAreaReset').disabled = !vs.mask; $('vKey').setAttribute('aria-pressed', String(!!vs.key));
    $('vKc').style.background = vs.kc || '#33b34d'; $('vTol').value = vs.tol ?? 0.09; $('vTolO').textContent = Math.round((vs.tol ?? 0.09) * 100);
    const ai = vs.vmode === 'ai'; $('vVmode').value = ai ? 'ai' : 'scene';
    $('vVbg').setAttribute('aria-pressed', String(!!vs.vbg && (ai || !!CAM.bgCanvas))); $('vVbg').disabled = !ai && !CAM.bgCanvas;
    $('vScene').hidden = ai; $('vVtolRow').hidden = ai;
    $('vVbgNote').textContent = ai ? (SEG.ready ? 'Modalità Persone: si vedono solo le persone, niente da registrare. Gli oggetti vengono tolti.' : SEG.err ? 'Modalità Persone non disponibile qui: serve l\'accelerazione grafica (WebGL) attiva nel browser. In Chrome: Impostazioni → Sistema → «Usa l\'accelerazione grafica quando disponibile».' : 'Modalità Persone: al primo uso carica il modello (qualche secondo).') : ($('vVbgNote').dataset.scene || 'Senza telo: registra la stanza vuota, poi rientra. Tieni la luce costante e la webcam ferma.');
    $('vVtol').value = vs.vtol ?? 0.15; $('vVtolO').textContent = Math.round((vs.vtol ?? 0.15) * 100);
    $('vDbg').setAttribute('aria-pressed', String(!!CAM.dbg)); $('vDbg').disabled = !(vs.key || (vs.vbg && (ai || CAM.bgCanvas)));
    $('vScene').textContent = CAM.bgCanvas ? '🎬 Registra di nuovo la scena vuota' : '🎬 Registra la scena vuota';
  };  window.syncFrameUI = syncFrameUI;

  syncFrameUI();
  const endEdit = () => { CAM.edit = null; box.classList.remove('editing'); areaBox.hidden = true; hint.hidden = true; };
  const relPos = (e) => { const r = $('vBox').getBoundingClientRect(); return [Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))]; };
  const startEdit = (mode) => {
    if (isRec() || blocked()) return toast('Cambia l\'inquadratura a registrazione ferma');
    if (!CAM.ok) return toast('Webcam non attiva');
    ORIENT.adjust(false); CAM.edit = mode; box.classList.add('editing'); hint.hidden = false;
    hint.textContent = mode === 'area' ? 'Trascina il rettangolo da tenere (tutto il resto diventa nero) · Esc per annullare' : 'Clicca sul telo verde · Esc per annullare';
    if (mode === 'area' && vs.mask) { const m = vs.mask; Object.assign(areaBox.style, { left: m[0] * 100 + '%', top: m[1] * 100 + '%', width: (m[2] - m[0]) * 100 + '%', height: (m[3] - m[1]) * 100 + '%' }); areaBox.hidden = false; }
  };
  let drag = null;
  box.addEventListener('pointerdown', (e) => {
    if (!CAM.edit) return; e.preventDefault();
    const p = relPos(e);
    if (CAM.edit === 'pick') { const c = CAM.sampleAt(p[0], p[1]); if (c) { vs.kc = c; vs.key = true; vs.kcPicked = true; saveSettings(); syncFrameUI(); toast('Colore del telo preso'); } endEdit(); return; }
    drag = p; box.setPointerCapture(e.pointerId); areaBox.hidden = false;
    Object.assign(areaBox.style, { left: p[0] * 100 + '%', top: p[1] * 100 + '%', width: '0%', height: '0%' });
  });
  box.addEventListener('pointermove', (e) => {
    if (!drag || CAM.edit !== 'area') return; const p = relPos(e);
    Object.assign(areaBox.style, { left: Math.min(p[0], drag[0]) * 100 + '%', top: Math.min(p[1], drag[1]) * 100 + '%', width: Math.abs(p[0] - drag[0]) * 100 + '%', height: Math.abs(p[1] - drag[1]) * 100 + '%' });
  });
  box.addEventListener('pointerup', (e) => {
    if (!drag || CAM.edit !== 'area') return; const p = relPos(e);
    const m = [Math.min(p[0], drag[0]), Math.min(p[1], drag[1]), Math.max(p[0], drag[0]), Math.max(p[1], drag[1])]; drag = null;
    if (m[2] - m[0] < 0.08 || m[3] - m[1] < 0.08) { toast('Area troppo piccola: trascina un rettangolo più grande'); return; }
    vs.mask = m.map(x => Math.round(x * 1000) / 1000); saveSettings(); syncFrameUI(); endEdit(); toast('Area salvata: fuori diventa nero');
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && CAM.edit) { drag = null; endEdit(); } });
  $('vArea').addEventListener('click', () => startEdit('area'));
  $('vAdjust').addEventListener('click', () => ORIENT.adjust(!$('vcard').classList.contains('adj')));
  $('vAdjClose').addEventListener('click', () => ORIENT.adjust(false));
  $('vPick').addEventListener('click', () => startEdit('pick'));
  $('vAreaReset').addEventListener('click', () => { if (isRec() || blocked()) return toast('Cambia l\'inquadratura a registrazione ferma'); vs.mask = null; vs.zoom = false; saveSettings(); syncFrameUI(); });
  $('vZoom').addEventListener('click', () => { if (isRec() || blocked()) return toast('Cambia l\'inquadratura a registrazione ferma'); vs.zoom = !vs.zoom; saveSettings(); syncFrameUI(); });
  $('vKey').addEventListener('click', () => { if (isRec() || blocked()) return toast('Attiva il green screen a registrazione ferma'); vs.key = !vs.key; saveSettings(); syncFrameUI(); if (vs.key && !vs.kcPicked) toast('Per un risultato migliore premi «Scegli il verde» e clicca sul telo'); });
  $('vTol').addEventListener('input', (e) => { vs.tol = +e.target.value; saveSettings(); syncFrameUI(); });
  $('vVtol').addEventListener('input', (e) => { vs.vtol = +e.target.value; saveSettings(); syncFrameUI(); });
  $('vVmode').addEventListener('change', (e) => { if (isRec()) { e.target.value = vs.vmode || 'scene'; return toast('Cambia modalità a registrazione ferma'); } vs.vmode = e.target.value; if (vs.vmode === 'ai') { vs.vbg = true; SEG.err = null; } saveSettings(); syncFrameUI(); });
  $('vDbg').addEventListener('click', () => { CAM.dbg = !CAM.dbg; syncFrameUI(); if (CAM.dbg) toast('Bianco = resta, rosso scuro = tolto. Muovi «Pulizia» finché la stanza è tutta rossa e tu tutto bianco'); });
  $('vVbg').addEventListener('click', async () => {
    if (isRec() || blocked()) return toast('Attiva il green screen virtuale a registrazione ferma');
    if (vs.vmode !== 'ai' && !CAM.bgCanvas) return toast('Prima registra la scena vuota');
    vs.vbg = !vs.vbg; saveSettings();
    if (vs.vmode !== 'ai') { if (vs.vbg) $('vVbgNote').dataset.scene = await CAM.lockCamera(); else CAM.unlockCamera(); }
    syncFrameUI();
  });
  $('vScene').addEventListener('click', async () => {
    if (isRec() || blocked()) return toast('Registra la scena vuota a registrazione ferma');
    if (!CAM.ok) return toast('Webcam non attiva');
    const btn = $('vScene'); btn.disabled = true; ORIENT.adjust(false); CAM.edit = 'scene'; hint.hidden = false;
    try {
      await CAM.unlockCamera();
      for (let k = 5; k > 0; k--) { hint.textContent = 'Esci dall\'inquadratura (porta via la sedia se vuoi farla sparire)… ' + k; await new Promise(r => setTimeout(r, 1000)); }
      const lock = await CAM.lockCamera();
      await new Promise(r => setTimeout(r, 400));
      await CAM.captureScene((p) => { hint.textContent = 'Sto registrando la scena vuota… ' + Math.round(p * 100) + '% · resta fuori'; });
      vs.vbg = true; saveSettings(); C2D.bgKey = null;
      $('vVbgNote').dataset.scene = 'Scena vuota registrata (' + lock + '). Ora rientra: si vede solo ciò che è nuovo.';
      toast('Scena vuota registrata: rientra pure');
    } catch (e) { toast('Non sono riuscito a registrare la scena: ' + e.message); }
    CAM.edit = null; hint.hidden = true; btn.disabled = false; syncFrameUI();
  });
  $('vOn').addEventListener('click', () => { if (isRec() || blocked()) return toast('Attiva o disattiva il video a registrazione ferma'); vs.on = !vs.on; saveSettings(); renderStatus(); });
  if (!V.codec) { $('vOn').disabled = true; $('vOn').title = 'Questo browser non sa registrare video: usa Chrome o Edge aggiornati'; vs.on = false; }

  const STY = { console: 'console', compact: 'compatta', bars: 'a barre' };
  const nextSty = () => { const list = ORIENT.wide ? ['bars', 'console', 'compact'] : ['console', 'compact']; const cur = mixStyleNow(); return list[(list.indexOf(cur) + 1) % list.length]; };
  const mkLive = () => { document.querySelectorAll('body > .eqfloat').forEach(e => e.remove()); meterRefs = buildMixer($('liveStrips'), S.mix, { onChange: () => { applyLevels(); saveDeck(); }, meters: true, mutes: S.mutes }); $('mixStyleBtn').textContent = '⇄ Vista ' + STY[nextSty()]; $('setMixStyle').value = S.settings.mixStyle || 'console'; $('setMixStyleWide').value = S.settings.mixStyleWide || 'bars'; };
  mkLive(); ORIENT.onWide = mkLive;
  $('mixStyleBtn').addEventListener('click', () => { const n = nextSty(); if (ORIENT.wide) S.settings.mixStyleWide = n; else S.settings.mixStyle = n; saveSettings(); mkLive(); });
  $('setMixStyle').addEventListener('change', (e) => { S.settings.mixStyle = e.target.value; saveSettings(); mkLive(); });
  $('setMixStyleWide').addEventListener('change', (e) => { S.settings.mixStyleWide = e.target.value; saveSettings(); mkLive(); });
  document.addEventListener('pointerdown', (e) => { if (!e.target.closest('#liveStrips details.eq, .eqfloat')) document.querySelectorAll('#liveStrips.bars details.eq[open]').forEach(o => { o.open = false; }); });
  addEventListener('resize', () => document.querySelectorAll('#liveStrips.bars details.eq[open]').forEach(placeEqPop));
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
  normDeck();
  const ids = new Set(deckIds());
  for (const s of await DB.all('sessions')) for (const g of s.segs || []) ids.add(g.fileId);
  for (const id of ids) { const f = await DB.get('files', id); if (f) S.names.set(id, f.name); }
  for (const c of CATS()) { const v = S.deck[c.id]; if (Array.isArray(v)) S.deck[c.id] = v.filter(id => S.names.has(id)); else if (v && !S.names.has(v)) S.deck[c.id] = null; }
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
      CAM.setup(); OUT.setup(); await OUT.loadImages(); await CAM.loadScene();
      wire(); renderAll(); TP.render(); requestAnimationFrame(loop);
      if (S.settings.camId !== 'none') await CAM.init(S.settings.camId); else CAM.chosen = 'none';
      await DEV.open(true);
      await preloadDeck(); await recoverSessions(); SYNC.startupCheck();
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
      const se = await DB.get('state', 'settings'); if (se) { const vd = S.settings.video, od = S.settings.ov, pd = S.settings.plat; Object.assign(S.settings, se); S.settings.video = { ...vd, ...(se.video || {}) }; S.settings.ov = { ...od, ...(se.ov || {}) }; S.settings.plat = { sp: { ...pd.sp, ...((se.plat || {}).sp || {}) }, yt: { ...pd.yt, ...((se.plat || {}).yt || {}) } }; if (se.keys) { const ks = { ...DEF_KEYS, ...se.keys }; if (ks.tpUp === 'ArrowUp' && ks.tpDown === 'ArrowDown') { ks.tpUp = 'Shift+ArrowUp'; ks.tpDown = 'Shift+ArrowDown'; ks.tpBack = 'ArrowUp'; ks.tpFwd = 'ArrowDown'; } S.settings.keys = ks; } }
      // le categorie sono nelle impostazioni: livelli e tasti si sistemano dopo averle lette
      rebuildActions(); if (st) { S.mix = normMix(st.mix || st.levels); if (st.defaults) S.defaults = normMix(st.defaults); }
      await TP.load(); await SYNC.load();
    } catch (e) { console.warn(e); }
    await loadNames();
    $('footInfo').textContent = DB.ok ? 'Dati salvati in questo browser' : 'Attenzione: questo browser non salva i dati, esporta prima di chiudere';
  })();
  window.addEventListener('beforeunload', (e) => { if (R.state !== 'idle') { persistSession(); e.preventDefault(); e.returnValue = ''; } });
}
boot();
