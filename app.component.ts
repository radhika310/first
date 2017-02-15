import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  template:` 
/*  {{title}} <br>
  First Name : <input [(ngModel)]="firstname"><br>
  {{firstname}} <br>
  
  Last Name : <input [(ngModel)]="lastname"><br>
  {{lastname}}
  `*/
  
    
  
})
export class AppComponent {
  title:string = 'Hello!!!! Welcome!!!!!!';
  firstname:string ='';
  lastname:string='';
  num1:number;
  num2:number;
  sum:number;
  sub:number;
  mul:number;
  div:number;
onClick(event){
  this.sum=this.num1+this.num2

this.sub=this.num1-this.num2;
this.mul=this.num1*this.num2;
this.div=this.num1/this.num2;
}
  
}

