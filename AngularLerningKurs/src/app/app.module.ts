import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { KlikaczComponent } from './klikacz/klikacz.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataBindingComponent,
    ChildComponent,
    LifeCycleComponent,
    KlikaczComponent,
    Klikacz2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
