import { Router, Request, Response } from "express";
import IDirector from "../Models/Realisator";

const router = Router();

let directors: IDirector[] = [
    {
        name: "blabla",
        birthDate: new Date(1828, 9, 8),
        biography: "blabla" ,
    },
];

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(directors);
});

router.get('/:name', (req: Request, res: Response) => {
    const director = directors.find(d => d.name === req.params.name);
    if (!director) return res.status(404).send('Réalisateur non trouvé');
    res.json(director);
});

router.post('/', (req: Request, res: Response) => {
    const director: IDirector = req.body;
    directors.push(director);
    res.status(201).send('Réalisateur ajouté');
});

router.put('/:name', (req: Request, res: Response) => {
    const index = directors.findIndex((d) => d.name === req.params.name);
    if (index === -1) return res.status(404).send('Auteur non trouvé');
    directors.splice
    res.send('Auteur mis à jour');
  });

router.delete('/:name', (req: Request, res: Response) => {
    const index = directors.findIndex(d => d.name === req.params.name);
    if (index === -1) return res.status(404).send('Réalisateur non trouvé');
    directors.splice(index, 1);
    res.send('Réalisateur supprimé');
});

export default router;