import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../model/contact';
import {ContactService} from '../../../service/contact/contact.service';
import {Address} from '../../../model/address';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contacts$ = this.contactService.getContacts();
  }

  address(address: Address): string {
    let result = '';
    if (address) {
      if (address.address) {
        result += address.address + ' - ';
      }
      if (address.complement) {
        result += address.complement + ' - ';
      }
      if (address.zipcode) {
        result += address.zipcode + ' - ';
      }
      if (address.city) {
        result += address.city;
      }
    }
    return result;
  }

  mainPhone(contact: Contact): string {
    if (contact.phones?.length > 0) {
      return contact.phones[0];
    }
    return '';
  }
}
