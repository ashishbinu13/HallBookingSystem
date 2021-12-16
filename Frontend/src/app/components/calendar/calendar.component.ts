import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  Events = [
    {
      title: 'event name',
      start: '2021-12-11T12:00:00',
      end: '2021-12-11T13:00:00',
      allDay: false,
      color: 'red',
    },
    {
      title: 'event name2',
      start: '2021-12-11T12:30:00',
      end: '2021-12-11T13:30:00',
      allDay: false,
    },
    {
      title: 'event name2',
      start: '2021-12-11T12:30:00',
      end: '2021-12-11T13:30:00',
      allDay: false,
    },
    {
      title: 'event name2',
      start: '2021-12-11T12:30:00',
      end: '2021-12-11T13:30:00',
      allDay: false,
    },
    {
      title: 'event name2',
      start: '2021-12-11T12:30:00',
      end: '2021-12-11T13:30:00',
      allDay: false,
    },
    {
      title: 'event name2',
      start: '2021-12-11T12:30:00',
      end: '2021-12-11T13:30:00',
      allDay: false,
    },
  ];
  calendarOptions!: CalendarOptions;

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
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
  }
}
