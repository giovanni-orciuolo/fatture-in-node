import { call } from "./route";
import { GenericSuccess } from "../models/response/success";
import {
	CorrispettiviEliminaRequest,
	CorrispettiviListaRequest,
	CorrispettiviModificaRequest,
	CorrispettiviNuovoRequest
} from "../models/request/corrispettivi";
import {
	CorrispettiviListaResponse,
	CorrispettiviModificaResponse,
	CorrispettiviNuovoResponse
} from "../models/response/corrispettivi";

export const corrispettivi = {
	/**
	 * Restituisce la lista dei corrispettivi per l'anno specificato.
	 */
	lista: (req: CorrispettiviListaRequest) => call<CorrispettiviListaResponse>(`/corrispettivi/lista`, req),
	/**
	 * Aggiunge un nuovo corrispettivo.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	nuovo: (req: CorrispettiviNuovoRequest) => call<CorrispettiviNuovoResponse>(`/corrispettivi/nuovo`, req),
	/**
	 * Modifica un corrispettivo esistente.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	modifica: (req: CorrispettiviModificaRequest) => call<CorrispettiviModificaResponse>(`/corrispettivi/modifica`, req),
	/**
	 * Elimina definitivamente un corrispettivo.
	 */
	elimina: (req: CorrispettiviEliminaRequest) => call<GenericSuccess>(`/corrispettivi/elimina`, req),
}
