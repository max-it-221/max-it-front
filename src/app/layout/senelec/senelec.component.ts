import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-senelec',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './senelec.component.html',
  styleUrl: './senelec.component.scss'
})
export class SenelecComponent {
formAchatSenelec: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formAchatSenelec = this.fb.group({
      numeroCompteur: ['', [Validators.required, Validators.minLength(6)]],
      montant: ['', [Validators.required, Validators.min(500)]], // Montant minimum 500 FCFA
    });
  }

  get form() {
    return this.formAchatSenelec.controls;
  }

  onSubmit() {
    if (this.formAchatSenelec.valid) {
      const data = this.formAchatSenelec.value;
      console.log('Achat Senelec:', data);
      // ici, appel API ou affichage de confirmation
    }
  }
}
