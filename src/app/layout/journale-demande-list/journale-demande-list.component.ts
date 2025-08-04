import { Component } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { JournaleDemandeAchatsComponent } from '../../journale-demande-achats/journale-demande-achats.component';
import { JournaleDemandeCitoyensComponent } from '../../journale-demande-citoyens/journale-demande-citoyens.component';
import { JournaleDemandeClientsComponent } from '../../journale-demande-clients/journale-demande-clients.component';
@Component({
  selector: 'app-journale-demande-list',
  standalone: true,
  imports: [MatTabsModule,JournaleDemandeAchatsComponent,JournaleDemandeCitoyensComponent,JournaleDemandeClientsComponent],
  templateUrl: './journale-demande-list.component.html',
  styleUrl: './journale-demande-list.component.scss'
})
export class JournaleDemandeListComponent {

}
