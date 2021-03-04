import { richiesta } from "../routes/richiesta";
import { anagrafica } from "../routes/anagrafica";
import { documenti } from "../routes/documenti";
import { prodotti } from "../routes/prodotti";
import { acquisti } from "../routes/acquisti";

export class FattureInCloud {

	richiesta = richiesta;
	anagrafica = anagrafica;
	prodotti = prodotti;
	documenti = documenti;
	acquisti = acquisti;

}
