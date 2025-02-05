import { Artista } from './artista';
import { Album } from './album';
export class Cancion{
    constructor(
        public title: string,
        public artist: Artista,
        public album: Album,
        public duration: number,
    ){}
}