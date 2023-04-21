import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { MainModuleComponent } from './main-module.component';

@NgModule({
  declarations: [
    DashboardComponent,MainModuleComponent
  ],
  imports: [
    CommonModule,SharedModule,MainModuleRoutingModule
  ]
})

export class MainModuleModule { }
