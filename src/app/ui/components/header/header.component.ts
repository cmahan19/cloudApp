import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'ui-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input("header") header: string;
    currPages: string[];
    breadcrumbs: string[] = [];

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.url.subscribe((routes: UrlSegment[]) => {
            this.currPages = routes.map(route => route.path);
            this.header = this.header? this.header : routes.pop().toString();
            this.setBreadcrumbs(this.currPages);
        })
    }

    setBreadcrumbs(currPages: string[]) {
        let link = currPages[0];
        this.breadcrumbs.push(link);
        for (let i = 1; i < currPages.length; i++) {
            link += '/' + currPages[i];
            this.breadcrumbs.push(link);
        }
    }
}