import { call } from "./route";
import { ArriviDettagliRequest, ArriviListaRequest } from "../models/request/magazzino";
import { ArriviDettagliResponse, ArriviListaResponse } from "../models/response/magazzino";
import { Auth } from "../models/request/auth";

export const magazzino = (auth: Required<Auth>) => ({
	/**
	 * Restituisce la lista degli arrivi merce per l'anno di competenza specificato.
	 */
	arrivi_lista: (req: ArriviListaRequest) => call<ArriviListaResponse>(`/arrivimerce/lista`, { ...auth, ...req }),
	/**
	 * Restituisce i dettagli dell'arrivo merce richiesto.
	 */
	arrivi_dettagli: (req: ArriviDettagliRequest) => call<ArriviDettagliResponse>(`/arrivimerce/dettagli`, { ...auth, ...req }),
});
