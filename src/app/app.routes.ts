import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'accueil',
        loadComponent: () => import('./features/accueil/accueil.component').then(m => m.AccueilComponent),
      },
      {
        path: 'comptes',
        loadChildren: () => import('./features/compte/compte-routing'),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./features/transaction/transaction-routing')
      },
      {
        path: 'payements',
        loadChildren: () =>
          import('./features/payement/payement-routing')
      },
      {
        path: 'journale-demandes',
        loadChildren: () =>
          import(
            './features/journal-demande/journale-demande-routing'
          )
      },
    ],
  },
];
