import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IFilm } from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) {
  }
  //To get all Movie Lists
  getFilms(): Observable<IFilm[]> {
    // return this.http.get<IFilm[]>(environment.URL + 'films').pipe(
    return this.http.get<IFilm[]>('./assets/films.json').pipe(
      map((data: any) => {
        return data.results
      }))
  }

  // To get repertuire
  getRepertuire() {
    // return this.http.get<any>(environment.URL + 'repertuire'); 
      return this.http.get<any>('./assets/repertuire.json');
  }
}
