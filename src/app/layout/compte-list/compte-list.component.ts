import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Compte } from '../../model/compte';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [DatePipe,RouterLink  ,CommonModule],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.scss'
})
export class CompteListComponent {
  comptes = signal<Compte[]>([
    new Compte(1, 'Fatou', 'Sarr', '123456789', '01/01/2025', 'CPT001', [], [], '01/03/2025'),
    new Compte(2, 'Moussa', 'Diallo', '987654321', '02/02/2025', 'CPT002', [], []),
    new Compte(3, 'Aissatou', 'Ba', '456789123', '03/03/2025', 'CPT003', [], []),
  ]);



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
