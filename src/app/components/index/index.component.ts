import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    slideURLs: string[];

    ngOnInit() {
        this.getSlides();
    }

    getSlides() {
        this.slideURLs = [
            "/assets/img/banner1.jpg",
            "/assets/img/banner2.jpg",
            "/assets/img/banner3.jpg"
        ]
    }
}
