/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainLayoutComponent } from './layouts/main/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
  ],
  exports: [
    MainLayoutComponent,
    SidebarComponent,
  ],
})
export class CoreModule { }
