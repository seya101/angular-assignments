import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  increActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active:" + this.activeToInactiveCounter);
  }

  increInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive:" + this.inactiveToActiveCounter);
  }
  constructor() { }
}
