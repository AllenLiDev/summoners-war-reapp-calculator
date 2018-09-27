import { Component, OnInit } from '@angular/core';
import { $, element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dateObj: Date = new Date();
  // Slot vars
  slotSelected: number;
  slotElementSelected;
  // Primary Stat vars
  primeSelected: string;
  primeElementSelected;
  primeValue: string = "None";
  // Inate vars
  inateSelected: string = 'None';
  inateValue: number;
  // Statistic var
  totalEff: string = '0';
  useability: string = '0';
  triChance: string = '0';
  quadChance: string = '0';
  // Arrays
  rolledStats: Array<RolledStats> = [];
  primeOne: Array<string> = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %'];
  primeTwo: Array<string> = ['SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
  subStats: Array<string> = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
  statTypes: Array<string> = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
  slotNumbers: Array<string> = ['Slot 1', 'Slot 2', 'Slot 3', 'Slot 4', 'Slot 5', 'Slot 6'];
  constructor() { }

  ngOnInit() {
  }

  // onclick function to set the Slot
  setSlotSelected = (slotNum: number, event: Event) => {
    // check if slot already been selected
    if (this.slotSelected === slotNum) {
      return;
    }
    // check if first choice has been made
    if (this.slotElementSelected) {
      // turn last active off
      this.slotElementSelected.classList.toggle('active');
      // Reset Primary variables
      this.resetPrimary();
    }
    // reset inate variables
    this.resetInate();
    // set selected slot string to new
    this.slotSelected = slotNum;
    // set active to slot classlist
    event.srcElement.classList.toggle('active');
    // save current active slot
    this.slotElementSelected = event.srcElement;
    // set primary stats choices based on slot choice
    switch (slotNum) {
      case 0:
        this.primeOne = ['ATT +'];
        this.primeTwo = [];
        return;
      case 1:
        this.primeOne = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %'];
        this.primeTwo = ['SPD'];
        return;
      case 2:
        this.primeOne = ['DEF +'];
        this.primeTwo = [];
        return;
      case 3:
        this.primeOne = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %'];
        this.primeTwo = ['CRIT', 'CDMG'];
        return;
      case 4:
        this.primeOne = ['HP +'];
        this.primeTwo = [];
        return;
      case 5:
        this.primeOne = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %'];
        this.primeTwo = ['RES', 'ACC'];
        return;
    }
  }

  // onclick function to set the Primary Stat
  setPrimeSelected = (prime: string, event: Event) => {
    if (this.primeSelected === prime) {
      return;
    }
    // check if first choice has been made
    if (this.primeElementSelected) {
      // remove active from previouisly active class
      this.primeElementSelected.classList.toggle('active');
    }
    // set selected prime string to new
    this.primeSelected = prime;
    // set active prime class
    event.srcElement.classList.toggle('active');
    // same current active prime
    this.primeElementSelected = event.srcElement;
    this.resetInate();
  }

  setPrimeValue = (type: string) => {
    // remove primary stat from substats array
    this.subStats.splice(this.subStats.indexOf(type), 1);
    switch (type) {
      case 'DEF +':
        this.primeValue = '+160 DEF';
        return;
      case 'DEF %':
        this.primeValue = '63% DEF';
        return;
      case 'ATT +':
        this.primeValue = '+160 ATT';
        return;
      case 'ATT %':
        this.primeValue = '63% ATT';
        return;
      case 'HP %':
        this.primeValue = '63% HP';
        return;
      case 'HP +':
        this.primeValue = '+2448 HP';
        return;
      case 'SPD':
        this.primeValue = '+42 SPD';
        return;
      case 'CRIT':
        this.primeValue = '58% CRIT';
        return;
      case 'CDMG':
        this.primeValue = '80% CDMG';
        return;
      case 'ACC':
        this.primeValue = '64% ACC';
        return;
      case 'RES':
        this.primeValue = '64% RES';
        return;
    }
  }

  // reset all inate value called when new slot / primary stat selected
  resetInate = () => {
    this.inateSelected = 'None';
    if (this.slotSelected === 0) {
      this.subStats = ['ATT +', 'ATT %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
    } else if (this.slotSelected == 2) {
      this.subStats = ['DEF +', 'DEF %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
    } else {
      this.subStats = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
    }
  }

  // reset all primary stats when slot changed
  resetPrimary = () => {
    // Reset Primary Stat Selected
    this.primeValue = 'None';
    // Reset element Primary Stat selected
    if (this.primeElementSelected) {
      this.primeElementSelected.classList.toggle('active');
      this.primeElementSelected = null;
    }
    // Reset check variable
    this.primeSelected = undefined;
  }

  // sets the inate stat selected
  setInateSelected = (inate: string) => {
    // if reset, reset selection minus prime
    if (inate === 'reset') {
      this.resetInate();
      this.subStats.splice(this.subStats.indexOf(this.primeSelected), 1);
      return;
    }

    // if same do nth
    if (inate === this.inateSelected) {
      return;
    }
    // remove selection
    this.subStats.splice(this.subStats.indexOf(inate), 1);
    // append prev selection
    if (this.inateSelected === 'None') {
      // do nothing
    } else {
      this.subStats.push(this.inateSelected);
    }
    // set current selection
    this.inateSelected = inate;
    return;
  }


  // onclick reapp function 
  reapp = () => {
    let temp: Array<number> = [];
    let hits: Array<number> = [1, 1, 1, 1];
    let count = 0;

    // clear rolled stats
    this.rolledStats = [];
    // check function needed here
    if (this.primeSelected === undefined) {
      this.rolledStats.push({ statName: 'Primary Stat Not Set!', statEff: '', statValue: 0, statRollCount: 0 });
      return;
    }
    // roll new numbers
    while (temp.length < 4) {
      let newNum = Math.floor((Math.random() * (this.subStats.length)));
      if (!temp.includes(newNum)) {
        temp.push(newNum);
      }
    }
    // roll stat hits
    for (let i = 0; i < 4; i++) {
      hits[Math.floor((Math.random() * 4))] += 1;
    }
    // popular rolled stats
    temp.forEach((num: number) => {
      let curStat = this.rollStat(this.subStats[num], hits[count]);
      this.rolledStats.push({ statName: this.subStats[num], statEff: curStat.eff, statValue: curStat.sum, statRollCount: hits[count++] });
    });

    this.calcOverallEff();
  }

  /// Roll stat based on input: name stat
  rollStat = (type: string, numOfTimes: number) => {
    let sum: number = 0;
    let max: number = 0;
    let eff: string;
    if (type === 'DEF %' || type === 'HP %' || type === 'ATT %') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 4) + 5);
        max += 8;
      }
    } else if (type === 'DEF +' || type === 'ATT +') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 11) + 10);
        max += 50;
      }
    } else if (type === 'HP +') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 241) + 135);
        max += 800;
      }
    } else if (type === 'SPD' || type === 'CRIT') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 3) + 4);
        max += 6;
      }
    } else if (type === 'ACC' || type === 'RES') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 5) + 4);
        max += 8;
      }
    } else if (type === 'CDMG') {
      for (let i = 0; i < numOfTimes; i++) {
        sum += Math.floor((Math.random() * 4) + 4);
        max += 7;
      }
    }
    eff = (100 * (sum) / (max)).toFixed(2);
    return { sum, eff };
  }

  getRollColor = (roll) => {
    switch (roll) {
      case 1: return;
      case 2: return 'rollColorLight';
      case 3: return 'rollColorMed';
      case 4: return 'rollColorHigh';
      case 5: return 'rollColorMax';
    }
  }

  // Not being used atm
  getStatColor = (stat) => {
    switch (stat) {
      case 'DEF +':
      case 'DEF %':
        return 'defColor';
      case 'ATT +':
      case 'ATT %':
        return 'attColor';
      case 'HP %':
      case 'HP +':
        return 'hpColor';
      case 'SPD':
        return;
      case 'CRIT':
      case 'CDMG':
        return 'critColor';
      case 'ACC':
      case 'RES':
        return 'supColor';
    }
  }

  getEffColor = (eff: string) => {
    let percent: number = parseInt(eff);
    if (percent > 80) {
      return 'effColorHigh';
    } else if (percent > 67.5) {
      return 'effColorMed';
    } else {
      return 'effColorLow';
    }
  }

  getType = (stat: string) => {
    if (!(stat === 'DEF +' || stat === 'ATT +' || stat === 'HP +' || stat === 'SPD')) {
      return '%';
    } else {
      return;
    }
  }

  calcOverallEff = () => {
    let total: number = 0;
    for (let i = 0; i < 4; i++) {
      total += parseFloat(this.rolledStats[i].statEff) * this.rolledStats[i].statRollCount;
    }
    if (this.inateSelected != 'None') {
      console.log(this.inateValue);
      if (this.inateSelected === 'DEF +' || this.inateSelected === 'Att +') {
        total += 25 * (this.inateValue / 20);
      }
      else if (this.inateSelected === 'DEF %' || this.inateSelected === 'ATT %' || this.inateSelected === 'HP %') {
        total += 25 * (this.inateValue / 8);
      }
      else if (this.inateSelected === 'HP +') {
        total += 25 * (this.inateValue / 375);
      }
      else if (this.inateSelected === 'SPD' || this.inateSelected === 'CRIT') {
        total += 25 * (this.inateValue / 6);
      }
      else if (this.inateSelected === 'CDMG') {
        total += 25 * (this.inateValue / 7);
      }
      else if (this.inateSelected === 'ACC' || this.inateSelected === 'RES') {
        total += 25 * (this.inateValue / 8);
      }
    }
    this.totalEff = (total / 8).toFixed(2);
  }

  inateSet = (value: number) => {
    this.inateValue = value;
  }
}

export interface RolledStats {
  statName: string;
  statEff: string;
  statValue: number;
  statRollCount: number;
}