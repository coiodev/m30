/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
*/
import { Component, Input, OnInit } from '@angular/core';

export interface SidebarEntry {
  label: string;
  url: string;
}

@Component({
  selector: 'mgmt30-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() public entries: SidebarEntry[] = [];

  constructor() { }

  ngOnInit(): void { }

}
