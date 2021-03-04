import { GenericSuccess } from "./success";

export interface CorrispettiviListaResponse extends GenericSuccess {
	lista_corrispettivi: Array<CorrispettiviDetailed>;
}

export interface CorrispettiviDetailed {
	// Identificativo univoco della registrazione
	id: string;
	// Tipologia dei documenti registrati = ['ricevute' o 'scontrini']
	tipo: string;
	// Data della registrazione
	data: string;
	// Numero protocollo e numerazione del documento; se vuoto, non è stato assegnato assegnato un protocollo
	protocollo: string;
	// Descrizione
	desc: string;
	// Importo totale netto della registrazione
	importo_netto: number;
	// Importo totale lordo della registrazione
	importo_lordo: number;
	// Centro di ricavo
	centro_ricavo: string;
	// Conto di saldo
	metodo: string;
	// Specifica se gli importi specificati in "lista_righe" sono comprensivi di iva (true) oppure netti (false)
	importi_ivati: boolean;
	// Lista delle righe della registrazione
	lista_righe: Array<CorrispettiviRiga>;
}

export interface CorrispettiviRiga {
	// Importo della riga
	importo: number;
	// Valore IVA (percentuale)
	valore_iva: number;
	// Descrizione della tipologia di IVA
	desc_iva: string;
	// Categoria (utilizzato come conto ricavo per il piano dei conti)
	categoria?: string;
}

export interface CorrispettiviNuovoResponse extends GenericSuccess {
	// Identificativo della registrazione creata
	new_id: number;
}

export interface CorrispettiviModificaResponse extends GenericSuccess {
	// Identificativo della registrazione modificata
	new_id: number;
}
