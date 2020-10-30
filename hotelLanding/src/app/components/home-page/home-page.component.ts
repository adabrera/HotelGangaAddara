import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images = ['assets/welcomeImage.jpeg', 'assets/poolArea.jpeg', 'assets/reception.jpeg'];

  ngOnInit(): void {
  }

}
