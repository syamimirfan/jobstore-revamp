"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const jobListings = [
    { id: 1, title: 'Head of Project Management Team (PMT)', location: 'Negeri Sembilan', company: 'Sarawak Consolidated Industries Berhad' },
    { id: 2, title: 'Financial Controller based in Miri, Sarawak', location: 'Sarawak', company: 'Shin Yang Corporation Sdn Bhd' },
    { id: 3, title: 'Join us. Lets care for tomorrow', location: '', company: 'Allianz' },
    { id: 4, title: 'Finance Manager', location: 'Federal Territory of Kuala Lumpur', company: 'PIO HARDWOODS (M) SDN BHD' },
    { id: 5, title: 'FINANCE MANAGER', location: 'Johor', company: 'QQ GROUP SDN BHD' },
    { id: 6, title: 'Project Manager (C&S Engineer Background)', location: 'Penang', company: 'Pena Builders Sdn Bhd' },
    { id: 7, title: 'Leasing Manager', location: 'Federal Territory of Kuala Lumpur', company: 'BERJAYA TIMES SQUARE SDN BHD' },
    { id: 8, title: 'Regional Sales Manager (Southern)', location: 'Selangor', company: 'BYD Malaysia' },
    { id: 9, title: 'C&S ENGINEER', location: 'Penang', company: 'JURUCITA CONSULTANT' },
    { id: 10, title: 'Dummy Job with Rotating Images', location: 'Selangor', company: 'Dummy Company' },
  ];

  const totalPages = Math.ceil(jobListings.length / jobsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobListings.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="mx-auto p-4 bg-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-wrap gap-4">
          <Link href={'/'}>
            <h4 className="font-bold">#Trending jobs</h4>
          </Link>
          <Link href={'/'}>
            <h4 className="font-bold">#Highest Paying Jobs</h4>
          </Link>
          <Link href={'/'}>
            <h4 className="font-bold">#Internship</h4>
          </Link>
          <Link href={'/'}>
            <h4 className="font-bold">#Recruiter</h4>
          </Link>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrevious} 
            disabled={currentPage === 1}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Previous
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          >
            Next
            <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentJobs.map((job) => (
          <Link key={job.id} href={`/`}>
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer flex flex-col justify-between min-h-[350px]"> {/* Set a fixed min height */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold">{job.title}</h2>
                  <span className="text-gray-500 font-medium">{job.location}</span>
                </div>
                <p className="text-gray-700 text-sm mb-2 flex-grow">
                  {job.company}
                </p>
              </div>
              {job.title === 'Dummy Job with Rotating Images' ? (
                <RotatingImages />
              ) : (
                <div className="flex justify-center mt-2">
                  <Image src={'/assets/dummy.png'} alt={'dummy.png'} width={200} height={50} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const RotatingImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/assets/dummy.png',
    '/assets/dummy-2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2000 milliseconds (2 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center mt-2">
      <Image src={images[currentImage]} alt={`dummy-${currentImage}.png`} width={200} height={50} />
    </div>
  );
};

export default HeroSection;
