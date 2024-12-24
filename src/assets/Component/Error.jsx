import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate(); // Correctly initialize the navigate function

  const handleClick = () => {
    navigate("/"); // Navigate to the /Incidents route
  };

  return (
    <div className='items-center text-center mt-28'>
      <div>
        This page does not exist. Please, return home.
      </div>
      <div className='mt-2'>
        <Button onClick={handleClick}>Back Home</Button>
      </div>
    </div>
  );
}

export default Error;
