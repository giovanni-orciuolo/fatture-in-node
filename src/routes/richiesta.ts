import { Auth } from "../models/request/auth";
import { call } from "./route";
import { Info } from "../models/response/info";

export const richiesta = {
	/**
	 * Modello di una richiesta generica in formato JSON per API di Fatture In Cloud.
	 * Utilizzala per verificare la correttezza dei tuoi parametri e le richieste che ti rimangono.
	 */
	info: (req: Auth) => call<Info>("/richiesta/info", req),
};
