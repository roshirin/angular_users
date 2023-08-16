import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from 'src/types/Country';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(
    private http: HttpClient,
  ) { }

  getCountries() {
    return this.http.get<Country[]>(`${API_URL}/region/europe?fields=name,population,capital`);
  }
}
