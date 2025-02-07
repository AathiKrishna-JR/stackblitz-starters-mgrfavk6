import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: ContactsComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};