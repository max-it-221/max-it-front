import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournaleDemandeListComponent } from './journale-demande-list/journale-demande-list.component';

export default [
  {
    path: '',
    component: JournaleDemandeListComponent,  
  }
] as Routes;