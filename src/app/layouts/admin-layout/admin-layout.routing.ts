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
import { E15Component } from 'app/pages/e15/e15.component';
import { CustomsComponent } from 'app/pages/customs/customs.component';
import { IpinComponent } from 'app/pages/ipin/ipin.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',     redirectTo : 'basic-services' },
    { path: 'basic-services',          component: BasicservicesComponent },
    { path: 'gov-tele',           component: GovteleComponent } ,
    {path: 'balance-inquiry' , component: BalanceInquiryComponent},
    {path: 'card-tran' , component: CradTransComponent},
    {path: 'electricity' , component: ElectricityComponent},
    {path: 'topUp' , component: TopUpComponent},
    {path: 'bill-inq' , component: BillInquiryComponent},
    {path: 'bill-pay' , component: BillPaymentComponent},
    {path: 'mohe' , component: MoheComponent},
    {path: 'mohe-arab' , component: MoheArabComponent},
    {path: 'e15' , component: E15Component},
    {path: 'customs' , component: CustomsComponent},
    {path: 'ipin' , component: IpinComponent}
];
