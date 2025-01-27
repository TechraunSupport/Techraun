import { Component } from '@angular/core';
import { NavigationbarComponent } from '../../header/navigationbar/navigationbar.component';
import { CardsComponent } from './cards/cards.component';
import { CardflipComponent } from './cardflip/cardflip.component';
import { SliderComponent } from "./slider/slider.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [NavigationbarComponent, CardsComponent, CardflipComponent, SliderComponent,RouterLink,RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
