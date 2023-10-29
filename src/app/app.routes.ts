import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        title: 'Startuper',
        loadComponent: () => import('./components/landing/landing.component')
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch : 'full'
    },
];
