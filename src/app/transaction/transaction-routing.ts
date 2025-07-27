import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { NouvelleTransactionComponent } from './nouvelle-transaction/nouvelle-transaction.component';

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
