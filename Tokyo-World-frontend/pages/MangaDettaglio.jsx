import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../src/context/CartContext";

export default function MangaDettaglio() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedManga, setSelectedManga] = useState(null);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`http://localhost:5000/api/culture/${id}`);
        if (!res.ok) throw new Error(`Errore HTTP: ${res.status}`);

        const data = await res.json();
        setManga(data);
      } catch (error) {
        setError(error.message || "Errore sconosciuto");
        setManga(null);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Caricamento...</p>;
  if (error) return <p className="text-center mt-5 text-danger">Errore: {error}</p>;
  if (!manga) return <p className="text-center mt-5">Nessun dato trovato</p>;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title,
      author,
      releaseDate,
      status,
      price,
      image,
    });
    setSelectedManga({ title });
  };

  const {
    title,
    author,
    genre,
    releaseDate,
    price,
    status,
    descriptionLong,
    image,
  } = manga;

  const formatDate = (dateString) => {
    if (!dateString) return "Data non disponibile";
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatPrice = (price) =>
    typeof price === "number"
      ? price.toLocaleString("it-IT", { style: "currency", currency: "EUR" })
      : "Prezzo non disponibile";

  return (
    <div className="container py-4 my-5">
      <h1 className="mb-5 text-center">{title || "Titolo non disponibile"}</h1>
      <div className="row align-items-center">
        <div
          className="col-md-6 position-relative d-flex justify-content-center"
          style={{
            borderRadius: "8px",
            overflow: "visible",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {image && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "calc(100% + 20px)",
                marginTop: "-10px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(10px)",
                zIndex: 0,
                borderRadius: "8px",
              }}
            />
          )}
          {image ? (
            <img
              src={image}
              alt={title}
              style={{
                width: "300px",
                height: "450px",
                borderRadius: "8px",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "300px",
                height: "450px",
                position: "relative",
                zIndex: 1,
                backgroundColor: "#eee",
                borderRadius: "8px",
              }}
            >
              Immagine non disponibile
            </div>
          )}
        </div>
        <div
          className="col-md-6"
          style={{ paddingLeft: "30px", backgroundColor: "white", borderRadius: "8px" }}
        >
          <p><strong>Autore:</strong> {author || "Non disponibile"}</p>
          <p>
            <strong>Genere:</strong>{" "}
            {Array.isArray(genre) && genre.length > 0 ? genre.join(", ") : "Non disponibile"}
          </p>
          <p><strong>Data di rilascio:</strong> {formatDate(releaseDate)}</p>
          <p><strong>Prezzo:</strong> {formatPrice(price)}</p>
          <p><strong>Stato:</strong> {status || "Non disponibile"}</p>
          <p><strong>Descrizione:</strong> {descriptionLong || "Non disponibile"}</p>
          <button
            className="btn btn-danger d-flex align-items-center gap-2"
            onClick={handleAddToCart}
          >
            Aggiungi al carrello <FontAwesomeIcon icon={faShoppingCart} />
          </button>       
        </div>
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
                <p>Hai ordinato <strong>{selectedManga.title}</strong> con successo!</p>
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
