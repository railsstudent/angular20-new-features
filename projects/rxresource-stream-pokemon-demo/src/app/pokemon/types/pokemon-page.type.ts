export type PokemonUrl = {
  name: string;
  url: string;
}

export type PokemonPageUrlType = {
  count: number;
  previous: string;
  next: string;
  results: PokemonUrl[];
}
