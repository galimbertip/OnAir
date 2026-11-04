# GPverse OnAir V2.3.2 — Come si usa

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
| ↑ ↓ | Teleprompter: velocità |
| T | Mostra / nascondi il teleprompter |
| V | Video sì / no |

## Teleprompter
Premi **✎ Modifica testo** (o carica un .txt). Nel testo puoi mettere i segnali [SIGLA], [SOTTOFONDO], [STOP SOTTOFONDO], [CAPITOLO], [CAPITOLO 2], [STOP CAPITOLO], [PAUSA]: quando arrivano sulla riga gialla durante la registrazione, OnAir li esegue.

## Dopo la registrazione
Premi **TERMINA**: la registrazione si ferma subito e ti chiede conferma. Si apre **Sessioni**: premi ▶ per l'anteprima, ritocchi livelli ed EQ mentre ascolti, scegli MP3 o WAV e premi **ESPORTA**. Il file è già pronto per Spotify.

## Video per YouTube
Il video si registra con l'effetto già applicato (regoli contorni, disturbo e colore nel riquadro VIDEO). In Sessioni scegli **Video WebM per YouTube** come formato. Tieni OnAir in primo piano mentre registri. Serve Chrome o Edge (Firefox registra solo l'audio se non supporta il video).
