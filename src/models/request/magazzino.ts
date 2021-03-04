import { Auth } from "./auth";

export interface ArriviListaRequest extends Auth {
	anno: number;
	// Restituisce solo documenti successivi o corrispondenti a questa data
	data_inizio?: string;
	// Restituisce solo documenti antecedenti o corrispondenti a questa data
	data_fine?: string;
	// Restringe la ricerca ai fornitori che contengono questa stringa nel nome
	fornitore?: string;
	// Restringe la ricerca al fornitore con questo id
	id_fornitore?: string;
	// Se true, include in ogni risultato il link all'eventuale allegato
	mostra_link_allegato?: boolean;
}

export interface ArriviDettagliRequest extends Auth {
	// Identificativo univoco del documento
	id: string;
}
