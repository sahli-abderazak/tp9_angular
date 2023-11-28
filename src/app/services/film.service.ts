import { Genre } from '../model/genre.model';
import { Film } from './../model/film.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  films: Film[];
  film!: Film;
  genre: Genre[];
  constructor() {
    this.genre = [
      { idGenre: 1, nomGenre: 'Comedie' },
      { idGenre: 2, nomGenre: 'Action' },
      { idGenre: 3, nomGenre: 'Drama' },
    ];

    this.films = [
      {
        idFilm: 1,
        nomFilm: "That's My Boy ",
        rateFilm: 4.5,
        dateSortie: new Date('06/15/2012'),
        genre: { idGenre: 1, nomGenre: 'Comedie' },
      },
      {
        idFilm: 2,
        nomFilm: 'Bodyguard',
        rateFilm: 3,
        dateSortie: new Date('09/3/2018'),
        genre: { idGenre: 2, nomGenre: 'Action' },
      },
      {
        idFilm: 3,
        nomFilm: 'The Dictator',
        rateFilm: 5,
        dateSortie: new Date('05/16/2012'),
        genre: { idGenre: 3, nomGenre: 'Drama' },
      },
    ];
  }
  listeFilm(): Film[] {
    return this.films;
  }
  ajouterFilm(f: Film) {
    this.films.push(f);
  }
  supprimerFilm(film: Film) {
    const index = this.films.indexOf(film, 0);
    if (index > -1) {
      this.films.splice(index, 1);
    }
  }
  consulterFilm(id: number): Film {
    return (this.film = this.films.find((f) => f.idFilm == id)!);
  }
  updateFilm(f: Film) {
    this.supprimerFilm(f);
    this.ajouterFilm(f);
    this.trierFilms();
  }
  trierFilms() {
    this.films = this.films.sort((n1, n2) => {
      if (n1.idFilm! > n2.idFilm!) {
        return 1;
      }
      if (n1.idFilm! < n2.idFilm!) {
        return -1;
      }
      return 0;
    });
  }

  listeGenre(): Genre[] {
    return this.genre;
  }
  consulterGenre(id: number): Genre {
    return this.genre.find((cat) => cat.idGenre == id)!;
  }
  // rechercherParNom(nom: string): Film[] {
  //   nom = nom.toLowerCase();
  //   return this.films.filter((film) =>
  //     film.nomFilm.toLowerCase().includes(nom)
  //   );
  // }
  rechercherParGenre(idGen: number): Film[] {
    const filtredFilm=this.films.filter((film) => film.genre.idGenre == idGen);
    return filtredFilm;
  }
}
