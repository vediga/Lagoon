import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { PhotoListComponent } from './features/photo-list/photo-list.component';
import { SidePanelComponent } from './features/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
