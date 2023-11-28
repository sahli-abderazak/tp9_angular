import { Component, OnInit } from '@angular/core'; 
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit { // Utilisez OnInit ici

  // nomFilm!: string;
  films!: Film[];
  // allFilms! : Film[];
searchTerm!: string;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.films = this.filmService.listeFilm();
    }

  // rechercherFilm() {
  //   const filmsTrouves = this.filmService.rechercherParNom(this.nomFilm);
  //   this.films = filmsTrouves;
  //   console.log(filmsTrouves);
  // }
  // onKeyUp(filterText : string){
  //   this.films = this.allFilms.filter(item =>
  //   item.nomFilm.toLowerCase().includes(filterText));
  //   }
}

