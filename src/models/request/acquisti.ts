import { Auth } from "./auth";
import { DocNuovoPagamento } from "./documento";

export interface AcquistiListaRequest extends Auth {
	anno: number;
	// Specifica il tipo di documenti da cercare = ['spesa' o 'ndc']
	tipo?: string;
	// Restituisce solo documenti successivi o corrispondenti a questa data
	data_inizio?: string;
	// Restituisce solo documenti antecedenti o corrispondenti a questa data
	data_fine?: string;
	// Restringe la ricerca ai fornitori che contengono questa stringa nel nome
	fornitore?: string;
	// Restringe la ricerca al fornitore con questo id
	id_fornitore?: string;
	// Elenca solo i documenti saldati completamente (true) o non saldati/saldati parzialmente (false)
	saldato?: boolean;
	// Se true, include in ogni risultato il link all'eventuale allegato
	mostra_link_allegato?: boolean;
}

export interface AcquistiDettagliRequest extends Auth {
	// Identificativo univoco del documento
	id: string;
}

export interface AcquistiNuovoRequest extends Auth {
	// Tipologia del documento = ['spesa' o 'ndc']
	tipo: string;
	// Identificativo univoco del fornitore (serve per creare un collegamento tra il documento e un fornitore in anagrafica; se nullo, il documento non viene collegato a nessun fornitore già esistente in anagrafica; se mancante, viene fatto il collegamento con piva o cf)
	id_fornitore?: string;
	// Nome o ragione sociale del fornitore
	nome?: string;
	// Partita IVA fornitore (utilizzato solo per ricercare il cliente in assenza di "id_fornitore" o completare l'anagrafica)
	piva?: string;
	// Codice fiscale fornitore (utilizzato solo per ricercare il cliente in assenza di "id_fornitore" e "piva" o completare l'anagrafica)
	cf?: string;
	// Se "true", completa il nome del fornitore con quello presente nell'anagrafica fornitori (sovrascrivendo quelli presenti), effettuando la ricerca tramite i campi id_fornitore, piva e cf (in quest'ordine)
	autocompila_anagrafica?: boolean;
	// Se "true", aggiorna l'anagrafica fornitori con il nome specificato: se il fornitore non esiste viene creato, mentre se il fornitore esiste già il nome viene aggiornato; il fornitore viene ricercato tramite i campi id_fornitore, piva e cf (in quest'ordine)
	salva_anagrafica?: boolean;
	// Data di emissione del documento
	data?: string;
	// Descrizione dell'acquisto
	descrizione?: string;
	// Categoria documento
	categoria?: string;
	// Importo netto del documento [preso in considerazione solo se tipo="ndc" o lista_articoli è specificata e non vuota]
	importo_netto?: number;
	// Importo iva del documento [preso in considerazione solo se tipo="ndc" o lista_articoli è specificata e non vuota]
	importo_iva?: number;
	// Valuta del documento e degli importi indicati
	valuta?: string;
	// Tasso di cambio EUR/{valuta}
	valuta_cambio?: number;
	// Valore ritenuta d'acconto
	ritenuta_acconto?: number;
	// Valore ritenuta previdenziale
	ritenuta_previdenziale?: number;
	// Deducibilità della spesa (percentuale)
	deducibilita_tasse?: number;
	// Detraibilità dell'IVA (percentuale)
	detraibilita_iva?: number;
	// Anni di ammortamento [1=Nessun ammortamento]
	ammortamento?: number;
	// Centro di costo
	centro_costo?: string;
	// Numero della fattura di acquisto
	numero_fattura?: string;
	// Lista delle tranches di pagamento
	lista_pagamenti: Array<DocNuovoPagamento>;
	// [Solo per tipo="spesa"] Lista degli articoli in fattura (se non specificato o vuoto, vengono utilizzati i valori "importo_netto" e "importo_iva")
	lista_articoli?: Array<AcquistiNuovoArticolo>;
}

export interface AcquistiNuovoArticolo {
	// Identificativo del prodotto (se nullo o mancante, la registrazione non viene collegata a nessun prodotto presente nell'elenco prodotti)
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
	// Codice aliquota IVA (ottenibili con il parametro "lista_iva" della funzione "/info/account")
	cod_iva?: number;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria: string;
	// Ordine dell'articolo in fattura (ordinamento ascendente)
	ordine: number;
	// Indica se deve essere movimentato il magazzino (true: viene movimentato; false: non viene movimentato) [Funziona solamente se viene specificato un "id" corrispondente a un prodotto a magazzino]
	magazzino?: boolean;
}

export interface AcquistiModificaRequest extends Partial<AcquistiNuovoRequest> {
}

export interface AcquistiEliminaRequest {
	// Identificativo del documento da eliminare
	id?: string;
}
