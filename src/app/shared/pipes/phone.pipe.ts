import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const phone = value.toString().trim();

    if (phone.length !== 11) {
      return phone;
    }

    const country = phone[0];
    const city = phone.slice(1, 4);
    const number = `${phone.slice(4, 7)} - ${phone.slice(7)}`;


    return `+${country} (${city}) ${number}`;
  }

}
