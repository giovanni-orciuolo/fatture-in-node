import { call } from "./route";
import {
	AnagraficaEliminaRequest,
	AnagraficaListaRequest, AnagraficaModificaRequest,
	AnagraficaNuovoListaRequest,
	AnagraficaNuovoSingoloRequest
} from "../models/request/anagrafica";
import { AnagraficaListaResponse, AnagraficaNuovoSingoloResponse } from "../models/response/anagrafica";
import { GenericSuccess } from "../models/response/success";

/**
 * Questo set di funzioni agisce su diverse tipologie di soggetti, identificati dalla variabile {soggetto}.
 * I valori che possono essere assunti da {soggetto} sono due: clienti e fornitori.
 */

function make(soggetto: "clienti" | "fornitori") {
	return {
		/**
		 * Restituisce la lista contenente i dati di clienti o fornitori.
		 * I risultati possono essere filtrati (vedi modello richiesta) e
		 * vengono organizzati in pagine per evitare risposte troppo pesanti
		 * (attualmente 500 risultati per pagina).
		 */
		lista: (req: AnagraficaListaRequest) => call<AnagraficaListaResponse>(`/${soggetto}/lista`, req),
		/**
		 * Crea un nuovo cliente o fornitore. In caso di parametri non specificati vengono assunti quelli predefiniti.
		 */
		nuovo: (req: AnagraficaNuovoSingoloRequest) => call<AnagraficaNuovoSingoloResponse>(`/${soggetto}/nuovo`, req),
		/**
		 * Crea nuovi clienti o fornitori in blocco. In caso di parametri non specificati vengono assunti quelli predefiniti.
		 */
		importa: (req: AnagraficaNuovoListaRequest) => call<GenericSuccess>(`/${soggetto}/importa`, req),
		/**
		 * Modifica un cliente o fornitore esistente.
		 * In caso di parametri non specificati il corrispondente valore già presente rimane invariato.
		 */
		modifica: (req: AnagraficaModificaRequest) => call<GenericSuccess>(`/${soggetto}/modifica`, req),
		/**
		 * Elimina definitivamente un cliente o fornitore.
		 */
		elimina: (req: AnagraficaEliminaRequest) => call<GenericSuccess>(`/${soggetto}/elimina`, req),
	};
}

export const anagrafica = {
	clienti: make("clienti"),
	fornitori: make("fornitori"),
};
