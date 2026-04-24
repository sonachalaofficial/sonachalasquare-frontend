import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Seller = () => {
  const customFields = [
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Apartment', 'Villa', 'Independent House', 'Plot', 'Commercial'],
      required: true,
      colSize: 6
    },
    {
      name: 'propertyLocation',
      label: 'Property Location',
      placeholder: 'Enter property location',
      required: true,
      colSize: 6
    },
    {
      name: 'expectedPrice',
      label: 'Expected Price',
      placeholder: 'Enter expected price',
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Sell Property</h1>
          <p className="text-muted lead">Get the best value for your property with our expert guidance.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Seller"
        title="Seller Enquiry"
        subtitle="List your property with us and reach thousands of potential buyers. Fill the form below to get started."
        customFields={customFields}
      />
    </div>
  );
};

export default Seller;