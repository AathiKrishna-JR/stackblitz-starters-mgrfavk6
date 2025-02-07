import { Component, OnInit } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { NgFor } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-list',
  imports: [ContactItemComponent,NgFor ],
  providers : [ContactService],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  contacts = this.contactService.getContacts();

  constructor(private contactService: ContactService) {}

  removeContact(index: number) {
    this.contactService.deleteContact(index);
  }
}
