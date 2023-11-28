import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import {  Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  genre! : Genre[];
updatedGenId! : number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.genre = this.filmService.listeGenre();
    this.currentFilm = this.filmService.consulterFilm(
      this.activatedRoute.snapshot.params['id']
    );
     this.updatedGenId=this.currentFilm.genre.idGenre;
    console.log(this.currentFilm);
  }
  UpdateFilm() {
    this.currentFilm.genre=this.filmService.consulterGenre(this.updatedGenId);
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }
}
