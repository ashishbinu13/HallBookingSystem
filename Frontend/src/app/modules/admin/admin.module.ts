import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { OutletComponent } from './components/outlet/outlet.component';
<<<<<<< HEAD
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

@NgModule({
  declarations: [AssociatesComponent, AddassociateComponent, OutletComponent],
  imports: [AdminRoutingModule, SharedModule],
  exports: [AssociatesComponent, AddassociateComponent],
=======
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EditassociateComponent } from './components/editassociate/editassociate.component';

@NgModule({
  declarations: [
    //  AddBookingComponent,
    AssociatesComponent,
    AddassociateComponent,
    DashboardComponent,
    SidebarComponent,
    OutletComponent,
    HeaderComponent,
    EditassociateComponent,
    // FooterComponent,
    // EditBookingComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  exports: [AssociatesComponent, AddassociateComponent, EditassociateComponent],
>>>>>>> 667085fea388b78842bce37b09e6aa19300283d6
})
export class AdminModule {}
