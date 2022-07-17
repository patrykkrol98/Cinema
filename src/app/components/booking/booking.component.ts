import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, reduce, scan, share, startWith, tap } from 'rxjs/operators';
import { IFilm } from 'src/app/models/film';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

const registerSeats = (selected: Set<number>, seat: number) => {
  if (selected.has(seat)) {
    selected.delete(seat);
  } else {
    selected.add(seat);
  }
  return selected;
};

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  formGroup!: FormGroup;
  post: any;
  noneMessage = 'nothing';
  summaryIndicator = false;
  selectSeat$ = new Subject<number>();
  summarySeats!: string;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: IFilm) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  selectedMessage$ = this.selectSeat$.pipe(
    scan(registerSeats, new Set<number>()),
    startWith(new Set<number>()),
    map((set) => (set.size ? Array.from(set).join(', ') : this.noneMessage)),
    tap(set => this.summarySeats = set),
    share()
  );

  book() {
    this.summaryIndicator = true;
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required') ? 'Field is required' :
      this.formGroup.get('email')?.hasError('email') ? 'Not a valid email address' : '';
  }

  onSubmit(post: any) {
    this.post = post;
    const summary = {
      film: this.data,
      userData: post,
      seats: this.summarySeats.split(', '),
      cost: this.seatsCost()
    }
    console.log(summary);
  }

  seatsCost() {return this.summarySeats.split(', ').length * 15}
}
