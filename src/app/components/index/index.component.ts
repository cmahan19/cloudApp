import { Component, OnInit } from '@angular/core';

import { Slide, Swipe } from 'src/app/models/slide.model';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    slideData: Slide;
    currIndex: number = 0;
    swipe: Swipe;

    ngOnInit() {
        this.getSlides();
    }

    getSlides() {
        this.slideData = slideData;
    }

    onSlide(num: number) {
        this.currIndex = num;
    }

    onSwipe(e: TouchEvent, when: string): void {
        this.swipe = {e, when};
    }
}

const slideData: Slide = {
    slideURLs: [
        "/assets/img/banner1.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner3.jpg"
    ],
    slideActions: [
        { 
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, asperiores?",
            cta: {
                text: "Find out more",
                url: "http://google.com"
            }
        },
        { 
            title: "Lorem ipsum dolor sit, amet consectea sdasdasdg elit.",
            para: "Lorem ipsum dolor123123123tetur adipisicing elit. Architecto, asperiores?",
            cta: {
                text: "Find asde",
                url: "http://bing.com"
            }
        },
        { 
            title: "L1231 123met consectetur adipisicing elit.",
            para: "Lorem ipsum dolor 7yfghbh 3tetur adipisicing elit, asperiores?",
            cta: {
                text: "Fasdasde",
                url: "http://yahoo.com"
            }
        }
    ]
}
