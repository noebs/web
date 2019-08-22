import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent }           from '../../pages/basicservices/basicservices.component';
import { GovteleComponent }            from '../../pages/gov-tele/govtele.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent, 
    BasicservicesComponent,
    GovteleComponent,
    BalanceInquiryComponent
    
  ]
})

export class AdminLayoutModule {}
