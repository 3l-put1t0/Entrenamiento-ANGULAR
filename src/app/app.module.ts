import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AplicationMaterialComponent } from './components/aplication-material/aplication-material.component';
import { MaterialModule } from './modulos/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AplicationMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
