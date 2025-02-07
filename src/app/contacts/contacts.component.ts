import { Component } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { AddContactComponent } from '../add-contact/add-contact.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactListComponent,AddContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
