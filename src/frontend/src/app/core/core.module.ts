import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainLayoutComponent } from './layouts/main/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class CoreModule { }
