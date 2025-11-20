import { Link } from "react-router-dom";

export default function Nav({ cart }) {

  // Calculate total items
  const totalItems = Object.values(cart || {}).reduce((a, b) => a + b, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        MyShop
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/items">Items</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

          {/* CART ICON WITH BADGE */}
          <li className="nav-item ms-3">
            <Link className="nav-link position-relative" to="/">
              🛒 Cart
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "12px" }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
