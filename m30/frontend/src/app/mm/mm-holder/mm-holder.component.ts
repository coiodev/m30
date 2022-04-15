import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { MMService, Motivator, MotivatorEntry } from '../mm.service';

declare type MotivatorSourceType = { motivator: Motivator };

@Component({
  selector: 'mgmt30-mm-holder',
  templateUrl: './mm-holder.component.html',
  styleUrls: ['./mm-holder.component.scss'],
})
export class MmHolderComponent implements OnInit, OnDestroy {

  @Input("motivator") entry: MotivatorEntry = { populated: false};

  target = this.dnd.dropTarget("MOTIVATOR", {
    canDrop: (monitor) => {
      return !this.entry.populated;
    },
    drop: (monitor) => {
      const item: MotivatorSourceType =
        (monitor.getItem() as MotivatorSourceType);
      if (!!item) {
        this.entry.motivator = item.motivator;
        this.entry.populated = true;
        this.mmService.use(this.entry.motivator.name);
      }
    },
  });

  isOver$ = this.target.listen(m => m.isOver() && !this.entry.populated);

  constructor(public dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.target.unsubscribe();
  }

}
