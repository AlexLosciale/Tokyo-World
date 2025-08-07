import { useCart } from "../src/context/CartContext";

export default function MangaCarello() {
  const { cart, getTotal, removeFromCart } = useCart();

  return (
    <div
      className="container mt-5"
      style={{ minHeight: "70vh" }}
    >
      <h1 className="text-center mb-4">Manga Carello</h1>

      <table className="table align-middle">
        <thead className="table-light">
          <tr>
            <th>Img</th>
            <th>Title</th>
            <th>Author</th>
            <th>Data</th>
            <th>Status</th>
            <th>Prezzo</th>
            <th>Rimuovi</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                Il carrello è vuoto.
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.title} width="50" />
                </td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.releaseDate}</td>
                <td>{item.status}</td>
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
        {cart.length > 0 && (
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
      {cart.length > 0 && (
        <div className="d-flex justify-content-end mt-4">
          <button className="btn d-flex align-items-center gap-2 mb-5" style={{ backgroundColor: '#c73528', color: 'white' }}>
            Procedi al pagamento <span style={{fontSize: "1.2rem"}}>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
