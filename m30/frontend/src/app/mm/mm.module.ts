import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
*/
import { MMRoutingModule } from './mm-routing.module';
import { CardComponent } from './card/card.component';
import { MMViewComponent } from './mm-view/mm-view.component';
import { MmHolderComponent } from './mm-holder/mm-holder.component';
import { DndModule } from '@ng-dnd/core';
import { MmSourceComponent } from './mm-source/mm-source.component';
import { DndSortableModule } from '@ng-dnd/sortable';
import { DndMultiBackendModule, HTML5Backend, MouseTransition } from '@ng-dnd/multi-backend';
import MultiBackend from 'dnd-multi-backend';
import { CoreModule } from '../core/core.module';


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
    CoreModule,
  ],
  exports: [
    CardComponent,
    MMViewComponent,
    MmHolderComponent,
    MmSourceComponent
  ]
})
export class MMModule { }
