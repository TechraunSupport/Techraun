import { Component } from '@angular/core';
import { ApplicationComponent } from "./application/application.component";
import { ArtificialComponent } from './artificial/artificial.component';
import { CloudComponent } from "./cloud/cloud.component";
import { CybersecurityComponent } from "./cybersecurity/cybersecurity.component";
import { DataengineeringComponent } from "./dataengineering/dataengineering.component";
import { EnterpriseComponent } from "./enterprise/enterprise.component";
import { QualityComponent } from "./quality/quality.component";
import { SoftwareComponent } from './software/software.component';
import { TurnkeyComponent } from "./turnkey/turnkey.component";

@Component({
  selector: 'app-services',
  imports: [SoftwareComponent, TurnkeyComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
