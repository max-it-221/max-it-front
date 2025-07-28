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
voirDetail(_t24: { prenom: string; nom: string; cni: string; telephone: string; dateOuverture: Date; estBloque: boolean; }) {
throw new Error('Method not implemented.');
}
comptes = [
    {
      prenom: 'Jean',
      nom: 'Dupont',
      cni: '1234567890',
      telephone: '+221770001122',
      dateOuverture: new Date('2024-01-15'),
      estBloque: false,
    },
    {
      prenom: 'Awa',
      nom: 'Diop',
      cni: '9876543210',
      telephone: '+221770009988',
      dateOuverture: new Date('2024-05-10'),
      estBloque: false,
    },
  ];

  ajouterCompte() {
    console.log('Ajouter compte...');
    // ici tu peux ouvrir un formulaire modal ou naviguer vers une autre page
  }
  toggleBloque(compte: any) {
  // Ici vous pouvez ajouter la logique pour sauvegarder l'état
  console.log(`Compte ${compte.cni} - Nouvel état: ${compte.estBloque ? 'Bloqué' : 'Débloqué'}`);
  // Appel API pour sauvegarder l'état si nécessaire
}
}
