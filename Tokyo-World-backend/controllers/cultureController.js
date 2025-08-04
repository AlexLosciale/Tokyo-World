import cultureData from '../data/culture.js';

export const getCulture = (req, res) => {
  res.json(cultureData);
};