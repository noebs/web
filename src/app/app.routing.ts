import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './landing/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',

    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }]
  },
  {
    path: '**',
    redirectTo: ''
  }
]
