import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  // base_url: string = 'http://localhost:3000';

  base_url: string = 'api';

  constructor(public http: HttpClient) {}

  getBookings() {
    return this.http.get(`${this.base_url}/booking/getBookings`);
  }
}
