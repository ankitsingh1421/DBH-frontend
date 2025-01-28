import React from 'react';
import { OfferItem } from './OfferItem';

const offerItems = [
  'Synthesizer',
  'Tabla',
  'Harmonium',
  'Cajon',
  'Darbuka',
  'Guitar (Optional)',
  'Indian Classical Music',
  'Bollywood Music',
  'Vocal Grooming',
  'Music Production Program',
];

export const OffersList: React.FC = () => {
  return (
    <ul className="space-y-4">
      {offerItems.map((item) => (
        <OfferItem key={item} text={item} />
      ))}
    </ul>
  );
};