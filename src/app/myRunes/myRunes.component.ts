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
  displayedColumns: string[] = ['slot_no', 'set_id', 'primary_stat_type', 'inate_stat_type', 'upgrade', 'efficiency'];
  // date
  dateObj: Date = new Date();
  runeDataNew: any;
  runeDataActive: Array<Rune> = new Array();
  dataSource;
  fileTarget: EventTarget;
  legendRunes: Rune;
  expandedElement: Rune;

  constructor() {
  }

  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    // load old data or init new data source
    if (localStorage.getItem('runeData')) {
      this.runeDataNew = JSON.parse(localStorage.getItem('runeData'));
      this.findLegendRunes();
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource = new Array();
    }
    // filter settings
    this.dataSource.filterPredicate = (data: Rune, filter: Array<string>) => {
      if (filter.length == 1) {
        return (data.set_id.toLowerCase().indexOf(filter[0]) !== -1 ||
          data.primary_stat_type.toLowerCase().indexOf(filter[0]) !== -1 ||
          data.inate_stat_type.toLowerCase().indexOf(filter[0]) !== -1);
      } else if (filter.length == 2) {
        return (data.set_id.toLowerCase().indexOf(filter[0]) !== -1 &&
          data.primary_stat_type.toLowerCase().indexOf(filter[1]) !== -1) ||
          (data.primary_stat_type.toLowerCase().indexOf(filter[0]) !== -1 &&
            data.inate_stat_type.toLowerCase().indexOf(filter[1]) !== -1);
      } else if (filter.length >= 3) {
        return (data.set_id.toLowerCase().indexOf(filter[0]) !== -1 &&
          data.primary_stat_type.toLowerCase().indexOf(filter[1]) !== -1 &&
          data.inate_stat_type.toLowerCase().indexOf(filter[2]) !== -1);
      }
    };
  }

  // attached to input
  onChange = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
      // The file's data will be stored here
      this.runeDataNew = JSON.parse(event.target.result);
      localStorage.setItem('runeData', event.target.result);
    };
    reader.readAsText(file);
    this.findLegendRunes();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    let temp = filterValue.toLowerCase().split(' ', 3);
    this.dataSource.filter = temp;
  }

  findLegendRunes = () => {
    this.runeDataActive = [];
    for (let i = 0; i < this.runeDataNew.runes.length; i++) {
      // is extra = 5 = legend and class = 6 = 6 stars
      if (this.runeDataNew.runes[i].extra == 5 && this.runeDataNew.runes[i].class == 6) {
        // if slot 2/4/6 and not flat or slot 1/3/5
        if ((this.runeDataNew.runes[i].slot_no == 1 || this.runeDataNew.runes[i].slot_no == 3 || this.runeDataNew.runes[i].slot_no == 5)
          || ((this.runeDataNew.runes[i].slot_no == 2 || this.runeDataNew.runes[i].slot_no == 4 || this.runeDataNew.runes[i].slot_no == 6)
            && (this.runeDataNew.runes[i].pri_eff != 1 || this.runeDataNew.runes[i].pri_eff != 3 || this.runeDataNew.runes[i].pri_eff != 5))) {
          let tempRune: Rune = {
            set_id: this.getSet(this.runeDataNew.runes[i].set_id),
            slot_no: this.runeDataNew.runes[i].slot_no,
            occupied_id: this.runeDataNew.runes[i].occupied_id,
            occupied_type: this.runeDataNew.runes[i].occupied_type,
            primary_stat_type: this.getStat(this.runeDataNew.runes[i].pri_eff[0]),
            primary_stat_value: this.runeDataNew.runes[i].pri_eff[1],
            inate_stat_type: this.getStat(this.runeDataNew.runes[i].prefix_eff[0]),
            inate_stat_value: this.runeDataNew.runes[i].prefix_eff[1],
            sub_stats: {
              0: {
                type: this.getStat(this.runeDataNew.runes[i].sec_eff[0][0]),
                value: this.runeDataNew.runes[i].sec_eff[0][1],
                gem: this.runeDataNew.runes[i].sec_eff[0][2],
                grind: this.runeDataNew.runes[i].sec_eff[0][3]
              },
              1: {
                type: this.getStat(this.runeDataNew.runes[i].sec_eff[1][0]),
                value: this.runeDataNew.runes[i].sec_eff[1][1],
                gem: this.runeDataNew.runes[i].sec_eff[1][2],
                grind: this.runeDataNew.runes[i].sec_eff[1][3]
              },
              2: {
                type: this.getStat(this.runeDataNew.runes[i].sec_eff[2][0]),
                value: this.runeDataNew.runes[i].sec_eff[2][1],
                gem: this.runeDataNew.runes[i].sec_eff[2][2],
                grind: this.runeDataNew.runes[i].sec_eff[2][3]
              },
              3: {
                type: this.getStat(this.runeDataNew.runes[i].sec_eff[3][0]),
                value: this.runeDataNew.runes[i].sec_eff[3][1],
                gem: this.runeDataNew.runes[i].sec_eff[3][2],
                grind: this.runeDataNew.runes[i].sec_eff[3][3]
              }
            },
            upgrade: this.runeDataNew.runes[i].upgrade_curr,
            efficiency: this.calcEff(this.runeDataNew.runes[i])
          }
          this.runeDataActive.push(tempRune);
        }
      }
    }
    // console.log(this.runeDataActive);
    this.dataSource = new MatTableDataSource(this.runeDataActive);
  }

  // calculate efficiency of rune based on stats
  calcEff = (rune) => {
    let eff: number = 0;
    let pre: string = this.getStat(rune.prefix_eff[0]);
    let temp: string;

    for (let i = 0; i < 4; i++) {
      let type = this.getStat(rune.sec_eff[i][0]);
      if (type === 'DEF %' || type === 'HP %' || type === 'ATT %') {
        eff += 100 * (rune.sec_eff[i][1] / 8);
      } else if (type === 'DEF +' || type === 'ATT +') {
        eff += 100 * (rune.sec_eff[i][1] / 20);
      } else if (type === 'HP +') {
        eff += 100 * (rune.sec_eff[i][1] / 355);
      } else if (type === 'SPD' || type === 'CRIT') {
        eff += 100 * (rune.sec_eff[i][1] / 6);
      } else if (type === 'ACC' || type === 'RES') {
        eff += 100 * (rune.sec_eff[i][1] / 8);
      } else if (type === 'CDMG') {
        eff += 100 * (rune.sec_eff[i][1] / 7);
      }
    }

    if (pre != '-') {
      if (pre === 'DEF +' || pre === 'Att +') {
        eff += 25 * (rune.prefix_eff[1] / 20);
      }
      else if (pre === 'DEF %' || pre === 'ATT %' || pre === 'HP %') {
        eff += 25 * (rune.prefix_eff[1] / 8);
      }
      else if (pre === 'HP +') {
        eff += 25 * (rune.prefix_eff[1] / 375);
      }
      else if (pre === 'SPD' || pre === 'CRIT') {
        eff += 25 * (rune.prefix_eff[1] / 6);
      }
      else if (pre === 'CDMG') {
        eff += 25 * (rune.prefix_eff[1] / 7);
      }
      else if (pre === 'ACC' || pre === 'RES') {
        eff += 25 * (rune.prefix_eff[1] / 8);
      }
    }
    temp = (eff / 8).toFixed(2);
    return temp;
  }

  getSet = (num: number) => {
    switch (num) {
      case 1:
        return 'Energy';
      case 2:
        return 'Guard';
      case 3:
        return 'Swift';
      case 4:
        return 'Blade';
      case 5:
        return 'Rage';
      case 6:
        return 'Focus';
      case 7:
        return 'Endure';
      case 8:
        return 'Fatal';
      case 9:
        return '';
      case 10:
        return 'Despair';
      case 11:
        return 'Vampire';
      case 12:
        return '';
      case 13:
        return 'Violent';
      case 14:
        return 'Nemesis';
      case 15:
        return 'Will';
      case 16:
        return 'Shield';
      case 17:
        return 'Revenge';
      case 18:
        return 'Destroy';
      case 19:
        return 'Fight';
      case 20:
        return 'Determination';
      case 21:
        return 'Enhance';
      case 22:
        return 'Accuracy';
      case 23:
        return 'Tolerance';
    }
    return '-';
  }

  getStat = (stat: number) => {
    switch (stat) {
      case 1:
        return 'HP +';
      case 2:
        return 'HP %';
      case 3:
        return 'ATT +';
      case 4:
        return 'ATT %';
      case 5:
        return 'DEF +';
      case 6:
        return 'DEF %';
      case 7:
        return 'NULL';
      case 8:
        return 'SPD';
      case 9:
        return 'CRIT';
      case 10:
        return 'CDMG';
      case 11:
        return 'RES';
      case 12:
        return 'ACC';
    }
    return '-';
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

  isGem = (input: number) => {
    if(input){
      return '<i class="far fa-gem"></i>';
    }
    return;
  }
}

export interface Rune {
  set_id: string;
  slot_no: number;
  occupied_id: number;
  occupied_type: number;
  primary_stat_type: string;
  primary_stat_value: number;
  inate_stat_type: string;
  inate_stat_value: number;
  sub_stats: {
    0: Stat;
    1: Stat;
    2: Stat;
    3: Stat;
  };
  upgrade: number;
  efficiency: string;
}

export interface Stat {
  type: string;
  value: number;
  gem: number;
  grind: number;
}
