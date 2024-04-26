import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuAppBar from '../components/studentnavbar'; // Import the MenuAppBar component
import Homepage from "../pages/commonhome.js"

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('studentToken');
    // Redirect to login page
    navigate('/StudentLogin');
  };

  useEffect(() => {
    const token = localStorage.getItem('studentToken');
    if (!token) {
      // Redirect to login page if token is not present
      navigate('/StudentLogin');
    }
  }, []);

  return (
    <div>
      <MenuAppBar />
      <Homepage />
      
      <div style={{ marginLeft: 250, padding: '20px' }}>
        {/* Main content for Student Dashboard goes here */}
      </div>
    </div>
  );
};

export default StudentDashboard;
