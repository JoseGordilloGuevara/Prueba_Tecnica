import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit {

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
  }

  addMovie(newTitle: HTMLInputElement, newDate: HTMLInputElement, newDescription: HTMLTextAreaElement, newImage: HTMLInputElement) {
    this.movieService.addMovies({
      title: newTitle.value,
      date: newDate.value,
      description: newDescription.value,
      image: newImage.value,
      
    });
    newTitle.value = '';
    newDate.value = '';
    newDescription.value = '';
    newImage.value = '';
    newTitle.focus();
    return false;
  }

}
