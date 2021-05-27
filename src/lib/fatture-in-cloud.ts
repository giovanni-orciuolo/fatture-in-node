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

	private readonly _richiesta = richiesta(this.auth);
	private readonly _anagrafica = anagrafica(this.auth);
	private readonly _prodotti = prodotti(this.auth);
	private readonly _documenti = documenti(this.auth);
	private readonly _acquisti = acquisti(this.auth);
	private readonly _corrispettivi = corrispettivi(this.auth);
	private readonly _magazzino = magazzino(this.auth);
	private readonly _mail = mail(this.auth);
	private readonly _info = info(this.auth);

	constructor(private auth: Required<Auth>) {
	}

	get richiesta() { return this._richiesta };
	get anagrafica() { return this._anagrafica };
	get prodotti() { return this._prodotti };
	get documenti() { return this._documenti };
	get acquisti() { return this._acquisti };
	get corrispettivi() { return this._corrispettivi };
	get magazzino() { return this._magazzino };
	get mail() { return this._mail };
	get info() { return this._info };

}
