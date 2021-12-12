import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// fullcalendar
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([
  timeGridPlugin,
  interactionPlugin,
  dayGridPlugin,
]);
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookingComponent } from './modules/admin/components/add-booking/add-booking.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, AddBookingComponent, CalendarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
