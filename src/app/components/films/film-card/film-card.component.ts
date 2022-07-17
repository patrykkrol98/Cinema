import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from 'src/app/models/film';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() film!: IFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
