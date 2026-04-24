import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const RentReceiptGenerator = () => {
  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Rent Receipt Generator</h1>
          <p className="text-muted lead">Generate valid rent receipts for tax exemptions easily.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Rent Receipt Generator"
        title="Rent Receipt Request"
        subtitle="Need help generating rent receipts? Our team will assist you with properly formatted receipts with PAN details and valid for HRA claims."
        customFields={[]}
      />
    </div>
  );
};

export default RentReceiptGenerator;