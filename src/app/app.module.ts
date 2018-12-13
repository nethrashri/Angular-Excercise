import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MListComponent } from './m-list/m-list.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';
import { M4Component } from './m4/m4.component';
import { M5Component } from './m5/m5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatOptionModule,MatSelectModule} from '@angular/material';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import { BrowserModule }    from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    MListComponent,
    M1Component,
    M2Component,
    M3Component,
    M4Component,
    M5Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatSliderModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
