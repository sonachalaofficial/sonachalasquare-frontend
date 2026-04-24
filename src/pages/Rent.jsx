import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Rent = () => {
  const customFields = [
    {
      name: 'monthlyRent',
      label: 'Monthly Rent Budget',
      placeholder: 'Enter monthly rent budget',
      required: true,
      colSize: 6
    },
    {
      name: 'preferredBHK',
      label: 'Preferred BHK',
      type: 'select',
      options: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Rent Property</h1>
          <p className="text-muted lead">Find rental properties that suit your lifestyle and budget.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Rent"
        title="Rental Enquiry"
        subtitle="Tell us your rental preferences and we'll connect you with available properties in your desired location."
        customFields={customFields}
      />
    </div>
  );
};

export default Rent;