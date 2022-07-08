import { Component, OnInit } from '@angular/core';
import { HttpClientService, City } from '../service/httpclient.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  citys:City[];
    
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getCity().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.citys=response;
}

deleteCity(city: City): void {
   this.httpClientService.deleteCity(city)
     .subscribe( data => {
      this.citys = this.citys.filter(u => u !== city);
   })
};


}