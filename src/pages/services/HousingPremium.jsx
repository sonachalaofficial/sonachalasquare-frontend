import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const HousingPremium = () => {
  const customFields = [
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Luxury Villa', 'Premium Apartment', 'Penthouse', 'Commercial Premium', 'Plot Premium'],
      required: true,
      colSize: 6
    },
    {
      name: 'investmentBudget',
      label: 'Investment Budget',
      placeholder: 'Enter investment budget',
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Housing Premium</h1>
          <p className="text-muted lead">Premium luxury property solutions for exclusive lifestyle requirements.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Housing Premium"
        title="Housing Premium Enquiry"
        subtitle="Access curated premium properties, VIP site visits, dedicated relationship manager and priority services."
        customFields={customFields}
      />
    </div>
  );
};

export default HousingPremium;