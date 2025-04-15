import React, { useEffect, useState } from 'react';

const Know = () => {
  const [showSection, setShowSection] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={()=>setShowSection(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Click to Know More
      </button>

      {showSection && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">About This Page</h2>
          <p>
            This section appeared because the button was clicked and the state was set to true. 
            You can use this pattern to reveal hidden content dynamically!
          </p>
        </div>
      )}
    </div>
  );
};

export default Know;
