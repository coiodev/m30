import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mgmt30-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name!: string;
  @Input() disabled: boolean = false;

  asset!: string;
  hasAsset: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!!this.name) {
      this.asset = `/assets/mm/card-moving-motivators-${this.name}.svg`;
      this.hasAsset = true;
    }
  }

}
