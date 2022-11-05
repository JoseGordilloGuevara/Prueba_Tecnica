import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] =[];
  identificador = "";

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  deleteMovie(movie: Movie){
    if(confirm("¿Desea eliminar este elemento?")){
      this.movieService.deleteMovies(movie);
    }
  }
}

