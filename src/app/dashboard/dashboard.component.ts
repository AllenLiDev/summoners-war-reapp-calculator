import { Component, OnInit } from '@angular/core';
import { $, element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dateObj: Date = new Date();
  slotSelected: String = 'Select a slot';
  slotElementSelected;
  primeSelected: String;
  primeElementSelected;
  primeValue: String = "None";
  inateSelected: String = 'None';
  statTypes: Array<String> = ['ATT +', 'ATT %', 'DEF +', 'DEF %', 'HP +', 'HP %', 'SPD', 'CRIT', 'CDMG', 'RES', 'ACC'];
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

  setSlotSelected = (slot: String, event: Event) => {
    // check if slot already been selected
    if (this.slotSelected === slot) {
      return;
    }
    // check if first choice has been made
    if (this.slotElementSelected) {
      this.slotElementSelected.classList.toggle('active');
    }
    // set selected slot string to new
    this.slotSelected = slot;
    // set active slot class
    event.srcElement.classList.toggle('active');
    // same current active slot
    this.slotElementSelected = event.srcElement;
    // set primary stats possible based on slot choice
    this.setPrimaryStatChoices(slot);
  }

  setPrimaryStatChoices = (primary: String) => {
    // remove disabled from all
    document.querySelectorAll('#primeStats li').forEach((item) => {
      item.classList.remove('disabled');
    });
    document.querySelectorAll('#primeStats2 li').forEach((item) => {
      item.classList.remove('disabled');
    });
    // function to disable based on slot, 0 = all slots
    var disable = (slot: Number) => {
      if (slot === 0) {
        document.querySelectorAll('#primeStats li').forEach((item) => {
          item.classList.add('disabled');
        });
        document.querySelectorAll('#primeStats2 li').forEach((item) => {
          item.classList.add('disabled');
        });
      } else if (slot === 2) {
        document.getElementById('primeCrit').classList.add('disabled');
        document.getElementById('primeCdmg').classList.add('disabled');
        document.getElementById('primeAcc').classList.add('disabled');
        document.getElementById('primeRes').classList.add('disabled');
      } else if (slot === 4) {
        document.getElementById('primeSpd').classList.add('disabled');
        document.getElementById('primeAcc').classList.add('disabled');
        document.getElementById('primeRes').classList.add('disabled');
      } else if (slot === 6) {
        document.getElementById('primeSpd').classList.add('disabled');
        document.getElementById('primeCrit').classList.add('disabled');
        document.getElementById('primeCdmg').classList.add('disabled');
      }
    }
    // check if first choice has been made
    if (this.primeElementSelected) {
      this.primeElementSelected.classList.toggle('active');
    }
    // do slot management based on primary slot
    switch (primary) {
      case 'Slot 1':
        disable(0);
        document.getElementById('primeFlatAtt').classList.toggle('active');
        document.getElementById('primeFlatAtt').classList.remove('disabled');
        this.primeElementSelected = document.getElementById('primeFlatAtt');
        this.primeSelected = 'primeFlatAtt';
        this.setPrimeValue('primeFlatAtt');
        return;
      case 'Slot 3':
        disable(0);
        document.getElementById('primeFlatDef').classList.toggle('active');
        document.getElementById('primeFlatDef').classList.remove('disabled');
        this.primeElementSelected = document.getElementById('primeFlatDef');
        this.primeSelected = 'primeFlatDef';
        this.setPrimeValue('primeFlatDef');
        return;
      case 'Slot 5':
        disable(0);
        document.getElementById('primeFlatHp').classList.toggle('active');
        document.getElementById('primeFlatHp').classList.remove('disabled');
        this.primeElementSelected = document.getElementById('primeFlatHp');
        this.primeSelected = 'primeFlatHp';
        this.setPrimeValue('primeFlatHp');
        return;
      case 'Slot 2':
        disable(2);
        document.getElementById('primeSpd').classList.toggle('active');
        this.primeElementSelected = document.getElementById('primeSpd');
        this.primeSelected = 'primeSpd';
        this.setPrimeValue('primeSpd');
        return;
      case 'Slot 4':
        disable(4);
        document.getElementById('primeCdmg').classList.toggle('active');
        this.primeElementSelected = document.getElementById('primeCdmg');
        this.primeSelected = 'primeCdmg';
        this.setPrimeValue('primeCdmg');
        return;
      case 'Slot 6':
        disable(6);
        document.getElementById('primeHp').classList.toggle('active');
        this.primeElementSelected = document.getElementById('primeHp');
        this.primeSelected = 'primeHp';
        this.setPrimeValue('primeHp');
        return;
    }
  }

  setPrimeSelected = (prime: String, event: Event) => {
    if (this.primeSelected === prime) {
      return;
    }
    // check if first choice has been made
    if (this.primeElementSelected) {
      this.primeElementSelected.classList.toggle('active');
    }
    // set selected prime string to new
    this.primeSelected = prime;
    // set active prime class
    event.srcElement.classList.toggle('active');
    // same current active prime
    this.primeElementSelected = event.srcElement;
    this.setPrimeValue(prime);
  }

  setPrimeValue = (type: String) => {
    switch (type) {
      case 'primeFlatDef':
        this.primeValue = '+160 DEF';
        return;
      case 'primeDef':
        this.primeValue = '63% DEF';
        return;
      case 'primeFlatAtt':
        this.primeValue = '+160 ATT';
        return;
      case 'primeAtt':
        this.primeValue = '63% ATT';
        return;
      case 'primeHp':
        this.primeValue = '63% HP';
        return;
      case 'primeFlatHp':
        this.primeValue = '+2448 HP';
        return;
      case 'primeSpd':
        this.primeValue = '+42 SPD';
        return;
      case 'primeCrit':
        this.primeValue = '58% CRIT';
        return;
      case 'primeCdmg':
        this.primeValue = '80% CDMG';
        return;
      case 'primeAcc':
        this.primeValue = '64% ACC';
        return;
      case 'primeRes':
        this.primeValue = '64% RES';
        return;
    }
  }
}
