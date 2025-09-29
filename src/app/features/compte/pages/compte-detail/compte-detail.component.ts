import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte-detail',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './compte-detail.component.html',
  styleUrl: './compte-detail.component.scss'
})
export class CompteDetailComponent implements OnInit {
  compte: any;
user: any = {
    id: 1,
    prenom: 'Jean',
    nom: 'Dupont',
    cni: '1234567890',
    telephone: '+221770001122',
    email: ''
}
  ngOnInit() {
    // Logique pour récupérer les détails du compte
    this.compte = {
      id: 1,
      prenom: 'Jean',
      nom: 'Dupont',
      cni: '1234567890',
      telephone: '+221770001122',
      solde: 1500.75,
      dateOuverture: new Date('2024-01-15'),
      estBloque: false,
    };
  }

}
