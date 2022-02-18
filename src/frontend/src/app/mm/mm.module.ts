import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMRoutingModule } from './mm-routing.module';
import { CardComponent } from './card/card.component';
import { MMViewComponent } from './mm-view/mm-view.component';


@NgModule({
  declarations: [
    CardComponent,
    MMViewComponent
  ],
  imports: [
    CommonModule,
    MMRoutingModule
  ],
  exports: [
    CardComponent,
    MMViewComponent
  ]
})
export class MMModule { }
