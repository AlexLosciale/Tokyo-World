import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import cultureRoutes from './routes/cultureRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotta principale
app.get('/', (req, res) => {
  res.send('Benvenuto nel backend!');
});

// Rotte per la cultura
app.use('/api/culture', cultureRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server attivo su http://localhost:${PORT}`);
});