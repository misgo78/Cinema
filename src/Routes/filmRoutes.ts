import { Router, Request, Response } from "express";
import IFilm from "../Models/Film";

const router = Router();

let films: IFilm[] = [
    {
        title:"blabla",
        releaseYear: 2024,
        genre:"blabla",
        directors:[{
            name: "blabla",
            birthDate: new Date(1828, 9, 8),
            biography: "blabla" ,
        },]
    },
];

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(films);
});

router.get('/:title', (req: Request, res: Response) => {
    const film = films.find(f => f.title === req.params.title);
    if (!film) return res.status(404).send('Réalisateur non trouvé');
    res.json(film);
});

router.post('/', (req: Request, res: Response) => {
    const film: IFilm = req.body;
    films.push(film);
    res.status(201).send('Réalisateur ajouté');
});

router.put('/:name', (req: Request, res: Response) => {
    const index = films.findIndex((f) => f.title === req.params.title);
    if (index === -1) return res.status(404).send('Auteur non trouvé');
    films.splice
    res.send('Auteur mis à jour');
  });

router.delete('/:title', (req: Request, res: Response) => {
    const index = films.findIndex(f => f.title === req.params.title);
    if (index === -1) return res.status(404).send('Réalisateur non trouvé');
    films.splice(index, 1);
    res.send('Réalisateur supprimé');
});

export default router;