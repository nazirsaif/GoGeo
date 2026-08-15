"use client";

import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function HeroQuoteForm() {
  const [formData, setFormData] = useState({
    startDate: "",
    startTime: "",
    pickupAddress: "",
    destination: "",
    additionalDetails: "",
    passengers: "",
    isRoundTrip: false,
    name: "",
    surname: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to backend API
    console.log("Form Data Submitted:", formData);
    alert("Quote request submitted successfully!");
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg border border-white/20">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get an Instant Quote</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">First Name</label>
            <input type="text" name="name" required onChange={handleChange} placeholder="First Name" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Surname</label>
            <input type="text" name="surname" required onChange={handleChange} placeholder="Last Name" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input type="email" name="emailAddress" required onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Phone Number</label>
            <div className="phone-input-wrapper">
              <PhoneInput
                country={'gb'}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                }}
                containerClass="!w-full"
                inputClass="!w-full !h-10 !text-black !bg-white/80 !border-none !rounded-md !outline-none !focus:ring-2 !focus:ring-blue-500"
                buttonClass="!bg-white/50 !border-none !rounded-l-md"
                dropdownClass="!text-black !bg-gray-200 !shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Start Date</label>
            <input type="date" name="startDate" required onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Start Time</label>
            <input type="time" name="startTime" required onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Pickup Address</label>
          <input type="text" name="pickupAddress" required onChange={handleChange} placeholder="Enter full address" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Destination</label>
          <input type="text" name="destination" required onChange={handleChange} placeholder="Where are you heading?" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Passengers</label>
            <input type="number" name="passengers" required min="1" onChange={handleChange} placeholder="No. of people" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1 flex items-center sm:pt-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                name="isRoundTrip" 
                onChange={(e) => setFormData({...formData, isRoundTrip: e.target.checked})} 
                className="w-5 h-5 cursor-pointer rounded border-none bg-white/80 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Round Trip? (Yes)</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Additional Requirements</label>
          <textarea name="additionalDetails" onChange={handleChange} placeholder="Extra details, luggage requirements, etc." rows={6} className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
        </div>

        <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get My Quote
        </button>
      </form>
    </div>
  );
}
