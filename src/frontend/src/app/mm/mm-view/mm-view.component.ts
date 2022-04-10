/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
*/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { SortableSpec, DraggedItem } from '@ng-dnd/sortable';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SidebarEntry } from 'src/app/core/sidebar/sidebar.component';
import { MMService, MotivatorEntry } from '../mm.service';

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
  entries: MotivatorEntry[] = [];
  tmpList: MotivatorEntry[] = [];

  sidebarEntries: SidebarEntry[] = [
    { label: "First Entry", url: "" },
    { label: "Second Entry", url: "" },
  ]

  private entriesSubject?: Subscription;

  constructor(private dnd: DndService, private mmService: MMService) { }

  ngOnInit(): void {    

    Object.keys(this.mmService.motivators).forEach((name: string) => {
      this.motivators.push({
        name: name,
        isUsed: this.mmService.subscribe(name),
      });
    });

    this.entriesSubject = this.mmService.orderedObserver.subscribe({
      next: (entries: MotivatorEntry[]) => {
        this.entries = entries;
        this.tmpList = entries;
      },
    });
  }

  ngOnDestroy(): void {
      for (let entry of this.motivators) {
        entry.isUsed.unsubscribe();
      }
      this.entriesSubject?.unsubscribe();
  }

  move(item: DraggedItem<MotivatorEntry>): MotivatorEntry[] {
    const tmp: MotivatorEntry[] = this.entries.slice(0);
    tmp.splice(item.index, 1);
    tmp.splice(item.hover.index, 0, item.data);
    return tmp;
  }

  spec: SortableSpec<MotivatorEntry> = {
    type: "IMPORTANCE",
    trackBy: (x: MotivatorEntry) => {
      return x.motivator?.name
    },
    hover: (item: DraggedItem<MotivatorEntry>) => {
      this.tmpList = this.move(item)
    },
    drop: (item: DraggedItem<MotivatorEntry>) => {
      this.tmpList = this.entries = this.move(item);
      this.mmService.setOrderedEntries(this.entries);
    },
    endDrag: (item) => {
      this.tmpList = this.entries;
    },
  };

}
