import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const PropertyValueCalculator = () => {
  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Property Value Calculator</h1>
          <p className="text-muted lead">Estimate the current market value of your property accurately.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Property Value Calculator"
        title="Property Valuation Request"
        subtitle="Get professional property valuation report. Our experts will analyze location, market trends and property condition to give you accurate valuation."
        customFields={[]}
      />
    </div>
  );
};

export default PropertyValueCalculator;