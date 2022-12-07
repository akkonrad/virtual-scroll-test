import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Entry } from '../data.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntriesComponent implements OnInit {
  @Input()
  data: Entry[] = [];

  constructor() {}

  ngOnInit() {}
}
