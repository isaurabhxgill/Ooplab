'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    phone: '',
    message: '',
    agreeToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        inquiryType: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        country: '',
        phone: '',
        message: '',
        agreeToContact: false,
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Send us a message</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and our team will get back to you shortly.
      </p>

      {/* Inquiry Type */}
      <div className="mb-6">
        <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
          Inquiry type<span className="text-[#fb2c36]">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent bg-white text-gray-900"
        >
          <option value="">Please Select</option>
          <option value="sales">Sales Inquiry</option>
          <option value="support">Support</option>
          <option value="partnership">Partnership</option>
          <option value="career">Career</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* First and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
            Your first name<span className="text-[#fb2c36]">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
            Your last name<span className="text-[#fb2c36]">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Your email<span className="text-[#fb2c36]">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
        />
      </div>

      {/* Company and Job Title */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company<span className="text-[#fb2c36]">*</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Your company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-900 mb-2">
            Job title<span className="text-[#fb2c36]">*</span>
          </label>
          <input
            id="jobTitle"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            placeholder="Your job title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
          />
        </div>
      </div>

      {/* Country and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
            Country<span className="text-[#fb2c36]">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent bg-white text-gray-900"
          >
            <option value="">Please Select</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message<span className="text-[#fb2c36]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your inquiry..."
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb2c36] focus:border-transparent text-gray-900 resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="mb-8 flex items-start gap-3">
        <input
          id="agreeToContact"
          type="checkbox"
          name="agreeToContact"
          checked={formData.agreeToContact}
          onChange={handleChange}
          required
          className="w-4 h-4 rounded border-gray-300 text-[#fb2c36] focus:ring-[#fb2c36] cursor-pointer mt-1"
        />
        <label htmlFor="agreeToContact" className="text-sm text-gray-600">
          I agree to receive communications from this company. For information on how we process your data, please see our
          <a href="#" className="text-[#fb2c36] hover:underline ml-1">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#fb2c36] hover:bg-[#e01c26] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">
            ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-semibold">
            ✗ Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  );
}
