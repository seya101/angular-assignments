import { Component } from '@angular/core';
import { UserService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  
}
