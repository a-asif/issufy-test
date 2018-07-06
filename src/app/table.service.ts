import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Http,Headers,Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Itable} from './tables/table';
import { Ideal } from './dialog/deal';
import { httpOptions,globalVariable } from './global.config';

@Injectable()

export class tableService{
	
	private _dealsurl = globalVariable.Api_Url+'dealslist';
	private _createurl = globalVariable.Api_Url+'create-deal';

	constructor(private http:HttpClient){}

	getdealslist():Observable<Itable[]>{
		return this.http.post<Itable[]>( this._dealsurl, {action:'advisor_deals'}, httpOptions)
	}

	createdeal(data):Observable<Ideal[]>{
		return this.http.post<Ideal[]>(this._createurl, data , httpOptions)
	}

}