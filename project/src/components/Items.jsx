import React, { useState } from "react";

export default function Items({ cart, increase, decrease }) {

  const itemsList = [
    { id: 1, name: "Tomato", category: "veg", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgQv3oUGyjK8cwS6mdOToqGg6-hGFPT7uDA&s" },
    { id: 2, name: "Potato", category: "veg", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8H3vJsAr97KciqWa3HZmg3QiPaRp9YbFig&s" },
    { id: 3, name: "Banana", category: "veg", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HiIiXX3uMex80XR1M2YJGX18VdQmPvBUgw&s" },
    { id: 4, name: "Apple", category: "veg", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyhH1-yOBHI9rbDTiLuFPvw-BLZ3raKOWMA&s" },

    { id: 5, name: "Chicken", category: "nonveg", price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ReGjnihI1IwgIL8_KJRWOff8lZWFlJb7xg&s" },
    { id: 6, name: "Mutton", category: "nonveg", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw7lrAotaGpNK6IJyOJgq0j-YqyBWVQ0qVw&s" },
    { id: 7, name: "Fish", category: "nonveg", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOILJGGEnaQBPS_bNY-qENgaV_rLq88-2tg&s" },
    { id: 8, name: "Prawns", category: "nonveg", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIjZNFeVMDs_38QmQOTzkaOOL22VJRUQjjg&s" },
    { id: 9, name: "Eggs (6 pack)", category: "nonveg", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGh52bDi0GP9tITllnG-bBb46scpsyrNgAQ&s" }
  ];

  const [filter, setFilter] = useState("");

  const filteredItems = filter ? itemsList.filter(i => i.category === filter) : [];

  return (
    <div className="container mt-4">
      <h2>Select Category</h2>

      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-success btn-sm rounded-3" onClick={() => setFilter("veg")}>VEG</button>
        <button className="btn btn-danger btn-sm rounded-3 " onClick={() => setFilter("nonveg")}>NON-VEG</button>
      </div>

      {filter === "" && (
        <p className="text-muted mt-3">Click a category to display items</p>
      )}

      <div className="row mt-4">
        {filteredItems.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />

              <div className="card-body text-center">
                <h5>{item.name}</h5>
                <p>₹ {item.price}</p>

                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-danger btn-sm rounded-3" onClick={() => decrease(item.id)}>-</button>
                  <span className="fw-bold">{cart[item.id] || 0}</span>
                  <button className="btn btn-success btn-sm rounded-3" onClick={() => increase(item.id)}>+</button>
                </div>

                <button className="btn btn-primary w-100 mt-2 btn-sm rounded-3" onClick={() => increase(item.id)}>
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
