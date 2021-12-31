import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { OutletComponent } from './components/outlet/outlet.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';
// //import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
// @NgModule({
//   declarations: [
//     //  AddBookingComponent,
//     AssociatesComponent,
//     AddassociateComponent,
//     DashboardComponent,
//    SidebarComponent,
//     OutletComponent,
//     HeaderComponent,
//     FooterComponent,
//     // EditBookingComponent
//   ],
//   imports: [CommonModule, AdminRoutingModule, FormsModule],
import { SharedModule } from '../shared/shared.module';
import { EditassociateComponent } from './components/editassociate/editassociate.component';
@NgModule({
  declarations: [AssociatesComponent, AddassociateComponent, OutletComponent, EditassociateComponent],
  imports: [AdminRoutingModule, SharedModule],
  exports: [AssociatesComponent, AddassociateComponent, EditassociateComponent],
})
export class AdminModule {}
