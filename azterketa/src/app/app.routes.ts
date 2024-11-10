import { Routes } from '@angular/router';
import { TaulaComponent } from './components/taula/taula.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: '', component: TaulaComponent, title: 'Taula' },
    { path: "details/:modelo", component: DetailsComponent, title: 'Details' },
];

