import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent }           from '../../pages/basicservices/basicservices.component';
import { GovteleComponent }            from '../../pages/gov-tele/govtele.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';
import { BalanceinquiryService } from 'app/services/balanceinquiry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule
  ],
  declarations: [
    DashboardComponent, 
    BasicservicesComponent,
    GovteleComponent,
    BalanceInquiryComponent
    
  ]
  ,
  providers: [BalanceinquiryService],

})

export class AdminLayoutModule {}
