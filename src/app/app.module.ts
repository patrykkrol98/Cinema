import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FilmCardComponent } from './components/films/film-card/film-card.component';
import { BookingComponent } from './components/booking/booking.component'
import { TuiRepeatTimesModule } from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent,
    FilmCardComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    TuiRepeatTimesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
