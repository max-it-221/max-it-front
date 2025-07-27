import { Routes } from '@angular/router';
import { SenelecComponent } from './senelec/senelec.component';
import { PayementComponent } from './payement/payement.component';

export default [
  {
    path: '',
    component: PayementComponent,
    children: [
      {
        path: 'senelec',
        component: SenelecComponent,
      },
    ],
  },
] as Routes;
