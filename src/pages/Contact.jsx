import React, { useState } from "react";
import emailjs from "emailjs-com";
// import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_emvfrmo", // ✅ Your service ID
        "template_szxp2yc", // ✅ Your template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "2K-8VzSS5KV80UWSh" // ✅ Your public key
      )
      .then(() => {
        alert("Message sent successfully!");

        const whatsappMessage = `*New Contact Form Submission*:
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📝 Message: ${formData.message}`;

        window.open(
          `https://wa.me/918438438413?text=${encodeURIComponent(whatsappMessage)}`,
          "_blank"
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <div className="bg-light py-5">
      <div className="container text-center mb-5" >
        <h1 className="fw-bold mb-3" style={{ color: "#038A5E" }}>
          Get in Touch
        </h1>
        <p className="text-muted fs-5">
          We’re here to help! Whether you’re buying, selling, renting, or just
          have a question — reach out to the Sonachala sonachala square team.
        </p>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h2 className="fw-semibold mb-4" style={{ color: "#038A5E" }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="form-control form-control-lg border-warning-subtle"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control form-control-lg border-warning-subtle"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="form-control form-control-lg border-warning-subtle"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    className="form-control form-control-lg border-warning-subtle"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg text-white w-100"
                  style={{ backgroundColor: "#038A5E" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h2 className="fw-semibold mb-4" style={{ color: "#038A5E" }}>
                Our Contact Info
              </h2>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <strong style={{ color: "#038A5E" }}>📍 Registered Address:</strong>{" "}
                  Hrify Technologies Pvt Ltd - Annai Parvathi Nagar, Vengikkal, Tiruvannamalai, Tamil Nadu 606604
                </li>
                <li className="mb-3">
                  <strong style={{ color: "#038A5E" }}>📞 Phone:</strong> +91
                  8608601049
                </li>
                <li className="mb-3">
                  <strong style={{ color: "#038A5E" }}>✉️ Email:</strong>{" "}
                  sonachalasquare.support@gmail.com
                </li>
                <li className="mb-3">
                  <strong style={{ color: "#038A5E" }}>🕒 Hours:</strong> Mon - Sat:
                  9:00 AM to 7:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5 rounded-4 overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6031298557723!2d79.06316677482904!3d12.275114387979931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc1e138ac2625%3A0x8693e592d83a0e80!2sHrify%20Technologies%20pvt%20Ltd!5e0!3m2!1sen!2sin!4v1772884416000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
