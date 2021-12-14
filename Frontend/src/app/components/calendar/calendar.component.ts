import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import { CalendarService } from 'src/app/services/calendar.service';
import { BookingModel } from './booking.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  bookingDetails = [];
  Events = new Array();
  eventsTest = [
    {
      title: 'title',
      start: '2021-12-15T14:10:00.000Z',
      end: '2021-12-15T15:10:00.000Z',
      color: 'yellow',
      allDay: false,
    },
  ];
  calendarOptions!: CalendarOptions;

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }

  constructor(
    private httpClient: HttpClient,
    private calService: CalendarService
  ) {}

  ngOnInit(): void {
    this.getDetails();
    this.calendarOptions = {
      initialView: 'dayGridMonth',
    };
  }

  getDetails() {
    // get events from database
    this.calService.getBookings().subscribe((bookingDetails) => {
      this.bookingDetails = JSON.parse(JSON.stringify(bookingDetails));

      this.bookingDetails.forEach((element: BookingModel) => {
        // vaiable to store event details in required format
        var eventItem = {
          title: '',
          start: '',
          end: '',
          color: '',
          allDay: false,
        };
        var title = `${element.employeeName} : ${element.hallName}`;
        var date = element.bookingDate.split('T')[0];
        var start = `${date}T${element.startTime}`;
        var end = `${date}T${element.endTime}`;
        eventItem.title = title;
        eventItem.start = new Date(start).toISOString();
        eventItem.end = new Date(end).toISOString();
        eventItem.allDay = false;

        // add event to event array
        this.Events.push(eventItem);
      });

      // full calendar options
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true,
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
        headerToolbar: {
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,timeGridlist',
        },
      };
    });
  }
}
