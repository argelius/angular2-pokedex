/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PokedexService } from './pokedex.service';

describe('Service: Pokedex', () => {
  beforeEach(() => {
    addProviders([PokedexService]);
  });

  it('should ...',
    inject([PokedexService],
      (service: PokedexService) => {
        expect(service).toBeTruthy();
      }));
});
