import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const HomeLoan = () => {
  const customFields = [
    {
      name: 'loanAmount',
      label: 'Loan Amount Required',
      placeholder: 'Enter loan amount',
      required: true,
      colSize: 6
    },
    {
      name: 'annualIncome',
      label: 'Annual Income',
      placeholder: 'Enter your annual income',
      required: true,
      colSize: 6
    },
    {
      name: 'propertyValue',
      label: 'Property Value',
      placeholder: 'Enter property value',
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Home Loan</h1>
          <p className="text-muted lead">Get best home loan offers with lowest interest rates from leading banks.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Home Loan"
        title="Home Loan Enquiry"
        subtitle="Our loan experts will help you with eligibility check, documentation, and quick loan approval process."
        customFields={customFields}
      />
    </div>
  );
};

export default HomeLoan;