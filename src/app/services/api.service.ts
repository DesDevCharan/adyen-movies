import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private searchMovie = new Subject<any>();
  public searchMovie$ = this.searchMovie.asObservable();

  private openModal = new Subject<any>();
  public openModal$ = this.openModal.asObservable();


  constructor(private http: HttpClient) { }

  emitSearchTerm(searchTerm: string) {
    this.searchMovie.next(searchTerm);
  }

  emitOpenModal(id: string) {
    this.openModal.next(id);
  }

  getMovies(term = 'batman') {
    return this.http.get(`https://www.omdbapi.com/?apikey=${environment.apiKey}&s=${term}`);
  }

  getMovie(id = '') {
    return this.http.get(`https://www.omdbapi.com/?apikey=${environment.apiKey}&i=${id}`);
  }
}
