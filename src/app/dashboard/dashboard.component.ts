import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dateObj: Date = new Date();
  slotSelected: String = 'Select a slot';

  constructor() { }

  ngOnInit() {
    // // odds are
    // slot 1 - 1/9 
    // slot 2 - 1/10
    // slot 3 - 1/9
    // slot 4 - 1/10 
    // slot 5 - 1/10
    // slot 6 - 1/10

    // inate stat minutes 1

    // quad roll 1/30/30/30/30/30

    // spd roll max 1 / 3
  }
}
