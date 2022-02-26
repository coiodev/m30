import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { MMService } from '../mm.service';

declare type MotivatorType = {
  name: string;
};

@Component({
  selector: 'mgmt30-mm-holder',
  templateUrl: './mm-holder.component.html',
  styleUrls: ['./mm-holder.component.scss']
})
export class MmHolderComponent implements OnInit, OnDestroy {

  populated: boolean = false;
  motivatorName: string = "";

  target = this.dnd.dropTarget("MOTIVATOR", {
    canDrop: (monitor) => {
      return !this.populated;
    },
    drop: (monitor) => {
      const item = monitor.getItem();
      if (!!item) {
        this.motivatorName = (item as MotivatorType).name;
        this.populated = true;
        this.mmService.use(this.motivatorName);
      }
      console.log("dropped item: ", item);
    },
  });

  isOver$ = this.target.listen(m => m.isOver() && !this.populated);

  constructor(public dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.target.unsubscribe();
  }

}
