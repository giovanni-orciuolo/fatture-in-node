import { call } from "./route";
import {
	DocDettagliRequest,
	DocEliminaRequest, DocInfomailRequest, DocInfoRequest, DocInviamailRequest,
	DocListaRequest,
	DocModificaRequest,
	DocNuovoRequest
} from "../models/request/documento";
import {
	DocDettagliResponse,
	DocInfomailResponse,
	DocInfoResponse,
	DocListaResponse,
	DocNuovoResponse
} from "../models/response/documento";
import { GenericSuccess } from "../models/response/success";
import { Auth } from "../models/request/auth";

/**
 * Questo set di funzioni agisce su diverse tipologie di documenti, identificate dalla variabile {tipo-doc}.
 * I valori che possono essere assunti da {tipo-doc} sono i seguenti:
 * fatture, ricevute, preventivi, ordini, ndc, proforma, rapporti, ordforn e ddt.
 * Per chiarezza si specifica che "ndc" identifica le note di credito, "ordini" gli ordini a cliente
 * e "ordforn" gli ordini a fornitore.
 */

export type TipoDoc = "fatture" | "ricevute" | "preventivi" | "ordini" | "ndc" | "proforma" | "rapporti" | "ordforn" | "ddt";

function make(tipo_doc: TipoDoc, auth: Required<Auth>) {
	return {
		/**
		 * Restituisce la lista delle fatture o dei documenti richiesti per l'anno di competenza specificato.
		 * I risultati possono essere filtrati (vedi modello richiesta) e
		 * vengono organizzati in pagine per evitare risposte troppo pesanti
		 * (attualmente 500 risultati per pagina).
		 */
		lista: (req: DocListaRequest) => call<DocListaResponse>(`/${tipo_doc}/lista`, { ...auth, ...req }),
		/**
		 * Restituisce i dettagli del documento richiesto.
		 */
		dettagli: (req: DocDettagliRequest) => call<DocDettagliResponse>(`/${tipo_doc}/dettagli`, { ...auth, ...req }),
		/**
		 * Crea un nuovo documento. In caso di parametri non specificati vengono assunti quelli predefiniti.
		 */
		nuovo: (req: DocNuovoRequest) => call<DocNuovoResponse>(`/${tipo_doc}/nuovo`, { ...auth, ...req }),
		/**
		 * Modifica un documento esistente.
		 * In caso di parametri non specificati il corrispondente valore già presente rimane invariato.
		 */
		modifica: (req: DocModificaRequest) => call<GenericSuccess>(`/${tipo_doc}/modifica`, { ...auth, ...req }),
		/**
		 * Elimina definitivamente un documento.
		 */
		elimina: (req: DocEliminaRequest) => call<GenericSuccess>(`/${tipo_doc}/elimina`, { ...auth, ...req }),
		/**
		 * Restituisce informazioni utili alla creazione e alla modifica di un documento,
		 * tra cui le impostazioni predefinite e le numerazioni utilizzate.
		 */
		info: (req: DocInfoRequest) => call<DocInfoResponse>(`/${tipo_doc}/info`, { ...auth, ...req }),
		/**
		 * Restituisce informazioni predefinite e/o utili per l'invio tramite e-mail del documento.
		 */
		infomail: (req: DocInfomailRequest) => call<DocInfomailResponse>(`/${tipo_doc}/infomail`, { ...auth, ...req }),
		/**
		 * Effettua l'invio del documento tramite e-mail.
		 * Vedi anche la funzione /infomail per maggiori informazioni.
		 */
		inviamail: (req: DocInviamailRequest) => call<GenericSuccess>(`/${tipo_doc}/inviamail`, { ...auth, ...req }),
	};
}

export const documenti = (auth: Required<Auth>) => ({
	fatture: make("fatture", auth),
	ricevute: make("ricevute", auth),
	preventivi: make("preventivi", auth),
	ordini: make("ordini", auth),
	ndc: make("ndc", auth),
	proforma: make("proforma", auth),
	rapporti: make("rapporti", auth),
	ordforn: make("ordforn", auth),
	ddt: make("ddt", auth),
});
