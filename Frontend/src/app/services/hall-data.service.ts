import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallDataService {

  constructor( private http:HttpClient) { }

  getHallNames()
  {
    console.log("ingethallsservice");
   return this.http.get("http://localhost:3000/hall/gethallNames");
  }
   gethallbyID(id:any)
   {
     console.log(id);
    return this.http.get("http://localhost:3000/hall/"+id);

   }

}
