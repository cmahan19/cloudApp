import { Component } from '@angular/core';

@Component({
    selector: 'main-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    greetingsTitle: string;
    greetingsText: string;
    
    constructor() { }

    ngOnInit() {
        this.greetingsTitle = 'What We Do'
        this.greetingsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia ut magnam sit natus rem voluptate quo eveniet reprehenderit accusamus!'
    }
}