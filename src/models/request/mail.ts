import { Auth } from "./auth";
import { RequestPagination } from "./pagination";

export interface MailListaRequest extends Auth, RequestPagination {
	// Restringe la ricerca alle mail che contengono questa stringa nell'oggetto o nel messaggio
	filtro?: string;
	// Restringe la ricerca alle mail che contengono questa stringa nel nome o indirizzo del destinatario
	destinatario?: string;
	// Restringe la ricerca alle mail che contengono questa stringa nel nome o indirizzo del mittente
	mittente?: string;
	// Restituisce solo mail che si trovano in questo stato = ['in_coda' o 'in_corso' o 'inviato' o 'fallito']
	stato?: string;
	// Restituisce solo mail successive o corrispondenti a questa data
	data_inizio?: string;
	// Restituisce solo mail antecedenti o corrispondenti a questa data
	data_fine?: string;
}
