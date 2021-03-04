import {
	AcquistiDettagliRequest, AcquistiEliminaRequest,
	AcquistiListaRequest,
	AcquistiModificaRequest,
	AcquistiNuovoRequest
} from "../models/request/acquisti";
import { call } from "./route";
import {
	AcquistiDettagliResponse,
	AcquistiListaResponse,
	AcquistiModificaResponse,
	AcquistiNuovoResponse
} from "../models/response/acquisti";
import { GenericSuccess } from "../models/response/success";
import { Auth } from "../models/request/auth";

export const acquisti = (auth: Required<Auth>) => ({
	/**
	 * Restituisce la lista dei documenti per l'anno di competenza specificato.
	 */
	lista: (req: AcquistiListaRequest) => call<AcquistiListaResponse>(`/acquisti/lista`, { ...auth, ...req }),
	/**
	 * Restituisce i dettagli del documento richiesto.
	 */
	dettagli: (req: AcquistiDettagliRequest) => call<AcquistiDettagliResponse>(`/acquisti/dettagli`, { ...auth, ...req }),
	/**
	 * Aggiunge un nuovo acquisto.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	nuovo: (req: AcquistiNuovoRequest) => call<AcquistiNuovoResponse>(`/acquisti/nuovo`, { ...auth, ...req }),
	/**
	 * Modifica un acquisto esistente.
	 * In caso di parametri non specificati vengono assunti quelli predefiniti.
	 */
	modifica: (req: AcquistiModificaRequest) => call<AcquistiModificaResponse>(`/acquisti/modifica`, { ...auth, ...req }),
	/**
	 * Elimina definitivamente un acquisto (spesa o nota di credito passiva).
	 */
	elimina: (req: AcquistiEliminaRequest) => call<GenericSuccess>(`/acquisti/elimina`, { ...auth, ...req }),
});
