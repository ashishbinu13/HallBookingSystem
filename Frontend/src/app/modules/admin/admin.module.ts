import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBookingComponent,
    AssociatesComponent,
    AddassociateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
