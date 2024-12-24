import React from 'react';

function IncidentDetails() {
  const locations = [
    {
      img: 'https://via.placeholder.com/150',
      title: 'Whitechapel Rd.',
      price: '$1,456,654.00',
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Whitechapel Rd.',
      price: '$1,456,654.00',
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Whitechapel Rd.',
      price: '$1,456,654.00',
    },
  ];

  const activities = [
    {
      title: 'Activity name',
      price: '$1,456,654.00',
    },
    {
      title: 'Activity name',
      price: '$1,456,654.00',
    },
  ];

  const documents = [
    {
      title: 'Document name',
      price: '$1,456,654.00',
    },
    {
      title: 'Document name',
      price: '$1,456,654.00',
    },
  ];

  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location and Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold">Location</h2>
          <p className="text-gray-600">Tulare County, Los Angeles, CA 23415</p>
          <h3 className="text-2xl font-bold mt-4">$60,607,456.00</h3>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            lorem id facilisis eleifend, justo purus egestas enim, et tempus dolor ligula ut ligula.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold">Incident Map</h2>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Map"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>
      </div>

      {/* Locations */}
      <div className="mt-8">
        <h2 className="text-lg font-bold">Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img src={location.img} alt={location.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{location.title}</h3>
                <p className="text-gray-600">{location.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="mt-8">
        <h2 className="text-lg font-bold">Activities</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2 last:border-none"
            >
              <p>{activity.title}</p>
              <p className="font-bold">{activity.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="mt-8">
        <h2 className="text-lg font-bold">Documents</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          {documents.map((document, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2 last:border-none"
            >
              <p>{document.title}</p>
              <p className="font-bold">{document.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;

