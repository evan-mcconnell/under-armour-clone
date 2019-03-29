import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SplashBannerComponent } from './splash-banner/splash-banner.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SplashBannerComponent,
    ButtonBannerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
