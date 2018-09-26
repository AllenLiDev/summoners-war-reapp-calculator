import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dateObj: Date = new Date();
  slotSelected: String = 'Select a slot';
  inateSelected: String = 'None';
  statTypes: Array<String> = ['ATT %', 'ATT +', 'HP %', 'HP +', 'DEF %', 'DEF +', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
  slotNumbers: Array<String> = ['Slot 1', 'Slot 2', 'Slot 3', 'Slot 4', 'Slot 5', 'Slot 6'];
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

  setInateSelected = (stat: String) => {
    this.inateSelected = stat;
  }

  setSlotSelected = (slot: String) => {
    this.slotSelected = slot;
    // set primary stats possible based on slot choice
    switch (slot) {
      case 'Slot 1':
        console.log('slot 1 selected');
        return;
      case 'Slot 2':
        return;
      case 'Slot 3':
        return;
      case 'Slot 4':
        return;
      case 'Slot 5':
        return;
      case 'Slot 6':
        return;
    }
  }

}
