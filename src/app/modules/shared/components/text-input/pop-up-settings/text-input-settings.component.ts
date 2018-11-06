import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextBoxComponent } from '../text-box.component';

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
    public dialogRef: MatDialogRef<TextBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public label: string) {}

    onNoClick(): void {
        this.dialogRef.close();
      }

}