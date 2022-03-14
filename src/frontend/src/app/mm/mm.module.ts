import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMRoutingModule } from './mm-routing.module';
import { CardComponent } from './card/card.component';
import { MMViewComponent } from './mm-view/mm-view.component';
import { MmHolderComponent } from './mm-holder/mm-holder.component';
import { DndModule } from '@ng-dnd/core';
import { MmSourceComponent } from './mm-source/mm-source.component';
import { DndSortableModule } from '@ng-dnd/sortable';
import { DndMultiBackendModule, HTML5Backend, MouseTransition } from '@ng-dnd/multi-backend';
import MultiBackend from 'dnd-multi-backend';


@NgModule({
  declarations: [
    CardComponent,
    MMViewComponent,
    MmHolderComponent,
    MmSourceComponent
  ],
  imports: [
    CommonModule,
    MMRoutingModule,
    DndModule.forRoot({
      backend: MultiBackend,
      options: {
        backends: [
          { backend: HTML5Backend, transition: MouseTransition, },
        ],
      },
    }),
    DndMultiBackendModule,
    DndSortableModule,
  ],
  exports: [
    CardComponent,
    MMViewComponent,
    MmHolderComponent,
    MmSourceComponent
  ]
})
export class MMModule { }
