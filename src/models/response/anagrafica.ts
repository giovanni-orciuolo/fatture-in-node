import { GenericSuccess } from "./success";

export interface AnagraficaListaResponse extends GenericSuccess {
	// Lista dei clienti (solo se richiesti i clienti)
	lista_clienti?: Array<AnagraficaCliente>;
	// Lista dei fornitori (solo se richiesti i fornitori)
	lista_fornitori?: Array<AnagraficaFornitore>;
	// Numero della pagina restituita
	pagina_corrente: number;
	// Numero di pagine totali
	numero_pagine: number;
}

export interface AnagraficaCliente {
	// Identificativo univoco del cliente
	id: string;
	// Nome o ragione sociale del cliente
	nome: string;
	// Nome referente
	referente: string;
	// Indirizzo del cliente
	indirizzo_via: string;
	// CAP del cliente
	indirizzo_cap: string;
	// Città (comune) del cliente
	indirizzo_citta: string;
	// Provincia del cliente
	indirizzo_provincia: string;
	// Note extra sull'indirizzo
	indirizzo_extra?: string;
	// Paese (nazionalità) del cliente
	paese: string;
	// Indirizzo di posta elettronica
	mail: string;
	// Recapito telefonico
	tel: string;
	// Numero fax
	fax: string;
	// Partita IVA
	piva: string;
	// Codice fiscale
	cf: string;
	// Termini di pagamento predefiniti (giorni a partire dalla data del documento)
	termini_pagamento: number;
	// Indica se la scadenza del pagamento deve avvenire alla fine del mese (dopo i giorni specificati in 'termini_pagamento')
	pagamento_fine_mese: boolean;
	// Valore IVA predefinito
	val_iva_default: number;
	// Descrizione IVA
	desc_iva_default: string;
	// Informazioni extra sul cliente
	extra: string;
	// Indica se il cliente è una pubblica amministrazione
	PA: boolean;
	// [Solo se PA=true] Codice pubblica amministrazione
	PA_codice?: string;
}

export interface AnagraficaFornitore {
	// Identificativo univoco del fornitore
	id: string;
	// Nome o ragione sociale del fornitore
	nome: string;
	// Nome referente
	referente: string;
	// Indirizzo del cliente
	indirizzo_via: string;
	// CAP del cliente
	indirizzo_cap: string;
	// Città (comune) del fornitore
	indirizzo_citta: string;
	// Provincia del cliente
	indirizzo_provincia: string;
	// Note extra sull'indirizzo
	indirizzo_extra?: string;
	// Paese (nazionalità) del fornitore
	paese: string;
	// Indirizzo di posta elettronica
	mail: string;
	// Recapito telefonico
	tel: string;
	// Numero fax
	fax: string;
	// Partita IVA
	piva: string;
	// Codice fiscale
	cf: string;
	// Informazioni extra sul fornitore
	extra: string;
}

export interface AnagraficaNuovoSingoloResponse extends GenericSuccess {
	// Identificativo del cliente o fornitore creato
	id: number;
}
