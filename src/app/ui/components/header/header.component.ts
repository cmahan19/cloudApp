import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'ui-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currPages: string[];

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.url.subscribe((routes: UrlSegment[]) => {
            this.currPages = routes.map(route => route.path);
        })
    }
}