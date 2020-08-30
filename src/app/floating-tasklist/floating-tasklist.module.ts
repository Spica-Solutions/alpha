import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingTasklistRoutingModule } from './floating-tasklist-routing.module';
import { FloatingTasklistComponent } from './floating-tasklist.component';


@NgModule({
    declarations: [FloatingTasklistComponent],
    imports: [
        CommonModule,
        FloatingTasklistRoutingModule
    ]
})
export class FloatingTasklistModule { }
