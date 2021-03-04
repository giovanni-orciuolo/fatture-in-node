import { GenericSuccess } from "./success";
import { DocPagamento } from "./documento";

export interface AcquistiListaResponse extends GenericSuccess {
	lista_documenti: Array<AcquistiLight>;
}

export interface AcquistiLight {
	// Identificativo univoco del documento
	id: string;
	// Tipologia del documento = ['spesa' o 'ndc']
	tipo: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica)
	id_fornitore?: string;
	// Nome o ragione sociale del fornitore
	nome: string;
	// Data di emissione del documento
	data: string;
	// Descrizione dell'acquisto
	descrizione: string;
	// Importo netto del documento
	importo_netto: number;
	// Importo iva del documento
	importo_iva: number;
	// Importo lordo del documento
	importo_totale: number;
	// Valuta del documento e degli importi indicati
	valuta: string;
	// Tasso di cambio EUR/{valuta}
	valuta_cambio: number;
	// Link al file allegato al documento (presente solo se "mostra_link_allegato" vale "true" e l'allegato esiste) ("file_allegato" viene deprecato in favore di "link_allegato")
	link_allegato?: string;
	// Indica la scadenza del prossimo pagamento (vale "00/00/0000" se già saldato)
	prossima_scadenza?: string;
}

export interface AcquistiDettagliResponse extends GenericSuccess {
	dettagli_documento: AcquistiDetailed;
}

export interface AcquistiDetailed {
	// Identificativo univoco del documento
	id: string;
	// Tipologia del documento = ['spesa' o 'ndc']
	tipo: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica)
	id_fornitore?: string;
	// Nome o ragione sociale del fornitore
	nome: string;
	// Data di emissione del documento
	data: string;
	// Descrizione dell'acquisto
	descrizione: string;
	// Categoria documento
	categoria?: string;
	// Importo netto del documento
	importo_netto: number;
	// Importo iva del documento
	importo_iva: number;
	// Importo lordo del documento
	importo_totale: number;
	// Valuta del documento e degli importi indicati
	valuta: string;
	// Tasso di cambio EUR/{valuta}
	valuta_cambio: number;
	// Link al file allegato al documento (presente solo se "mostra_link_allegato" vale "true" e l'allegato esiste) ("file_allegato" viene deprecato in favore di "link_allegato")
	link_allegato?: string;
	// Valore ritenuta d'acconto
	ritenuta_acconto: number;
	// Valore ritenuta previdenziale
	ritenuta_previdenziale: number;
	// Deducibilità della spesa (percentuale)
	deducibilita_tasse: number;
	// Detraibilità dell'IVA (percentuale)
	detraibilita_iva: number;
	// Anni di ammortamento [1=Nessun ammortamento]
	ammortamento: number;
	// Centro di costo
	centro_costo?: string;
	// Numero della fattura di acquisto
	numero_fattura?: string;
	// Indica la scadenza del prossimo pagamento (vale "00/00/0000" se già saldato)
	prossima_scadenza: string;
	// Lista delle tranches di pagamento
	lista_pagamenti: Array<DocPagamento>;
	// Lista degli articoli in fattura (se non esiste significa che è stato registrato solamente il totale)
	lista_articoli: Array<AcquistiArticolo>;
}

export interface AcquistiArticolo {
	// Identificativo del prodotto (se nullo, non è presente tra i prodotti)
	id?: string;
	// Codice prodotto
	codice: string;
	// Nome articolo
	nome: string;
	// Unità di misura per il prodotto
	um: string;
	// Quantità di prodotto
	quantita: number;
	// Prezzo unitario
	prezzo_netto: number;
	// Valore IVA (percentuale)
	valore_iva: number;
	// Descrizione della tipologia di IVA
	desc_iva: string;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria: string;
	// Ordine dell'articolo in fattura (ordinamento ascendente)
	ordine: number;
	// Indica se viene movimentato il magazzino (true: viene movimentato; false: non viene movimentato) [Non presente se il prodotto non è collegato all'elenco prodotti, oppure la funzionalità magazzino era disattiva al momento della creazione del documento]
	magazzino?: boolean;
}

export interface AcquistiNuovoResponse extends GenericSuccess {
	// Identificativo del documento creato
	new_id: number;
}

export interface AcquistiModificaResponse extends GenericSuccess {
	// Identificativo del documento modificato
	new_id: number;
}
