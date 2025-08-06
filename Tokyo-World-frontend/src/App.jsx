import DefaultLayout from '../layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MangaDettaglio from '../pages/MangaDettaglio';
import MangaNew from '../pages/MangaNew';
import MangaCarello from '../pages/MangaCarello';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={HomePage} />
            <Route path="/novita" Component={MangaNew} />
            <Route path="/manga/:id" Component={MangaDettaglio} />
            <Route path="/carrello" Component={MangaCarello} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;