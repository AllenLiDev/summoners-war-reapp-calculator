import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MyRunes',
  templateUrl: './myRunes.component.html',
  styleUrls: ['./myRunes.component.scss']
})
export class MyRunesComponent implements OnInit {
  dateObj: Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
