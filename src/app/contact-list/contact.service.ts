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

  getContacts(): WritableSignal<Contact[]> { // Change return type to WritableSignal
    return this.contacts;
  }

  addContact(contact: Contact) {
    console.log("Before update:", this.contacts());
    this.contacts.set([...this.contacts(), contact]); // Use .set() to trigger change detection
    console.log("After update:", this.contacts());
  }

  deleteContact(index: number) {
    console.log("Before delete:", this.contacts());
    this.contacts.set(this.contacts().filter((_, i) => i !== index));
    console.log("After delete:", this.contacts());
  }
}
