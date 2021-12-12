import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
<<<<<<< HEAD


@NgModule({
  declarations: [
    AddBookingComponent
=======
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';

@NgModule({
  declarations: [
    AddBookingComponent,
    AssociatesComponent,
    AddassociateComponent
>>>>>>> 44d62f62c3ead6c641c435133fbc0ff48c47cc76
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
