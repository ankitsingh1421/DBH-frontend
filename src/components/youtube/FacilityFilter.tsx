import React from 'react';

interface FacilityFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FacilityFilter: React.FC<FacilityFilterProps> = ({ 
  activeFilter, 
  setActiveFilter 
}) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'manufacturing', label: 'Bollywood Songs' },
    { id: 'research', label: 'Cover Songs' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`filter-button ${
            activeFilter === filter.id
              ? 'filter-button-active'
              : 'filter-button-inactive'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FacilityFilter;