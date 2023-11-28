import { Component, OnInit} from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',

})
export class FilmsComponent implements OnInit {
  films? : Film[];
  
 
  constructor(private FilmService:FilmService,
    public authService: AuthService) {
    
    }

    ngOnInit():void{
      this.films = this.FilmService.listeFilm();
    }
    supprimerFilm(film :Film)
    {
      console.log(film);
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
      this.FilmService.supprimerFilm(film);
      
    }
}

