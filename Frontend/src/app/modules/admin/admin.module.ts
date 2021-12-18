import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
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
    
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AddBookingComponent, AssociatesComponent, AddassociateComponent],
})
export class AdminModule {}
