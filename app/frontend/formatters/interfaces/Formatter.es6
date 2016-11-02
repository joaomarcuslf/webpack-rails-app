/* @flow */

export default class Formatter {
	constructor(): object {
		this.format = this.format.bind(this);
		return this;
	}

	format() {}
}
