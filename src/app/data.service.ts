import { Injectable } from '@angular/core';

export interface Entry {
  name: string;
  id: number;
  children: Entry[];
  items: Item[];
}

export interface Item {
  name: string;
  id: number;
}

const L1_SIZE = 5000;
const L2_MAX_SIZE = 10;
const ITEM_MAX_SIZE = 10;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): Entry[] {
    let currentIndex = 1;
    const entries = Array.from({ length: L1_SIZE }, () =>
      this.getRandomEntry(currentIndex++, L2_MAX_SIZE)
    );
    return entries;
  }

  getRandomEntry(id: number, maxChildrenCount: number = 0): Entry {
    const result = {
      id: id,
      name: `Entry #${id}`,
      items: [],
      children: [],
    };

    if (maxChildrenCount) {
      let currentIndex = 1;
      result.children = Array.from({ length: this.getRandom(2, L2_MAX_SIZE }, () =>
        this.getRandomEntry(currentIndex++)
      );
    } else {
      result.items = this.getRandomItems(id);
    }
    return result;
  }

  getRandomItems(main: number) {
    const length = this.getRandom(2, ITEM_MAX_SIZE);
    let item = main * 1_000_000;

    return Array.from({ length }, () => ({
      id: item,
      name: `Part #${main}/${item++}`,
    }));
  }

  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
