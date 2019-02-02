import { Component, OnInit } from '@angular/core';
import { MenuLinks } from '../../models/main.models';

@Component({
    selector: 'ui-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    showMenu: boolean = false;
    links: MenuLinks[];
    logoSrc: string;

    constructor() { }

    ngOnInit() {
        this.logoSrc = "./assets/img/logo.png";
        this.links = [
            {
                url: "/",
                title: "Platform"
            },
            {
                url: "/",
                title: "Solutions"
            },
            {
                url: "/",
                title: "Pricing"
            },
            {
                url: "/about",
                title: "About"
            },
            {
                url: "/contact",
                title: "Contact"
            },
        ]
    }

    onClick(event) {
        this.showMenu = !this.showMenu;
        console.log(this.showMenu);
    }
}