import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceinquiryService {

  BaseURL = 'https://beta.soluspay.net';
  
  constructor(private httpclient:HttpClient) { }

  
  
  /**
   * balanceInquiry
 :any  */
  
 public balanceInquiry(requestbody:any):any {
 //  this.httpHeader.append('Content-Type' , 'application/json')
    this.httpclient.post('', requestbody );
    return 0;
  }
  
}
