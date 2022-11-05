import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  movies: Movie[] =[];
  id: any;
 

  constructor(public movieService: MovieService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

}
