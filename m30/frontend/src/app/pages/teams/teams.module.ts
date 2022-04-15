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

import { TeamsRoutingModule } from './teams-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import {
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule
} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainViewComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    NgbNavModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NgbModalModule,
  ]
})
export class TeamsModule { }
