import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{HeaderComponent} from '../../../app/header/header.component'

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  contacts: Contact[] = [
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
    // Adicione mais contatos aqui
  ];

constructor(private router: Router, private toastr: ToastrService) {}


  addContact(): void {
    const newId = this.contacts.length ? Math.max(...this.contacts.map(contact => contact.id)) + 1 : 1;
    const newContact: Contact = { id: newId, name: 'New Contact', phone: '000-000-0000' };
    this.contacts.push(newContact);
    console.log('Added New Contact:', newContact);
  }

  editContact(contact: Contact): void {
    console.log('Edit Contact:', contact);
    this.router.navigate(['/contact-form'], { state: { contact } });
  }

  deleteContact(contact: Contact): void {
    this.toastr.warning('Are you sure you want to delete this contact?', 'Delete Contact',
      {
      closeButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right',
      timeOut: 0,
      extendedTimeOut: 0
    }).onHidden.subscribe(() => {
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
        console.log('Deleted Contact with Id:',  contact.id);

    });
  }

}
