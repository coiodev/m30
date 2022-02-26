import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Entry {
  used: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MMService {

  motivators: {[id: string]: Entry} = {
    acceptance: { used: false },
    curiosity: { used: false },
    freedom: { used: false },
    goal: { used: false },
    honor: { used: false },
    mastery: { used: false },
    order: { used: false },
    power: { used: false },
    relatedness: { used: false },
    status: { used: false },
  };

  private observers: {[id: string]: BehaviorSubject<boolean>} = {};

  constructor() {
    Object.keys(this.motivators).forEach((m) => {
      this.observers[m] = new BehaviorSubject<boolean>(this.motivators[m].used);
    });
  }

  isUsed(name: string): boolean {
    if (!Object.keys(this.motivators).includes(name)) {
      throw "Unknown name";
    }
    return this.motivators[name].used;
  }

  subscribe(name: string): BehaviorSubject<boolean> {
    if (!Object.keys(this.observers).includes(name)) {
      throw `Unknown name ${name} on subscribe`;
    }
    return this.observers[name];
  }

  use(name: string): void {
    if (!Object.keys(this.observers).includes(name)) {
      throw "Unknown name";
    }
    this.motivators[name].used = true;
    this.observers[name].next(true);
  }
}
