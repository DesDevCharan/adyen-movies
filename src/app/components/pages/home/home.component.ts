import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies = [];
  term = 'batman';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.searchMovie$.subscribe((term: string) => {
      this.term = term?.toLowerCase();
      this.getMovies(term);
    });
    this.getMovies('batman');
  }

  getMovies(search: string) {
    this.api.getMovies(search).subscribe((resp: any) => {
      this.movies = resp.Search;
    });
  }

}
