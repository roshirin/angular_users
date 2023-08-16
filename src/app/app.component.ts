import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular_user_app';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.logCountriesOnStart();
  }

  logCountriesOnStart() {
    this.countriesService.getCountries().subscribe({
      next: (countries) => {
        console.log('European countries, population and capitals', countries);
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }
}
