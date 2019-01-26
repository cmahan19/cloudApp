import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    greetingsTitle: string;
    greetingsText: string;

    constructor() { }

    ngOnInit() {
        this.greetingsTitle = 'We Want You'
        this.greetingsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia ut magnam sit natus rem voluptate quo eveniet reprehenderit accusamus!'
    }
}