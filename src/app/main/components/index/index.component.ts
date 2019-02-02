import { Component, OnInit } from '@angular/core';
import { FeatureCard } from '../../models/main.model';

@Component({
    selector: 'main-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    greetingsTitle: string;
    greetingsText: string;
    featureCards: FeatureCard[];

    constructor() { }

    ngOnInit() {
        this.greetingsTitle = 'We Want You'
        this.greetingsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia ut magnam sit natus rem voluptate quo eveniet reprehenderit accusamus!'
        this.featureCards = [
            {
                icon: 'cogs',
                title: 'Automate Business Process',
                text: 'Streamline as many of your business processes as possible. For simplicity, increase service quality, improve service delivery and lower costs.',
                url: '/'
            },
            {
                icon: 'cogs',
                title: 'Mobile and Desktop Applications',
                text: 'Apps make you visible, provide a marketing platform, automate processes, display data visualizations, build recognition, add value, make your business stand out, cultivate employee and customer engagement.',
                url: '/'
            },
            {
                icon: 'cogs',
                title: 'Custom Cloud Solutions',
                text: 'Cloud computing can help you do more with less. Our services will reduce your overhead and help drive your business to new levels.',
                url: '/'
            },
            {
                icon: 'cogs',
                title: 'Data Analytics and Visualizations',
                text: 'Get critical insights in real time with data storage, warehousing, visualize analytics, and machine learning.',
                url: '/'
            },
            {
                icon: 'cogs',
                title: 'Modernize IT Infrastructure',
                text: 'Leverage technology to meet your business goals. Improve business experiences. Modernization will',
                url: '/'
            },
            {
                icon: 'cogs',
                title: 'Website Design',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nemo ducimus iste eligendi quidem enim.',
                url: '/'
            }
        ]
    }
}