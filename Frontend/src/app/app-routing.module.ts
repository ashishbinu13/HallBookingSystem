import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddBookingComponent } from './modules/admin/components/add-booking/add-booking.component';

const routes: Routes = [{path:'', component:LoginComponent},
{path:'home', component:DashboardComponent},
{path:'addbooking', component:AddBookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
