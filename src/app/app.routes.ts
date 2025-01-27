import { Routes } from '@angular/router';
import { HomepageComponent } from './body/homepage/homepage.component';
import { AboutUsComponent } from './body/about-us/about-us.component';
import { PartnerComponent } from './body/partner/partner.component';
import { ContactComponent } from './body/contact/contact.component';
import { CareerComponent } from './body/career/career.component';
import { ApplicationComponent } from './body/services/application/application.component';
import { ArtificialComponent } from './body/services/artificial/artificial.component';
import { CloudComponent } from './body/services/cloud/cloud.component';
import { CybersecurityComponent } from './body/services/cybersecurity/cybersecurity.component';
import { DataengineeringComponent } from './body/services/dataengineering/dataengineering.component';
import { EnterpriseComponent } from './body/services/enterprise/enterprise.component';
import { QualityComponent } from './body/services/quality/quality.component';
import { SoftwareComponent } from './body/services/software/software.component';
import { TurnkeyComponent } from './body/services/turnkey/turnkey.component';
import { EducationComponent } from './body/industries/education/education.component';
import { FinancialComponent } from './body/industries/financial/financial.component';
import { HealthcareComponent } from './body/industries/healthcare/healthcare.component';
import { LogisticsComponent } from './body/industries/logistics/logistics.component';
import { ManfacturingComponent } from './body/industries/manfacturing/manfacturing.component';
import { RealestateComponent } from './body/industries/realestate/realestate.component';
import { RetailComponent } from './body/industries/retail/retail.component';

export const routes: Routes = [
    {path:'homepage',component:HomepageComponent},
    {path:'',redirectTo:'/homepage',pathMatch:"full"},
    {path:'aboutus',component:AboutUsComponent},
    {path:'partner',component:PartnerComponent},
    {path:'contact',component:ContactComponent},
    {path:'careers',component:CareerComponent},
    {path:'services/ApplicationDevelopment&Maintenance',component:ApplicationComponent},
    {path:'services/ArtificialIntelligence',component:ArtificialComponent},
    {path:'services/CloudSolutions',component:CloudComponent},
    {path:'services/Cybersecurity',component:CybersecurityComponent},
    {path:'services/DataEngineering',component:DataengineeringComponent},
    {path:'services/EnterpriseApplicationsandIntegrations',component:EnterpriseComponent},
    {path:'services/QualityAssuranceandEngineering',component:QualityComponent},
    {path:'services/SoftwareProductEngineering',component:SoftwareComponent},
    {path:'services/EnterpriseTurnkeySolutions',component:TurnkeyComponent},
    {path:'industries/Education',component:EducationComponent},
    {path:'industries/FinancialServices',component:FinancialComponent},
    {path:'industries/Healthcare',component:HealthcareComponent},
    {path:'industries/Manufacturing',component:ManfacturingComponent},
    {path:'industries/Retail',component:RetailComponent},
    {path:'industries/TransportationAndLogistics',component:LogisticsComponent},
    {path:'industries/RealEstate',component:RealestateComponent}
    

]
