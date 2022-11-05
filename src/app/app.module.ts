import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { FormMoviesComponent } from './components/form-movies/form-movies.component';
import { MovieService } from './services/movie.service';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: ListMoviesComponent},
  {path: 'agregar', component: FormMoviesComponent},
  {path: 'pelicula/:id', component: CardMovieComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMoviesComponent,
    FormMoviesComponent,
    CardMovieComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
