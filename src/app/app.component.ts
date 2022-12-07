import { Component, VERSION } from '@angular/core';
import { DataService, Entry } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data!: Entry[];

  constructor(private dataService: DataService) {
    this.data = dataService.getData();
    console.log('data size: ', this.data.length);
  }
}
