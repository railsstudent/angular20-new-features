export type PersonWithoutId = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    gender: string;
    films: string[];
}
  
export type Person = PersonWithoutId & { id: number }
