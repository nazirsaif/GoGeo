"use client";

import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function HeroQuoteForm() {
  const [formData, setFormData] = useState({
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload: any = { ...formData };
      if (formData.startDate) {
          payload.startDate = new Date(formData.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }
      if (formData.endDate) {
          payload.endDate = new Date(formData.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit request. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg border border-white/20">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get an Instant Quote</h2>
      {isSuccess ? (
        <div className="bg-green-500/20 text-white p-6 rounded-lg text-center font-medium border border-green-400">
          Thank you! Your quote request has been sent successfully. Please check your email for confirmation.
        </div>
      ) : (
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

        <div className="flex flex-col sm:flex-row gap-4 overflow-hidden">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-200 mb-1">Start Date</label>
            <input type="date" name="startDate" required onChange={handleChange} className="w-full block min-w-0 px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-200 mb-1">Start Time (24h)</label>
            <div className="flex gap-2">
              <select 
                className="w-full px-2 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.startTime.split(':')[0] || ""}
                onChange={(e) => {
                  const currentMin = formData.startTime.split(':')[1] || "00";
                  setFormData({...formData, startTime: `${e.target.value}:${currentMin}`});
                }}
                required
              >
                <option value="" disabled>HH</option>
                {Array.from({length: 24}).map((_, i) => {
                  const h = i.toString().padStart(2, '0');
                  return <option key={h} value={h}>{h}</option>;
                })}
              </select>
              <span className="text-white font-bold self-center">:</span>
              <select 
                className="w-full px-2 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.startTime.split(':')[1] || ""}
                onChange={(e) => {
                  const currentHr = formData.startTime.split(':')[0] || "12";
                  setFormData({...formData, startTime: `${currentHr}:${e.target.value}`});
                }}
                required
              >
                <option value="" disabled>MM</option>
                {Array.from({length: 12}).map((_, i) => {
                   const m = (i * 5).toString().padStart(2, '0');
                   return <option key={m} value={m}>{m}</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 overflow-hidden">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-200 mb-1">End Date</label>
            <input type="date" name="endDate" required onChange={handleChange} className="w-full block min-w-0 px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-200 mb-1">End Time (24h)</label>
            <div className="flex gap-2">
              <select 
                className="w-full px-2 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.endTime.split(':')[0] || ""}
                onChange={(e) => {
                  const currentMin = formData.endTime.split(':')[1] || "00";
                  setFormData({...formData, endTime: `${e.target.value}:${currentMin}`});
                }}
                required
              >
                <option value="" disabled>HH</option>
                {Array.from({length: 24}).map((_, i) => {
                  const h = i.toString().padStart(2, '0');
                  return <option key={h} value={h}>{h}</option>;
                })}
              </select>
              <span className="text-white font-bold self-center">:</span>
              <select 
                className="w-full px-2 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.endTime.split(':')[1] || ""}
                onChange={(e) => {
                  const currentHr = formData.endTime.split(':')[0] || "12";
                  setFormData({...formData, endTime: `${currentHr}:${e.target.value}`});
                }}
                required
              >
                <option value="" disabled>MM</option>
                {Array.from({length: 12}).map((_, i) => {
                   const m = (i * 5).toString().padStart(2, '0');
                   return <option key={m} value={m}>{m}</option>;
                })}
              </select>
            </div>
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

        <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Sending Request..." : "Get My Quote"}
        </button>
      </form>
      )}
    </div>
  );
}
