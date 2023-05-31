import React from 'react';

const Properties = () => {
  // Dummy data for properties
  const properties = [
    {
      id: 1,
      address: '123 Main St',
      bedrooms: 3,
      bathrooms: 2,
      size: '1500 sqft',
      price: 250000,
      contact: '123-456-7890',
      type: 'sale',
    },
    // Add more properties here...
  ];

  return (
    <section className="properties">
      <div className="filters">
        {/* Filters */}
        {/* Example: Price range filter */}
        <label htmlFor="price-range">Price Range:</label>
        <select id="price-range">
          <option value="">All</option>
          <option value="0-100000">0 - 100,000</option>
          <option value="100000-200000">100,000 - 200,000</option>
          {/* Add more price range options */}
        </select>
      </div>

      <div className="property-list">
        {/* Property list */}
        {properties.map((property) => (
          <div key={property.id} className="property">
            <div className="address">{property.address}</div>
            <div className="bedrooms">{property.bedrooms} bedrooms</div>
            <div className="bathrooms">{property.bathrooms} bathrooms</div>
            <div className="size">{property.size}</div>
            <div className="price">${property.price}</div>
            <div className="contact">Contact: {property.contact}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
