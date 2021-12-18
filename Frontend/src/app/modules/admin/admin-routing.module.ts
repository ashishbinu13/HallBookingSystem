import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

import { EditBookingComponent } from 'src/app/components/edit-booking/edit-booking.component';
import { AddBookingComponent } from 'src/app/components/add-booking/add-booking.component';

import { AddassociateComponent } from 'src/app/modules/admin/components/addassociate/addassociate.component';
import { AssociatesComponent } from 'src/app/modules/admin/components/associates/associates.component';
import { OutletComponent } from 'src/app/modules/admin/components/outlet/outlet.component';

const routes: Routes = [
  {
    path: 'home',
    component: OutletComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: 'bookings',
    component: OutletComponent,
    children: [

      { path: '', component: CalendarComponent },
      { path: 'bookHall', component: AddBookingComponent },
      { path: 'editbooking',component:EditBookingComponent},

    ],
  },
  {
    path: 'associates',
    component: OutletComponent,
    children: [
      { path: '', component: AssociatesComponent },
      { path: 'register', component: AddassociateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
