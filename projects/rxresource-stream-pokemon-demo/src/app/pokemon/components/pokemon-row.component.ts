import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styles: `
    .wrap {
      display: flex; 
      flex-wrap: wrap; 
    }

    .space_around {
      justify-content: space-around;
    }

    .physical {
      align-items: center;
    }

    img {
      width: 100px;
      height: 100px;
    }

    .flex {
      flex: 1 1 33.33%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonRowComponent {
  pokemon = input.required<Pokemon>({ alias: 'result' });
}

