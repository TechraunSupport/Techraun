import { Component } from '@angular/core';
import { SlideComponent } from "./slide/slide.component";
import { NavigationbarComponent } from '../../header/navigationbar/navigationbar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-about-us',
  imports: [ContentComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
