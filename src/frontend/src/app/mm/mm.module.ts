import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMRoutingModule } from './mm-routing.module';
import { CardComponent } from './card/card.component';
import { MMViewComponent } from './mm-view/mm-view.component';
import { MmHolderComponent } from './mm-holder/mm-holder.component';
import { DndModule } from '@ng-dnd/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MmSourceComponent } from './mm-source/mm-source.component';


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
    DndModule.forRoot({ backend: HTML5Backend}),
  ],
  exports: [
    CardComponent,
    MMViewComponent,
    MmHolderComponent,
    MmSourceComponent
  ]
})
export class MMModule { }
