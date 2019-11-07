import { Component, OnInit } from '@angular/core';
import { WorrkingKeyService } from 'app/services/WorkingKey.Service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  today = moment().format('YYMMDDhhmmss');
  applicationId = 'ACTSCon';


  constructor(private wokingKey: WorrkingKeyService ,  private spinner: NgxSpinnerService){}

  ngOnInit() {
    console.log('Fetching Key ...')
    this.spinner.show();
    this.wokingKey.getKey(this.applicationId , this.today)
    .subscribe(
      (response)=> {

        this.spinner.hide();
        localStorage.setItem('pubKey' , response.ebs_response.pubKeyValue)
        console.log(response.ebs_response.pubKeyValue );
      } ,
      (err) => {
        this.spinner.hide();
        console.log(err)
      }
        );
  }

}
