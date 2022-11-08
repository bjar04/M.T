import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BannerGridComponent } from './banner-grid/banner-grid.component';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';
import { EventsComponent } from './events/events.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import { YandexMapComponent } from './yandex-map/yandex-map.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    HeaderComponent,
    BannerComponent,
    BannerGridComponent,
    MenuSliderComponent,
    EventsComponent,
    ReservationComponent,
    FooterComponent,
    ScrollUpComponent,
    YandexMapComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
