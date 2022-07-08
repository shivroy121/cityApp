import { Component, OnInit } from '@angular/core';
import { HttpClientService, City } from '../service/httpclient.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  user: City = new City("","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createCity(): void {
    this.httpClientService.createCity(this.user)
        .subscribe( data => {
          alert("City created successfully.");
        });
  };

}