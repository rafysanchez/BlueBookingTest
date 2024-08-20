import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() contact: Contact = { id: 0, name: '', phone: '' };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { contact?: Contact };
    debugger;
    if (state?.contact) {
      this.contact = state.contact;
    } else {
      // Caso não haja contato, redireciona de volta para a lista de contatos
      this.router.navigate(['/contact-list']);
    }

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // Lógica para salvar as alterações do contato
    console.log('Contact saved:', this.contact);
    this.router.navigate(['/contact-list']); // Navega de volta para a lista de contatos após salvar
  }


}
