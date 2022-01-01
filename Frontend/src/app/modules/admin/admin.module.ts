import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { SharedModule } from '../shared/shared.module';
import { EditassociateComponent } from './components/editassociate/editassociate.component';

@NgModule({
  declarations: [
    //  AddBookingComponent,
    AssociatesComponent,
    AddassociateComponent,
    OutletComponent,
    EditassociateComponent,
    // EditBookingComponent
  ],
  imports: [AdminRoutingModule, SharedModule],
  exports: [AssociatesComponent, AddassociateComponent, EditassociateComponent],
})
export class AdminModule {}
