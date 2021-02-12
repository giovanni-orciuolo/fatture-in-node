import { Auth } from "./auth";
import { RequestPagination } from "./pagination";

export interface DocListaRequest extends Auth, RequestPagination {
	anno: number,
	// Restituisce solo documenti successivi o corrispondenti a questa data
	data_inizio?: string;
	// Restituisce solo documenti antecedenti o corrispondenti a questa data
	data_fine?: string;
	// Restringe la ricerca ai clienti che contengono questa stringa nel nome
	cliente?: string;
	// Restringe la ricerca ai fornitori che contengono questa stringa nel nome
	fornitore?: string;
	// Restringe la ricerca al cliente con questo id [solo per tipo-doc!="ordforn"]
	id_cliente?: string;
	// Restringe la ricerca al cliente con questo id [solo per tipo-doc="ordforn"]
	id_fornitore?: string;
	// Elenca solo i documenti saldati completamente (true) o non saldati/saldati parzialmente (false) [Solo per fatture, ricevute, note di credito, ordini e pro forma]
	saldato?: boolean;
	// Restringe la ricerca ai documenti che contengono questa stringa nell'oggetto, sia quello interno che quello visibile in fattura
	oggetto?: string;
	// Elenca tutti i documenti contenenti un DDT (true) o solo i DDT singoli (false) [Solo per ddt]
	ogni_ddt?: boolean;
	// Restringe la ricerca ai documenti emessi nel formato FatturaPA (true) oppure no (false); se non valorizzato vengono restituiti tutti
	PA?: boolean;
	// [Solo se PA=true] Restringe la ricerca ai documenti emessi verso Pubbliche Amministrazioni ("PA") oppure a privati ("B2B"); se non valorizzato vengono restituiti entrambi = ['PA' o 'B2B']
	PA_tipo_cliente?: string;
}

export interface DocDettagliRequest extends Auth {
	// Identificativo univoco del documento
	id?: string;
	// Identificativo permanente del documento (utilizzato per identificare il documento solo se manca il parametro "id")
	token?: string;
}

export interface DocNuovoRequest extends Auth {
	// Identificativo univoco del cliente (serve per creare un collegamento tra il documento e un cliente in anagrafica; se nullo, il documento non viene collegato a nessun cliente già esistente in anagrafica; se mancante, viene fatto il collegamento con piva o cf) [solo con tipo!="ordforn"]
	id_cliente?: string;
	// Identificativo univoco del fornitore (serve per creare un collegamento tra il documento e un fornitore in anagrafica; se nullo, il documento non viene collegato a nessun fornitore già esistente in anagrafica; se mancante, viene fatto il collegamento con piva o cf) [solo con tipo="ordforn"]
	id_fornitore?: string;
	// Nome o ragione sociale del cliente/fornitore
	nome: string;
	// Indirizzo del cliente
	indirizzo_via?: string;
	// CAP del cliente/fornitore
	indirizzo_cap?: string;
	// Città (comune) del cliente/fornitore
	indirizzo_citta?: string;
	// Provincia del cliente/fornitore
	indirizzo_provincia?: string;
	// Note extra sull'indirizzo
	indirizzo_extra?: string;
	// Paese (nazionalità) del cliente/fornitore
	paese?: string;
	// [Solo se "paese" non è valorizzato] Codice ISO del paese (nazionalità) del cliente/fornitore (formato ISO alpha-2) in alternativa al parametro "paese"
	paese_iso?: string;
	// Lingua del documento (sigla) = ['it' o 'en' o 'de']
	lingua?: string;
	// Partita IVA cliente/fornitore; viene utilizzata per ricercare e collegare il cliente/fornitore in anagrafica se non specificato il parametro id_cliente/id_fornitore (in caso di doppioni viene collegato solo un soggetto)
	piva?: string;
	// Codice fiscale cliente/fornitore; viene utilizzato per ricercare e collegare il cliente/fornitore in anagrafica se non specificati i parametri id_cliente/id_fornitore e piva (in caso di doppioni viene collegato solo un soggetto)
	cf?: string;
	// Se "true", completa i dati anagrafici della fattura con quelli presenti nell'anagrafica cliente/fornitore (sovrascrivendo quelli presenti), effettuando la ricerca tramite i campi id_cliente/id_fornitore, piva e cf (in quest'ordine)
	autocompila_anagrafica?: boolean;
	// Se "true", aggiorna l'anagrafica clienti/fornitori con i dati anagrafici della fattura: se il cliente/fornitore non esiste viene creato, mentre se il cliente/fornitore esiste già i dati vengono aggiornati; il cliente/fornitore viene ricercato tramite i campi id_cliente/id_fornitore, piva e cf (in quest'ordine)
	salva_anagrafica?: boolean;
	// Numero (e serie) del documento; se mancante viene utilizzato il successivo proposto per la serie principale; se viene specificata solo la serie (stringa che inizia con un carattere non numerico) viene utilizzato il successivo per quella serie; per i ddt agisce anche sul campo "ddt_numero" e non accetta una serie
	numero?: string;
	// Data di emissione del documento (per i ddt agisce anche sul campo "ddt_data")
	data?: string;
	// Valuta del documento e degli importi indicati
	valuta?: string;
	// Tasso di cambio EUR/{valuta} [Se non specificato viene utilizzato il tasso di cambio odierno]
	valuta_cambio?: number;
	// Specifica se i prezzi da utilizzare per il calcolo del totale documento sono quelli netti, oppure quello lordi (comprensivi di iva)
	prezzi_ivati?: boolean;
	// [Non presente in ddt e ordforn] Percentuale rivalsa INPS
	rivalsa?: number;
	// [Non presente in ddt e ordforn] Percentuale cassa previdenziale
	cassa?: number;
	// [Non presente in ddt e ordforn] Percentuale ritenuta d'acconto
	rit_acconto?: number;
	// [Non presente in ddt e ordforn] Imponibile della ritenuta d'acconto (percentuale sul totale)
	imponibile_ritenuta?: number;
	// [Non presente in ddt e ordforn] Percentuale altra ritenuta (ritenuta previdenziale, Enasarco etc.)
	rit_altra?: number;
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
	// [Solo se tipo!=ddt] Identificativo del template del documento [Se non specificato o inesistente, viene utilizzato quello di default]
	id_template?: string;
	// [Solo se ddt=true] Identificativo del template del ddt [Se non specificato o inesistente, viene utilizzato quello di default]
	ddt_id_template?: string;
	// [Solo se ftacc=true] Identificativo del template della fattura accompagnatoria [Se non specificato o inesistente, viene utilizzato quello di default]
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
	// [Solo per ricevute, fatture, proforma, ordini] Mostra il bottone "Paga con Bonifico Immediato"
	mostra_bottone_bonifico?: boolean;
	// [Solo per ricevute, fatture, proforma, ordini] Mostra il bottone "Notifica pagamento effettuato"
	mostra_bottone_notifica?: boolean;
	// Lista degli articoli/righe del documento
	lista_articoli: Array<DocNuovoArticolo>;
	// [Non presente in preventivi, ddt e ordforn] Lista delle tranches di pagamento
	lista_pagamenti: Array<DocNuovoPagamento>;
	// [Se ddt=true] Numero del ddt (se tipo="ddt" corrisponde al campo "numero") [Se non specificato viene autocompletato]
	ddt_numero?: string;
	// [Se ddt=true] Data del ddt Numero del ddt [Obbligatoria solo se e solo se il documento non è un ddt ma ddt=true]
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
	// [Solo per fatture e ndc elettroniche] Indica se il documento è nel formato FatturaPA; se "true", vengono presi in considerazione tutti i successivi campi con prefisso "PA_", con eventuali eccezioni (se non valorizzati, vengono utilizzati i valori di default)
	PA?: boolean;
	// [Solo se PA=true] Indica la tipologia del cliente: Pubblica Amministrazione ("PA") oppure privato ("B2B") = ['PA' o 'B2B']
	PA_tipo_cliente?: string;
	// [Solo se PA=true] Tipo di documento a cui fa seguito la fattura/ndc in questione = ['ordine' o 'convenzione' o 'contratto' o 'nessuno']
	PA_tipo?: string;
	// [Solo se PA=true] Numero del documento a cui fa seguito la fattura/ndc in questione
	PA_numero?: string;
	// [Solo se PA=true] Data del documento a cui fa seguito la fattura/ndc in questione
	PA_data?: string;
	// [Solo se PA_tipo_cliente=PA] Codice Unitario Progetto
	PA_cup?: string;
	// [Solo se PA_tipo_cliente=PA] Codice Identificativo della Gara
	PA_cig?: string;
	// [Solo se PA=true] Codice Ufficio della Pubblica Amministrazione o Codice Destinatario
	PA_codice?: string;
	// [Solo se PA_tipo_cliente=B2B] Indirizzo PEC del destinatario, utilizzato in assenza di Codice Destinatario
	PA_pec?: string;
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
	// Informazioni anagrafiche aggiuntive da associare al cliente/fornitore [solo se salva_anagrafica=true]
	extra_anagrafica?: DocNuovoExtraAnagrafica;
	// [Solo per fatture, ndc e proforma NON elettroniche] Specifica se il documento applica lo split payment
	split_payment?: boolean;
}

export interface DocNuovoArticolo {
	// Identificativo del prodotto (se nullo o mancante, la registrazione non viene collegata a nessun prodotto presente nell'elenco prodotti)
	id?: string;
	// Codice prodotto
	codice?: string;
	// Nome articolo
	nome?: string;
	// Unità di misura per il prodotto
	um?: string;
	// Quantità di prodotto
	quantita?: number;
	// Descrizione del prodotto
	descrizione?: string;
	// Categoria del prodotto (utilizzata per il piano dei conti)
	categoria?: string;
	// Prezzo unitario netto (IVA esclusa) [Obbligatorio se prezzi_netti!=true]
	prezzo_netto?: number;
	// Prezzo unitario lordo (comprensivo di IVA) [Obbligatorio se prezzi_ivati=true]
	prezzo_lordo?: number;
	// Codice aliquota IVA (ottenibili con il parametro "lista_iva" della funzione "/info/account")
	cod_iva: number;
	// Indica se l'articolo è imponibile
	tassabile?: boolean;
	// Sconto (percentuale)
	sconto?: number;
	// Indica se a questo articolo vengono applicate ritenute e contributi
	applica_ra_contributi?: boolean;
	// Ordine dell'articolo nel documento (ordinamento ascendente da 0 in poi)
	ordine?: number;
	// Se vale 1, evidenzia in rosso l'eventuale sconto in fattura = ['0' o '1']
	sconto_rosso?: number;
	// Indica se l'articolo è incluso nel ddt (se presente un ddt allegato, altrimenti non è significativo)
	in_ddt?: boolean;
	// Indica se viene movimentato il magazzino (true: viene movimentato; false: non viene movimentato) [Non influente se il prodotto non è collegato all'elenco prodotti, oppure la funzionalità magazzino è disattivata]
	magazzino?: boolean;
}

export interface DocNuovoPagamento {
	// Data di scadenza del pagamento
	data_scadenza: string;
	// Importo del pagamento (se vale 0 la tranche di pagamento non viene inserita; se vale "auto" e la tranche è una sola viene completato automaticamente)
	importo: number;
	// Medodo di pagamento = ['not' o 'rev' o il nome del conto] ('not' indica che non è stato saldato, 'rev' che è stato stornato; se non esiste un conto con il nome specificato viene creato un nuovo conto in FIC)
	metodo: string;
	// Data del saldo dell'importo indicato [Obbligatorio se metodo!="not"]
	data_saldo?: string;
}

export interface DocNuovoExtraAnagrafica {
	// Indirizzo di posta elettronica
	mail?: string;
	// Recapito telefonico
	tel?: string;
	// Numero fax
	fax?: string;
}

export interface DocModificaRequest extends Partial<DocNuovoRequest> {
}

export interface DocEliminaRequest extends Auth {
	// Identificativo del documento da eliminare
	id?: string;
	// Identificativo permanente del documento (utilizzato per identificare il documento solo se manca il parametro "id")
	token?: string;
}

export interface DocInfoRequest {
	anno: number;
}

export interface DocInfomailRequest {
	// Identificativo del documento da inviare
	id?: string;
	// Identificativo permanente del documento da inviare (utilizzato per identificare il documento solo se manca il parametro "id")
	token?: string;
}

export interface DocInviamailRequest {
	// Identificativo del documento da inviare
	id?: string;
	// Identificativo permanente del documento da inviare (utilizzato per identificare il documento solo se manca il parametro "id")
	token?: string;
	// Indirizzo e-mail del mittente da utilizzare per l'invio (deve essere presente e configurato in Fatture In Cloud)
	mail_mittente?: string;
	// Indirizzo e-mail del destinatario
	mail_destinatario?: string;
	// Oggetto dell'e-mail
	oggetto: string;
	// Corpo del messaggio da inviare (in HTML); dimesione massima: 10kB; il campo {{allegati}} è da lasciare dove si vuole che vengano inseriti i bottoni di download dei documenti
	messaggio: string;
	// Se "true", include nel campo {allegati} un tasto che reindirizza al file PDF del documento principale
	includi_documento?: boolean;
	// Se "true", include nel campo {allegati} un tasto che reindirizza al file PDF del ddt
	invia_ddt?: boolean;
	// Se "true", include nel campo {allegati} un tasto che reindirizza alla fattura accompagnatoria allegata
	invia_fa?: boolean;
	// Se "true", include nel campo {allegati} un tasto che reindirizza al file PDF del ddt
	includi_allegato?: boolean;
	// Se "true", inserisce in cc il proprio indirizzo (associato all'account di Fatture in Cloud)
	invia_copia?: boolean;
	// Se "true", inserisce i documenti selezionati come allegati fisici (rinunciando al tracking completo dell'e-mail)
	allega_pdf?: boolean;
}
