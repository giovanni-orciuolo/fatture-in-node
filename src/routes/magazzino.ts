import { call } from "./route";
import { ArriviDettagliRequest, ArriviListaRequest } from "../models/request/magazzino";
import { ArriviDettagliResponse, ArriviListaResponse } from "../models/response/magazzino";

export const magazzino = {
	/**
	 * Restituisce la lista degli arrivi merce per l'anno di competenza specificato.
	 */
	arrivi_lista: (req: ArriviListaRequest) => call<ArriviListaResponse>(`/arrivimerce/lista`, req),
	/**
	 * Restituisce i dettagli dell'arrivo merce richiesto.
	 */
	arrivi_dettagli: (req: ArriviDettagliRequest) => call<ArriviDettagliResponse>(`/arrivimerce/dettagli`, req),
}
