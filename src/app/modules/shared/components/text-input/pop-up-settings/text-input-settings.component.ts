import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextboxModel } from '../models/TextboxModel';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material'
@Component({
  selector: 'text-input-settings',
  templateUrl: './text-input-settings.component.html',
  styleUrls: ['./text-input-settings.component.scss']
})

export class TextInputSettingsComponent implements OnInit {
  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  labelPosition = 'before';
  constructor(
    public dialogRef: MatDialogRef<TextInputSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TextboxModel) {}
}