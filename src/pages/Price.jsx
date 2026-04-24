import React, { useState } from "react";

const Price = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Basic Plan",
      price: "₹4,999",
      duration: "per listing",
      features: [
        "1 Property Listing",
        "15 Days Visibility",
        "Basic Lead Support",
        "No Highlighting",
      ],
    },
    {
      title: "Premium Plan",
      price: "₹9,999",
      duration: "per listing",
      features: [
        "5 Property Listings",
        "60 Days Visibility",
        "Priority Lead Support",
        "Highlighted Listings",
        "Featured on Homepage",
      ],
      highlight: true,
    },
    {
      title: "Enterprise Plan",
      price: "₹19,999",
      duration: "monthly",
      features: [
        "Unlimited Listings",
        "90 Days Visibility",
        "Dedicated Account Manager",
        "Premium Support",
        "Priority Homepage Display",
      ],
    },
  ];

  const handleSelectPlan = (planTitle) => {
    setSelectedPlan(planTitle);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

return (
  <div className="min-vh-100 bg-light py-5 px-3">
    <div className="text-center mb-5"  >
      <h2 className="fw-bold" style={{ color: "#335393", fontSize: "2.5rem" }}>
        Pricing Plans
      </h2>
      <p className="mt-3 text-secondary mx-auto" style={{ maxWidth: "600px" }}>
        Choose the best plan that fits your property listing needs. Upgrade anytime as your requirements grow.
      </p>
    </div>

    <div className="container mb-5">
      <div className="row g-4">
        {plans.map((plan, idx) => (
          <div key={idx} className="col-md-4">
            <div
              className={`rounded p-4 border shadow-sm h-100 d-flex flex-column justify-content-between ${
                plan.highlight
                  ? "bg-success text-white border-success shadow-lg scale-105"
                  : "bg-white text-dark border-light"
              }`}
            >
              <div>
                <h3 className="h5 fw-semibold mb-3">{plan.title}</h3>
                <div className="h3 fw-bold mb-2">{plan.price}</div>
                <p className="mb-4">{plan.duration}</p>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="d-flex align-items-center mb-2">
                      <span className="text-success me-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan(plan.title)}
                className={`btn w-100 mt-2 rounded-pill ${
                  plan.highlight
                    ? "btn-light text-success"
                    : "btn-success text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Form Section */}
    {selectedPlan && (
      <div className="container mb-5">
        <div className="bg-white p-5 rounded shadow">
          <h3 className="h4 fw-bold text-dark mb-4">Book "{selectedPlan}"</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                placeholder="Contact Number"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={selectedPlan}
                readOnly
                className="form-control bg-light"
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Additional Information"
                rows="4"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-success text-white px-4 py-2 w-100 rounded-pill"
                style={{ backgroundColor: "#335393" }}
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
);

};

export default Price;
