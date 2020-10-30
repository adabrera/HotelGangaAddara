import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { DinningPageComponent } from './components/dinning-page/dinning-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { FacilitiesPageComponent } from './components/facilities-page/facilities-page.component';
import { LocationComponent } from './components/location/location.component';
import { EventVanuePageComponent } from './components/event-vanue-page/event-vanue-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavigationComponent,
    RoomsPageComponent,
    DinningPageComponent,
    GalleryPageComponent,
    FacilitiesPageComponent,
    LocationComponent,
    EventVanuePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
