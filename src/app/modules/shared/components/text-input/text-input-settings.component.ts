import { Component, OnInit, Inject } from '@angular/core';
import { TextInputComponent } from './text-input.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'text-input-settings',
  templateUrl: './text-input-settings.component.html',
  styleUrls: ['./text-input-settings.component.scss']
})
export class TextInputSettingsComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


  constructor(
    public dialogRef: MatDialogRef<TextInputComponent>,
    @Inject(MAT_DIALOG_DATA) public label: string) {}

    onNoClick(): void {
        this.dialogRef.close();
      }

}