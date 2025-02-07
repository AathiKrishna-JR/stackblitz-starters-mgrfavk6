import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  templateUrl:'./contact-item.html', 
  styleUrl : './contact-item.css'
})
export class ContactItemComponent {
  @Input() contact!: { name: string; phone: string; email: string };
  @Output() delete = new EventEmitter<void>();

  deleteContact() {
    this.delete.emit();
  }
}
