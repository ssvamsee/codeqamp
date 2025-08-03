import React from 'react';

const BrandName = ({ className = "" }) => {
  return (
    <span className={className}>
      <span className="text-primary">Code</span>
      <span className="text-brand-orange">Qamp</span>
    </span>
  );
};

export default BrandName; 