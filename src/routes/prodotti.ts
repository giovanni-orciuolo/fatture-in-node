import { call } from "./route";
import {
	ProdottiEliminaRequest,
	ProdottiListaRequest, ProdottiModificaRequest,
	ProdottiNuovoListaRequest,
	ProdottiNuovoSingoloRequest
} from "../models/request/prodotto";
import { ProdottiListaResponse, ProdottiNuovoSingoloResponse } from "../models/response/prodotto";
import { GenericSuccess } from "../models/response/success";

export const prodotti = {
	/**
	 * Restituisce la lista contenente i prodotti.
	 * I risultati possono essere filtrati (vedi modello richiesta) e
	 * vengono organizzati in pagine per evitare risposte troppo pesanti
	 * (attualmente 500 risultati per pagina).
	 */
	lista: (req: ProdottiListaRequest) => call<ProdottiListaResponse>(`/prodotti/lista`, req),
	/**
	 * Crea un nuovo prodotto. In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	nuovo: (req: ProdottiNuovoSingoloRequest) => call<ProdottiNuovoSingoloResponse>(`/prodotti/nuovo`, req),
	/**
	 * Crea nuovi prodotti in blocco. In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	importa: (req: ProdottiNuovoListaRequest) => call<GenericSuccess>(`/prodotti/importa`, req),
	/**
	 * Modifica un prodotto esistente.
	 * In caso di parametri non specificati il corrispondente valore già presente rimane invariato.
	 */
	modifica: (req: ProdottiModificaRequest) => call<GenericSuccess>(`/prodotti/modifica`, req),
	/**
	 * Elimina definitivamente un prodotto
	 */
	elimina: (req: ProdottiEliminaRequest) => call<GenericSuccess>(`/prodotti/elimina`, req),
}
