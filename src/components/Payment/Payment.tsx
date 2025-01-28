import React from 'react';

interface PaymentProps {
  handlePaymentDecision: (decision: 'yes' | 'no') => void;
}

const Payment: React.FC<PaymentProps> = ({ handlePaymentDecision }) => {
  return (
    <div
      id="overlay"
      className="inset-0 fixed bg-black/60 flex justify-center items-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Do you want to buy this course?</h1>
        <div className="flex justify-around">
          <button
            onClick={() => handlePaymentDecision('yes')}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Yes
          </button>
          <button
            onClick={() => handlePaymentDecision('no')}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
