/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

interface TeamEntry {
  name: string;
  desc: string;
}

@Component({
  selector: 'mgmt30-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  teams: TeamEntry[] = [];

  teamCreateForm = this.fb.group({
    name: [null, Validators.required],
    desc: [null],
  });

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  showDialog(content: any) {
    this.modalService.open(content, { centered: true });
  }

  createTeam(modal?: NgbModalRef) {
    if (!this.teamCreateForm.valid) {
      return;
    }

    const name: string = this.teamCreateForm.get("name")?.value;
    let desc: string = this.teamCreateForm.get("desc")?.value;

    if (!desc) {
      desc = "";
    }

    if (!name) {
      throw new Error("name is null");
    }

    this.teams.push({ name: name, desc: desc });
    if (!!modal) {
      modal.close();
    }

    this.teamCreateForm.reset();
  }

}
