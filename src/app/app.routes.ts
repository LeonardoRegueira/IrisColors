import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'vista', pathMatch: 'full' },
    { path: 'vista', loadComponent: () => import('./practica-api/practica-api').then(m => m.PracticaApi) }
];
