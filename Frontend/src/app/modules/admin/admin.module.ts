import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { OutletComponent } from './components/outlet/outlet.component';
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
})
export class AdminModule {}
