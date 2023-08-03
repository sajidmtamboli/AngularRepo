import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AssdatabindingComponent } from './assdatabinding/assdatabinding.component';
import { NewchildComponent } from './newchild/newchild.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AssstructuraldirectivesComponent } from './assstructuraldirectives/assstructuraldirectives.component';
import { AttributdirComponent } from './attributdir/attributdir.component';
import { CustdirDirective } from './custdir.directive';
import { AssngforComponent } from './assngfor/assngfor.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { AsssimpleformComponent } from './asssimpleform/asssimpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpleformassComponent } from './simpleformass/simpleformass.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    DatabindingComponent,
    ChildComponent,
    AssdatabindingComponent,
    NewchildComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AssstructuraldirectivesComponent,
    AttributdirComponent,
    CustdirDirective,
    AssngforComponent,
    SimpleformComponent,
    AsssimpleformComponent,
    ReactiveformComponent,
    SimpleformassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
