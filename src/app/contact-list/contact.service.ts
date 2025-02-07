import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: WritableSignal<{ name: string; phone: string; email: string }[]> = signal([
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
  ]);

  getContacts(): Signal<{ name: string; phone: string; email: string }[]> {
    return this.contacts.asReadonly(); // Return a read-only signal
  }

  addContact(contact: { name: string; phone: string; email: string }) {
    this.contacts.update((contacts: { name: string; phone: string; email: string }[]) => [...contacts, contact]);
  }

  deleteContact(index: number) {
    this.contacts.update((contacts: { name: string; phone: string; email: string }[]) => 
      contacts.filter((_, i) => i !== index)
    );
  }
}
