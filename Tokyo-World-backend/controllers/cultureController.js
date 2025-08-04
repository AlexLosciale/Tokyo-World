import cultureData from '../data/culture.js';

export const getCulture = (req, res) => {
  res.json(cultureData);
};

export const getCultureById = (req, res) => {
  const id = parseInt(req.params.id);
  const manga = cultureData.find((m) => m.id === id);

  if (manga) {
    res.json(manga);
  } else {
    res.status(404).json({ error: 'Manga non trovato' });
  }
};
