import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
declare var JSEncrypt: any;

@Injectable({providedIn: 'root'})
export class IpinEncryptService {
   V4uuid = uuid.v4();
  public  encrypt(ipin:string , publicKey:string):string{
     const jsencrypt = new JSEncrypt();
     console.log(ipin)
     console.log(publicKey)
     console.log(this.V4uuid);
     jsencrypt.setPublicKey(publicKey);
      const data: string = jsencrypt.encrypt(this.V4uuid + ipin);
      console.log(data)
    return data;
  }

}
