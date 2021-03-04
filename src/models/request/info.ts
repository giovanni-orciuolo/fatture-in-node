import { Auth } from "./auth";

export interface InfoListaRequest extends Auth {
	// Lista delle informazioni desiderate
	campi?: Array<string>;
}
