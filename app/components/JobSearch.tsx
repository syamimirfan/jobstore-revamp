"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

const texts = [
    { line1: 'GOVERNMENT', line2: 'JOB VACANCY' },
    { line1: 'KERJA KOSONG', line2: 'KERAJAAN' },
];

const JobSearchForm = () => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [workType, setWorkType] = useState('All work types');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const calculateTimeRemaining = (): TimeRemaining => {
    const targetDate = new Date('2024-10-26T00:00:00Z').getTime(); // UTC time
    const now = new Date().getTime(); // Local time
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Form submitted:', {
      keywords,
      location,
      type,
      workType,
    });
  };

  return (
<form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-main-color shadow-md">
  <div className="flex flex-wrap gap-4">
    <div className="flex flex-col flex-1 min-w-[200px]">
      <h2 className="text-xl font-bold mb-2 text-white">What</h2>
      <div className="input-group mb-4">
        <input
          type="text"
          placeholder="Enter Keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-white mb-1">Type</label>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring duration-200 ease-in-out">
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-white mb-1">Working Types</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring duration-200 ease-in-out">
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-1 min-w-[200px]">
      <h2 className="text-xl font-bold mb-2 text-white">Where</h2>
      <div className="flex items-end">
        <input
          type="text"
          placeholder="Enter suburb, city, or region"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
        />
        <button type="submit" className="ml-2 p-2 bg-button-color text-white rounded-lg hover:bg-button-color/90">
          FIND
        </button>
      </div>
    </div>
  </div>
  {/* Continue the banner in this */}
  <div className="w-full flex flex-wrap gap-8 justify-center my-5 p-5">
        <Link href={"/"}>
        <div className="flex flex-wrap gap-4 bg-button-color p-5">
            <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-center text-white">{timeRemaining.days}</span>
                <span className="text-lg text-center text-white">Days</span>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <span className="text-4xl font-bold text-white">{timeRemaining.hours}</span>
                <span className="text-lg text-center text-white">Hours</span>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <span className="text-4xl font-bold text-white">{timeRemaining.minutes}</span>
                <span className="text-lg text-center text-white">Minutes</span>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <span className="text-4xl font-bold text-white">{timeRemaining.seconds}</span>
                <span className="text-lg text-center text-white">Seconds</span>
            </div>
            <br />
            <Image src="/assets/form-1.png" alt="icon.png" width={250} height={50} />
            <br />
            <div className="flex flex-col gap-2">
                <span className="font-bold text-white">26 & 27 OCTOBER 2024</span>
                <span className="text-white">KUALA LUMPUR CONVETION CENTRE</span>
            </div>
        </div>
     </Link>
        <Link href={"/"}>
        <div className="relative flex flex-wrap gap-4">
            <Image src="/assets/form-2.png" alt="icon.png" width={250} height={100} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="rotate text-center">
                <span className="block text-black">{texts[currentIndex].line1}</span>
                <span className="block text-black">{texts[currentIndex].line2}</span>
                </div>
            </div>
            </div>
        </Link>
     <Link href={"/"}>
     <div className="flex flex-wrap gap-4">
     <Image src="/assets/form-3.png" alt="icon.png" width={300} height={50}/>
     </div>
     </Link>
  </div>
</form>

  
  );
};

export default JobSearchForm;
