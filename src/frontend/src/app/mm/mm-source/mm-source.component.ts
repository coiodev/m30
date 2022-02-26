import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { BehaviorSubject } from 'rxjs';
import { MMService } from '../mm.service';

@Component({
  selector: 'mgmt30-mm-source',
  templateUrl: './mm-source.component.html',
  styleUrls: ['./mm-source.component.scss']
})
export class MmSourceComponent implements OnInit, OnDestroy {

  @Input() name: string = "";
  @Output() isDragging = new EventEmitter<boolean>();

  isUsed: boolean = false;
  sub?: BehaviorSubject<boolean> = undefined;

  source = this.dnd.dragSource("MOTIVATOR", {
    beginDrag: () => {
      this.isDragging.emit(true);
      return {name: this.name};
    },
    canDrag: (monitor) => !this.isUsed,
    endDrag: (monitor) => {
      this.isDragging.emit(false);
    },
  })

  constructor(private dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void {
    this.sub = this.mmService.subscribe(this.name);
    this.sub.subscribe((value: boolean) => {
      this.isUsed = value;
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.source.unsubscribe();
  }

}
