import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RoomsPageComponent} from "./components/rooms-page/rooms-page.component";
import {DinningPageComponent} from "./components/dinning-page/dinning-page.component";
import {GalleryPageComponent} from "./components/gallery-page/gallery-page.component";
import {FacilitiesPageComponent} from "./components/facilities-page/facilities-page.component";
import {EventVanuePageComponent} from "./components/event-vanue-page/event-vanue-page.component";
import {LocationComponent} from "./components/location/location.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home',
        component: HomePageComponent,

      },
      {
        path: 'rooms',
        component: RoomsPageComponent,

      },
      {
        path: 'dining',
        component: DinningPageComponent,

      },
      {
        path: 'gallery',
        component: GalleryPageComponent,

      },
      {
        path: 'facilities',
        component: FacilitiesPageComponent,

      },
      {
        path: 'events',
        component: EventVanuePageComponent,

      },
      {
        path: 'location',
        component: LocationComponent,

      },
      {
        path: 'contact',
        component: ContactPageComponent,

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
