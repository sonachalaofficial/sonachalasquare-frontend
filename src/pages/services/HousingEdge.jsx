import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const HousingEdge = () => {
  const customFields = [
    {
      name: 'propertyLocation',
      label: 'Preferred Location',
      placeholder: 'Enter desired location',
      required: true,
      colSize: 6
    },
    {
      name: 'budgetRange',
      label: 'Budget Range',
      placeholder: 'Enter your budget',
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Housing Edge</h1>
          <p className="text-muted lead">Exclusive property advisory service with expert guidance for your dream home.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Housing Edge"
        title="Housing Edge Enquiry"
        subtitle="Get personalized property recommendations, site visits assistance, and negotiation support from our expert team."
        customFields={customFields}
      />
    </div>
  );
};

export default HousingEdge;