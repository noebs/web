import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent }           from '../../pages/basicservices/basicservices.component';
import { GovteleComponent }            from '../../pages/gov-tele/govtele.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';
import { BalanceinquiryService } from 'app/services/balanceinquiry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from '../../services/GlobalErrorHandler ';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    BalanceInquiryComponent

  ]
  ,
  providers: [BalanceinquiryService ,   {provide: ErrorHandler, useClass: GlobalErrorHandler}],

})

export class AdminLayoutModule {}
