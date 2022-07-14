import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from "./components/films/films.component";
import {FilmDetailsComponent} from "./components/film-details/film-details.component";

const app_routes: Routes = [
  { path: '', pathMatch: 'full', component: FilmsComponent },
  { path: 'filmDetails', pathMatch: 'full', component: FilmDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
