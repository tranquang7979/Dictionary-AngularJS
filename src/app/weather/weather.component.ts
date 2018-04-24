import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  cityName: string;
  result: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }

  checkWeather(){
    this.result = "Loading ...";
    this.weatherService.checkWeather(this.cityName)
    .then(data => {
      console.log(data);
      this.result = data.name + ' is now ' + data.main.temp;
    })
    .catch(err => {
      this.result = err + ' ';
    });
  }

}
