import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { BehaviorSubject } from 'rxjs';
import { MMService, Motivator } from '../mm.service';

@Component({
  selector: 'mgmt30-mm-source',
  templateUrl: './mm-source.component.html',
  styleUrls: ['./mm-source.component.scss']
})
export class MmSourceComponent implements OnInit, OnDestroy {

  @Input() name: string = "";

  item: Motivator = { name: "", used: false};
  isUsed: boolean = false;
  sub?: BehaviorSubject<boolean> = undefined;

  source = this.dnd.dragSource("MOTIVATOR", {
    beginDrag: () => {
      return {motivator: this.item};
    },
    canDrag: (monitor) => !this.isUsed,
    endDrag: (monitor) => { },
  });

  constructor(private dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void {
    this.sub = this.mmService.subscribe(this.name);
    this.sub.subscribe((value: boolean) => {
      this.isUsed = value;
    });
    if (this.name === "") {
      throw new Error("must specify motivator name");
    }
    this.item = this.mmService.motivators[this.name];
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.source.unsubscribe();
  }

}
