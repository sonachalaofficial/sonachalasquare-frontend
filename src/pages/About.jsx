import React from "react";
import { Link } from "react-router-dom";

import trustpatner from "../assets/services/trustpatner.jpg";
import cities from "../assets/services/cities.jpg";
import teanetsupport from "../assets/services/teanetsupport.jpg";
import payment from "../assets/services/payment.jpg";
import img1 from "../assets/careers/about.png"



const About = () => {
  return (
    <div className="bg-light text-dark ">
      {/* Hero Section */}
      <section
        className="position-relative"
        style={{ height: "60vh", width: "100%" }}
      >
        <img
          src={img1}
          alt="Managed Property Building"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        {/* <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <h1 className="text-white display-4 fw-bold text-center px-4">
            Welcome to Sonagiri Property Management
          </h1>
        </div> */}
      </section>

      {/* Main Content */}
      <section className="container py-5">
        {/* Intro Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-semibold mb-4" style={{ color: "#335393" }}>
              Who We Are
            </h2>
            <p className="lead mb-4">
              <strong style={{ color: "#335393" }}>Sonagiri</strong> is a
              trusted name in professional property management, offering modern,
              reliable, and stress-free solutions for residential and commercial
              property owners.
            </p>
            <p className="lead mb-4">
              With deep market knowledge and a passion for excellence, we ensure
              every property is managed to its full potential— boosting ROI,
              retaining tenants, and maintaining long-term value.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80"
              alt="Sonachala plus Management"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white p-5 rounded shadow mb-5">
          <h2 className="fw-semibold mb-4 text-center">Our Mission & Vision</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3" style={{ color: "#335393" }}>
                Our Mission
              </h3>
              <p>
                To deliver hassle-free, transparent, and efficient property
                management solutions that empower owners and elevate tenant
                satisfaction. We are committed to protecting assets, maximizing
                income, and building long-term relationships based on trust and
                performance.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3" style={{ color: "#335393" }}>
                Our Vision
              </h3>
              <p>
                To be India’s most respected and innovative property management
                company, setting new standards in service, technology, and
                customer experience. We envision a future where property
                ownership is effortless and rewarding for every client.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-5">
          <h2
            className="fw-semibold mb-4 text-center"
            style={{ color: "#335393" }}
          >
            Our Core Services
          </h2>
          <div className="row g-4 text-center">
            {[
              "Tenant Solutions",
              "Property Maintenance",
              "Financial Reporting",
              "Legal Assistance",
              "Marketing & Listing",
              "Rent Collection",
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white p-4 rounded shadow h-100 d-flex flex-column justify-content-start transition">
                  <h4 className="fw-bold mb-3" style={{ color: "#335393" }}>
                    {service}
                  </h4>
                  <p className="text-muted">
                    {service === "Tenant Solutions" &&
                      "From marketing to lease signing, we handle all tenant-related tasks to ensure your property remains occupied."}
                    {service === "Property Maintenance" &&
                      "Proactive repairs, 24/7 support, and regular inspections to keep properties top-tier and hassle-free."}
                    {service === "Financial Reporting" &&
                      "Transparent monthly reports and online dashboards help you stay updated with your property’s performance."}
                    {service === "Legal Assistance" &&
                      "Guidance on rental agreements, eviction processes, and compliance with local property laws."}
                    {service === "Marketing & Listing" &&
                      "Strategic online and offline marketing to attract quality tenants or buyers quickly."}
                    {service === "Rent Collection" &&
                      "Timely and secure rent collection with automated reminders and payment tracking."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-5">
          <h2 className="fw-semibold mb-3">Partner with Sonagiri</h2>
          <p className="mb-4">
            Discover smarter property management with Sonagiri. Let’s protect
            and grow your investment—together.
          </p>
          <Link
            to="/contact"
            className="btn btn-success px-4 py-2 rounded-pill shadow"
            style={{ backgroundColor: "#335393", borderColor: "#335393" }}
          >
            Contact Us
          </Link>
        </div>
      </section>



      <section className="py-5">
        <div className="container">


          {/* Section 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7">
              <p className="text-uppercase text-muted small mb-2">
                Why Choose Us
              </p>
              <h3 className="fw-bold mb-3">
                Your Trusted Partner in Property Management
              </h3>
              <p>
                With over a decade of proven excellence, Sonachala plusprovides
                comprehensive property management services tailored to meet the
                diverse needs of property owners, NRIs, and tenants across
                India. Our experienced team bridges the gap between owners and
                reliable tenants, ensuring properties are well maintained and
                tenancies run smoothly. Whether you're seeking tenant placement,
                property supervision, or hassle-free rent collection, we offer
                solutions that simplify ownership and enhance peace of mind.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={trustpatner}
                alt="Trusted Partner"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-5 order-md-1 order-2">
              <img
                src={cities}
                alt="Local Expertise"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 order-md-2 order-1">
              <p className="text-uppercase text-muted small mb-2">
                Local Expertise
              </p>
              <h4 className="fw-bold mb-3">
                Serving Major Cities Across South India
              </h4>
              <p>
                Our professional services extend to key cities such as Chennai,
                Coimbatore, Madurai, Trichy, and Pondicherry. We understand
                local market trends and tenant expectations, allowing us to
                provide strategic advice and efficient management for property
                owners. Our on-the-ground teams ensure seamless service delivery
                with local insight and personalized attention.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7">
              <p className="text-uppercase text-muted small mb-2">
                Property Care
              </p>
              <h4 className="fw-bold mb-3">
                Exceptional Maintenance & Tenant Support
              </h4>
              <p>
                We handle all aspects of property upkeep with a proactive
                approach — from routine inspections to maintenance coordination.
                Our experienced staff ensures your property stays in prime
                condition, while our dedicated tenant support fosters positive
                relationships, helping to minimize vacancies and maintain
                consistent rental income for owners.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={teanetsupport}
                alt="Maintenance"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="row align-items-center bg-light p-4 rounded">
            <div className="col-md-5 order-md-1 order-2">
              <img
                src={payment}
                alt="Stress-Free Rent Collection"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 order-md-2 order-1">
              <p className="text-uppercase text-muted small mb-2">
                Stress-Free Rent Collection
              </p>
              <h4 className="fw-bold mb-3">
                Reliable and Timely Payments, Every Month
              </h4>
              <p>
                Say goodbye to late payments and collection headaches. Our team
                manages rent collection on behalf of property owners, ensuring
                timely deposits and clear financial reporting. We work closely
                with tenants to maintain positive relations and prompt payments
                — giving you financial peace of mind and freeing you from
                day-to-day management hassles.
              </p>
            </div>
          </div>


        </div>
      </section>




    </div>
  );
};

export default About;
