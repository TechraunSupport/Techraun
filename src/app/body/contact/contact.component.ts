import { Component, NgModule } from '@angular/core';
import { NavigationbarComponent } from "../../header/navigationbar/navigationbar.component";
import { CommonModule } from '@angular/common';
import{FormsModule, NgForm}from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [NavigationbarComponent,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isFormsubmitted:boolean=false;
userObj:any={
  firstname:'',
  lastname:'',
  email:'',
  phonenumber:'',
  city:''
}
onsubmit(form:NgForm){
  debugger;const isFormValid=form.form.valid;
  this.isFormsubmitted=true;
}
}
