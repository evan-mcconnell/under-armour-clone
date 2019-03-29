import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SplashBannerComponent } from './splash-banner/splash-banner.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ButtonComponent } from './button/button.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';
import { ExploreComponent } from './explore/explore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SplashBannerComponent,
    ButtonBannerComponent,
    ButtonComponent,
    ImageBannerComponent,
    ExploreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
