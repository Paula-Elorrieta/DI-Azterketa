import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home', }, 
  { path: 'details/:id', component: DetailsComponent, title: 'Home details', }, 
];


