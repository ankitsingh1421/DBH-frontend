import React from 'react';

interface PaymentFailedProps {
  closeModal: () => void;
}

const PaymentFailed: React.FC<PaymentFailedProps> = ({ closeModal }) => {
  const handleClickOutside = (e: any) => {
    if (e.target.id === 'form-overlay') {
      closeModal();
    }
  };

  return (
    <div
      id="form-overlay"
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="p-4 sm:p-6 rounded-lg shadow-lg w-10/12 max-w-sm relative bg-red-100"
        style={{
          height: "300px",
          width: "600px",
          borderRadius: "20px",
        }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-2xl">Payment Failed</h2>
          <p className="text-gray-700 mt-2">Please try again later.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
