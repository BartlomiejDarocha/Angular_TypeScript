import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-standard-dialog',
  templateUrl: './standard-dialog.component.html',
  styleUrls: ['./standard-dialog.component.sass']
})
export class StandardDialogComponent {
  name = '';
  constructor(
    public dialogRef: MatDialogRef<StandardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
