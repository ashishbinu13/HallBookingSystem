import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeptDataService {
  base_url: string = 'http://localhost:3000';

  // base_url: string = 'api';

  constructor( private http:HttpClient) { }

  getDeptNames()
  {
    console.log("ingetdeptservice");
   return this.http.get("http://localhost:3000/dept/getdeptNames");
  }
   getdeptbyID(id:any)
   {
     console.log(id);
    return this.http.get("http://localhost:3000/dept/"+id);

   }
  }