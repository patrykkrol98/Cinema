import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { IFilm } from "../../models/film";
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film!: IFilm;

  constructor(private route: ActivatedRoute, private filmsService: DataServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filmsService.getFilmById(this.route.snapshot.params['id']).subscribe(result => this.film = result);
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookingComponent, {data: this.film});

    dialogRef.afterClosed().subscribe();
  }
}
