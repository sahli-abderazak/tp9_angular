import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { filmGuard } from './film.guard';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';

const routes: Routes = [
  {path: "films", component : FilmsComponent},
  {path: "add-film", component : AddFilmComponent,canActivate:[filmGuard]},
  { path: "", redirectTo: "films", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: "updateFilm/:id", component: UpdateFilmComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
