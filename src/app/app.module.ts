import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRouter } from './router';

import { CatalogComponent } from './components/catalog.component';
import { ColaborationComponent } from './components/colaboration.component';
import { ImportantComponent } from './components/important';
import { InformationComponent } from './components/information';
import { ModulesModule1Component } from './components/modules-module1.component';
import { ModulesModule2Component } from './components/modules-module2.component';
import { ModulesModule3Sub1Component } from './components/modules-module3-sub1.component';
import { ModulesModule3Sub2Component } from './components/modules-module3-sub2.component';
import { SecurityComponent } from './components/secutiry.component';
import { SollutionsComponent } from './components/sollutions.component';
import {  WarningsComponent } from './components/warning';
import { WirelessComponent } from './components/wireless.component';




@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ColaborationComponent,
    ImportantComponent,
    InformationComponent,
    ModulesModule1Component,
    ModulesModule2Component,
    ModulesModule3Sub1Component,
    ModulesModule3Sub2Component,
    SecurityComponent,
    SollutionsComponent,
    WarningsComponent,
    WirelessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
