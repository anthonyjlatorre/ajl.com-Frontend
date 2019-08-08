import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  public readonly BaseUrl = "https://localhost:8080";

  public readonly HomeUrl = this.BaseUrl + "/home";





}
