![Logo FIC](https://api.fattureincloud.it/v1/documentation/dist/images/logo-white-beta.png)

# Fatture in Node :rocket:

Questo progetto si pone come SDK semplice da usare in linguaggio Javascript o Typescript allo scopo di interfacciarsi con lo strato API del servizio "Fatture in Cloud", famoso provider italiano utilizzato da tantissime aziende per gestire l'invio di fatture elettroniche e tanto altro.

Fatture in Node non ha bisogno di alcuna dipendenza esterna particolare per funzionare, solo una versione abbastanza recente di NodeJS. Il supporto completo ai tipi statici è attivato nel caso in cui si importa la libreria in un progetto già Typescript.

## Installazione :wrench:

Il processo di installazione è immediato:
```
npm install fatture-in-node # Se si usa NPM
yarn add fatture-in-node # Se si usa Yarn
```

## API di riferimento :clipboard:

L'intero progetto è scritto in riferimento alla versione [**0.9.14**](https://api.fattureincloud.it/v1/documentation/dist/#) delle API di Fatture in Cloud (di seguito abbreviato come FIC). Ho sentito dire che il team di sviluppatori dietro FIC si sta già occupando di una nuova versione rivisitata dell'intero strato API, seguendo gli standard REST. Ovviamente non appena sarà a disposizione mi adopererò di conseguenza.

## Esempi di utilizzo :coffee:

Ci sono essenzialmente due modi per usare questo SDK:
- Istanziare un oggetto di classe FattureInCloud con le credenziali di accesso nel costruttore
```typescript
import { FattureInCloud } from "fatture-in-node";

// Istanzia con le credenziali visualizzabili sulla dashboard
const fic = new FattureInCloud({
    api_uid: "XXXXXX",
    api_key: "00000000000000000000000000000000"
});

// Recupera tutte le fatture registrate nel sistema per l'anno 2021
const docs = await fic.documenti.fatture.lista({ anno: 2021 });
```

- Usare gli oggetti base per le routes
```typescript
import { documenti } from "fatture-in-node";

// Inizializza con le credenziali visualizzabili sulla dashboard
// poi recupera le fatture registrate nel sistema per l'anno 2021
const docs = await documenti({
    api_uid: "XXXXXX",
    api_key: "00000000000000000000000000000000"
}).fatture.lista({ anno: 2021 });
```

Il primo metodo permette di avere un accesso completo a tutti i set di endpoint di FIC, mentre il secondo metodo permette di avere accesso solo a un particolare set di endpoint di FIC. La classe FattureInCloud altro non è che un wrapper di tutti gli oggetti base disponibili, che vengono inizializzati con le credenziali passate al costruttore.

### Licenza GNU Public License v3

Il progetto è rilasciato sotto licenza GPLv3. Questo significa in soldoni che è possibile utilizzare questo SDK come dipendenza in un software proprietario closed source, ma che non è possibile forkare l'intero progetto e modificarlo senza renderlo a sua volta open source. Maggiori informazioni sono presenti a [questo link](https://www.gnu.org/licenses/gpl-3.0.html).
