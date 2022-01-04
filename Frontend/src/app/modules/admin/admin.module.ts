import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { EditassociateComponent } from './components/editassociate/editassociate.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AssociatesComponent,
    AddassociateComponent,
    EditassociateComponent,
    OutletComponent,
  ],
  imports: [AdminRoutingModule, SharedModule, NgxPaginationModule],
  exports: [AssociatesComponent, AddassociateComponent, EditassociateComponent],
})
export class AdminModule {}
