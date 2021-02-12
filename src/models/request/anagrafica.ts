import { Auth } from "./auth";
import { RequestPagination } from "./pagination";

export interface AnagraficaListaRequest extends Auth, RequestPagination {
	// Filtro generico che restringe la ricerca ai soggetti che contengono questa stringa nei campi 'nome' o 'piva'
	filtro?: string;
	// Restringe la ricerca al soggetto con l'identificativo specificato
	id?: string;
	// Restringe la ricerca ai soggetti che contengono questa stringa nel campo 'nome'
	nome?: string;
	// Restringe la ricerca ai soggetti che contengono questa stringa nel campo 'cf'
	cf?: string;
	// Restringe la ricerca ai soggetti che contengono questa stringa nel campo 'piva'
	piva?: string;
}

export interface AnagraficaNuovoSingoloRequest extends Auth {
	// Nome o ragione sociale del cliente
	nome: string;
	// Nome referente
	referente?: string;
	// Indirizzo del cliente
	indirizzo_via?: string;
	// CAP del cliente
	indirizzo_cap?: string;
	// Città (comune) del cliente
	indirizzo_citta?: string;
	// Provincia del cliente
	indirizzo_provincia?: string;
	// Note extra sull'indirizzo
	indirizzo_extra?: string;
	// Paese (nazionalità) del cliente
	paese?: string;
	// [Solo se "paese" non è valorizzato] Codice ISO del paese (nazionalità) del cliente (formato ISO alpha-2)
	paese_iso?: string;
	// Indirizzo di posta elettronica
	mail?: string;
	// Recapito telefonico
	tel?: string;
	// Numero fax
	fax?: string;
	// Partita IVA
	piva?: string;
	// Codice fiscale
	cf?: string;
	// [Solo clienti] Termini di pagamento predefiniti (giorni a partire dalla data del documento)
	termini_pagamento?: number;
	// [Solo clienti] Indica se la scadenza del pagamento deve avvenire alla fine del mese (dopo i giorni specificati in 'termini_pagamento')
	pagamento_fine_mese?: boolean;
	// [Solo clienti] Codice IVA predefinito
	cod_iva_default?: number;
	// Informazioni extra sul cliente
	extra?: string;
	// [Solo clienti] Indica se il cliente è una pubblica amministrazione
	PA?: boolean;
	// [Solo clienti con PA=true] Codice pubblica amministrazione
	PA_codice?: string;
}

export interface AnagraficaNuovoListaRequest extends Auth {
	// Lista dei clienti o fornitori da inserire
	lista_soggetti: Array<AnagraficaNuovoSingoloRequest>;
}

export interface AnagraficaModificaRequest extends Partial<AnagraficaNuovoSingoloRequest> {
}

export interface AnagraficaEliminaRequest {
	// Identificativo del cliente o fornitore da eliminare
	id: string;
}
