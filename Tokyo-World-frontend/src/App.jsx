import DefaultLayout from '../layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MangaDettaglio from '../pages/MangaDettaglio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={HomePage} />
            <Route path="/manga/:id" Component={MangaDettaglio} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;