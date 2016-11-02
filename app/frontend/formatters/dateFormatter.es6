/* @flow */
import FormatterInterface from './interfaces/Formatter.es6';

export default class DateFormatter extends FormatterInterface {
	constructor(): object {
		return super();
	}

	format(data: string): date {
		let dateToFormat = new Date(data);

		let day = ('0' + dateToFormat.getDate()).slice(-2); // Will get 01 if day is 1
		let year = dateToFormat.getFullYear();
		let month = dateToFormat.getMonth();

		let formatedDate = `${month}/${day}/${year}`;

		return formatedDate;
	}
}
