# GPverse OnAir — Registro delle versioni

Schema: **V.maior.minor.patch**
- **maior**: cambiamento grosso o incompatibile con le versioni precedenti
- **minor**: nuova funzione
- **patch**: correzione di un bug

La versione è visibile nell'app (in alto, accanto al logo) e cliccandola si vedono le novità.

## V4.1.0 — 15/11/2026
**Prestazioni**
- Anteprima video ridisegnata solo con fotogrammi nuovi o impostazioni cambiate (firma dello stato); compositore e registrazione video seguono.
- Mixer: indicatori a 30 fps e solo se cambiano (gradiente e disegno saltati); LUFS a 10 Hz; contatore e barre aggiornati solo se cambiano.
- Effetto 2D: ciclo Sobel senza controlli per pixel, righe di scansione precalcolate, un solo drawImage senza disturbo.
- Persone: segmentazione max 15 fps. Teleprompter: altezza misurata al massimo ogni 0,5 s.
- Modalità leggera (anteprima 15 fps fuori registrazione, mixer 15 fps) e indicatore del lavoro dell'app in Impostazioni → Prestazioni.
- Misure (media di 3 prove, Chromium senza GPU): studio fermo con effetto 67%→46% (leggera 23%, leggera+540p 19%); senza effetto 51%→24%; registrazione 92%→72% (540p 53%).

## V4.0.4 — 15/11/2026
- Corretto: R, Spazio e TERMINA erano ignorati durante il riascolto dopo un re-take (l'errore restava nella puntata). Ora R riapre il re-take e torna più indietro; la musica ripresa per il riascolto si ferma e riparte dal nuovo punto.
- Avviso durante il riascolto.

## V4.0.3 — 14/11/2026
- Controllo completo con prove automatiche (≈190 verifiche: impostazioni, scorciatoie, registrazione, teleprompter, categorie, sessioni ed esportazioni, montaggio, video, green screen, viste).
- Corretto: in Sessioni i livelli di una sessione venivano normalizzati sulle categorie attuali invece che su quelle della sessione.
- Avviso quando il tasto di una categoria non ha niente da lanciare (vuota o lista finita).

## V4.0.2 — 14/11/2026
- Corretto: con «Scorre quando parlo» [PAUSA] fermava il testo per sempre. Ora attende una pausa e riparte quando riprendi a parlare (P lo fa ripartire subito); a velocità fissa invariato; con «Segue le parole» ignorato.
- Pulsanti dei segnali nell'editor del testo generati dalle categorie audio.

## V4.0.1 — 14/11/2026
- Corretto: un segnale lanciato all'avvio della registrazione (es. [SIGLA] appena sotto la riga di lettura) ripartiva quando il testo lo raggiungeva. Ora resta lanciato.

## V4.0.0 — 14/11/2026
**Categorie audio a piacere** (Impostazioni → Categorie audio)
- Categorie con nome, colore, comportamento (Singolo, In loop, Stacchetti), «ferma i loop», «capitoli YouTube», segnale nel teleprompter.
- Motore audio, deck, mixer, montaggio, esportazione, capitoli, tasti, specchietto e disposizione generati dalle categorie. Sessioni con le proprie categorie (`sess.cats`); sessioni precedenti lette con le tre di base.
- Categorie sincronizzate nel gruppo «audio».
**Correzioni**
- Segnali sulla riga di lettura all'avvio della registrazione (es. [SIGLA] prima del titolo) partono subito.
- Tasti tenuti premuti non ripetono i comandi (la sigla ripartiva da capo); filtro sui doppioni ravvicinati.
- Video: decodifica che riparte dal fotogramma chiave successivo se un pezzo è rovinato o manca, sia in anteprima sia nell'esportazione montata.

## V3.8.0 — 14/11/2026
- Teleprompter: modi «Velocità fissa», «Scorre quando parlo» (rilevamento voce sulla banda 100–1000 Hz, ignora i clic) e «Segue le parole che leggo» (riconoscimento vocale del browser in italiano, allineamento sulle ultime parole dette; ripiega su «Quando parlo» se non disponibile). Tasto M.
- [SOTTOFONDO] durante la sigla aspetta la fine della sigla.
- Specchietto delle scorciatoie (H, «⌨ Tasti»), anche in finestra sempre in primo piano (Document Picture-in-Picture, o popup); si apre da solo quando registri; i tasti premuti lì comandano OnAir.

## V3.7.1 — 14/11/2026
- Corretto: il pannello ⚙ del mixer a barre compariva in un punto sbagliato. Ora è un menu a comparsa agganciato all'ingranaggio (con freccia), trascinabile dalla testata, chiuso con ✕ o cliccando fuori.

## V3.7.0 — 14/11/2026
**Pulizia della voce** (Impostazioni → Pulizia della voce)
- Riduzione rumore AI con RNNoise (lib/ns, @sapphi-red/web-noise-suppressor, MIT; RNNoise BSD).
- Noise gate con comando filtrato sulla banda della voce, anticipo di 25 ms (non taglia l'inizio delle parole), tenuta 250 ms, attenuazione −30 dB; soglia regolabile riferita al livello dopo «Ingresso mic». Spia «GATE» sulla riga della voce.
- «🎙 Prova»: 6 secondi registrati prima e dopo la pulizia, da riascoltare a confronto.
- Misura su voce + tasti sintetici: AI + gate tolgono 21–30 dB ai tasti, voce invariata.
- Audio dello studio sempre a 48 kHz.
- Verificate in vista orizzontale con mixer a barre tutte le voci di Impostazioni (42 controlli automatici).

## V3.6.1 — 14/11/2026
- Disposizione: ogni modifica si salva subito, in qualsiasi ordine; partendo da un set pronto si crea una copia personale. «Duplica con un nuovo nome»; tolto «Salva modifiche».
- «Togli lo sfondo senza telo» in cima a «⚙ Regola».

## V3.6.0 — 14/11/2026
- Modalità «Persone»: scontorno delle persone con MediaPipe Selfie Segmentation (in locale, file in lib/mp, licenza Apache-2.0). Niente scena vuota da registrare; robusta a luce e webcam urtata. Richiede WebGL.
- Modalità «Con la scena vuota»: avviso se la webcam si è mossa.
- Corretto: la disposizione rapida in orizzontale ora vale anche per i set personali.

## V3.5.1 — 14/11/2026
- Corretto: entrando nell'inquadratura ricompariva tutta la stanza (la webcam cambia da sola esposizione e bilanciamento del bianco). Ora il cambio di luce viene misurato e compensato.
- Confronto su immagine sfocata e basato sul colore (meno sensibile a rumore, messa a fuoco, tremolii e ombre leggere); pulizia dei puntini isolati.
- «👁 Vedi cosa resta» e cursore «Pulizia» (prima «Sensibilità»). Anteprima visibile con «⚙ Regola» aperto. Avviso se la webcam cambia formato.

## V3.5.0 — 14/11/2026
- Set di pannelli personalizzabili anche in vista orizzontale: colonna (sinistra, centro, destra, in basso), ordine, visibilità e larghezza delle colonne.
- Ogni set ricorda una disposizione orizzontale e una verticale.
- «Salva modifiche» aggiorna un set personale esistente.

## V3.4.0 — 14/11/2026
- Mixer «a barre»: una riga per fonte (indicatore, fader, ↺, MUTE, ⚙) in due colonne, livello voce di lato; base in vista orizzontale. Con più fonti scorre in verticale.
- ⚙ apre gain, EQ e ingresso microfono in un pannello sopra la riga.
- Vista orizzontale: riquadro VIDEO con sola anteprima, comandi in «⚙ Regola» (si chiude da solo quando scegli area, colore o registri la scena vuota).
- Stile del mixer separato per vista orizzontale e verticale (Impostazioni).

## V3.3.1 — 14/11/2026
- Corretto: in vista orizzontale video, sottofondo e capitoli venivano tagliati in altezza.
- Anteprima video adattata al riquadro (i comandi scorrono sotto); sottofondo e capitoli con più spazio e pulsanti sempre visibili.
- Mixer più basso: fader adattati all'altezza dello schermo, «Ingresso mic» su una riga, «Gain ed EQ» si apre sopra la fonte.

## V3.3.0 — 14/11/2026
**Green screen virtuale** (scheda Video)
- «🎬 Registra la scena vuota»: conto alla rovescia di 5 secondi, esci dall'inquadratura (porta via la sedia se vuoi farla sparire) e OnAir memorizza la stanza.
- Interruttore «Green screen virtuale» e cursore «Sensibilità»: si vede solo ciò che è diverso dalla scena vuota (tu, un ospite, un oggetto).
- Esposizione, bilanciamento del bianco e messa a fuoco bloccati quando la webcam lo permette (altrimenti: luce costante).
- Sfondo «Anche dietro di te»: con green screen a colore o virtuale, al posto della stanza metti nero, sfocato, un'immagine o un video in loop.
- La scena vuota è salvata su questo dispositivo (non viene sincronizzata: ogni stanza ha la sua).

## V3.2.0 — 14/11/2026
**Sincronizzazione** (Impostazioni → Sincronizzazione)
- Repository GitHub privato + token personale con permesso «Contents: read and write» solo su quel repository.
- «⬆ Invia» carica le impostazioni scelte, «⬇ Ricevi» le applica; all'avvio avviso se l'altro dispositivo ha impostazioni più recenti.
- Gruppi a scelta: testo e brani, mixer, video e sovrimpressioni, disposizioni e tasti, piattaforme. Invio automatico facoltativo.
- Il token resta sul dispositivo: non entra nei file .onair né nella sincronizzazione.

## V3.1.0 — 14/11/2026
**Vista orizzontale**
- Su monitor 16:9 la registrazione sta tutta in uno schermo: video, mixer, teleprompter e comandi affiancati, senza scorrere.
- Montaggio orizzontale: timeline larga, anteprima ed esportazione di lato, tracce più alte.
- Impostazioni → Vista: automatica, orizzontale o verticale; posizione del video (centro, sinistra, destra).

## V3.0.0 — 08/11/2026
Nuova versione maggiore: montaggio e nuova grafica.

**Montaggio** (Sessioni → «🎬 Montaggio»)
- Timeline a tracce: voce con forma d'onda, sigla, sottofondo, capitoli; righello, cursore, zoom (Ctrl+rotellina, + −, Adatta), scorrimento, display del tempo.
- Blocchi musicali: trascinali per spostarli, tira i bordi per accorciarli, dividili al cursore (S), eliminali (Canc). Per ogni blocco: volume (−24…+12 dB), dissolvenza in entrata e in uscita.
- Selezione di un tratto (trascinando sulla voce o sul righello): «Taglia» lo elimina da voce, musica e video insieme e tutto quello che segue si sposta indietro; «Silenzia la voce» toglie solo la voce in quel tratto (tosse, rumori).
- Capitoli YouTube come bandierine sul righello: trascinabili, rinominabili, aggiungibili al cursore (C).
- Annulla / ripristina (Ctrl+Z / Ctrl+Shift+Z), anteprima con video, tutto salvato da solo.
- Il montaggio non distrugge niente: la registrazione originale resta com'è. All'esportazione il video tagliato viene ricodificato.

**Mixer**
- Due viste a scelta (pulsante nel mixer o Impostazioni): console con fader verticali e indicatori con scala in dB e picco, oppure compatta.
- Curva dell'EQ disegnata in ogni fonte (clic per aprire le regolazioni).
- «Livello voce»: misura dal vivo in LUFS di come suonerà la voce nel file, con indicazione basso / buono / alto.

**Colori**: voce ciano, sigla magenta, sottofondo giallo, capitoli verde, ripetuti in mixer, pannelli e timeline.

## V2.9.0 — 08/11/2026
**Backup e trasferimento tra dispositivi**
- Impostazioni → Backup e trasferimento: «⬇ Salva lo studio in un file» (sigla, sottofondi, capitoli, testo, logo, sfondo, mixer, disposizioni, tasti, piattaforme) e «⬆ Carica uno studio» su un altro dispositivo. Microfono, uscita e webcam restano quelli del dispositivo.
- Sessioni: «⬇ Trasferisci» salva una registrazione completa (voce, video, musica usata, mix, capitoli) in un file .onair; «⬆ Importa sessione» la apre altrove, pronta da rimixare ed esportare.
- OnAir riconosce da solo se un file .onair è uno studio o una sessione.

## V2.8.0 — 08/11/2026
**Spotify, YouTube e capitoli**
- Impostazioni → Canale e piattaforme: nome del canale; per Spotify formato e volume (−16 LUFS di base); per YouTube volume (−14 LUFS di base), qualità audio e capitoli.
- Sessioni: «🎧 Esporta per Spotify» e «▶ Esporta per YouTube» usano quelle impostazioni; l'esportazione personalizzata resta disponibile.
- Capitoli YouTube creati dagli stacchetti (titolo dal nome del file o «Capitolo n»; il primo è sempre a 00:00), modificabili: orario, titolo, aggiungi, aggiungi nel punto dell'anteprima, elimina, rigenera. Controllo delle regole di YouTube (almeno 3, il primo a 00:00, ognuno di almeno 10 secondi) e «📋 Copia per la descrizione».

## V2.7.0 — 08/11/2026
**Sfondo, logo e Iscriviti** (riquadro VIDEO → «Sfondo, logo e Iscriviti»)
- Sfondo dove non arriva la webcam (fuori dall'area scelta): nero, sfocato come al TG (lo stesso video allargato e sfumato) o un'immagine. Si cambia quando vuoi.
- Logo PNG in sovraimpressione, senza effetto: angolo, dimensione, opacità.
- Animazione «Iscriviti» in alto al centro con il nome del canale, clic e campanella: tasto I, pulsante, o segnale [ISCRIVITI] nel teleprompter.
- Tutto finisce nel video registrato.

## V2.6.0 — 08/11/2026
- Teleprompter: ↑ e ↓ spostano il testo (tenuti premuti scorrono), anche mentre va da solo; la velocità è passata a Shift+↑ / Shift+↓.
- Disposizione dei pannelli in Impostazioni: set pronti (Classico, Teleprompter davanti, Solo lettura) e set personali con ordine, larghezza, visibilità e teleprompter più alto.
- Green screen di qualsiasi colore, anche muro bianco o grigio: con i colori neutri OnAir considera anche la luminosità.

## V2.5.0 — 08/11/2026
**Inquadratura e green screen (riquadro VIDEO)**
- «✂ Scegli area»: trascini sull'anteprima il rettangolo da tenere; fuori diventa nero. Serve a nascondere quello che si vede oltre il telo. «Tutta l'inquadratura» lo toglie.
- «Ingrandisci area»: l'area scelta riempie lo schermo, senza deformarsi.
- «Green screen»: il telo verde diventa nero, così l'effetto disegna solo i tuoi contorni e non le pieghe del telo. «🎯 Scegli il verde» e un clic sul telo per prenderne il colore esatto; «Tolleranza verde» per regolare quanto verde togliere.
- Funziona con l'effetto e con la webcam normale, sia in modalità grafica piena sia in modalità semplice. Le impostazioni restano salvate.

## V2.4.0 — 04/11/2026
- OnAir online su GitHub Pages (https): si usa da tablet e smartphone Android senza il PC acceso.
- Installabile come app (pulsante «⤓ Installa app» o menu di Chrome → «Installa app»).
- Funziona senza internet dopo il primo avvio; gli aggiornamenti arrivano da soli quando c'è rete.
- Chiede al browser di non cancellare i dati salvati (sessioni, file, testo) per mancanza di spazio.
- File audio, registrazioni e testo restano sul dispositivo: nulla viene caricato online.

## V2.3.2 — 31/10/2026
- Corretto: aprendo una sessione il video dell'anteprima restava nero finché non si premeva ▶. Ora compare subito il fotogramma del punto scelto, anche spostando la barra a riproduzione ferma.
- Lettura del video più compatibile su Linux; se il browser non riesce a leggerlo compare un messaggio invece del nero.

## V2.3.1 — 31/10/2026
- Corretto: se il browser ha la grafica 3D (WebGL) disattivata, il riquadro video restava nero e il video non si registrava con l'effetto. Ora OnAir passa da solo a una modalità di disegno semplice e spiega come riattivare la grafica.
- Dispositivi: pulsante «Trova il microfono giusto» (parli, OnAir prova tutti i microfoni e sceglie quello che ti sente meglio) e nomi dei dispositivi più affidabili.
- Avviso quando OnAir è aperto come file (permessi chiesti a ogni avvio, dispositivi non selezionabili per nome).

## V2.3.0 — 31/10/2026
- Teleprompter: scegli quando parte il testo (dopo la sigla, con la registrazione, a mano). Di base parte alla fine della sigla, così non scorre mentre suona.
- Scorciatoie da tastiera personalizzabili in Impostazioni (con scambio automatico se il tasto è già usato); le etichette su pulsanti e legenda si aggiornano da sole.
- Guadagno d'ingresso del microfono fino a +30 dB, in Dispositivi (con indicazione basso / buono / troppo alto) e nella striscia VOCE ("Ingresso mic").
- Sessioni: l'anteprima mostra anche il video registrato, sincronizzato con l'audio. Avviso che l'anteprima non è ancora normalizzata.
- Video più fluido: formato VP8 (più leggero da comprimere), webcam letta solo quando arriva un fotogramma nuovo, nuova risoluzione 540p leggera.
- Contatore fps di webcam e video registrato; avviso se il browser disegna senza scheda grafica.
- Pulsante Effetto: spento mostra e registra la webcam senza effetto. Soglia dei contorni estesa per stanze poco illuminate.

## V2.2.0 — 31/10/2026
**Controllo dispositivi**
- All'avvio si apre il controllo di microfono (con barra del livello), uscita audio/cuffie (con "Prova suono") e webcam (con anteprima).
- Se la webcam manca, è occupata da un altro programma (es. OBS) o il permesso è negato, OnAir lo dice e spiega cosa fare. ↻ Ricarica elenco la cerca di nuovo senza riavviare.
- Se la webcam si scollega durante l'uso compare un avviso; i pulsanti MIC e CAM in alto mostrano lo stato e riaprono il controllo.
- Le scelte vengono ricordate; se il dispositivo dell'ultima volta non c'è, viene segnalato.

**Video**
- Effetto in tempo reale: contorni colorati (giallo di base) su nero, con disturbo regolabile, specchio, 720p o 1080p. Senza webcam mostra un segnale disturbato.
- Il video si registra insieme all'audio e segue pause e re-take: si taglia allo stesso punto.
- Esportazione "Video WebM per YouTube" (VP9 + Opus) con lo stesso mix e volume −16 LUFS dell'MP3.
- Tasto V: video sì / no.

## V2.1.1 — 31/10/2026
- Corretto: premendo TERMINA il contatore continuava a correre finché non si confermava. Ora la registrazione si mette subito in pausa e la conferma avviene nel pannello (TERMINA REGISTRAZIONE oppure RIPRENDI DA QUI).

## V2.1.0 — 31/10/2026
**Teleprompter**
- Carichi un file .txt o incolli il testo; scorre alla velocità che scegli (P avvia/ferma, frecce ↑ ↓ per la velocità, T lo mostra o nasconde), dimensione del testo regolabile, modalità a specchio.
- Segnali nel testo: [SIGLA], [STOP SIGLA], [SOTTOFONDO], [STOP SOTTOFONDO], [CAPITOLO], [CAPITOLO n], [STOP CAPITOLO], [PAUSA]. Quando la riga gialla di lettura li raggiunge durante la registrazione, OnAir li lancia da solo.
- Parte da solo quando inizi a registrare e segue il re-take: torna al punto del testo da cui riparti.

**Riascolto**
- Re-take: "Ascolta prima del taglio", "Ascolta la parte da tagliare" e clic sull'onda per riascoltarti da un punto preciso.
- Sessioni: anteprima del mix con play/pausa e barra di avanzamento, prima di esportare.

**Mixer**
- Per ogni fonte: volume, gain (±12 dB), bassi, medi, alti (±12 dB). Per la voce anche compressore e taglio dei bassi sotto 85 Hz.
- ↺ riporta la fonte al suo predefinito; ★ salva le impostazioni attuali come predefinito di quella fonte.
- Anteprima ed esportazione usano la stessa catena audio: il file suona come l'anteprima.

## V2.0.1 — 31/10/2026
- Corretto: il pulsante ACCENDI LO STUDIO non partiva aprendo `index.html` con doppio clic (il browser blocca il registratore principale sui file locali). Ora OnAir usa un metodo di riserva.
- Errori di avvio ben visibili.

## V2.0.0 — 30/10/2026
Nasce **OnAir**, web app GPverse che sostituisce Python + OBS + Audacity per l'audio.
- Gira nel browser (Chrome, Edge, Firefox) su Linux, Windows e, in prova, smartphone.
- Registra la voce direttamente dal microfono, senza OBS.
- Re-take: torni indietro dei secondi che scegli (proposta 5 s, regolabile), vedi l'onda degli ultimi 30 s, senti gli ultimi 3 s e riparti. Sigla, sottofondo e capitoli tornano esattamente al punto giusto.
- Capitoli: il sottofondo si ferma e riparte da dove era rimasto.
- Sigla: non tocca il sottofondo, lo fai partire tu con B.
- Mix finale ritoccabile dopo la registrazione (voce, sigla, sottofondo, capitoli).
- Esportazione MP3 128/192 kbps o WAV, normalizzata a −16 LUFS con limitatore a −1 dB.
- Gain fino al 200% reale; indicatori di livello veri.
- Registrazione salvata mentre parli: se il browser si chiude, la sessione si recupera.
- Marchio GPverse.

## V1.0.0
PG_PodcastDeck originale (Python + PyQt5 + pygame, comandava OBS via WebSocket). Resta nella cartella superiore com'era.

## In arrivo
- Idee: teleprompter che segue la voce; automazioni di volume disegnate sulla timeline
