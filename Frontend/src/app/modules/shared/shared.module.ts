import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgxPaginationModule } from 'ngx-pagination';
//fullcalendar
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';

FullCalendarModule.registerPlugins([
  timeGridPlugin,
  interactionPlugin,
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    SidebarComponent,
    AddBookingComponent,
    CalendarComponent,
    DashboardComponent,
    EditBookingComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
  ],

  imports: [
    RouterModule,
    FormsModule,
    FullCalendarModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    AddBookingComponent,
    CalendarComponent,
    DashboardComponent,
    EditBookingComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
