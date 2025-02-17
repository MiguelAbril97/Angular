import { Platform } from './platform';

export class Juego {
  constructor(
   public id: number,
   public background_image: string,
   public name: string,
   public released: string,
   public metacritic: number,
   public playtime: number,
   public platforms: { platform: Platform }[]
  ) {
    this.id = id;
    this.background_image = background_image;
    this.name = name;
    this.released = released;
    this.metacritic = metacritic;
    this.playtime = playtime;
    this.platforms = platforms;
  }
}
  