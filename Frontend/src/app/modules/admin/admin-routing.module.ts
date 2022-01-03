import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from 'src/app/modules/shared/components/calendar/calendar.component';
import { DashboardComponent } from 'src/app/modules/shared/components/dashboard/dashboard.component';
import { AddBookingComponent } from 'src/app/modules/shared/components/add-booking/add-booking.component';
import { EditBookingComponent } from 'src/app/modules/shared/components/edit-booking/edit-booking.component';
import { ProfileComponent } from 'src/app/modules/shared/components/profile/profile.component';

import { AddassociateComponent } from './components/addassociate/addassociate.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { EditassociateComponent } from './components/editassociate/editassociate.component';
// import { EditBookingComponent } from 'src/app/components/edit-booking/edit-booking.component';
// import { AddBookingComponent } from 'src/app/components/add-booking/add-booking.component';

// import { AddassociateComponent } from 'src/app/modules/admin/components/addassociate/addassociate.component';
// import { AssociatesComponent } from 'src/app/modules/admin/components/associates/associates.component';
// import { OutletComponent } from 'src/app/modules/admin/components/outlet/outlet.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      {path: '', component: DashboardComponent },
      {path: 'home', component: DashboardComponent },
      {path: 'profile', component: ProfileComponent },
      {path:'bookHall', component :AddBookingComponent},
      {path:'calendar', component :CalendarComponent},
      {path:'associates',component:AssociatesComponent},
      {path:'editbooking',component:EditBookingComponent},

   ],
  },
  // {
  //   path: 'bookings',
  //   component: OutletComponent,
  //   children: [
  //     // { path: 'calendar', component: CalendarComponent },
     // { path: ''bookHall'', component: AddBookingComponent },
     // { path: 'editbooking', component: EditBookingComponent },
  //   ],
  // },
  {
    path: 'associates',
    component: OutletComponent,
    children: [
      { path: '', component: AssociatesComponent },
      { path: 'register', component: AddassociateComponent },
      { path: 'edit', component: EditassociateComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
