import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournaleDemandeListComponent } from './pages/journale-demande-list/journale-demande-list.component';

export default [
  {
    path: '',
    component: JournaleDemandeListComponent,  
  }
] as Routes;