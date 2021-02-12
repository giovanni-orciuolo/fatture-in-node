import { GenericSuccess } from "../success";

export interface ProdottiListaResponse extends GenericSuccess {
	// Lista dei prodotti
	lista_prodotti: Array<Prodotto>
	// Numero della pagina restituita
	pagina_corrente: number;
	// Numero di pagine totali
	numero_pagine: number;
}

export interface Prodotto {
	// Identificativo univoco del prodotto
	id: string;
	// Codice prodotto
	cod: string;
	// Nome del prodotto
	nome: string;
	// Descrizione del prodotto
	desc: string;
	// Specifica se è registrato il prezzo comprensivo di iva (lordo) oppure non lo è (netto)
	prezzo_ivato: boolean;
	// Prezzo netto di vendita del prodotto (se prezzo_ivato=false)
	prezzo_netto?: number;
	// Prezzo lordo di vendita del prodotto (se prezzo_ivato=true)
	prezzo_lordo?: number;
	// Prezzo netto di acquisto del prodotto (opzionale)
	costo?: number;
	// Valore IVA predefinito per il prodotto (il valore -1 indica che l'aliquota IVA viene ereditata dal cliente/fornitore)
	valore_iva: number;
	// Descrizione IVA predefinita
	desc_iva: string;
	// Unità di misura per il prodotto
	um: string;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria: string;
	// Note aggiuntive sul prodotto
	note: string;
	// [Solo con magazzino utilizzabile] Indica la gestione magazzino abilitata sul prodotto
	magazzino?: boolean;
	// [Solo con magazzino abilitato] Specifica la giacenza iniziale del prodotto all'interno del magazzino
	giacenza_iniziale?: number;
	// [Solo con magazzino abilitato] Specifica la giacenza attuale del prodotto all'interno del magazzino
	giacenza?: number;
}

export interface ProdottiNuovoSingoloResponse extends GenericSuccess {
	// Identificativo del prodotto creato
	id: number;
}
