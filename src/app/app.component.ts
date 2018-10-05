import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updateCount: number = 0;
  title: string = 'reapp - sw';
  updates: Array<String> = [
    'Update 1 - details',
    'Update 2 - details'
  ]
}
