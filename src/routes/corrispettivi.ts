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
import { Auth } from "../models/request/auth";

export const corrispettivi = (auth: Required<Auth>) => ({
	/**
	 * Restituisce la lista dei corrispettivi per l'anno specificato.
	 */
	lista: (req: CorrispettiviListaRequest) => call<CorrispettiviListaResponse>(`/corrispettivi/lista`, { ...auth, ...req }),
	/**
	 * Aggiunge un nuovo corrispettivo.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	nuovo: (req: CorrispettiviNuovoRequest) => call<CorrispettiviNuovoResponse>(`/corrispettivi/nuovo`, { ...auth, ...req }),
	/**
	 * Modifica un corrispettivo esistente.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	modifica: (req: CorrispettiviModificaRequest) => call<CorrispettiviModificaResponse>(`/corrispettivi/modifica`, { ...auth, ...req }),
	/**
	 * Elimina definitivamente un corrispettivo.
	 */
	elimina: (req: CorrispettiviEliminaRequest) => call<GenericSuccess>(`/corrispettivi/elimina`, { ...auth, ...req }),
});
