import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { BasicservicesComponent } from '../../pages/basicservices/basicservices.component';
import { GovteleComponent } from '../../pages/gov-tele/govtele.component';
import { BalanceInquiryComponent } from 'app/pages/balance-inquiry/balance-inquiry.component';
import { CradTransComponent } from 'app/pages/crad-trans/crad-trans.component';
import { ElectricityComponent } from 'app/pages/electricity/electricity.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'basic-servces',          component: BasicservicesComponent },
    { path: 'gov-tele',           component: GovteleComponent } ,
    {path: 'balance-inquiry' , component: BalanceInquiryComponent},
    {path: 'card-tran' , component: CradTransComponent},
    {path: 'electricity ' , component: ElectricityComponent}
];
