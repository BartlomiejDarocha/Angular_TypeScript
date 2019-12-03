import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { KlikaczComponent } from './klikacz/klikacz.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { ClickService } from './service/click.service';
import { LogService} from './service/log.service';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { RotatnionDivComponent } from './rotatnion-div/rotatnion-div.component';
import { HttpClientTestComponent } from './http-client-Test/http-client-Test.component';
import { HttpService } from './http-client-Test/http.service';
//imporotwanie by wyswietlic anuglorowe modale itp
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';

import {MaterialModule} from './material-module';
import { TestStyleComponent } from './test-style/test-style.component';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataBindingComponent,
    ChildComponent,
    LifeCycleComponent,
    KlikaczComponent,
    Klikacz2Component,
    HttpCompComponent,
    RotatnionDivComponent,
    HttpClientTestComponent,
    DialogComponent,
    TestStyleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule

  ],
  entryComponents: [DialogComponent],
  providers: [ClickService, LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
