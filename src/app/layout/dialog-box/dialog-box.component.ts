import { Component, Inject } from '@angular/core';
import{MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { _MatInternalFormField } from '@angular/material/core';
import{MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { transition } from '@angular/animations';
import { Transaction } from '../../model/transaction';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule, _MatInternalFormField, MatInputModule  , MatDialogContent , MatDialogActions],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction
  ) {}

}
