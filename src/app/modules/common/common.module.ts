import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { JampComponent } from "./jamp/jamp.component";

@NgModule({
    declarations: [
        JampComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        JampComponent
    ]
})
export class CommonModule {

}