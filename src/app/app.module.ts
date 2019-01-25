import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SlideshowModule } from './modules/slideshow/slideshow.module';

import { RootComponent } from './components/root/root.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        RootComponent,
        TopmenuComponent,
        NavbarComponent,
        IndexComponent,
        SlideComponent,
        FooterComponent,
        BottomComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SlideshowModule
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class AppModule { }
