import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { ContainerRoutingModule } from './ui-routing.module';

import { JampComponent } from './components/jamp/jamp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

const components = [
    JampComponent,
    NavbarComponent,
    SlideComponent,
    FooterComponent,
    BottomComponent,
    LayoutComponent,
    FormComponent,
    HeaderComponent,
    SlideshowComponent
]

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContainerRoutingModule,
        BrowserTransferStateModule
    ]
})
export class UiModule { }