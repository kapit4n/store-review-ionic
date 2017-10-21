import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the StockServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockServiceProvider {

	/*constructor(public http: Http) {
	  console.log('Hello StockServiceProvider Provider');
	}*/
	data: Array<any>;
	savedData: any;
	uri = "http://localhost:3000/api/products/getstock";

	constructor(public http: Http) {
		this.data = [];
	}

	load() {
		// don't have the data yet
		return new Promise(resolve => {
			// We're using Angular HTTP provider to request the data,
			// then on the response, it'll map the JSON data to a parsed JS object.
			// Next, we process the data and resolve the promise with the new data.
			this.http.get(this.uri)
				.map(res => res.json())
				.subscribe(data => {
					// we've got back the raw data, now generate the core schedule data
					// and save the data for later reference
					this.data = data.stocks;
					console.log(this.data);
					resolve(this.data);
				});
		});
	}

	save(todoBuy) {
		let body = JSON.stringify(todoBuy);
		return this.http.post(this.uri, body)
			.map(res => res.json())
			.catch(this.handleErrorObservable);
	}

	submitTodoBuy(todoBuy, id) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let body = JSON.stringify(todoBuy);
		return this.http.put(this.uri + "/" + id, body, headers)
			.map(res => res.json())
			.catch(this.handleErrorObservable);
	}

	private handleErrorObservable(error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
	}
}
