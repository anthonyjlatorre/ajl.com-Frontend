import { Injectable } from '@angular/core';
import { EndpointsService } from './endpoints.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public endpoints : EndpointsService, public http : HttpClient) { }

  getHome(){
    return this.http.get(this.endpoints.HomeUrl).subscribe(data =>{
      console.log("ello" + data);
    });
  }

}
