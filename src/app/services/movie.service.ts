import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];
  moviesFavSubject: any;

  constructor() { 
    this.movies = [];
  }

  getMovies(){
    if(localStorage.getItem('movies') === null){
      return this.movies;
    }  else {
      this.movies = JSON.parse(localStorage.getItem('movies')!);
      return this.movies;
    }
  }

  addMovies(movie: Movie){
    this.movies.push(movie);
    let movies: Movie[] = [];
    if(localStorage.getItem('movies') === null){
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    } else {
      movies = JSON.parse(localStorage.getItem('movies')!);
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

  deleteMovies(movie: Movie){
    for(let i=0; i < this.movies.length; i++){
      if(movie == this.movies[i]) {
        this.movies.splice(i, 1);
        localStorage.setItem('movies', JSON.stringify(this.movies));
      }
    }
  }
}
