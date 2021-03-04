import { richiesta } from "../routes/richiesta";
import { anagrafica } from "../routes/anagrafica";
import { documenti } from "../routes/documenti";
import { prodotti } from "../routes/prodotti";
import { acquisti } from "../routes/acquisti";
import { corrispettivi } from "../routes/corrispettivi";

export class FattureInCloud {

	richiesta = richiesta;
	anagrafica = anagrafica;
	prodotti = prodotti;
	documenti = documenti;
	acquisti = acquisti;
	corrispettivi = corrispettivi;

}
