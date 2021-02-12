import { GenericSuccess } from "./success";

export interface DocListaResponse extends GenericSuccess {
	lista_documenti: Array<DocLight>;
	// Numero della pagina restituita
	pagina_corrente?: number;
	// Numero di pagine totali
	numero_pagine?: number;
	// Numero di risultati totali (di tutte le pagine)
	numero_risultati?: number;
	// Numero massimo di risultati presenti in ogni pagina
	risultati_per_pagina?: number;
}

export interface DocLight {
	// Identificativo univoco del documento (cambia a seguito di una modifica del documento)
	id: string;
	// Identificativo permanente del documento (rimane lo stesso anche a seguito di modiifche)
	token: string;
	// Tipologia del documento = ['fatture' o 'proforma' o 'ordini' o 'preventivi' o 'ndc' o 'ddt' o 'rapporti' o 'ordforn']
	tipo: string;
	// Identificativo univoco del cliente (se nullo, il cliente non è presente nell'anagrafica) [solo con tipo!="ordforn"]
	id_cliente?: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica) [solo con tipo="ordforn"]
	id_fornitore?: string;
	// Nome o ragione sociale del cliente/fornitore
	nome: string;
	// Numero (e serie) del documento
	numero: string;
	// Data di emissione del documento
	data: string;
	// Importo netto del documento (competenze)
	importo_netto: number;
	// Importo lordo del documento (totale da pagare)
	importo_totale: number;
	// Valuta del documento e degli importi indicati
	valuta: string;
	// Tasso di cambio EUR/{valuta}
	valuta_cambio: number;
	// [Non presente in preventivi e ddt] Indica la scadenza del prossimo pagamento (vale 00/00/0000 nel caso in cui tutti i pagamenti siano saldati)
	prossima_scadenza?: string;
	// [Solo se tipo!=ndc] Indica la presenza di un DDT incluso nel documento (per i ddt è sempre true)
	ddt?: boolean;
	// [Solo se tipo=fatture] Indica la presenza di una fattura accompagnatoria inclusa nel documento
	ftacc?: boolean;
	// [Solo se filtrato per oggetto] Oggetto mostrato sul documento
	oggetto_visibile?: string;
	// [Solo se filtrato per oggetto] Oggetto (per organizzazione interna)
	oggetto_interno?: string;
	// [Solo se tipo!=ddt] Link al documento in formato PDF
	link_doc?: string;
	// Numero del DDT [solo se tipo=ddt]
	ddt_numero?: string;
	// Data del DDT
	ddt_data?: string;
	// [Se presente, vale sempre "true"] Indica che il documento è bloccato e non può essere modificato o eliminato
	bloccato?: boolean;
	// [Solo per fatture e ndc elettroniche, vale sempre "true"] Indica che il documento è nel formato FatturaPA
	PA?: boolean;
	// [Solo se PA=true] Indica la tipologia del cliente: Pubblica Amministrazione ("PA") oppure privato ("B2B") = ['PA' o 'B2B']
	PA_tipo_cliente?: string;
}

export interface DocDettagliResponse extends GenericSuccess {
	dettagli_documento: DocDetailed;
}

export interface DocDetailed {
	// Identificativo univoco del documento
	id: string;
	// Identificativo permanente del documento (rimane lo stesso anche a seguito di modiifche)
	token: string;
	// Tipologia del documento = ['fatture' o 'proforma' o 'ordini' o 'preventivi' o 'ndc']
	tipo: string;
	// Identificativo univoco del cliente (se nullo, il cliente non è presente nell'anagrafica) [solo con tipo!="ordforn"]
	id_cliente?: string;
	// Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica) [solo con tipo="ordforn"]
	id_fornitore?: string;
	// Nome o ragione sociale del cliente/fornitore
	nome: string;
	// Indirizzo del cliente
	indirizzo_via: string;
	// CAP del cliente/fornitore
	indirizzo_cap: string;
	// Città (comune) del cliente/fornitore
	indirizzo_citta: string;
	// Provincia del cliente/fornitore
	indirizzo_provincia: string;
	// Note extra sull'indirizzo
	indirizzo_extra?: string;
	// Paese (nazionalità) del cliente/fornitore
	paese: string;
	// Lingua del documento (sigla) = ['it' o 'en' o 'de']
	lingua?: string;
	// Partita IVA cliente/fornitore
	piva: string;
	// Codice fiscale cliente/fornitore
	cf: string;
	// Numero (e serie) del documento
	numero: string;
	// Data di emissione del documento
	data: string;
	// [Non presente in preventivi e ddt] Indica la scadenza del prossimo pagamento (vale 00/00/0000 nel caso in cui tutti i pagamenti siano saldati)
	prossima_scadenza?: string;
	// Valuta del documento e degli importi indicati
	valuta: string;
	// Tasso di cambio EUR/{valuta}
	valuta_cambio: number;
	// Specifica se i prezzi da utilizzare per il calcolo del totale sono quelli netti, oppure quello lordi, comprensivi di iva
	prezzi_ivati: boolean;
	// Importo netto del documento (competenze)
	importo_netto: number;
	// Importo dell'IVA del documento
	importo_iva: number;
	// Importo lordo del documento (totale da pagare)
	importo_totale: number;
	// [Non presente in ddt e ordforn] Percentuale rivalsa INPS
	rivalsa?: number;
	// [Non presente in ddt e ordforn] Importo rivalsa INPS
	importo_rivalsa?: number;
	// [Non presente in ddt e ordforn] Percentuale cassa previdenziale
	cassa?: number;
	// [Non presente in ddt e ordforn] Importo cassa previdenziale
	importo_cassa?: number;
	// [Non presente in ddt e ordforn] Percentuale ritenuta d'acconto
	rit_acconto?: number;
	// [Non presente in ddt e ordforn] Imponibile della ritenuta d'acconto (percentuale sul totale)
	imponibile_ritenuta?: number;
	// [Non presente in ddt e ordforn] Importo ritenuta d'acconto
	importo_rit_acconto?: number;
	// [Non presente in ddt e ordforn] Percentuale altra ritenuta (ritenuta previdenziale, Enasarco etc.)
	rit_altra?: number;
	// [Non presente in ddt e ordforn] Importo altra ritenuta (ritenuta previdenziale, Enasarco etc.)
	importo_rit_altra?: number;
	// [Non presente in ddt e ordforn] Valore della marca da bollo (0 se non presente)
	marca_bollo?: number;
	// [Non presente in ddt] Oggetto mostrato sul documento (precedentemente "oggetto_fattura")
	oggetto_visibile?: string;
	// [Non presente in ddt] Oggetto (per organizzazione interna)
	oggetto_interno?: string;
	// [Non presente in ddt e ordforn] Centro ricavo
	centro_ricavo?: string;
	// [Solo in ordforn] Centro di costo
	centro_costo?: string;
	// [Non presente in ddt] Note (in formato HTML)
	note?: string;
	// [Non presente in ddt] Nasconde o mostra la scadenza sul documento
	nascondi_scadenza?: boolean;
	// [Non presente in ndc e ordforn] Indica la presenza di un DDT incluso nel documento (per i ddt è sempre true)
	ddt?: boolean;
	// [Solo se tipo=fatture] Indica la presenza di una fattura accompagnatoria inclusa nel documento
	ftacc?: boolean;
	// [Solo se tipo!=ddt] Identificativo del template del documento
	id_template?: string;
	// [Solo se ddt=true] Identificativo del template del ddt
	ddt_id_template?: string;
	// [Solo se ftacc=true] Identificativo del template della fattura accompagnatoria
	ftacc_id_template?: string;
	// [Non presente in ddt e ndc] Mostra o meno le informazioni sul metodo di pagamento sul documento
	mostra_info_pagamento?: boolean;
	// [Solo se mostra_info_pagamento=true] Nome del metodo di pagamento
	metodo_pagamento?: string;
	// [Solo se mostra_info_pagamento=true] Titolo della riga N del metodo di pagamento (N da 1 a 5)
	metodo_titoloN?: string;
	// [Solo se mostra_info_pagamento=true] Descrizione della riga N del metodo di pagamento (N da 1 a 5)
	metodo_descN?: string;
	// [Solo per preventivi, rapporti e ordforn] Nasconde o mostra la scadenza sul documento = ['tutti' o 'netto' o 'nessuno']
	mostra_totali?: string;
	// [Solo per ricevute, fatture, proforma, ordini] Mostra il bottone "Paga con Paypal"
	mostra_bottone_paypal?: boolean;
	// [Solo per ricevute, fatture, proforma, ordini] Mostra il bottone "Paga con Bonifico Immediato",
	mostra_bottone_bonifico?: boolean;
	// [Solo per ricevute, fatture, proforma, ordini] Mostra il bottone "Notifica pagamento effettuato"
	mostra_bottone_notifica?: boolean;
	// Lista degli articoli/righe del documento
	lista_articoli: Array<DocArticolo>;
	// [Non presente in preventivi, ddt e ordforn] Lista delle tranches di pagamento
	lista_pagamenti?: Array<DocPagamento>;
	// [Se ddt=true] Numero del ddt (se tipo="ddt" corrisponde al campo "numero")
	ddt_numero?: string;
	// [Se ddt=true] Data del ddt Numero del ddt (se tipo="ddt" corrisponde al campo "data")
	ddt_data?: string;
	// [Se ddt/ftacc=true] Numero di colli specificato nel ddt
	ddt_colli?: string;
	// [Se ddt/ftacc=true] Peso specificato nel ddt
	ddt_peso?: string;
	// [Se ddt/ftacc=true] Causale specificata nel ddt
	ddt_causale?: string;
	// [Se ddt/ftacc=true] Luogo di spedizione specificato nel ddt
	ddt_luogo?: string;
	// [Se ddt/ftacc=true] Dati trasportatore specificati nel ddt
	ddt_trasportatore?: string;
	// [Se ddt/ftacc=true] Annotazioni specificate nel ddt
	ddt_annotazioni?: string;
	// [Solo se tipo!=ddt] Link al documento in formato PDF
	link_doc?: string;
	// [Solo se ddt=true] Link al ddt in formato PDF
	link_ddt?: string;
	// [Solo se ftacc=true] Link alla fattura accompagnatoria in formato PDF
	link_ftacc?: string;
	// [Solo se è presente un allegato] Link al file allegato
	link_allegato?: string;
	// Indica se il documento è bloccato (e di conseguenza non può essere modificato o eliminato)
	bloccato?: boolean;
	// [Solo per fatture e ndc elettroniche, vale sempre "true"] Indica che il documento è nel formato FatturaPA
	PA?: boolean;
	// [Solo se PA=true] Indica la tipologia del cliente: Pubblica Amministrazione ("PA") oppure privato ("B2B") = ['PA' o 'B2B']
	PA_tipo_cliente?: string;
	// [Solo se PA=true] Tipo di documento a cui fa seguito la fattura/ndc in questione = ['ordine' o 'convenzione' o 'contratto' o 'nessuno']
	PA_tipo?: string;
	// [Solo se PA=true] Numero del documento a cui fa seguito la fattura/ndc in questione
	PA_numero?: string;
	// [Solo se PA=true] Data del documento a cui fa seguito la fattura/ndc in questione
	PA_data?: string;
	// [Solo se PA=true] Codice Unitario Progetto
	PA_cup?: string;
	// [Solo se PA=true] Codice Identificativo della Gara
	PA_cig?: string;
	// [Solo se PA=true] Codice Ufficio della Pubblica Amministrazione
	PA_codice?: string;
	// [Solo se PA=true] Esigibilità IVA e modalità di versamento (I=immediata, D=differita, S=split payment, N=non specificata) = ['I' o 'D' o 'S' o 'N']
	PA_esigibilita?: string;
	// [Solo se PA=true] Modalità di pagamento (vedi tabella codifiche sulla documentazione ufficiale)
	PA_modalita_pagamento?: string;
	// [Solo se PA=true] Nome dell'istituto di credito
	PA_istituto_credito?: string;
	// [Solo se PA=true] Codice IBAN del conto corrente del beneficiario
	PA_iban?: string;
	// [Solo se PA=true] Beneficiario del pagamento
	PA_beneficiario?: string;
	// [Solo se PA=true] Indica che la fattura/ndc elettronica è stata inviata tramite il servizio FEPA TeamSystem
	PA_ts?: boolean;
	// [Solo se PA_ts=true] Stato di invio della fattura/ndc
	PA_ts_stato?: string;
	// [Solo per fatture, ndc e proforma NON elettroniche, vale sempre "true"] Indica che il documento applica lo split payment
	split_payment?: boolean;
}

export interface DocArticolo {
	// Identificativo del prodotto (se nullo, non è presente tra i prodotti)
	id: string;
	// Codice prodotto
	codice: string;
	// Nome articolo
	nome: string;
	// Unità di misura per il prodotto
	um: string;
	// Quantità di prodotto
	quantita: number;
	// Descrizione del prodotto
	descrizione: string;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria: string;
	// Prezzo unitario netto (IVA esclusa)
	prezzo_netto: number;
	// Prezzo unitario lordo (comprensivo di IVA)
	prezzo_lordo: number;
	// Valore IVA (percentuale)
	valore_iva: number;
	// Descrizione della tipologia di IVA
	desc_iva: string;
	// [Non presente in ordforn e ddt] Indica se l'articolo è imponibile
	tassabile: boolean;
	// [Non presente in ddt] Sconto (percentuale)
	sconto: number;
	// [Non presente in ordforn e ddt] Indica se a questo articolo vengono applicate ritenute e contributi
	applica_ra_contributi: boolean;
	// Ordine dell'articolo in fattura (ordinamento ascendente)
	ordine: number;
	// [Non presente in ordforn e ddt] Evidenzia l'eventuale sconto in fattura
	sconto_rosso: boolean;
	// [Non presente in ordforn e ddt] Indica se l'articolo è incluso nel DDT (se presente, altrimenti non è significativo)
	in_ddt: boolean;
	// Indica se viene movimentato il magazzino (true: viene movimentato; false: non viene movimentato) [Non presente se in ordforn e ddt, oppure se il prodotto non è collegato all'elenco prodotti, oppure la funzionalità magazzino era disattiva al momento della creazione del documento]
	magazzino?: boolean;
}

export interface DocPagamento {
	// Data di scadenza del pagamento
	data_scadenza: string;
	// Importo del pagamento
	importo: number;
	// Conto di saldo = ['not' o 'rev' o il nome del conto] ('not' indica che non è stato saldato, 'rev' che è stato stornato)
	metodo: string;
	// Data del saldo dell'importo indicato (se avvenuto)
	data_saldo?: string;
}

export interface DocNuovoResponse extends GenericSuccess {
	// Identificativo del documento creato
	new_id: number;
	// Identificativo permanente del documento (rimane lo stesso anche a seguito di modiifche)
	token: string;
}

export interface DocInfoResponse {
	// Numero suggerito per la creazione di un ddt (ottenuto come: massimo dell'anno +1)
	ddt_numero_successivo: string;
	// Numerazioni utilizzate nell'anno specificato e relativi numeri successivi suggeriti
	numerazioni: DocInfoNumerazione;
	// Identificativo del template documento predefinito
	default_id_template: string;
	// Identificativo del template documento predefinito
	default_ddt_id_template: string;
	// Identificativo del template documento predefinito
	default_ftacc_id_template: string;
	// Codice iva default
	default_cod_iva?: number;
	// Note a pié pagina predefinite
	default_note: string;
	// Percentuale cassa previdenziale predefinita
	default_cassa_previdenziale: number;
	// Percentuale rivalsa INPS predefinita
	default_rivalsa_previdenziale: number;
	// Percentuale ritenuta d'acconto predefinita
	default_ritenuta_acconto: number;
	// Percentuale imponibile ritenuta d'acconto predefinita
	default_imponibile_ritenuta: number;
	// Percentuale altra ritenuta predefinita
	default_altra_ritenuta: number;
	// Indica se l'ultimo documento è stato emesso utilizzando un calcolo basato sui prezzi netti (false) o lordi (true)
	default_prezzi_ivati: number;
}

export interface DocInfoNumerazione {
	// Numero suggerito per la creazione di un documento del tipo specificato e per la serie <serieN> (ottenuto come: massimo dell'anno +1)
	[key: string]: number;
}

export interface DocInfomailResponse extends GenericSuccess {
	// Indirizzo e-mail del destinatario (se presente nell'anagrafica clienti/fornitori)
	mail_destinatario?: string;
	// Lista degli indirizzi e-mail configurati
	mail_mittente?: Array<DocInfomailMail>;
	// Indirizzo e-mail inserito in cc (se richiesto); corrisponde all'indirizzo di rdell'account Fatture in Cloud
	mail_cc?: string;
	// Oggetto predefinito utilizzato nelle e-mail
	oggetto_default?: string;
	// Messaggio predefinito utilizzato nelle e-mail (secondo i modelli configurati)
	messaggio_default?: string;
	// Se "true", è presente un documento da allegare con "includi_documento" (è "false" solo se si tratta di un ddt, con cui è necessario utilizzare "invia_ddt")
	esiste_documento?: boolean;
	// Se "true", è presente un ddt collegato si può includere con "invia_ddt"
	esiste_ddt?: boolean;
	// Se "true", è presente una fattura accompagnatoria collegata e si può includere con "invia_fa"
	esiste_fa?: boolean;
	// Se "true", è presente un allegato interno e si può includere con "includi_allegato"
	esiste_allegato?: boolean;
}

export interface DocInfomailMail {
	// Codice identificativo dell'indirizzo (non ancora utilizzato)
	id: number;
	// Indica se si tratta dell'indirizzo di invio predefinito tra quelli configurati
	default: boolean;
	// Indirizzo e-mail di invio
	mail: string;
}
