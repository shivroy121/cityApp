import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class City{
  constructor(
    public cityId:string,
    public name:string,
    public photo:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  getCity()
  {
    return this.httpClient.get<City[]>('http://localhost:8080/cities');
  }

  public deleteCity(city) {
    return this.httpClient.delete<City>("http://localhost:8080/cities" + "/"+ city.cityId);
  }

  public createCity(city) {
    return this.httpClient.post<City>("http://localhost:8080/cities", city);
  }
}