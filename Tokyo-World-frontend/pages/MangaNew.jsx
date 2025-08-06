import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const mangaList = [
  {
    title: 'Vinland Saga',
    author: 'Makoto Yukimura',
    genre: ['Storico', 'Azione', 'Drammatico'],
    releaseDate: '2025-09-10',
    price: 8.90,
    status: 'In arrivo',
    descriptionLong: 'Ambientato nell’era vichinga, racconta la storia di Thorfinn, un giovane guerriero che cerca vendetta per la morte del padre, immerso in un mondo di guerre e intrighi.',
    image: 'https://m.media-amazon.com/images/I/81w5OWafveL._UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Made in Abyss',
    author: 'Akihito Tsukushi',
    genre: ['Avventura', 'Fantasy', 'Drammatico'],
    releaseDate: '2025-09-24',
    price: 7.80,
    status: 'In arrivo',
    descriptionLong: 'Ragazza orfana e robot umanoide scendono in un abisso pieno di misteri e mostri per scoprire la verità sul luogo e sul destino della madre della protagonista.',
    image: 'https://m.media-amazon.com/images/I/81J34NOJQTL._UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Erased (Boku dake ga Inai Machi)',
    author: 'Kei Sanbe',
    genre: ['Thriller', 'Drammatico', 'Soprannaturale'],
    releaseDate: '2025-10-05',
    price: 7.50,
    status: 'In arrivo',
    descriptionLong: 'Un uomo ha la capacità di tornare indietro nel tempo per prevenire tragedie. Cerca di risolvere il mistero del rapimento di una sua compagna di classe da bambino.',
    image: 'https://www.starcomics.com/files/immagini/fumetti-cover/erased9',
  },
  {
    title: 'Goodnight Punpun (Oyasumi Punpun)',
    author: 'Inio Asano',
    genre: ['Drammatico', 'Psicologico', 'Slice of Life'],
    releaseDate: '2025-10-20',
    price: 9.50,
    status: 'In arrivo',
    descriptionLong: 'Seguiamo la crescita e le difficoltà di Punpun, un ragazzo rappresentato come un uccellino stilizzato, in una storia intensa e profondamente emotiva.',
    image: 'https://m.media-amazon.com/images/I/81ePKMVQIqL._UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Noragami',
    author: 'Adachitoka',
    genre: ['Azione', 'Soprannaturale', 'Commedia'],
    releaseDate: '2025-11-03',
    price: 7.90,
    status: 'In arrivo',
    descriptionLong: 'Yato è un dio minore senza tempio che cerca di farsi conoscere aiutando persone e combattendo spiriti maligni, con l’aiuto di una ragazza umana e del suo spirito guerriero.',
    image: 'https://fantasiastore.it/184445-large_default/noragami-27.jpg',
  },
  {
    title: 'Parasyte (Kiseijuu)',
    author: 'Hitoshi Iwaaki',
    genre: ['Horror', 'Sci-fi', 'Drammatico'],
    releaseDate: '2025-11-18',
    price: 8.20,
    status: 'In arrivo',
    descriptionLong: 'Un ragazzo viene infettato da un parassita alieno che prende possesso della sua mano destra, e insieme devono affrontare altri parassiti che minacciano l’umanità.',
    image: 'https://m.media-amazon.com/images/I/71ZYOs8pUBL._UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Mob Psycho 100',
    author: 'ONE',
    genre: ['Azione', 'Commedia', 'Soprannaturale'],
    releaseDate: '2025-12-01',
    price: 7.60,
    status: 'In arrivo',
    descriptionLong: 'Shigeo "Mob" Kageyama è un ragazzo con poteri psichici straordinari che cerca di vivere una vita normale mentre affronta pericoli soprannaturali.',
    image: 'https://www.starcomics.com/files/immagini/fumetti-cover/mobpsycho100-12-1200px',
  },
  {
    title: 'March Comes in Like a Lion (3-gatsu no Lion)',
    author: 'Chica Umino',
    genre: ['Slice of Life', 'Drammatico', 'Psicologico'],
    releaseDate: '2025-12-15',
    price: 8.40,
    status: 'In arrivo',
    descriptionLong: 'Segue la vita di Rei Kiriyama, un giovane prodigio del shogi che affronta solitudine, depressione e crescita personale, aiutato da una famiglia che lo accoglie come un figlio.',
    image: 'https://m.media-amazon.com/images/I/81Sp+HVKIcL.jpg',
  }
];

export default function MangaNew() {
  const [showAll, setShowAll] = useState(false);
  const [selectedManga, setSelectedManga] = useState(null);

  const sortedManga = mangaList.slice().sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
  const visibleManga = showAll ? sortedManga : sortedManga.slice(0, 4);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Novità Manga</h2>

      <div id="mangaCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sortedManga.map((manga, idx) => (
            <div key={manga.title} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img
                src={manga.image}
                className="d-block mx-auto"
                alt={manga.title}
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{manga.title}</h5>
                <p>{manga.descriptionLong}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mangaCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{ filter: "invert(1)", width: "3rem", height: "3rem" }} />
          <span className="visually-hidden">Precedente</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mangaCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" style={{ filter: "invert(1)", width: "3rem", height: "3rem" }} />
          <span className="visually-hidden">Successivo</span>
        </button>
      </div>

      <div className="list-group">
        {visibleManga.map((manga) => (
          <div
            key={manga.title}
            className="list-group-item d-flex align-items-center justify-content-between mb-3"
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div className="d-flex align-items-center">
              <img
                src={manga.image}
                alt={manga.title}
                style={{
                  width: "100px",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginRight: "15px",
                }}
              />
              <div>
                <h5>{manga.title}</h5>
                <p className="mb-1"><strong>Autore:</strong> {manga.author}</p>
                <p className="mb-1"><strong>Genere:</strong> {manga.genre.join(', ')}</p>
                <p className="mb-1"><strong>Data di uscita:</strong> {new Date(manga.releaseDate).toLocaleDateString("it-IT")}</p>
                <p className="mb-1"><strong>Prezzo:</strong> €{manga.price.toFixed(2)}</p>
                <p className="mb-0">{manga.descriptionLong}</p>
              </div>
            </div>
                <button
                    className="btn text-white"
                    style={{ backgroundColor: '#c73528' }}
                    onClick={() => setSelectedManga(manga)}
                >
                    Preordina
                </button>
            </div>
        ))}
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn text-white" onClick={() => setShowAll(!showAll)} style={{ backgroundColor: '#c73528' }}>
          {showAll ? (
            <>Chiudi <span style={{ display: 'inline-block', transform: 'rotate(-90deg)'}}>➤</span></>
          ) : (
            <>Espandi <span style={{ display: 'inline-block', transform: 'rotate(90deg)'}}>➤</span></>
          )}
        </button>
      </div>
      {selectedManga && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ordine Confermato</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedManga(null)}></button>
              </div>
              <div className="modal-body">
                <p>Hai preordinato <strong>{selectedManga.title}</strong> con successo!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn text-white" onClick={() => setSelectedManga(null)} style={{ backgroundColor: '#c73528' }}>
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
