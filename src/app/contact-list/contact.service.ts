import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts = signal([
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
  ]);

  getContacts(): Signal<{ name: string; phone: string; email: string }[]> {
    return this.contacts;
  }

  addContact(contact: { name: string; phone: string; email: string }) {
    this.contacts.mutate((contacts) => contacts.push(contact));
  }

  deleteContact(index: number) {
    this.contacts.mutate((contacts) => contacts.splice(index, 1));
  }
}
