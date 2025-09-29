import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { NouvelleTransactionComponent } from './components/nouvelle-transaction/nouvelle-transaction.component';

export default [
  {
    path: '',
    // component: CampagneComponent,
    children: [
      {
        path: '',
        component: TransactionListComponent,

      },
      {
        path: ':id',
        component: TransactionDetailComponent,

      },
      {
        path: 'new',
        component: NouvelleTransactionComponent,

      },
      // {
      //   path: ':id',
      //   component: CompteurDetailsComponent,
      // },
    ],
  },
] as Routes;
