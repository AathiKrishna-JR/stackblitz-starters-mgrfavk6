import { Injectable, WritableSignal, signal } from '@angular/core';

export interface Contact {
  name: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: WritableSignal<Contact[]> = signal([
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
  ]);

  getContacts() {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.update((contacts) => [...contacts, contact]);
  }

  deleteContact(index: number) {
    this.contacts.update((contacts) => contacts.filter((_, i) => i !== index));
  }
}
