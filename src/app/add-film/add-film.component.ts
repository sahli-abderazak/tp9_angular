
import {Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';
import { Film } from './../model/film.model';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
 
})
export class AddFilmComponent  implements OnInit {
  ngOnInit(): void{
    this.genre = this.FilmService.listeGenre();
  }
  newFilm = new Film();
  genre! : Genre[];
  newIdgen! : number;
newGenre! : Genre;

  constructor(private FilmService : FilmService , private router: Router){}
  addFilm(){
    this.FilmService.ajouterFilm(this.newFilm);
    this.newGenre =
this.FilmService.consulterGenre(this.newIdgen);
this.newFilm.genre = this.newGenre;
    this.router.navigate(["films"])
    }
    
}
