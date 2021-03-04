import { GenericSuccess } from "./success";

export interface Info extends GenericSuccess {
	messaggio: string;
	limite_breve: string;
	limite_medio: string;
	limite_lungo: string;
}

export interface InfoListaResponse extends GenericSuccess {
	// Nome o ragione sociale dell'azienda
	nome?: string;
	// Numero di giorni rimanenti per la licenza attiva
	durata_licenza?: number;
	// Tipo di licenza attiva = ['prova' o 'standard' o 'premium']
	tipo_licenza?: string;
	// Lista delle valute supportate
	lista_valute?: Array<InfoValuta>;
	// Lista delle aliquote iva
	lista_iva?: Array<InfoIva>;
	// Lista delle nazioni supportate per la fatturazione
	lista_paesi?: string;
	// Lista dei template dei documenti (fatture, ordini, preventivi, ricevute, ndc, proforma)
	lista_template?: Array<InfoTemplate>;
	// Lista dei template dei DDT
	lista_template_ddt?: Array<InfoTemplate>;
	// Lista dei template delle fatture accompagnatorie
	lista_template_ddt_ftacc?: Array<InfoTemplate>;
	// Lista dei conti
	lista_conti?: Array<InfoConto>;
	// Lista dei metodi di pagamento
	lista_metodi_pagamento?: Array<InfoMetodo>;
}

export interface InfoValuta {
	// Codice della valuta
	codice: string;
	// Simbolo della valuta = ['in_coda' o 'in_corso' o 'inviato' o 'fallito']
	simbolo: string;
	// Valore di cambio dall'euro alla valuta corrente
	cambio: string;
}

export interface InfoIva {
	// Codice IVA dell'aliquota (identificativo interno)
	cod_iva: number;
	// Valore percentuale dell'IVA
	valore_iva: number;
	// Descrizione dell'aliquota IVA
	descrizione_iva: string;
}

export interface InfoTemplate {
	// Identificativo del template
	id: number;
	// Nome del template
	nome_template: string;
}

export interface InfoConto {
	// Identificativo del conto
	id: number;
	// Nome del conto
	nome_conto: string;
}

export interface InfoMetodo {
	// Identificativo del metodo di pagamento
	id: number;
	// Nome del template
	nome_metodo: string;
	// Nome campo
	campo1?: string;
	// Descrizione del campo
	desc1?: string;
	// Nome campo
	campo2?: string;
	// Descrizione del campo
	desc2?: string;
	// Nome campo
	campo3?: string;
	// Descrizione del campo
	desc3?: string;
	// Nome campo
	campo4?: string;
	// Descrizione del campo
	desc4?: string;
	// Nome campo
	campo5?: string;
	// Descrizione del campo
	desc5?: string;
}
