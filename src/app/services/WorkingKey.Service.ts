import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';


@Injectable({providedIn: 'root'})
export class WorrkingKeyService {

  BaseURL = 'http://192.168.20.20:8080';

  httpOptions = {
   headers: new HttpHeaders({
      'content-type': 'application/json'
   })
 }

 uuid = uuid.v4();

  constructor(private httpClient: HttpClient) { }

  public getKey(applicationId , tranDateTime): Observable<any> {
    return this.httpClient.post(this.BaseURL + '/consumer/key', {applicationId: applicationId ,  tranDateTime: tranDateTime ,
    UUID: this.uuid } , this.httpOptions);
  }

}
