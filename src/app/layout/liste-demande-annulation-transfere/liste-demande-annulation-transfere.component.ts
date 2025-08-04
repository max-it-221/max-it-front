import { Component, inject, signal } from '@angular/core';
import { Transaction } from '../../model/transaction';
import{ MatButtonModule } from '@angular/material/button';
import{DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-liste-demande-annulation-transfere',
  standalone: true,
  imports: [MatButtonModule,],
  templateUrl: './liste-demande-annulation-transfere.component.html',
  styleUrl: './liste-demande-annulation-transfere.component.scss'
})
export class ListeDemandeAnnulationTransfereComponent {

  demande = signal<Transaction[]>([
    new Transaction(1, 'TRX12345', 1000, '2023-10-01', 'Depot'),
    new Transaction(2, 'TRX12346', 500, '2023-10-02', 'Retrait'),
    new Transaction(3, 'TRX12347', 750, '2023-10-03', 'Depot'),
    new Transaction(4, 'TRX12348', 300, '2023-10-04', 'Retrait')

  ]);

  //  title="angular material dialog";
//   readonly dialog = inject(MatDialog);
//   openDialog():void {
//      this.dialog.open(DialogBoxComponent);
 
// }



constructor(private dialog: MatDialog) {}

  openDialog(transaction: Transaction): void {
    this.dialog.open(DialogBoxComponent, {
      data: transaction,
      width: '500px',
    });
  }

}