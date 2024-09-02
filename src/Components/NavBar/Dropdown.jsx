import React from 'react';

const Dropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 mt-2 bg-blue-100 z-50 text-black shadow-lg p-4 rounded-md w-max ">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold">Online</h4>
          <ul className="mt-2 space-y-2 text-left">
            <li>Rental Agreements</li>
            <li>Lease Agreements</li>
            <li>Commercial Documents</li>
            <li>Affidavits</li>
            <li>Notices</li>
            <li>Business Agreements</li>
            <li>Employment Agreements</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Offline</h4>
          <ul className="mt-2 space-y-2 text-left">
            <li>E-commerce contracts</li>
            <li>Intellectual property agreements</li>
            <li>Post contractual contracts/matters</li>
            <li>Power of attorney</li>
            <li>Real estate related agreements</li>
            <li>Wills</li>
            <li>Intellectual Property Agreement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
