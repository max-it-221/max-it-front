import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CompteListComponent } from './layout/compte-list/compte-list.component';
import { LoginComponent } from './securite/login/login.component';
import { SecuriteComponent } from './securite/securite.component';
import { ListeDemandeAnnulationTransfereComponent } from './layout/liste-demande-annulation-transfere/liste-demande-annulation-transfere.component';

import { AjoutCompteComponent } from './layout/ajout-compte/ajout-compte.component';
import { CompteDetailComponent } from './layout/compte-detail/compte-detail.component';
import { JournaleDemandeListComponent } from './layout/journale-demande-list/journale-demande-list.component';
import { Transaction } from './model/transaction';
import { TransactionListComponent } from './layout/transaction-list/transaction-list.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'securite/login' },
  {
    path: 'layout',
    component: LayoutComponent,
    children:
     [
     
      {
        path: 'comptes',
        component:CompteListComponent,
      },

      {
        path: 'compte-detail/:compteId',
        component:CompteDetailComponent
      },
    {
      path: 'demande-annulation-transfere',
      component: ListeDemandeAnnulationTransfereComponent
    },

      
           {
      path: 'ajouter-compte',
      component: AjoutCompteComponent
    },


    
    {
      path: 'journalsDemandeListe',
      component: JournaleDemandeListComponent    
    },
    {
      path: 'transactions/:compteId',
      component:TransactionListComponent
    },
      
    

  ] ,
  },
  
  {
    path: 'securite',
    component:SecuriteComponent,
    children: 
    [
      {
        path: 'login',
        component: LoginComponent,
      },
  {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
      },


    ],
  },
  
       {
        path: '**',
       component:NotFoundPageComponent
      },
     

    
];
