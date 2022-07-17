import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from "./components/films/films.component";
import { FilmDetailsComponent } from "./components/film-details/film-details.component";
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FilmsComponent },
  { path: 'filmDetails/:id', pathMatch: 'full', component: FilmDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
