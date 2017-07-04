import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'lagoon-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registrationSuccess: boolean;
    registrationFailed: boolean;
    registerForm: FormGroup;

    constructor(private userService: UserService) {
        this.registrationSuccess = false;
        this.registrationFailed = false;

        const nameValidator = this.getNameValidator();
        const pwdValidator = this.getPwdValidator();
        this.registerForm = new FormGroup({
            firstName: new FormControl('', nameValidator),
            lastName: new FormControl('', nameValidator),
            username: new FormControl('', nameValidator),
            password: new FormControl('', pwdValidator),
            confirmPassword: new FormControl('', pwdValidator)
        });
    }

    ngOnInit() {}

    getNameValidator() {
        const commonValidators: Array<ValidatorFn> = this.getCommonValidatorList(2);
        // Add only alpha numeric chars regex
        return Validators.compose([...commonValidators, Validators.pattern('[\\w\\-\\s\\/]+')]);
    }

    getPwdValidator() {
        const commonValidators: Array<ValidatorFn> = this.getCommonValidatorList();
        // TODO: Add more password regex pattern validators
        return Validators.compose(commonValidators);
    }

    getCommonValidatorList(minLength: number = 3, maxLength: number = 20): Array<ValidatorFn> {
        return [
            Validators.required,
            Validators.minLength(minLength),
            Validators.maxLength(maxLength)
        ];
    }

    registerUser(val) {
        // TODO: call service to register user
        // console.log(val);
        // this.userService.registerUser(JSON.stringify(val))
    }
}
