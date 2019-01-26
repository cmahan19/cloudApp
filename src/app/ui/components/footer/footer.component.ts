import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'ui-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    form = this._fb.group({
        fullName:   ["", [Validators.required, Validators.maxLength(25)]],
        email:      ["", [Validators.required, Validators.email]],
        message:    ["", [Validators.required, Validators.minLength(5)]]
    });

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {

    }

    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.controls["fullName"].value)
        console.log(this.form.controls["email"].value)
        console.log(this.form.controls["message"].value)
    }

}
