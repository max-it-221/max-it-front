import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SenelecComponent } from '../../components/senelec/senelec.component';

@Component({
  selector: 'app-service-de-payement',
  standalone: true,
  imports: [],
  templateUrl: './service-de-payement.component.html',
  styleUrl: './service-de-payement.component.scss'
})
export class ServiceDePayementComponent {
constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(SenelecComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });
  }
}
