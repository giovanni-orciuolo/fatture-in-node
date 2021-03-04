import { Auth } from "./auth";

export interface CorrispettiviListaRequest extends Auth {
	anno: number;
	// Specifica il tipo di registrazioni da cercare = ['ricevute' o 'spese']
	tipo?: string;
	// Restituisce solo registrazioni successive o corrispondenti a questa data
	data_inizio?: string;
	// Restituisce solo registrazioni antecedenti o corrispondenti a questa data
	data_fine?: string;
	// Identificativo univoco della registrazione
	id?: string;
}

export interface CorrispettiviNuovoRequest extends Auth {
	// Tipologia dei documenti da registrare = ['ricevute' o 'scontrini']
	tipo: string;
	// Data della registrazione
	data?: string;
	// Specifica se attribuire in modo automatico il protocollo sulla base della numerazione presente nel parametro "protocollo"
	protocollo_auto?: boolean;
	// Numero protocollo e numerazione del documento; se non specificato o vuoto, viene utilizzata la numerazione principale; se protocollo_auto=false e viene specificata solo la numerazione, viene assegnata solamente la numerazione e non un numero di protocollo; se protocollo_auto=true, è possibile specificare solo la numerazione (un eventuale numero verrebbe sovrascritto)
	protocollo?: string;
	// Descrizione
	desc?: string;
	// Centro di ricavo
	centro_ricavo?: string;
	// Conto di saldo
	metodo: string;
	// Specifica se gli importi specificati in "lista_righe" sono comprensivi di iva (true) oppure netti (false)
	importi_ivati?: boolean;
	// Lista delle righe della registrazione
	lista_righe?: Array<CorrispettiviNuovoRiga>;
}

export interface CorrispettiviNuovoRiga {
	// Importo della riga
	importo: number;
	// Codice aliquota IVA (ottenibili con il parametro "lista_iva_corrispettivi" della funzione "/info/account")
	cod_iva: number;
	// Categoria (utilizzato come conto ricavo per il piano dei conti)
	categoria?: string;
}

export interface CorrispettiviModificaRequest extends Partial<CorrispettiviNuovoRequest> {
}

export interface CorrispettiviEliminaRequest extends Auth {
	// Identificativo della registrazione da eliminare
	id: string;
}
