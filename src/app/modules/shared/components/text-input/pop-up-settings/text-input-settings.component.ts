import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextBoxComponent } from '../text-box.component';
import { TextboxModel } from '../models/TextboxModel';

@Component({
  selector: 'text-input-settings',
  templateUrl: './text-input-settings.component.html',
  styleUrls: ['./text-input-settings.component.scss']
})
export class TextInputSettingsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public settingsModel: TextboxModel) {}
}