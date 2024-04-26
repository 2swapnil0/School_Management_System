import React from 'react';
import MenuAppBar from '../components/parentnavbar'; // Import the MenuAppBar component
import Homepage from './commonhome' 

const parentDashboard = () => {
  return (
    <div>
      <MenuAppBar /> {/* Add the MenuAppBar component */}
      <Homepage/>
      <div style={{ marginLeft: 250, padding: '20px' }}> {/* Adjust marginLeft if needed */}
        {/* Main content for Teacher Dashboard goes here */}
      </div>
    </div>
  );
};

export default parentDashboard;
