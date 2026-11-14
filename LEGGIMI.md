# GPverse OnAir V3.6.1 — Come si usa

## Avvio
**Consigliato: avvia sempre con `avvia_onair.sh`.** Se apri `index.html` con doppio clic il browser chiede microfono e webcam a ogni avvio e non lascia scegliere i dispositivi per nome.

La prima volta su Mint `avvia_onair.sh` va reso eseguibile: tasto destro → Proprietà → Permessi → spunta «Consenti l'esecuzione del file come programma». Poi doppio clic → «Esegui». In alternativa, da terminale:

    bash ~/Scrivania/Script/PG_PodcastDeck/OnAir/avvia_onair.sh

Quando chiede microfono e webcam scegli **«Consenti durante la visita al sito»**: con l'avvio da script il permesso resta ricordato.

- **Linux Mint**: doppio clic su `avvia_onair.sh` (oppure da terminale `./avvia_onair.sh`). Apre OnAir nel browser su http://127.0.0.1:8765 e il browser ricorda il permesso del microfono.
- **Windows**: doppio clic su `avvia_onair.bat`. Se hai Python apre lo stesso indirizzo, altrimenti apre direttamente `index.html` (il microfono potrebbe essere richiesto a ogni avvio).
- Usa sempre lo stesso metodo di avvio: deck e sessioni sono salvati nel browser e cambiano se cambi indirizzo.

## Prima volta
1. Premi **ACCENDI LO STUDIO** e consenti microfono e webcam.
2. Nel **Controllo dispositivi** scegli microfono, cuffie e webcam. Se la webcam non c'è o è occupata (chiudi OBS!), ricollegala e premi **↻ Ricarica elenco**. Lo riapri quando vuoi con **Dispositivi** o cliccando MIC / CAM in alto.
3. Carica sigla, brani di sottofondo e capitoli (i file restano salvati nel browser).
4. **Metti le cuffie**: il microfono deve sentire solo la voce, la musica la aggiunge OnAir nel mix.

## Tasti
Questi sono i tasti predefiniti: puoi cambiarli in **Impostazioni → Scorciatoie da tastiera**.

| Tasto | Azione |
|---|---|
| Spazio | Registra / pausa / riprendi |
| R | Re-take (poi ← → per scegliere i secondi, Invio per ripartire) |
| S | Sigla |
| B | Sottofondo play/pausa |
| Invio | Prossimo capitolo |
| 1–9 | Capitolo diretto |
| P | Teleprompter: avvia / ferma lo scorrimento |
| ↑ ↓ | Teleprompter: sposta il testo |
| Shift+↑ / Shift+↓ | Teleprompter: velocità |
| I | Animazione «Iscriviti» |
| T | Mostra / nascondi il teleprompter |
| V | Video sì / no |

## Teleprompter
Premi **✎ Modifica testo** (o carica un .txt). Nel testo puoi mettere i segnali [SIGLA], [SOTTOFONDO], [STOP SOTTOFONDO], [CAPITOLO], [CAPITOLO 2], [STOP CAPITOLO], [PAUSA]: quando arrivano sulla riga gialla durante la registrazione, OnAir li esegue.

## Montaggio
In Sessioni apri una registrazione e premi **🎬 Montaggio**. Trascina sulla voce per selezionare un tratto: **Canc** lo taglia (tutto il resto scorre indietro), **M** silenzia solo la voce. Trascina i blocchi musicali per spostarli, i bordi per accorciarli; **S** divide al cursore; per ogni blocco regoli volume e dissolvenze. **Ctrl+Z** annulla. Premi **FATTO** e poi esporta come sempre.

## Da un dispositivo all'altro
Ogni dispositivo (PC, tablet) ha la sua memoria. Per portare lo studio: Impostazioni → «⬇ Salva lo studio in un file», poi sull'altro dispositivo «⬆ Carica uno studio». Per una registrazione: Sessioni → «⬇ Trasferisci», poi sull'altro «⬆ Importa sessione». Il file .onair si passa come preferisci (Drive, chiavetta, Telegram…).

## Disposizione
In Impostazioni → Disposizione dei pannelli scegli «Teleprompter davanti» per avere il testo in alto, sotto la webcam, o crea un tuo set.

## Dopo la registrazione
Premi **TERMINA**: la registrazione si ferma subito e ti chiede conferma. Si apre **Sessioni**: premi ▶ per l'anteprima, ritocchi livelli ed EQ mentre ascolti, scegli MP3 o WAV e premi **ESPORTA**. Poi premi **🎧 Esporta per Spotify** o **▶ Esporta per YouTube** (impostazioni in Impostazioni → Canale e piattaforme). Per YouTube controlla i capitoli e copiali nella descrizione con 📋.

## Video per YouTube
**Inquadratura con green screen:** nel riquadro VIDEO premi «🎯 Scegli il verde» e clicca sul telo, poi «Green screen». Se si vede qualcosa oltre il telo, premi «✂ Scegli area» e trascina un rettangolo attorno a te e al telo: il resto diventa nero. Con «Ingrandisci area» l'area riempie lo schermo.

**Togliere lo sfondo senza telo — modalità «Persone» (consigliata):** in «⚙ Regola» scegli «Persone» in «Togli lo sfondo senza telo». OnAir riconosce te e gli ospiti e toglie tutto il resto, senza registrare niente; funziona anche se la luce cambia o urti la webcam. Serve l'accelerazione grafica attiva nel browser.

**Green screen virtuale con la scena vuota (anche oggetti):** nel riquadro VIDEO premi «🎬 Registra la scena vuota» ed esci dall'inquadratura entro 5 secondi (porta via anche la sedia, se vuoi che sparisca). Quando rientri si vede solo ciò che è nuovo: tu, un ospite, un oggetto. Premi «👁 Vedi cosa resta» (bianco = resta, rosso = tolto) e regola «Pulizia»: alzala se resta qualcosa della stanza, abbassala se sparisce un pezzo di te. OnAir compensa da solo i cambi automatici di luce della webcam. Funziona meglio con luce costante, webcam ferma e vestiti di colore diverso dal muro. In «Sfondo, logo e Iscriviti» scegli cosa mettere al posto della stanza (nero, sfocato, immagine o video) e lascia spuntato «Anche dietro di te».

**Vista orizzontale:** su un monitor 16:9 OnAir dispone tutto affiancato, senza scorrere, sia in registrazione sia nel montaggio. In Impostazioni → Vista scegli automatica, orizzontale o verticale e dove mettere il video. In orizzontale i comandi video si aprono con «⚙ Regola» e il mixer è «a barre»: il ⚙ di ogni riga apre gain, EQ e (sulla voce) ingresso del microfono. In Impostazioni → Disposizione, con lo schermo in orizzontale, scegli per ogni pannello la colonna (sinistra, centro, destra o in basso), l'ordine e la larghezza delle colonne; ogni set ricorda separatamente la disposizione orizzontale e quella verticale.

**Stesse impostazioni su più PC:** Impostazioni → Sincronizzazione. Una volta sola: crea su GitHub un repository **privato** (es. `onair-sync`) e un token «fine-grained» con accesso solo a quel repository e permesso «Contents: Read and write». Inserisci repository e token su ogni dispositivo, scegli cosa sincronizzare, poi «⬆ Invia» dal PC dove hai preparato la puntata e «⬇ Ricevi» sull'altro (all'avvio OnAir ti avvisa da solo se c'è qualcosa di più recente).

Il video si registra con l'effetto già applicato (regoli contorni, disturbo e colore nel riquadro VIDEO). In Sessioni scegli **Video WebM per YouTube** come formato. Tieni OnAir in primo piano mentre registri. Serve Chrome o Edge (Firefox registra solo l'audio se non supporta il video).
