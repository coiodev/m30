import { Component, OnInit } from '@angular/core';

interface Motivator {
  name: string;
  isUsed: boolean;
}

interface Entry {
  name: string;
  populated: boolean;
}

@Component({
  selector: 'mgmt30-mm-view',
  templateUrl: './mm-view.component.html',
  styleUrls: ['./mm-view.component.scss']
})
export class MMViewComponent implements OnInit {

  motivators: Motivator[] = [
    { name: "acceptance", isUsed: false },
    { name: "curiosity", isUsed: false },
    { name: "freedom", isUsed: false },
    { name: "goal", isUsed: false },
    { name: "honor", isUsed: false },
    { name: "mastery", isUsed: false },
    { name: "order", isUsed: false },
    { name: "power", isUsed: false },
    { name: "relatedness", isUsed: false },
    { name: "status", isUsed: false },
  ];

  entries: Entry[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; ++i) {
      this.entries.push({ name: "", populated: false });
    }
  }

}
