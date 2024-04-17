import IDirector from "./Realisator";

export default interface IFilm { 
    title: string; 
    releaseYear: number; 
    genre: string; 
    directors: IDirector[];
    }