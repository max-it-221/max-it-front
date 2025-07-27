import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'accueil',
        loadComponent: () => import('../app/accueil/accueil.component').then(m => m.AccueilComponent),
      },
      {
        path: 'comptes',
        loadChildren: () => import('../app/compte/compte-routing'),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transaction/transaction-routing')
      },
      {
        path: 'payements',
        loadChildren: () =>
          import('./payement/payement-routing')
      },
      {
        path: 'journale-demandes',
        loadChildren: () =>
          import(
            './journale-demande/journale-demande-routing'
          )
      },
    ],
  },
];
