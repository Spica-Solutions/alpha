import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FloatingTasklistComponent } from './floating-tasklist/floating-tasklist.component';
// import { PageHeaderComponent } from './page-header/page-header.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

// Angular Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FloatingTasklistComponent,
    // PageHeaderComponent,
    TopNavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Components
    MatButtonModule,
    // MatButtonToggleModule,
    // MatFormFieldModule,
    MatIconModule,
    MatMenuModule
    // MatStepperModule,
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
