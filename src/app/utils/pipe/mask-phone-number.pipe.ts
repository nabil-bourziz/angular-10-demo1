import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maskPhoneNumber'
})
export class MaskPhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    return phoneNumber ? phoneNumber.replace(/\d(?=\d{4})/g, '*') : '';
  }

}
