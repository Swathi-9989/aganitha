import React from "react";

export default function Contact() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Contact Us</h2>

      <div className="row">
        
        {/* Contact Details */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4>Get in Touch</h4>
            <p className="mt-3">
              Have questions, feedback or need help with your order?  
              We're here to assist you anytime!
            </p>

            <h5 className="mt-4">📞 Phone</h5>
            <p>xxxxxxxxx</p>

            <h5 className="mt-4">📧 Email</h5>
            <p>support@myshop.com</p>

            <h5 className="mt-4">📍 Address</h5>
            <p>
              MyShop Online Store  
              2nd Floor, Green City Complex  
              Hyderabad, Telangana - 500001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h4>Send us a Message</h4>

            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
