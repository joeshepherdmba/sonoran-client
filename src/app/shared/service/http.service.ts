import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';


@Injectable()
export class HttpService {
  private baseUri: string;

  constructor(private httpClient: HttpClient) { 
    //this.baseUri = environment.baseUri;
  }

  public get<T>(resourceUrl: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUri.concat(resourceUrl));
  }

  public post<T>(resourceUrl: string, data: any): Observable<T> {
    return this.httpClient.post<T>(this.baseUri.concat(resourceUrl), data);
  }

}
