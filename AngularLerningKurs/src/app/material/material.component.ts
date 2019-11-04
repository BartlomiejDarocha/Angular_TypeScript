import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StandardDialogComponent} from '../standard-dialog/standard-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.sass']
})
export class MaterialComponent implements OnInit {

  name: '';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(StandardDialogComponent, {
      width: '350px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result, 'result');
      this.name = result;
    });
  }

}
