import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
    constructor(private http: Http) { }

    checkWeather(cityName: string) {
        var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8d24ce30b3f101064f325eb204781c18&q=";
        url += cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson)
            .catch(err => console.log(err));
    }
}