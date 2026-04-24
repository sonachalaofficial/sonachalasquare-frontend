import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Services = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['Housing Edge', 'Home Loan', 'Housing Protect', 'Housing Premium'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Our Services</h1>
          <p className="text-muted lead">Explore our comprehensive range of real estate services designed for you.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Services"
        title="Service Enquiry"
        subtitle="Select the service you are interested in and our team will assist you with all the details."
        customFields={customFields}
      />
    </div>
  );
};

export default Services;