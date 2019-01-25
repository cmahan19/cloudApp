import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    contactForm = this._fb.group({
        fullName:   ["", [Validators.required, Validators.maxLength(25)]],
        email:      ["", [Validators.required, Validators.email]],
        message:    ["", [Validators.required, Validators.minLength(5)]]
    });

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {

    }

    onSubmit() {
        if (this.contactForm.invalid) {
            return;
        }
        console.log("click")
    }

}
