import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from 'src/app/modules/shared/components/add-booking/add-booking.component';
import { CalendarComponent } from 'src/app/modules/shared/components/calendar/calendar.component';
import { DashboardComponent } from 'src/app/modules/shared/components/dashboard/dashboard.component';
import { EditBookingComponent } from '../shared/components/edit-booking/edit-booking.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { UseroutletComponent } from './components/useroutlet/useroutlet.component';
const routes: Routes = [
  {
    path: '',
    component: UseroutletComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'home', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'bookHall', component: AddBookingComponent },
      {path:'editbooking',component:EditBookingComponent},
      {path:'calendar', component :CalendarComponent},

    ],
  },
  // {
  //   path: 'bookings',
  //   component: UseroutletComponent,
  //   children: [
  //     { path: '', component: CalendarComponent },
  //     { path: 'bookHall', component: AddBookingComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociatesRoutingModule {}
