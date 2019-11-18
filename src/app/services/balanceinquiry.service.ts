import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceinquiryService {

  BaseURL = 'https://beta.soluspay.net/api';


   httpOptions = {
    headers: new HttpHeaders({
      // 'Access-Control-Request-Methods' : 'PO'
       'content-type': 'application/json'
    })
  };

  constructor(private httpclient: HttpClient) { }
  /**
   * balanceInquiry
 :any  */

 public balanceInquiry(requestbody: any): Observable<any> {
    return this.httpclient.post(this.BaseURL + '/consumer/balance', requestbody , this.httpOptions);
  }


  public cardTcard(requestbody: any): Observable<any> {
    return this.httpclient.post(this.BaseURL + '/consumer/p2p', requestbody , this.httpOptions);
  }

}
