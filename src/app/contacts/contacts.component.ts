import { Component, inject } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [ContactListComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  onAddTask(){
    this.router.navigate(['/addContacts']);
  }
}
