export default function MangaCard({ manga }) {
    // Formatto la data ISO in formato più leggibile, es: 22 Luglio 1997
    const formattedDate = new Date(manga.releaseDate).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return (
      <div
        className="card shadow-sm mx-auto"
        style={{
          width: '250px',
          height: '350px',
          marginBottom: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginTop: '10px', flexShrink: 0 }}>
          {manga.image && (
            <img
              src={manga.image}
              className="card-img-top"
              alt={manga.title}
              style={{
                height: '220px',
                objectFit: 'contain',
                backgroundColor: '#f8f9fa',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          )}
        </div>
        <div
          className="card-body d-flex flex-column align-items-center justify-content-center"
          style={{ flexGrow: 1 }}
        >
          <h5 className="card-title text-center mb-1">{manga.title}</h5>
          <p className="mb-1">Prezzo: €{manga.price.toFixed(2)}</p>
          <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>
            Uscito il: {formattedDate}
          </p>
        </div>
      </div>
    );
  }
  