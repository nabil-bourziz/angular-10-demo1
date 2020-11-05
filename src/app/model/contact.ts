import {Company} from './company';
import {Address} from './address';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phones: string[];
  birthDate: Date;
  address: Address;
  website: string;
  company: Company;
  picture: string;
}
