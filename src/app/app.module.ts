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
import { TextBoxComponent } from './modules/shared/components/text-input/text-box.component';
import { TextInputSettingsComponent } from './modules/shared/components/text-input/pop-up-settings/text-input-settings.component';
import { ComponentsListComponent } from './modules/shared/components/components-list/components-list.component';
import { FormBuilderComponent } from './features/form-builder/form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    TextInputSettingsComponent,
    ComponentsListComponent,
    FormBuilderComponent
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
