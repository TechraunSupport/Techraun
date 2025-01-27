import { Component } from '@angular/core';
import { SlideComponent } from "../slide/slide.component";
import { NavigationbarComponent } from '../../../header/navigationbar/navigationbar.component';
import { CarddropComponent } from "../carddrop/carddrop.component";

@Component({
  selector: 'app-content',
  imports: [SlideComponent, NavigationbarComponent, CarddropComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
