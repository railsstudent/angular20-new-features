import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonPageService } from '../services/pokemon-page.service';
import { PokemonPageUrlType, PokemonUrl } from '../types/pokemon-page.type';
import { Pokemon } from '../types/pokemon.type';
import { PokemonListComponent } from './pokemon-list.component';

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemon-page.component.html',
  styles: `
    .load {
      display: flex;
      justify-content: space-around; 
      align-items: center;
    }
  `, 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPageComponent {
  url = signal('');

  pokemonPageService = inject(PokemonPageService);

  pokemonPageResource = rxResource<PokemonPageUrlType, string>({
    params: () => this.url(),
    stream: ({ params: url }) => this.pokemonPageService.paginate(url),
    defaultValue: {
      count: 0,
      previous: '',
      next: '',
      results: []
    },
  });

  value = computed(() => 
    this.pokemonPageResource.hasValue() ? 
      this.pokemonPageResource.value() : { results: [] as PokemonUrl[], next: '' }
  );

  nextUrl = computed(() => this.value().next);

  concurrentPokemonsResource = rxResource({
    params: () => this.value(),
    stream: ({ params }) => { 
      const urls = params.results.map((r) => r.url);
      return this.pokemonPageService.concurrentPokemons(urls)
    },
    defaultValue: [] as Pokemon[]
  });

  pokemons = computed(() => this.concurrentPokemonsResource.hasValue() ? 
    this.concurrentPokemonsResource.value() : [] as Pokemon[]);
  
  loadNext() {
    if (this.url()) { 
      this.url.set(this.nextUrl());
    } else {
      this.url.set('https://pokeapi.co/api/v2/pokemon?limit=5');
    }
  }
}

