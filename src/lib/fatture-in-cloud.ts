import { richiesta } from "../routes/richiesta";
import { anagrafica } from "../routes/anagrafica";
import { documenti } from "../routes/documenti";
import { prodotti } from "../routes/prodotti";
import { acquisti } from "../routes/acquisti";
import { corrispettivi } from "../routes/corrispettivi";
import { magazzino } from "../routes/magazzino";
import { mail } from "../routes/mail";
import { info } from "../routes/info";
import { Auth } from "../models/request/auth";

export class FattureInCloud {

	readonly #richiesta = richiesta(this.auth);
	readonly #anagrafica = anagrafica(this.auth);
	readonly #prodotti = prodotti(this.auth);
	readonly #documenti = documenti(this.auth);
	readonly #acquisti = acquisti(this.auth);
	readonly #corrispettivi = corrispettivi(this.auth);
	readonly #magazzino = magazzino(this.auth);
	readonly #mail = mail(this.auth);
	readonly #info = info(this.auth);

	constructor(private auth: Required<Auth>) {
	}

	get richiesta() { return this.#richiesta };
	get anagrafica() { return this.#anagrafica };
	get prodotti() { return this.#prodotti };
	get documenti() { return this.#documenti };
	get acquisti() { return this.#acquisti };
	get corrispettivi() { return this.#corrispettivi };
	get magazzino() { return this.#magazzino };
	get mail() { return this.#mail };
	get info() { return this.#info };

}
