import { useCart } from "../src/context/CartContext";

export default function MangaCarello() {
  const { cart, getTotal } = useCart();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Manga Carello</h1>
      {cart.length === 0 ? (
        <p className="text-center">Il carrello è vuoto.</p>
      ) : (
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">img</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Data</th>
              <th scope="col">Status</th>
              <th scope="col">Prezzo</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
              </tr>
            ))}
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
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
