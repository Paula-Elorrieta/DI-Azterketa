import { Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { AppComponent } from './app.component';
import { TaulaComponent } from './Components/taula/taula.component';

export const routes: Routes = [
    { path: '', component: TaulaComponent, title: 'Taula' },
    { path: "details/:municipality", component: DetailsComponent, title: 'Details' },
];
