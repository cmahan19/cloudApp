import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    greetingsTitle: string;
    greetingsText: string;
    
    constructor() { }

    ngOnInit() {
        this.greetingsTitle = 'Get In Touch'
        this.greetingsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia ut magnam sit natus rem voluptate quo eveniet reprehenderit accusamus!'
    }
}