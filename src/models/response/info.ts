import { GenericSuccess } from "./success";

export interface Info extends GenericSuccess {
	messaggio: string;
	limite_breve: string;
	limite_medio: string;
	limite_lungo: string;
}
