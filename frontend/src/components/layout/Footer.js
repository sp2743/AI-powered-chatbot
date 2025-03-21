// src/components/layout/Footer.js
import React from 'react';
import FooterLink from '../common/FooterLink';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">© 2025 MindfulChat. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <FooterLink text="About Us" />
          <FooterLink text="Privacy Policy" />
          <FooterLink text="Terms of Service" />
          <FooterLink text="Contact" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;