import React from "react";

export default function About() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">About Us</h2>

      <div className="card shadow-sm p-4">
        <h4>Welcome to MyShop!</h4>
        <p className="mt-3">
          MyShop is your trusted online store for fresh vegetables, fruits, meat, 
          and daily essentials. We believe in providing clean, high-quality 
          products at affordable prices, delivered straight to your doorstep.
        </p>

        <h5 className="mt-4">Why Choose Us?</h5>
        <ul>
          <li>✔ Fresh and hand-picked vegetables & fruits</li>
          <li>✔ High quality chicken, mutton, fish & seafood</li>
          <li>✔ Fast and safe home delivery</li>
          <li>✔ Best price guarantee</li>
          <li>✔ Easy & secure online ordering</li>
        </ul>

        <h5 className="mt-4">Our Mission</h5>
        <p>
          Our mission is to make grocery shopping simple, fast, and stress-free.
          We aim to bring fresh produce and quality food items directly from 
          farmers and trusted suppliers to your kitchen.
        </p>

        <h5 className="mt-4">Our Vision</h5>
        <p>
          We want to build a platform that connects people with fresh, healthy 
          and affordable food — all with a single click.
        </p>

        <p className="mt-4 text-muted">
          Thank you for choosing MyShop. We’re happy to serve you! 😊
        </p>
      </div>
    </div>
  );
}
