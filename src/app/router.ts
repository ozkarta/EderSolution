import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';


import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


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



const routes: Routes = [
     {
                path: '',
                component: CatalogComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'colaboration',
                component: ColaborationComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'security',
                component: SecurityComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'wireless',
                component: WirelessComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'catalog',
                component: CatalogComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'sollutions',
                component: SollutionsComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'modules/module1',
                component: ModulesModule1Component
                //canActivate: [VisitorGuard]
    },
    {
                path: 'modules/module2',
                component: ModulesModule2Component
                //canActivate: [VisitorGuard]
    },
    {
                path: 'modules/module3/sub1',
                component: ModulesModule3Sub1Component
                //canActivate: [VisitorGuard]
    },
    {
                path: 'modules/module3/sub2',
                component: ModulesModule3Sub2Component
                //canActivate: [VisitorGuard]
    },
    {
                path: 'important',
                component: ImportantComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'warning',
                component: WarningsComponent
                //canActivate: [VisitorGuard]
    },
    {
                path: 'information',
                component: InformationComponent
                //canActivate: [VisitorGuard]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }