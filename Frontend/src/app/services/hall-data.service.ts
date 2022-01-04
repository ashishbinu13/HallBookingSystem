import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HallDataService {
  // base_url: string = 'http://localhost:3000';

  base_url: string = 'api';

  constructor(private http: HttpClient) {}

  getHallNames() {
    console.log('ingethallsservice');
    return this.http.get(`${this.base_url}/hall/gethallNames`);
  }
  gethallbyID(id: any) {
    console.log(id);
    return this.http.get(`${this.base_url}/hall/${id}`);
  }
}
