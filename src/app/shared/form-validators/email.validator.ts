import { FormControl } from '@angular/forms';


export class EmailValidator {
  public static validate(c: FormControl) {
    // tslint:disable-next-line
    const REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return REGEXP.test(c.value) ? null : {
      email: {
        valid: false
      }
    };
  }
}
