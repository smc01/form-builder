import { Component, OnInit } from '@angular/core';
import { TextInputSettingsComponent } from './pop-up-settings/text-input-settings.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'text-input',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  label :string = "question"

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TextInputSettingsComponent, {
      width: '250px',
      data: {name: this.label}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.label = result;
    });
  }
}
