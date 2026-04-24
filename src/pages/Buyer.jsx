import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Buyer = () => {
  const customFields = [
    {
      name: 'budgetRange',
      label: 'Budget Range',
      placeholder: 'Enter your budget',
      required: true,
      colSize: 6
    },
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Apartment', 'Villa', 'Independent House', 'Plot', 'Commercial'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Buy Property</h1>
          <p className="text-muted lead">Find your dream home with us. Fill the form below and we'll help you find the perfect property.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Buyer"
        title="Buyer Enquiry"
        subtitle="Let us know your requirements and our team will get back to you with the best properties matching your needs."
        customFields={customFields}
      />
    </div>
  );
};

export default Buyer;