import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { OutletComponent } from './components/outlet/outlet.component';

const routes: Routes = [
  {
    path: 'home',
    component: OutletComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ],
  },
  {
    path: 'bookings',
    component: OutletComponent,
    children: [
      { path: '', component: CalendarComponent },
      { path: 'bookHall', component: AddBookingComponent },
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
