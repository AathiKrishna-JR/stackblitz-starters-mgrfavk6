import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: '', component: ContactsComponent},
  { path: './addContacts', component: AddContactComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};