import { Routes } from '@angular/router';
import { SenelecComponent } from './components/senelec/senelec.component';
import { ServiceDePayementComponent } from './pages/service-de-payement/service-de-payement.component';

export default [
  {
    path: '',
    component: ServiceDePayementComponent,
    children: [
      {
        path: 'senelec',
        component: SenelecComponent,
      },
    ],
  },
] as Routes;
