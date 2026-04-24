import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Support = () => {
  const customFields = [
    {
      name: 'subject',
      label: 'Subject',
      placeholder: 'Enter support subject',
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Customer Support</h1>
          <p className="text-muted lead">We're here to help you. Reach out to our support team.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Support"
        title="Support Request"
        subtitle="Describe your issue or question in detail and our support team will respond to you as soon as possible."
        customFields={customFields}
      />
    </div>
  );
};

export default Support;