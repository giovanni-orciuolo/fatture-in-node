import { Auth } from "./auth";
import { RequestPagination } from "./pagination";

export interface ProdottiListaRequest extends Auth, RequestPagination {
	// Filtro generico che restringe la ricerca ai prodotti che contengono questa stringa nel nome o nel codice
	filtro?: string;
	// Restringe la ricerca ai prodotti che contengono questa stringa nel nome o nella descrizione
	id?: string;
	// Restringe la ricerca ai prodotti che contengono questa stringa nel nome
	nome?: string;
	// Restringe la ricerca ai prodotti che contengono questa stringa nel codice
	cod?: string;
	// Restringe la ricerca ai prodotti che contengono questa stringa nella descrizione
	desc?: string;
	// Restringe la ricerca ai prodotti che contengono questa stringa nella categoria
	categoria?: string;
}

export interface ProdottiNuovoSingoloRequest {
	// Codice prodotto
	cod?: string;
	// Nome del prodotto
	nome: string;
	// Descrizione del prodotto
	desc?: string;
	// Specifica se è registrato il prezzo comprensivo di iva (lordo) oppure non lo è (netto)
	prezzo_ivato?: boolean;
	// Prezzo netto di vendita del prodotto (se prezzo_ivato=false)
	prezzo_netto?: number;
	// Prezzo lordo di vendita del prodotto (se prezzo_ivato=true)
	prezzo_lordo?: number;
	// Prezzo netto di acquisto del prodotto (opzionale)
	costo?: number;
	// Codice IVA predefinito per il prodotto (il codice -1 indica che l'aliquota IVA viene ereditata dal cliente/fornitore)
	cod_iva?: number;
	// Unità di misura per il prodotto
	um?: string;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria?: string;
	// Note aggiuntive sul prodotto
	note?: string;
	// [Solo con magazzino utilizzabile] Indica la gestione magazzino abilitata sul prodotto
	magazzino?: boolean;
	// [Solo con magazzino abilitato] Specifica la giacenza iniziale del prodotto all'interno del magazzino
	giacenza_iniziale?: number;
}

export interface ProdottiNuovoListaRequest extends Auth {
	// Lista dei prodotti da inserire
	lista_prodotti: Array<ProdottiNuovoSingoloRequest>;
}

export interface ProdottiModificaRequest extends ProdottiNuovoSingoloRequest {
}

export interface ProdottiEliminaRequest {
	// Identificativo del prodotto da eliminare
	id: string;
}
