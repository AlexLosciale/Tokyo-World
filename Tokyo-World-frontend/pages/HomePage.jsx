import { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/culture");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Errore nel fetch dei dati:", err);
      }
    };

    fetchData();
  }, []);

  const visibleManga = showAll ? data : data.slice(0, 12);

  return (
    <div>
      <div className="banner-container mb-4">
        <img
          src="/BANNER.png"
          alt="Manga World Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <div className="container py-4">
        <h1 className="mb-4 text-center">Manga più letti</h1>

        <div className="row justify-content-center gx-4 gy-4">
          {visibleManga.map((manga) => (
            <div
              key={manga.id}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <MangaCard manga={manga} />
            </div>
          ))}
        </div>

        {data.length > 12 && (
          <div className="text-center mt-4 mb-5">
            <button
              className="btn text-white"
              onClick={() => setShowAll(!showAll)}
              style={{ backgroundColor: "#c73528" }}
            >
              {showAll ? (
                <>
                  Chiudi{" "}
                  <span style={{ display: "inline-block", transform: "rotate(-90deg)" }}>
                    ➤
                  </span>
                </>
              ) : (
                <>
                  Espandi{" "}
                  <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>
                    ➤
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
