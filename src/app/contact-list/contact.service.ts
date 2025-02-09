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
    { name: 'Aathi', phone: '1234567890', email: 'Aathi@example.com' },
    { name: 'Krishna', phone: '9876543210', email: 'Krishna@example.com' }
  ]);

  getContacts(): WritableSignal<Contact[]> { 
    return this.contacts;
  }

  addContact(contact: Contact) {
    console.log("Before update:", this.contacts());
    this.contacts.set([...this.contacts(), contact]); 
    console.log("After update:", this.contacts());
  }

  deleteContact(index: number) {
    console.log("Before delete:", this.contacts());
    this.contacts.set(this.contacts().filter((_, i) => i !== index));
    console.log("After delete:", this.contacts());
  }
}
