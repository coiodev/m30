import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Motivator {
  name: string;
  used: boolean;
}

export interface MotivatorEntry {
  motivator?: Motivator;
  populated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MMService {

  readonly MOTIVATOR_NAMES: string[] = [
    "acceptance",
    "curiosity",
    "freedom",
    "goal",
    "honor",
    "mastery",
    "order",
    "power",
    "relatedness",
    "status",
  ];

  motivators: {[id: string]: Motivator} = {};
  orderedEntries: MotivatorEntry[] = [];

  private observers: {[id: string]: BehaviorSubject<boolean>} = {};

  orderedObserver: BehaviorSubject<MotivatorEntry[]>;

  constructor() {
    this.MOTIVATOR_NAMES.forEach((m: string) => {
      this.motivators[m] = { name: m, used: false};
      this.observers[m] = new BehaviorSubject<boolean>(false);
      this.orderedEntries.push({ populated: false });
    });
    this.orderedObserver =
      new BehaviorSubject<MotivatorEntry[]>(this.orderedEntries);
  }

  isUsed(name: string): boolean {
    if (!Object.keys(this.motivators).includes(name)) {
      throw new Error("Unknown name");
    }
    return this.motivators[name].used;
  }

  subscribe(name: string): BehaviorSubject<boolean> {
    if (!Object.keys(this.observers).includes(name)) {
      throw new Error(`Unknown name ${name} on subscribe`);
    }
    return this.observers[name];
  }

  use(name: string): void {
    if (!Object.keys(this.observers).includes(name)) {
      throw new Error("Unknown name");
    }
    this.motivators[name].used = true;
    this.observers[name].next(true);
  }

  setOrderedEntries(entries: MotivatorEntry[]): void {
    this.orderedEntries = entries;
    this.orderedObserver.next(this.orderedEntries);
  }
}
