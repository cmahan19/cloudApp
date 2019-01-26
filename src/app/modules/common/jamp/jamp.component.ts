import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "common-jamp",
    templateUrl: "./jamp.component.html",
    styleUrls: ["./jamp.component.scss"]
})
export class JampComponent implements OnInit{

    @Input("show") show: boolean | false;

    ngOnInit() {

    }
}