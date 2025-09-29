import { Routes } from "@angular/router";
import { CompteListComponent } from "./pages/compte-list/compte-list.component";
import { CompteDetailComponent } from "./pages/compte-detail/compte-detail.component";

export default [
  {
    path: '',
    // component: CampagneComponent,
    children: [
      {
        path: '',
        component: CompteListComponent,

      },
      {
        path: ':id',
        component: CompteDetailComponent,

      },
      // {
      //   path: 'compteurs',
      //   component: CompteurListComponent,

      // },
      // {
      //   path: ':id',
      //   component: CompteurDetailsComponent,
      // },
    ],
  },
] as Routes;
