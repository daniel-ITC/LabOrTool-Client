import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class ProductionService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountProductions = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/productions/count/', this.options)
      .catch(this.handleError);
  }

  public GetProductions = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/productions/', this.options)
      .catch(this.handleError);
  }

  public GetProduction = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/productions/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostProduction = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/productions/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutProduction = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/productions/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteProduction = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/productions/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchProductions = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/productions/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
