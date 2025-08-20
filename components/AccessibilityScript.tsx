"use client";

import { useEffect } from 'react';

const AccessibilityScript = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="accessibly.app"]')) {
      return;
    }

    // Create script element with your exact script
    const script = document.createElement('script');
    script.src = 'https://dash.accessibly.app/widget/0198c889-008e-7037-9685-c36d801770e8/autoload.js';
    script.async = true;
    script.defer = true;
    
    // Add error handling
    script.onerror = () => {
      console.warn('Failed to load accessibility plugin script');
    };

    // Add to head
    document.head.appendChild(script);
  }, []);

  return null;
};

export default AccessibilityScript;
