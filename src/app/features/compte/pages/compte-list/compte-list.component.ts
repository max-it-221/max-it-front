import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [DatePipe,RouterLink],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.scss'
})
export class CompteListComponent {
voirDetail(_t24: { prenom: string; nom: string; cni: string; telephone: string; dateOuverture: Date; estBloque: boolean; }) {
throw new Error('Method not implemented.');
}
comptes = [
    {
      id:1,
      prenom: 'Jean',
      nom: 'Dupont',
      cni: '1234567890',
      telephone: '+221770001122',
      solde: 1500.75,
      dateOuverture: new Date('2024-01-15'),
      estBloque: false,
    },
    {
      id:2,
      prenom: 'Awa',
      nom: 'Diop',
      cni: '9876543210',
      telephone: '+221770009988',
      solde: 2500.50,
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
