export type PrePokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[],
  sprites: {
    front_default: string
  }
}

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: {
    slot: number;
    name: string;
  }[];
  stats: {
    base_stat: number;
    name: string;
  }[],
  url: string;
}

export type PokemonPageType = {
  count: number;
  previous: string;
  next: string;
  results: Pokemon[];
}
