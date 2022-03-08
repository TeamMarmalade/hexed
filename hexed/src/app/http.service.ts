import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(route: string) {
    return this.httpClient.get(this.apiserver + route);
  }
}
