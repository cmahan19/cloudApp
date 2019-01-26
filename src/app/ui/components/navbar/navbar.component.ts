import { Component } from '@angular/core';

@Component({
    selector: 'ui-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    showMenu: boolean = false;

    onClick(event) {
        this.showMenu = !this.showMenu;
        console.log(this.showMenu);
    }
}