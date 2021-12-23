import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';

import { UseroutletComponent } from './components/useroutlet/useroutlet.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    UseroutletComponent
    // HeaderComponent

  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule
  ]
})
export class AssociatesModule { }
