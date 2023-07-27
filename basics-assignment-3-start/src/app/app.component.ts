import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  steps= [];
  stepsWithIndex= [];

  onToggleDetailes() {
    this.steps.push(this.steps.length + 1);
  }

  onToggleDetailesIndex() {
    this.stepsWithIndex.push(new Date());

  }

}
