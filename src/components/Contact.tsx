import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  const projectTypes = ['Web Design', 'Mobile App', 'Branding', 'E-commerce', 'UX/UI Audit', 'Other'];
  const budgetRanges = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'];
  const socialLinks = [{
    name: 'LinkedIn',
    icon: '💼',
    url: '#'
  }, {
    name: 'Twitter',
    icon: '🐦',
    url: '#'
  }, {
    name: 'Dribbble',
    icon: '🏀',
    url: '#'
  }, {
    name: 'GitHub',
    icon: '💻',
    url: '#'
  }];
  return;
};
export default Contact;