import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
const BACKEND_URL = environment.apiUrl;

@Injectable()
export class ContactService {
  contacts;
  constructor(private httpClient: HttpClient) {}
  getContacts() {
    return this.httpClient.get(BACKEND_URL);
  }
  addContacts(newContact: Contact) {
    return this.httpClient.post<{
      message: string;
      contact: Contact;
    }>(BACKEND_URL, newContact);
  }
  deleteContacts(id) {
    return this.httpClient.delete(`${BACKEND_URL}/${id}`);
  }
}
