import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const JobListing = () => {
  const jobsData = [
    {
      jobTitle: 'Sales Executive',
      company: 'Mulford Plastics (M) Sdn Bhd',
      location: 'Selangor',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Procurement Executive',
      company: 'PENANG AUTOMATION CLUSTER SDN BHD',
      location: 'Penang',
      image: '/assets/dummy.png',
      isSponsored: true,
    },
    {
      jobTitle: 'SALES DESIGNER (MANDARIN SPEAKER)',
      company: 'SLF HOME SOLUTIONS SDN BHD',
      location: 'Selangor',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'SENIOR TAX CONSULTANT',
      company: 'PKF Malaysia',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Executive, Clearing & Branch Support',
      company: 'Apex Securities Berhad',
      location: 'Selangor',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Marketing Executive',
      company: 'Mavisco (M) Sdn Bhd',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Customer Service Associate',
      company: 'EMA GLOBAL Assistance Sdn Bhd',
      location: 'Selangor',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Sales & Marketing Executive',
      company: 'Ancubic Capital Sdn. Bhd.',
      location: 'Wilayah Persekutuan Kuala Lumpur',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'VIDEO EDITOR',
      company: 'Fabulove Sisters Sdn Bhd',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'SENIOR HR EXECUTIVE/ASSISTANT HR...',
      company: 'Red Box Karaoke Group',
      location: 'Selangor',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Sales Executive',
      company: 'Mega First Corporation Berhad',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Project cum Commissioning Engineer',
      company: 'Oiltek Sdn Bhd',
      location: 'Selangor',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Sales Assistant',
      company: 'Dr Ko Skin Specialist',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy-2.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Customer Relation Executive(Japanese Speaking)',
      company: 'WELLBE MALAYSIA SDN BHD',
      location: 'Wilayah Persekutuan Kuala Lumpur',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
    {
      jobTitle: 'Lead Engineer (Structural)',
      company: 'Ranhill Bersekutu Sdn Bhd',
      location: 'Federal Territory of Kuala Lumpur',
      image: '/assets/dummy.png',
      isSponsored: false,
    },
  ];

  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between mb-10">
        <h1 className="text-3xl font-bold">LATEST JOBS</h1>
        <Link href="/">
          <h2 className="text-gray-600">SEE ALL JOBS &gt;</h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobsData.map((job, index) => (
          <Link href="/" key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden block text-center h-full">
              <div className="relative w-full h-64">
                <Image src={job.image} alt={job.jobTitle} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
                <p className="text-gray-700 mb-2">{job.company}</p>
                <p className="text-gray-500">{job.location}</p>

              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-between my-10">
        <h1 className="text-3xl font-bold">NEWS & ARTICLES</h1>
        <Link href="/">
          <h2 className="text-gray-600">VIEW ALL &gt;</h2>
        </Link>
      </div>
    </div>
  );
};

export default JobListing;