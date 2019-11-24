import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ContactService {

  private contact: Contact[] = []
  constructor(private httpClient: HttpClient) { }
  // retriving Contacts
  getContacts() {
    return this.httpClient.get('http://localhost:3000/api/contacts')
    // .subscribe(
    //   (contact) => {
    //     console.log(contact)
    //   }
    // )
  }
  addContacts(newContact: Contact) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient
      .post<{ message: string, contact: Contact }>('http://localhost:3000/api/contact',
        newContact)

      .subscribe((responseData) => {
        const contact: Contact =
        {
          _id: responseData.contact._id,
          firstname: responseData.contact.firstname,
          lastname: responseData.contact.lastname,
          phone: responseData.contact.phone
        }

        this.contact.push(contact);
        // this.postsUpdated.next([...this.posts]);


      }


      )








  }
  deleteContacts(id) {
    return this.httpClient.delete(`http://localhost:3000/api/contact/${id}`)
  }


}
