import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddBookingComponent } from './modules/admin/components/add-booking/add-booking.component';
import { AddassociateComponent } from './modules/admin/components/addassociate/addassociate.component';
import { AssociatesComponent } from './modules/admin/components/associates/associates.component';

const routes: Routes = [{path:'', component:LoginComponent},
{path:'home', component:DashboardComponent},
{path:'home/associates', component:AssociatesComponent},
{path:'home/associates/addassociate', component:AddassociateComponent},
{path:'addbooking', component:AddBookingComponent},
{path:'home/bookhall', component:AddBookingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
