import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Contact} from '../../../model/contact';
import {MatPaginator} from '@angular/material/paginator';
import {ContactService} from '../../../service/contact/contact.service';
import {Address} from '../../../model/address';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['fullName', 'email', 'phone', 'address', 'company'];
  contacts: Contact[];
  dataSource: MatTableDataSource<Contact>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contactService: ContactService) {
  }

  ngAfterViewInit(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
    });
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
}
