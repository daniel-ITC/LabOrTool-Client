import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';

@Injectable()
export class DistributorService {
  private URL: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http, private host: ConnectionService) {
    this.URL = host.LabOrTool;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    //this.headers.append('Authorization', 'Basic ' + btoa('admin:admin'));

    this.options = new RequestOptions({ headers: this.headers });
  }

  public GetDistributors = (): Observable<Response> => {
    return this.http.get(this.URL + '/distributors/')
      .catch(this.handleError);
  }

  public GetDistributor = (id: number): Observable<Response> => {
    return this.http.get(this.URL + '/distributor/' + id)
      .catch(this.handleError);
  }

  public PostDistributor = (body): Observable<Response> => {
    return this.http.post(this.URL + '/distributors/', JSON.stringify(body), this.options)
      .catch(this.handleError);
  }

  public PutDistributor = (id: number, body): Observable<Response> => {
    return this.http.put(this.URL + '/distributor/' + id, JSON.stringify(body), this.options)
      .catch(this.handleError);
  }

  public DeleteDistributor = (id: number): Observable<Response> => {
    return this.http.delete(this.URL + '/distributor/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
