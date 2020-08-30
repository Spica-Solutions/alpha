import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloatingTasklistComponent } from './floating-tasklist.component';

const routes: Routes = [
    { path: '', component: FloatingTasklistComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FloatingTasklistRoutingModule { }