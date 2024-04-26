import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuAppBar from '../components/adminnavbar'; // Import the AdminNavbar component
import Homepage from "../pages/commonhome.js";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('adminToken');
    // Redirect to login page
    navigate('/AdminLogin');
  };

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      // Redirect to login page if token is not present
      navigate('/AdminLogin');
    }
  }, []);
  // Only render the dashboard if the user is authenticated
  return (
    <div>
      <MenuAppBar />
      <Homepage />
      
      <div style={{ marginLeft: 250, padding: '20px' }}>
        {/* Main content for Admin Dashboard goes here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
