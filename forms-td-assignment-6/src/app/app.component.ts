import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') registerForm: NgForm;
  showInfo = false;
  defaultSubscriptions = 'advanced';
  user = {
    email: '',
    pwd: '',
    sub:''
  };
  

  onSubmit() {
    // console.log(this.registerForm)
    
    this.showInfo = true;
    this.user.email = this.registerForm.value.email;
    this.user.pwd = this.registerForm.value.password; 
    this.user.sub = this.registerForm.value.subscriptions; 
  }
}
