import { Component, OnDestroy, OnInit } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { BehaviorSubject } from 'rxjs';
import { MMService } from '../mm.service';

interface Motivator {
  name: string;
  isUsed: BehaviorSubject<boolean>;
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
export class MMViewComponent implements OnInit, OnDestroy {

  motivators: Motivator[] = [];
  entries: Entry[] = [];

  source = this.dnd.dragSource("MOTIVATOR", {
    beginDrag: () => {
      console.log("begin dragging motivator");
      return {};
    },
    endDrag: (monitor) => {
      console.log("end dragging motivator");
    },
  });

  isDragging$ = false;

  isDragging(event: boolean) {
    this.isDragging$ = event;
  }

  constructor(private dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void {
    for (let i = 0; i < 10; ++i) {
      this.entries.push({ name: "", populated: false });
    }

    Object.keys(this.mmService.motivators).forEach((name: string) => {
      this.motivators.push({
        name: name,
        isUsed: this.mmService.subscribe(name),
      });
    });
  }

  ngOnDestroy(): void {
      this.source.unsubscribe();
      for (let entry of this.motivators) {
        entry.isUsed.unsubscribe();
      }
  }

}
