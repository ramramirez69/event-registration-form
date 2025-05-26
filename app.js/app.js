import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: 'basic', // Renaming to 'eventType' or similar might be better for an event
    agreeToTerms: false,
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success', 'error', or 'info'

  // IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
  // You will get this URL after deploying your script as a web app (see instructions below).
  const GOOGLE_APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxd_Pk8fE_7pmBXtHmyvOV2KwrDBK7Xl4HWUpV-Rj0jUhPI0_LaZZwuwspi2y6YHdYi/exec';

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,