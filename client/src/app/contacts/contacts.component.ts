import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  newContact: Contact = {
    firstname: "",
    lastname: "",
    phone: 0
  };
  contacts: Contact[] = [];
  contact: Contact;
  constructor(private contactService: ContactService) { }
  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(
        (contact: any) => {  //This has to be contact array so that it would get the whole arrayin the database
          this.contacts = contact

        }

      );


  }
  addContact(form: NgForm) {



    this.newContact.firstname = form.value.firstname;
    this.newContact.lastname = form.value.lastname;
    this.newContact.phone = form.value.phone;
    this.contactService.addContacts(this.newContact)




  }
  deleteContact(id: any) {
    var contacts = this.contacts
    this.contactService.deleteContacts(id).subscribe(data => {
      // if (data.n == 1) {
      //   for (var i = 0; i < contacts.length; i++) {
      //     if (contacts[i]._id == id) {
      //       contacts.splice(i, 1)
      //     }
      //   }
      // }
    })
  }

}