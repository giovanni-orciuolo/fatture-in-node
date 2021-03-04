import { GenericSuccess } from "./success";

export interface MailListaResponse extends GenericSuccess {
	// Lista delle mail
	lista_mail: Array<Mail>;
	// Numero della pagina restituita
	pagina_corrente: number;
	// Numero di pagine totali
	numero_pagine: number;
}

export interface Mail {
	// Identificativo univoco dela mail
	id: string;
	// Stato di invio della mail = ['in_coda' o 'in_corso' o 'inviato' o 'fallito']
	stato_invio: string;
	// Data e ora di invio programmato della mail
	data: string;
	// Indirizzo del mittente
	mail_mittente: string;
	// Nome del mittente
	mittente: number;
	// Indirizzo del destinatario
	mail_destinatario: string;
	// Nome del destinatario
	destinatario: string;
	// Oggetto della mail
	oggetto: string;
	// Testo della mail
	messaggio: string;
	// Indirizzo a cui viene inviata una copia
	mail_copia?: string;
	// Tipo di documento o mail
	tipo: string;
	// Indica se il messaggio è stato letto o il documento è stato aperto (solo con tracciamento attivo) (solo se lo stato è 'inviato') = ['non_letto' o 'mail_letta' o 'doc_aperto']
	stato_lettura?: string;
	// Data e ora di lettura della mail o del documento [solo se lo stato è 'SENT' e lo 'stato_lettura' non è 'NOT_SEEN']
	data_lettura?: string;
	// Allegati
	allegati?: string;
}
