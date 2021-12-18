import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditBookingComponent } from 'src/app/components/edit-booking/edit-booking.component';
import { AddBookingComponent } from 'src/app/components/add-booking/add-booking.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
   AddBookingComponent,
    AssociatesComponent,
    AddassociateComponent,
    DashboardComponent,
    SidebarComponent,
    OutletComponent,
    HeaderComponent,
    EditBookingComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  exports: [ AssociatesComponent, AddassociateComponent],
})
export class AdminModule {}
