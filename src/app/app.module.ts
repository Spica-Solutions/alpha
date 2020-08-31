import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FloatingTasklistComponent } from './floating-tasklist/floating-tasklist.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

// Angular Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { AddressBookComponent } from './address-book/address-book.component';
// import { SublistComponent } from './sublist/sublist.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingTasklistComponent,
    TopNavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,

    // Angular Components
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
