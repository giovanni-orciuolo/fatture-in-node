import { InfoListaRequest } from "../models/request/info";
import { call } from "./route";
import { InfoListaResponse } from "../models/response/info";

export const info = {
	/**
	 * Restituisce informazioni riguardanti l'account, i valori fissi e quelli personali,
	 * ad esempio il nome, le liste di valute, codici iva, paesi etc.
	 * I campi supportati sono:
	 * nome, durata_licenza, tipo_licenza, lista_valute, lista_iva,
	 * lista_paesi, lista_template, lista_conti, lista_metodi_pagamento.
	 */
	account: (req: InfoListaRequest) => call<InfoListaResponse>(`/info/account`, req),
}
