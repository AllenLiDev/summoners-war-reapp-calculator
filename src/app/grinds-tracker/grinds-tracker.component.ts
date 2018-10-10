import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grinds-tracker',
  templateUrl: './grinds-tracker.component.html',
  styleUrls: ['./grinds-tracker.component.scss']
})
export class GrindsTrackerComponent implements OnInit {
  dateObj: Date = new Date();
  runeTypes: Array<string> = RuneTypes;

  constructor() { }

  ngOnInit() {
  }

}

const RuneTypes = [
  'Energy',
  'Guard',
  'Swift',
  'Blade',
  'Rage',
  'Focus',
  'Endure',
  'Fatal',
  'Despair',
  'Vampire',
  'Violent',
  'Nemesis',
  'Will',
  'Shield',
  'Revenge',
  'Destroy',
  'Fight',
  'Determination',
  'Enhance',
  'Accuracy',
  'Tolerance'
]
