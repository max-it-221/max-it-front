import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.scss'
})
export class CompteListComponent {
comptes = [
    {
      prenom: 'Jean',
      nom: 'Dupont',
      cni: '1234567890',
      telephone: '+221770001122',
      dateOuverture: new Date('2024-01-15'),
    },
    {
      prenom: 'Awa',
      nom: 'Diop',
      cni: '9876543210',
      telephone: '+221770009988',
      dateOuverture: new Date('2024-05-10'),
    },
  ];

  ajouterCompte() {
    console.log('Ajouter compte...');
    // ici tu peux ouvrir un formulaire modal ou naviguer vers une autre page
  }
}
