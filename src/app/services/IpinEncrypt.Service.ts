import { Injectable } from '@angular/core';
declare var JSEncrypt: any;

@Injectable({providedIn: 'root'})
export class IpinEncryptService {
  public  encrypt(ipin:string , publicKey:string , v4uuid:string):string{
     const jsencrypt = new JSEncrypt();

     jsencrypt.setPublicKey(publicKey);
      const data: string = jsencrypt.encrypt(v4uuid + ipin);

    return data;
  }

}
