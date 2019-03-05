import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AventuresComponent} from './aventures/aventures.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoriesService} from './services/categories.service';
import {AuthComponent} from './auth/auth.component';
import {AdventureViewComponent} from './adventure-view/adventure-view.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'aventures', component: AdventureViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AdventureViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AventuresComponent,
    CategoriesComponent,
    AuthComponent,
    AdventureViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
