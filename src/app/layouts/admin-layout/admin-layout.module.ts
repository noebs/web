import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent }           from '../../pages/basicservices/basicservices.component';
import { CradTransComponent } from '../../pages/crad-trans/crad-trans.component';
import { ElectricityComponent } from '../../pages/electricity/electricity.component';


import { GovteleComponent }            from '../../pages/gov-tele/govtele.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';
import { NoebsApiService } from 'app/services/NoebsApi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from '../../services/GlobalErrorHandler ';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IpinEncryptService } from 'app/services/IpinEncrypt.Service';
import { WorrkingKeyService } from 'app/services/WorkingKey.Service';
import { TopUpComponent } from 'app/pages/top-up/top-up.component';
import { BillInquiryComponent } from 'app/pages/bill-inquiry/bill-inquiry.component';
import { BillPaymentComponent } from 'app/pages/bill-payment/bill-payment.component';
import { MoheComponent } from 'app/pages/mohe/mohe.component';
import { MoheArabComponent } from 'app/pages/mohe-arab/mohe-arab.component';
import { E15Component } from 'app/pages/e15/e15.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ModalModule.forRoot() ,
    NgxSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    BasicservicesComponent,
    GovteleComponent,
    BalanceInquiryComponent ,
    CradTransComponent,
    ElectricityComponent,
    TopUpComponent,
    BillInquiryComponent,
    BillPaymentComponent ,
    MoheComponent,
    MoheArabComponent,
    E15Component
  ]
  ,
  providers: [NoebsApiService ,  WorrkingKeyService , IpinEncryptService ,   {provide: ErrorHandler, useClass: GlobalErrorHandler}],

})

export class AdminLayoutModule {}
