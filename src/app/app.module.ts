import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SlideshowModule } from './modules/slideshow/slideshow.module';

import { RootComponent } from './components/root/root.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './components/footer/footer.component';
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
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SlideshowModule
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class AppModule { }
