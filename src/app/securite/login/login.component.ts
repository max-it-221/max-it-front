import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]),
  }); 
  onSubmit(){
    if (this.formlogin.valid) {
      console.log('Form Submitted!', this.formlogin.value);
      // Logique de connexion ici
    } else {
      console.log('Form is invalid');
    }
  }

}
