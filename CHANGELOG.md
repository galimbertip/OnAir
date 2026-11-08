# GPverse OnAir — Registro delle versioni

Schema: **V.maior.minor.patch**
- **maior**: cambiamento grosso o incompatibile con le versioni precedenti
- **minor**: nuova funzione
- **patch**: correzione di un bug

La versione è visibile nell'app (in alto, accanto al logo) e cliccandola si vedono le novità.

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
- Idee: trasferire le sessioni tra PC e tablet; teleprompter che segue la voce
