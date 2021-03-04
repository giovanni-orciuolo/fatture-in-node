import { call } from "./route";
import { MailListaRequest } from "../models/request/mail";
import { MailListaResponse } from "../models/response/mail";
import { Auth } from "../models/request/auth";

export const mail = (auth: Required<Auth>) => ({
	/**
	 * Restituisce la lista contenente le mail ordinate per data, dalla più recente alla più vecchia.
	 * I risultati possono essere filtrati per mittente, destinatario, contenuto, data e stato e vengono
	 * organizzati in pagine per evitare risposte troppo pesanti (50 risultati per pagina).
	 */
	lista: (req: MailListaRequest) => call<MailListaResponse>(`/mail/lista`, { ...auth, ...req }),
});
