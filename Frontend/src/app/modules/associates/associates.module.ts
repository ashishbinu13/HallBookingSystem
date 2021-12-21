import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';

import { UseroutletComponent } from './components/useroutlet/useroutlet.component';


@NgModule({
  declarations: [
    UseroutletComponent,
  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule
  ]
})
export class AssociatesModule { }
