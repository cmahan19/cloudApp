import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ui-greeting',
    templateUrl: './greeting.component.html',
    styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

    @Input('title') title: string;
    @Input('text') text: string;

    constructor() { }

    ngOnInit() {

    }
}