import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';

import { routes }             from './app.routing';
import { AppComponent }       from './app.component';
import { HomeComponent }      from './features/home/home.component';
import { PhotoListComponent } from './features/photo-list/photo-list.component';
import { SidePanelComponent } from './features/side-panel/side-panel.component';
import { NavBarComponent }    from './features/nav-bar/nav-bar.component';
import { LoginComponent }     from './features/login/login.component';
import { RegisterComponent }  from './features/register/register.component';
import { MyAlbumComponent }   from './features/my-album/my-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    MyAlbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
