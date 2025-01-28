import React from 'react';
import { Check } from 'lucide-react';

interface OfferItemProps {
  text: string;
}

export const OfferItem: React.FC<OfferItemProps> = ({ text }) => {
  return (
    <li className="flex items-center space-x-3 text-lg">
      <Check className="h-6 w-6 text-purple-500 flex-shrink-0" />
      <span className="text-gray-100">{text}</span>
    </li>
  );
};