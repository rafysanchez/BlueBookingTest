import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'contact-list',
    component: ContactListComponent
  },
  {path: 'contact-form',
    component: ContactFormComponent
  }

];
