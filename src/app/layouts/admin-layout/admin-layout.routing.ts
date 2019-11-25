import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent } from '../../pages/basicservices/basicservices.component';
import { GovteleComponent } from '../../pages/gov-tele/govtele.component';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';
import { CradTransComponent } from 'app/pages/crad-trans/crad-trans.component';
import { ElectricityComponent } from 'app/pages/electricity/electricity.component';
import { TopUpComponent } from 'app/pages/top-up/top-up.component';
import { BillInquiryComponent } from 'app/pages/bill-inquiry/bill-inquiry.component';
import { BillPaymentComponent } from 'app/pages/bill-payment/bill-payment.component';
import { MoheComponent } from 'app/pages/mohe/mohe.component';
import { MoheArabComponent } from 'app/pages/mohe-arab/mohe-arab.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'basic-servces',          component: BasicservicesComponent },
    { path: 'gov-tele',           component: GovteleComponent } ,
    {path: 'balance-inquiry' , component: BalanceInquiryComponent},
    {path: 'card-tran' , component: CradTransComponent},
    {path: 'electricity' , component: ElectricityComponent},
    {path: 'topUp' , component: TopUpComponent},
    {path: 'bill-inq' , component: BillInquiryComponent},
    {path: 'bill-pay' , component: BillPaymentComponent},
    {path: 'mohe' , component: MoheComponent},
    {path: 'mohe-arab' , component: MoheArabComponent}




];
