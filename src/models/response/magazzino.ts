import { GenericSuccess } from "./success";
import { AcquistiArticolo } from "./acquisti";

export interface ArriviListaResponse extends GenericSuccess {
	lista_documenti: Array<ArriviLight>;
}

export interface ArriviLight {
	// Identificativo univoco del documento
	id: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica)
	id_fornitore?: string;
	// Nome o ragione sociale del fornitore
	nome: string;
	// Data di emissione del documento
	data: string;
	// Descrizione del documento
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
	// Link al file allegato al documento (presente solo se "mostra_link_allegato" vale "true" e l'allegato esiste)
	link_allegato?: string;
}

export interface ArriviDettagliResponse extends GenericSuccess {
	dettagli_documento: ArriviDetailed;
}

export interface ArriviDetailed {
	// Identificativo univoco del documento
	id: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica)
	id_fornitore?: string;
	// Nome o ragione sociale del fornitore
	nome: string;
	// Data di emissione del documento
	data: string;
	// Descrizione del documento
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
	// Link al file allegato al documento (presente solo se "mostra_link_allegato" vale "true" e l'allegato esiste)
	link_allegato?: string;
	// Numero del ddt ricevuto
	numero_ddt?: string;
	// Lista degli articoli
	lista_articoli: Array<AcquistiArticolo>;
}
