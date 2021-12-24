import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociatesRoutingModule } from './associates-routing.module';
import { UseroutletComponent } from './components/useroutlet/useroutlet.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
// import { AddBookingComponent } from 'src/app/components/add-booking/add-booking.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule } from '@angular/forms';
//import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    UseroutletComponent,
    // HeaderComponent

  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule,
    
  ]
})
export class AssociatesModule { }
