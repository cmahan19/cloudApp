import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { UiModule } from '../ui/ui.module';

import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        IndexComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        UiModule
    ]
})
export class MainModule { }