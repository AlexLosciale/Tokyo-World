import { useState } from "react";
import { useCart } from "../src/context/CartContext";

export default function MangaCarello() {
  const { cart, getTotal, removeFromCart } = useCart();
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedCart = [...cart].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (typeof valA === "string") {
      return sortConfig.direction === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    if (typeof valA === "number") {
      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    }

    return 0;
  });

  const renderSortArrows = (key) => {
    const isActive = sortConfig.key === key;
    return (
      <span style={{ fontSize: "0.8rem", marginLeft: "5px" }}>
        <span style={{ fontWeight: isActive && sortConfig.direction === "asc" ? "bold" : "normal" }}>
          ▲
        </span>
        <span style={{ fontWeight: isActive && sortConfig.direction === "desc" ? "bold" : "normal", marginLeft: "2px" }}>
          ▼
        </span>
      </span>
    );
  };

  return (
    <div className="container mt-5" style={{ minHeight: "70vh" }}>
      <h1 className="text-center mb-4">Manga Carello</h1>

      <table className="table align-middle">
        <thead className="table-light">
          <tr>
            <th>Img</th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("title")}>
              Title{renderSortArrows("title")}
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("author")}>
              Author{renderSortArrows("author")}
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("releaseDate")}>
              Data{renderSortArrows("releaseDate")}
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("status")}>
              Status{renderSortArrows("status")}
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("price")}>
              Prezzo{renderSortArrows("price")}
            </th>
            <th>Rimuovi</th>
          </tr>
        </thead>
        <tbody>
          {sortedCart.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                Il carrello è vuoto.
              </td>
            </tr>
          ) : (
            sortedCart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.title} width="50" />
                </td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.releaseDate}</td>
                <td>
                  {item.status === "Completato" ? (
                    <span className="badge bg-success">Completato</span>
                  ) : item.status === "In corso" ? (
                    <span className="badge bg-warning text-dark">In corso</span>
                  ) : (
                    <span className="badge bg-secondary">Non disponibile</span>
                  )}
                </td>
                <td>
                  {typeof item.price === "number"
                    ? item.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "EUR",
                      })
                    : "N/A"}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        {sortedCart.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan="5" className="text-end fw-bold">
                Totale:
              </td>
              <td className="fw-bold">
                {getTotal().toLocaleString("it-IT", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
              <td></td>
            </tr>
          </tfoot>
        )}
      </table>

      {sortedCart.length > 0 && (
        <div className="d-flex justify-content-end mt-4">
          <button className="btn d-flex align-items-center gap-2 mb-5" style={{ backgroundColor: '#c73528', color: 'white' }}>
            Procedi al pagamento <span style={{ fontSize: "1.2rem" }}>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
