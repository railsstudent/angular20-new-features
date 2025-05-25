import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PokemonPageService } from '../services/pokemon-page.service';
import { PokemonRowComponent } from './pokemon-row.component';
import { PokemonPageType } from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonRowComponent],
  templateUrl: './pokemon-page.component.html',
  styles: `
    p {
      padding: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPageComponent {

  url = signal('https://pokeapi.co/api/v2/pokemon?limit=6');

  pokemonPageService = inject(PokemonPageService);

  pokemonPageRef = rxResource<PokemonPageType, string>({
    params: () => this.url(),
    stream: ({ params: url }) => this.pokemonPageService.paginate(url),
    defaultValue: {
      count: 0,
      previous: '',
      next: '',
      results: []
    },
  });

  value = computed(() => this.pokemonPageRef.hasValue() ? 
    this.pokemonPageRef.value() : undefined
  );

  nextUrl = computed(() => this.value()?.next || '');
  prevUrl = computed(() => this.value()?.previous || '');
}

