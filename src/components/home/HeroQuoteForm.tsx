"use client";

import React, { useState } from "react";

export default function HeroQuoteForm() {
  const [formData, setFormData] = useState({
    startDate: "",
    startTime: "",
    pickupAddress: "",
    journeyDescription: "",
    passengers: "",
    vehicleClass: "Standard",
    name: "",
    surname: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to backend API
    console.log("Form Data Submitted:", formData);
    alert("Quote request submitted successfully!");
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-lg border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-6">Get an Instant Quote</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div className="flex gap-4">
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
          <label className="block text-sm font-medium text-gray-200 mb-1">Journey Description</label>
          <textarea name="journeyDescription" required onChange={handleChange} placeholder="Where are you heading?" rows={3} className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Passengers</label>
            <input type="number" name="passengers" required min="1" onChange={handleChange} placeholder="No. of people" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Vehicle Class</label>
            <select name="vehicleClass" onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="Standard">Standard</option>
              <option value="Executive">Executive VIP</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">First Name</label>
            <input type="text" name="name" required onChange={handleChange} placeholder="First Name" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Surname</label>
            <input type="text" name="surname" required onChange={handleChange} placeholder="Last Name" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input type="email" name="emailAddress" required onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-1">Phone Number</label>
            <input type="tel" name="phoneNumber" required onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-2 rounded-md bg-white/80 text-black border-none focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get My Quote
        </button>
      </form>
    </div>
  );
}
