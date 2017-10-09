import { Component } from '@angular/core';

// Import DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Define a movies property to hold array of movies
  movies: Array<any>;

  // Create instance of the DataService using dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getMovies() method defined in data.services.ts
    this._dataService.getMovies()
      .subscribe(res => this.movies = res);
  }
}
