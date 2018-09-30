import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-MyRunes',
  templateUrl: './myRunes.component.html',
  styleUrls: ['./myRunes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyRunesComponent implements OnInit {
  // table var
  displayedColumns: string[] = ['slot_no', 'set_id', 'primary_stat.type', 'inate_stat.type'];
  // date
  dateObj: Date = new Date();
  runeDataNew: any;
  runeDataActive: Array<Rune> = new Array();
  dataSource = new MatTableDataSource(TEST_DATA);
  fileTarget: EventTarget;
  legendRunes: Rune;

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
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
    this.dataSource.sort = this.sort;
  }

  findLegendRunes = () => {
    for (let i = 0; i < this.runeDataNew.runes.length; i++) {
      // is extra = 5 = legend and class = 6 = 6 stars
      if (this.runeDataNew.runes[i].extra == 5 && this.runeDataNew.runes[i].class == 6) {
        // if slot 2/4/6 and not flat or slot 1/3/5
        if ((this.runeDataNew.runes[i].slot_no == 1 || this.runeDataNew.runes[i].slot_no == 3 || this.runeDataNew.runes[i].slot_no == 5)
          || ((this.runeDataNew.runes[i].slot_no == 2 || this.runeDataNew.runes[i].slot_no == 4 || this.runeDataNew.runes[i].slot_no == 6)
            && (this.runeDataNew.runes[i].pri_eff != 1 || this.runeDataNew.runes[i].pri_eff != 3 || this.runeDataNew.runes[i].pri_eff != 5))) {
          let tempRune: Rune = {
            set_id: this.runeDataNew.runes[i].set_id,
            slot_no: this.runeDataNew.runes[i].slot_no,
            occupied_id: this.runeDataNew.runes[i].occupied_id,
            occupied_type: this.runeDataNew.runes[i].occupied_type,
            primary_stat: {
              type: this.runeDataNew.runes[i].pri_eff[0],
              value: this.runeDataNew.runes[i].pri_eff[1]
            },
            inate_stat: {
              type: this.runeDataNew.runes[i].prefix_eff[0],
              value: this.runeDataNew.runes[i].prefix_eff[1]
            },
            sub_stats: {
              0: {
                type: this.runeDataNew.runes[i].sec_eff[0][0],
                value: this.runeDataNew.runes[i].sec_eff[0][1],
                gem: this.runeDataNew.runes[i].sec_eff[0][2],
                grind: this.runeDataNew.runes[i].sec_eff[0][3]
              },
              1: {
                type: this.runeDataNew.runes[i].sec_eff[1][0],
                value: this.runeDataNew.runes[i].sec_eff[1][1],
                gem: this.runeDataNew.runes[i].sec_eff[1][2],
                grind: this.runeDataNew.runes[i].sec_eff[1][3]
              },
              2: {
                type: this.runeDataNew.runes[i].sec_eff[2][0],
                value: this.runeDataNew.runes[i].sec_eff[2][1],
                gem: this.runeDataNew.runes[i].sec_eff[2][2],
                grind: this.runeDataNew.runes[i].sec_eff[2][3]
              },
              3: {
                type: this.runeDataNew.runes[i].sec_eff[3][0],
                value: this.runeDataNew.runes[i].sec_eff[3][1],
                gem: this.runeDataNew.runes[i].sec_eff[3][2],
                grind: this.runeDataNew.runes[i].sec_eff[3][3]
              }
            }
          }
          this.runeDataActive.push(tempRune);
        }
      }
    }
    this.dataSource = new MatTableDataSource(this.runeDataActive);
  }
}

export interface Rune {
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

export interface Stat {
  type: number;
  value: number;
  gem: boolean;
  grind: number;
}

const TEST_DATA: Rune[] = [
  {
    inate_stat: {
      type: 10,
      value: 4
    },
    occupied_id: 0,
    occupied_type: 2,
    primary_stat: {
      type: 3,
      value: 22
    },
    set_id: 1,
    slot_no: 1,
    sub_stats: {
      0: { type: 1, value: 347, gem: true, grind: 0 },
      1: { type: 11, value: 8, gem: true, grind: 0 },
      2: { type: 9, value: 5, gem: true, grind: 0 },
      3: { type: 12, value: 8, gem: true, grind: 0 },
    }
  },
  {
    inate_stat: {
      type: 1,
      value: 4
    },
    occupied_id: 0,
    occupied_type: 2,
    primary_stat: {
      type: 1,
      value: 22
    },
    set_id: 2,
    slot_no: 2,
    sub_stats: {
      0: { type: 1, value: 347, gem: true, grind: 0 },
      1: { type: 11, value: 8, gem: true, grind: 0 },
      2: { type: 9, value: 5, gem: true, grind: 0 },
      3: { type: 12, value: 8, gem: true, grind: 0 },
    }
  }
];