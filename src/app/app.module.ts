import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormP2Component } from './form-p2/form-p2.component';
import { TableP2Component } from './table-p2/table-p2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    FormP2Component,
    TableP2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
