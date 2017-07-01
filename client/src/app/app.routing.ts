import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { MyAlbumComponent } from './features/my-album/my-album.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'my-album', component: MyAlbumComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
