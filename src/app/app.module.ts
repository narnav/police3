import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PoppComponent } from './components/popp/popp.component/components/popp';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MaterialExampleModule} from './material.module';
import { PoppComponent } from './components/popp/popp.component';
import { FormsModule } from '@angular/forms';
import { DialogAnimationsExampleDialog } from './components/dialog-animations-example/dialog-animations-example.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,PoppComponent,DialogAnimationsExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialExampleModule,FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
