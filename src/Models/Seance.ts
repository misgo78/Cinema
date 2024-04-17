import IFilm from "./Film";

export default interface ISession { 
    film: IFilm; 
    date: Date; 
    time: string; 
    availableSeats: number;
    }