import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // base_url: string = 'api';

  base_url: string = 'http://localhost:3000';
  constructor(public http: HttpClient) {}
}
