import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tick-rate',
  templateUrl: './tick-rate.component.html',
  styleUrls: ['./tick-rate.component.scss']
})
export class TickRateComponent implements OnInit {
  dateObj: Date = new Date();
  constructor() { }
  totalSpd: number = 0;
  baseSpd: number = 0;
  runeSpd: number = 0;
  lead24Spd: number = 0;
  lead30Spd: number = 0;
  multiplier: number = 1.15;

  ngOnInit() {
  }

  // gets base spd inputed
  base = (value: string) => {
    this.baseSpd = parseInt(value);
    this.totalSpd = this.runeSpd + (this.baseSpd * this.multiplier);
    this.lead24Spd = this.runeSpd + (this.baseSpd * this.multiplier) + (this.baseSpd * 0.24);;
    this.lead30Spd = this.runeSpd + (this.baseSpd * this.multiplier) + (this.baseSpd * 0.30);;
  }

  rune = (value: string) => {
    this.runeSpd = parseInt(value);
    this.totalSpd = this.runeSpd + (this.baseSpd * this.multiplier);
    this.lead24Spd = this.runeSpd + (this.baseSpd * this.multiplier) + (this.baseSpd * 0.24);;
    this.lead30Spd = this.runeSpd + (this.baseSpd * this.multiplier) + (this.baseSpd * 0.30);;
  }

  tickCalc = (spd: number) => {
    if(spd >= 358){
      return '4 - 358';
    } else if (spd >= 286){
      return '5 - 286';
    } else if (spd >= 239){
      return '6 - 239';
    } else if (spd >= 205){
      return '7 - 205';
    } else if (spd >= 179){
      return '8 - 179';
    } else if (spd >= 159){
      return '9 - 159';
    } else if (spd >= 143){
      return '10 - 143';
    }
  }
}
