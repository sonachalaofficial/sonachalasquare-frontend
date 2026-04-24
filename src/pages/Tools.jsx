import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Tools = () => {
  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Property Tools</h1>
          <p className="text-muted lead">Access our powerful property calculation and analysis tools.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Tools"
        title="Tools Enquiry"
        subtitle="Need help with our property tools? Send us your query and we'll guide you through."
        customFields={[]}
      />
    </div>
  );
};

export default Tools;