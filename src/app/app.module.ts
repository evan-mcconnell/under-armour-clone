import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SplashBannerComponent } from './splash-banner/splash-banner.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { ButtonComponent } from './button/button.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';
import { ExploreComponent } from './explore/explore.component';
import { InstaPicsComponent } from './insta-pics/insta-pics.component';
import { NavComponent } from './nav/nav.component';
import { StoreComponent } from './store/store.component';
import { NavCategoryComponent } from './nav-category/nav-category.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';


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
    InstaPicsComponent,
    NavComponent,
    StoreComponent,
    NavCategoryComponent,
    FooterComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
