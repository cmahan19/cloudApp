import { Component, OnInit, Input } from '@angular/core';
import { FeatureCard } from 'src/app/main/models/main.model';

@Component({
    selector: 'ui-feature-card',
    templateUrl: './feature-card.component.html',
    styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

    @Input('card') card: FeatureCard;

    scollAnimation: boolean;

    constructor() { }

    ngOnInit() {

    }
}