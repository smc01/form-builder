import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { TextInputComponent } from './modules/shared/components/text-input/text-input.component';
import { TextInputSettingsComponent } from './modules/shared/components/text-input/text-input-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    TextInputSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
