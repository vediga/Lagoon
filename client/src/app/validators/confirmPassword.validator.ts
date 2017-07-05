import { FormGroup } from '@angular/forms';

export function validateConfirmPassword(group: FormGroup) {
    const ctrls = group.controls;

    if (ctrls.password.value !== ctrls.confirmPassword.value) {
        return { invalidPassword: true };
    }
    return null;
}
