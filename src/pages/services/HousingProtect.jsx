import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const HousingProtect = () => {
  const customFields = [
    {
      name: 'insuranceType',
      label: 'Insurance Type',
      type: 'select',
      options: ['Property Insurance', 'Home Protection', 'Fire Insurance', 'Flood Insurance', 'Complete Coverage'],
      required: true,
      colSize: 6
    },
    {
      name: 'propertyAge',
      label: 'Property Age',
      placeholder: 'Enter property age in years',
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Housing Protect</h1>
          <p className="text-muted lead">Secure your property with comprehensive insurance protection plans.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Housing Protect"
        title="Housing Protect Enquiry"
        subtitle="Protect your valuable investment with customized insurance plans covering all risks and damages."
        customFields={customFields}
      />
    </div>
  );
};

export default HousingProtect;