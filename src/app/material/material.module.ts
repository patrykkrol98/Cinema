import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
