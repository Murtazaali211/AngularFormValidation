import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  //@Input() appConfirmEqualValidator: string;
  validate(passwordGroup: AbstractControl): {[key: string]: any} | null {
    const passwordField = passwordGroup.get('Password');
    const confirmPasswordField = passwordGroup.get('confirmpassword');
    if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
      return { 'notEqual': true};
    }
    return null;
  }
}
