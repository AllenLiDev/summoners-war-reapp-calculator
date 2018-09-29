import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MyRunes',
  templateUrl: './myRunes.component.html',
  styleUrls: ['./myRunes.component.scss']
})
export class MyRunesComponent implements OnInit {
  dateObj: Date = new Date();
  runeDataNew: any;
  fileTarget: EventTarget;
  legendRunes: Rune;

  constructor() { }

  ngOnInit() {
  }

  // attached to input
  onChange = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
      // The file's data will be stored here
      this.runeDataNew = JSON.parse(event.target.result);
    };
    reader.readAsText(file);
  }

  doIt = () => {
    // console.log(this.runeDataNew.runes);
    // console.log(this.runeDataNew.unit_list);
    this.findLegendRunes();
  }

  findLegendRunes = () => {
    for (let i = 0; i < 100; i++) {
      if (this.runeDataNew.runes[i].extra == 5 && this.runeDataNew.runes[i].class == 6) {
        if ((this.runeDataNew.rune[i].slot_no == 1 || this.runeDataNew.rune[i].slot_no == 3 || this.runeDataNew.rune[i].slot_no == 5) || ((this.runeDataNew.runes[i].slot_no == 2 || this.runeDataNew.runes[i].slot_no == 4 || this.runeDataNew.runes[i].slot_no == 6) && (this.runeDataNew.runes[i].pri_eff != 1 || this.runeDataNew.runes[i].pri_eff != 3 || this.runeDataNew.runes[i].pri_eff != 5))) {
          console.log(this.runeDataNew.runes[i]);
        }
      }
    }
  }
}

interface Rune {
  set_id: number;
  slot_no: number;
  occupied_id: number;
  occupied_type: number;
  primary_stat: {
    type: number;
    value: number;
  };
  inate_stat: {
    type: number;
    value: number
  };
  sub_stats: {
    0: Stat;
    1: Stat;
    2: Stat;
    3: Stat;
  }
}

interface Stat {
  type: number;
  value: number;
  gem: boolean;
  grind: number;
}