import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private router: Router) { }


  onSubmit() {
    // Validação básica para campos não vazios
    if (this.username && this.password) {
      // Aqui você pode integrar a lógica de autenticação, como chamar um serviço de autenticação
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.router.navigate(['/contact-list']);
    } else {
      console.error('Both fields are required');
    }
  }
}
