import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-app-logo',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.scss'],
})
export class AppLogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
