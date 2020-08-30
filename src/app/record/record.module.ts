import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@NgModule({
  declarations: [
    RecordComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
