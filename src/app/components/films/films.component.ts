import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../services/data-service.service";
import { IFilm } from "../../models/film";
import { IRepertuire } from '../../models/repertuire';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: IFilm[] = [];
  repertuire: IRepertuire = {};
  
constructor(private dataService: DataServiceService) {
}

ngOnInit(): void {
  this.dataService.getFilms().subscribe((films) => {
      this.films = films
  });
  this.dataService.getRepertuire().subscribe(repertuire => {
    this.repertuire = repertuire;
  })
}

findFilmsByDay(indexes: any): IFilm[] {
  return this.films.filter(element => indexes.includes(element.id));
}

getDaysOfWeek(): string[] {return Object.keys(this.repertuire)}

}

