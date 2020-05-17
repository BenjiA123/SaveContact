import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  contact: Contact;

  private contactsUpdated = new Subject<Contact[]>();
  constructor(private contactService: ContactService) {}
  ngOnInit() {
    this.contactService
      .getContacts()
      .subscribe((contacts: any) => {
        this.contacts = contacts;
        this.contactsUpdated.next([...this.contacts]);
      });
  }
  addContact(form: NgForm) {
    const newContact: Contact = {
      _id: null,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      phone: form.value.phone,
    };

    this.contactService
      .addContacts(newContact)
      .subscribe((responseData) => {
        console.log(responseData);
        this.contact = responseData.contact;

        this.contacts.push(this.contact);
        this.contactsUpdated.next([...this.contacts]);
      });
  }
  deleteContact(id: any) {
    this.contactService.deleteContacts(id).subscribe(() => {
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== id
      );
      this.contactsUpdated.next([...this.contacts]);
    });
  }
}
