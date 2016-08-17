import { Component } from '@angular/core';

import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;

    this.pokedexService.getPokemon(this.pokemon.length, 9)
      .then(pokemon => {
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }
}
