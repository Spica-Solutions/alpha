import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordComponent } from './record.component';

const routes: Routes = [
  {
    path: '',
    component: RecordComponent,
    children: [
      { path: 'lead', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) },
      { path: 'customer', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule { }
