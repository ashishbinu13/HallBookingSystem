import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociatesRoutingModule } from './associates-routing.module';
import { UseroutletComponent } from './components/useroutlet/useroutlet.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UseroutletComponent],
  imports: [CommonModule, AssociatesRoutingModule, SharedModule],
})
export class AssociatesModule {}
