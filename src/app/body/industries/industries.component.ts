import { Component } from '@angular/core';
import { EducationComponent } from "./education/education.component";
import { FinancialComponent } from "./financial/financial.component";
import { HealthcareComponent } from "./healthcare/healthcare.component";
import { LogisticsComponent } from "./logistics/logistics.component";
import { ManfacturingComponent } from "./manfacturing/manfacturing.component";
import { RealestateComponent } from "./realestate/realestate.component";
import { NavigationbarComponent } from "../../header/navigationbar/navigationbar.component";
import { RetailComponent } from './retail/retail.component';

@Component({
  selector: 'app-industries',
  imports: [EducationComponent, FinancialComponent, HealthcareComponent, LogisticsComponent, ManfacturingComponent, RealestateComponent, NavigationbarComponent,RetailComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

}
