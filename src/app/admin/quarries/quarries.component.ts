import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarries',
  templateUrl: './quarries.component.html',
  styleUrls: ['./quarries.component.css']
})
export class QuarriesComponent implements OnInit {
  public userInfos: Array<Object> = [
    { id: 1, text: '+971558600740' },
    { id: 2, text: '+971558600741' },
    { id: 3, text: '+971558600742' },
    { id: 4, text: '+971558600743' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
