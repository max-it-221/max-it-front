import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SenelecComponent } from '../senelec/senelec.component';

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [],
  templateUrl: './payement.component.html',
  styleUrl: './payement.component.scss'
  })
export class PayementComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(SenelecComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });
  }
}

