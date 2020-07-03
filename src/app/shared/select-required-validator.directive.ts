import { Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appSelectorValidator]', // add this to select list to apply custom validator
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator{
    @Input() appSelectorValidator : string;
    validate(control: AbstractControl):{[key: string]: any} | null {
        return control.value === this.appSelectorValidator ? {'defaultSelected': true}: null;
    }  
}