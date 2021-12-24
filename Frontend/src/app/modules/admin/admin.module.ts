import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [AssociatesComponent, AddassociateComponent, OutletComponent],
  imports: [AdminRoutingModule, SharedModule],
  exports: [AssociatesComponent, AddassociateComponent],
})
export class AdminModule {}
