import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
    { path: "", component: IndexComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "sitemap", component: SitemapComponent },
    { path: "privacy", component: PrivacyComponent },
    { path: "terms", component: TermsComponent },
    { path: "feedback", component: ContactComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
