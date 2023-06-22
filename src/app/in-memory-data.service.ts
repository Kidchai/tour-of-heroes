import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Storm' },
      { id: 13, name: 'Cheetah Mask' },
      { id: 14, name: 'Señorita Zorro' },
      { id: 15, name: 'Captain Saturn' },
      { id: 16, name: 'Crystalman' },
      { id: 17, name: 'Starlight' },
      { id: 18, name: 'Dr. Mimic' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
