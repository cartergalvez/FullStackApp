import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PTestComponent } from './pages/p-test/p-test.component';
import { HttpClientModule } from '@angular/common/http';
import { EndscreenComponent } from './pages/endscreen/endscreen.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';

import { BTWComponent } from './pages/btw/btw.component';
import { GuideBookComponent } from './pages/guide-book/guide-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomePageComponent,
    PTestComponent,
    EndscreenComponent,
    TestingPageComponent,
    BTWComponent,
    GuideBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
