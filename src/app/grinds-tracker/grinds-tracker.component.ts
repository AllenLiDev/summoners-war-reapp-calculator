import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grinds-tracker',
  templateUrl: './grinds-tracker.component.html',
  styleUrls: ['./grinds-tracker.component.scss']
})
export class GrindsTrackerComponent implements OnInit {
  dateObj: Date = new Date();
  runeTypes: Array<string> = RuneTypes;
  statTypes: Array<string> = StatTypes;
  runeSelected: string = 'None';
  statSelected: string = 'None';
  runeFound: Array<any> = new Array();
  data = JSON.parse(localStorage.getItem('runeData'));

  constructor() { }

  ngOnInit() {
  }

  setRuneSelected = (rune: string) => {
    this.runeSelected = rune;
    if (this.statSelected != 'None') {
      this.findSelected();
    }
  }

  setStatSelected = (stat: string) => {
    this.statSelected = stat;
    if (this.runeSelected != 'None') {
      this.findSelected();
    }
  }

  findSelected = () => {
    // find equipped runes
    this.data.unit_list.forEach(unit => {
      unit.runes.forEach(rune => {
        if (this.getSet(rune.set_id) == (this.runeSelected)) {
          rune.sec_eff.forEach(stat => {
            if (this.getStat(stat[0]) == (this.statSelected)) {
              this.runeFound.push(rune);
            }
          });
        }
      });
    });
    // find inventory runes
    this.data.runes.forEach(rune => {
      if (this.getSet(rune.set_id) == (this.runeSelected)) {
        rune.sec_eff.forEach(stat => {
          if (this.getStat(stat[0]) == (this.statSelected)) {
            this.runeFound.push(rune);
          }
        });
      }
    });
    // filter rune by selected stat
    this.sortByStat('');
  }

  sortByStat = (order: string) => {
    this.runeFound.sort((a, b) => {
      let first;
      let second;
      a.sec_eff.forEach(sec => {
        if (this.getStat(sec[0]) == this.statSelected) {
          first = sec[1] + sec[3];
        }
      });
      b.sec_eff.forEach(sec => {
        if (this.getStat(sec[0]) == this.statSelected) {
          second = sec[1] + sec[3];
        }
      });
      if (order == 'asc') {
        // ascending order
        return first - second;
      } else {// descending order
        return second - first;
      }
    });
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

  getSetId = (num: number) => {
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
    }
    return '-';
  }
}

const RuneTypes: Array<string> = [
  'Energy', 'Guard', 'Swift', 'Blade', 'Rage', 'Focus', 'Endure',
  'Fatal', 'Despair', 'Vampire', 'Violent', 'Nemesis', 'Will',
  'Shield', 'Revenge', 'Destroy', 'Fight', 'Determination',
  'Enhance', 'Accuracy', 'Tolerance'
]

const StatTypes: Array<string> = [
  'HP +', 'HP %', 'ATT +', 'ATT %', 'DEF +', 'DEF %', 'SPD',
]
