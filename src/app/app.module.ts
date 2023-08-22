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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { HttpClientModule } from '@angular/common/http';
import { AssreactiveformComponent } from './assreactiveform/assreactiveform.component';
import { ReactAssignComponent } from './react-assign/react-assign.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { Asscomp3Component } from './asscomp3/asscomp3.component';
import { Filterpipe1Pipe } from './filterpipe1.pipe';

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
    SimpleformassComponent,
    Comp1Component,
    Comp2Component,
    AssreactiveformComponent,
    ReactAssignComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent,
    Asscomp3Component,
    Filterpipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
