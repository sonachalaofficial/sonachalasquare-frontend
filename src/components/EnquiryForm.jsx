import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryForm = ({ pageType, title, subtitle, customFields = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_npeqjzm",
        "template_1c63ohn",
        { ...formData, pageType },
        "Q7Q475cnO7gwnp8YK"
      );
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2" style={{ color: '#038A5E' }}>{title}</h2>
              <p className="text-muted">{subtitle}</p>
            </div>

            {status === 'success' && (
              <div className="alert alert-success alert-dismissible fade show rounded-3" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                Thank you! Your enquiry has been submitted successfully. We will contact you shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-danger alert-dismissible fade show rounded-3" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-medium">Full Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3 py-3"
                    placeholder="Enter your full name"
                    disabled={loading}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-medium">Email Address <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3 py-3"
                    placeholder="Enter your email"
                    disabled={loading}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-medium">Phone Number <span className="text-danger">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3 py-3"
                    placeholder="Enter your phone number"
                    disabled={loading}
                  />
                </div>

                {customFields.map((field, index) => (
                  <div key={index} className={`col-md-${field.colSize || 6}`}>
                    <label className="form-label fw-medium">
                      {field.label} {field.required && <span className="text-danger">*</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        className="form-select rounded-3 py-3"
                        disabled={loading}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map((option, optIndex) => (
                          <option key={optIndex} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || 'text'}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        className="form-control rounded-3 py-3"
                        placeholder={field.placeholder}
                        disabled={loading}
                      />
                    )}
                  </div>
                ))}

                <div className="col-12">
                  <label className="form-label fw-medium">Message <span className="text-danger">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-control rounded-3 py-3"
                    placeholder="Tell us more about your requirements"
                    disabled={loading}
                  ></textarea>
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn w-100 py-3 fw-bold rounded-3 text-white"
                    style={{ backgroundColor: '#038A5E', borderColor: '#038A5E' }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;