import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control:AbstractControl): { [key: string]: boolean } | null{

  if(control.value.charAt(0) === '0') {
  return   { 'phoneValidation': true };
  }
  return null;
}
