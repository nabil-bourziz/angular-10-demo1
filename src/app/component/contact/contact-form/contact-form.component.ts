import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Contact} from '../../../model/contact';
import {CompanyService} from '../../../service/company/company.service';
import {Company} from '../../../model/company';
import {ContactService} from '../../../service/contact/contact.service';
import {MatExpansionPanel} from '@angular/material/expansion';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactFormGroup: FormGroup;
  contact: Contact;
  companies: Company[];
  @ViewChild('contactForm') contactForm: NgForm;
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;

  constructor(private formBuilder: FormBuilder,
              private companyService: CompanyService,
              private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.companyService.gatCompanies.subscribe(companies => this.companies = companies);
    this.contact = {} as Contact;
    this.contactFormGroup = this.formBuilder.group({
      id: [],
      firstName: [this.contact.firstName, [Validators.required, Validators.max(20)]],
      lastName: [this.contact.lastName, [Validators.required, Validators.max(20)]],
      email: [this.contact.email, [Validators.required, Validators.email]],
      phones: this.formBuilder.array([this.phoneControl]),
      birthDate: [this.contact.birthDate],
      address: this.formBuilder.group({
        address: [this.contact.address?.address, Validators.required],
        complement: [this.contact.address?.complement],
        zipcode: [this.contact.address?.zipcode],
        city: [this.contact.address?.city, Validators.required],
      }),
      website: [this.contact.website],
      company: this.formBuilder.group({
        siret: [this.contact.company?.siret, Validators.required],
        name: [this.contact.company?.name]
      })
    });
  }

  get phoneControl(): FormControl {
    return this.formBuilder.control('', [Validators.required, Validators.pattern('[+0-9]*')]);
  }

  get firstName(): AbstractControl {
    return this.contactFormGroup.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.contactFormGroup.get('lastName');
  }

  get email(): AbstractControl {
    return this.contactFormGroup.get('email');
  }

  get phones(): FormArray {
    return this.contactFormGroup.get('phones') as FormArray;
  }

  get address(): FormArray {
    return this.contactFormGroup.get('address') as FormArray;
  }

  get emailError(): string {
    if (this.email.errors?.required) {
      return 'error.email-required';
    }
    return this.email.errors?.email ? 'error.email-format' : '';
  }

  getPhoneError(index: number): string {
    const phone = this.phones.at(index);
    if (phone.errors?.required) {
      return 'error.phone-required';
    }
    return phone.errors?.pattern ? 'error.phone-format' : '';
  }

  addPhoneControl(): void {
    this.phones.push(this.phoneControl);
  }

  deletePhoneControl(index: number): void {
    this.phones.removeAt(index);
  }

  submit(): void {
    if (this.address.invalid) {
      this.expansionPanel.open();
    } else if (this.contactForm.valid) {
      this.contact = this.contactFormGroup.value;
      console.log(JSON.stringify(this.contactFormGroup.value));
      console.log(JSON.stringify(this.contact));
      this.contactService.saveContact(this.contact).subscribe(contact => {
        this.contact.id = contact.id;
        this.contactForm.resetForm();
      });
    }
  }


  resetForm(): void {
    this.contactForm.resetForm();
    this.expansionPanel.close();
  }
}
