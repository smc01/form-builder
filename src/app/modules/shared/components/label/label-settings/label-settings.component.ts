import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LabelModel } from '../models/model-label';

@Component({
  selector: 'app-label-settings',
  templateUrl: './label-settings.component.html',
  styleUrls: ['./label-settings.component.scss']
})
export class LabelSettingsComponent implements OnInit {
  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  labelPosition = 'before';
  constructor(
    public dialogRef: MatDialogRef<LabelSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LabelModel) {}
}