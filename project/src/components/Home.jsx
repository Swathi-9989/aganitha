import React from "react";

export default function Home({ cart, increase, decrease }) {
  const itemsList = [
    { id: 1, name: "Tomato", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgQv3oUGyjK8cwS6mdOToqGg6-hGFPT7uDA&s" },
    { id: 2, name: "Potato", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8H3vJsAr97KciqWa3HZmg3QiPaRp9YbFig&s" },
    { id: 3, name: "Banana", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HiIiXX3uMex80XR1M2YJGX18VdQmPvBUgw&s" },
    { id: 4, name: "Apple", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyhH1-yOBHI9rbDTiLuFPvw-BLZ3raKOWMA&s" },
    { id: 5, name: "Chicken", price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ReGjnihI1IwgIL8_KJRWOff8lZWFlJb7xg&s" },
    { id: 6, name: "Mutton", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw7lrAotaGpNK6IJyOJgq0j-YqyBWVQ0qVw&s" },
    { id: 7, name: "Fish", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOILJGGEnaQBPS_bNY-qENgaV_rLq88-2tg&s" },
    { id: 8, name: "Prawns", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIjZNFeVMDs_38QmQOTzkaOOL22VJRUQjjg&s" },
    { id: 9, name: "Eggs (6 pack)", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGh52bDi0GP9tITllnG-bBb46scpsyrNgAQ&s" }
  ];

  // If cart prop is undefined, treat as empty
  const safeCart = cart || {};

  const totalItems = Object.values(safeCart).reduce((a, b) => a + b, 0);

  const totalAmount = Object.entries(safeCart).reduce((total, [id, qty]) => {
    const item = itemsList.find((i) => i.id === parseInt(id));
    return total + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Vegetables, Fruits & Chicken</h2>

      <div className="row">
        {itemsList.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />

              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">₹ {item.price}</p>

                <div className="d-flex justify-content-center align-items-center gap-3">
                  <button
                    className="btn btn-danger  btn-sm rounded-3"
                    onClick={() => decrease(item.id)}
                  >
                    -
                  </button>

                  <span className="fw-bold">{safeCart[item.id] || 0}</span>

                  <button
                    className="btn btn-success  btn-sm rounded-3"
                    onClick={() => increase(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-primary w-100 mt-3 btn-sm rounded-3"
                  onClick={() => increase(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-4 p-3 bg-light border rounded">
        <h4>Cart Summary</h4>

        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Total Amount: <strong className="text-success">₹ {totalAmount}</strong></p>

        <hr />

        <h5>Items in Cart:</h5>

        {totalItems === 0 ? (
          <p className="text-muted">Cart is empty</p>
        ) : (
          <ul className="list-group">
            {Object.entries(safeCart).map(([id, qty]) => {
              const item = itemsList.find((i) => i.id === parseInt(id));
              if (!item) return null;
              return (
                <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    Price: ₹ {item.price}
                  </div>

                  <div className="text-end">
                    Qty: <strong>{qty}</strong>
                    <br />
                    Subtotal: <strong>₹ {item.price * qty}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
