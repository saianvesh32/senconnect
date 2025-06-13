'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ViewBtn from "../../components/ViewBtn/ViewBtn";
// Custom Tabs Component
// const CustomTabs = ({ tabs, activeTab, onTabChange }) => {
//   return (
//     <div className="mb-4">
//       <div className="flex space-x-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.value ? "bg-blue-500 text-black" : "bg-gray-200"
//             }`}
//             onClick={() => onTabChange(tab.value)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// Main Placements Component
const internships = [
  { companyName: 'Company A', arrivalDate: '2024-09-01', gender: 'Female' },
  { companyName: 'Company B', arrivalDate: '2024-09-05', gender: 'Male' },
  { companyName: 'Company C', arrivalDate: '2024-09-10', gender: 'Male' },
  { companyName: 'Company D', arrivalDate: '2024-09-15', gender: 'Female' },
  { companyName: 'Company E', arrivalDate: '2024-09-20', gender: 'Female' },
  // Add more companies as needed
];
const Placements = () => {
  const [tab, setTab] = useState("");

  const tabs = [
    { label: "All", value: "all" },
    { label: "Women", value: "women" },
  ];
  const filteredInternship = internships.filter((internship) => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'women') {
      return internships.gender === 'Female';
    }
  })

  return (
    <div className="container mx-auto p-4">
      {/* Use CustomTabs */}
      {/* <CustomTabs tabs={tabs} activeTab={tab} onTabChange={setTab} /> */}

      <div className="flex space-x-4">
        {/* Links for navigating between tabs */}
        <button onClick={()=>setTab("all")} className="text-white bg-blue-500 p-2 rounded">
          All
        </button>
        <button onClick={()=>setTab("women")} className="text-white bg-blue-500 p-2 rounded">
          Women
        </button>
      </div>
      {/* {children} */}
       <div className="text-black container p-4 -mt-[200px]">
        <h1 className="text-white text-2xl font-bold mb-4">Internships</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className=" py-2 px-4 border">Company Name</th>
              <th className="py-2 px-4 border">Date of Arrival</th>
              <th className="py-2 px-4 border">Gender</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((filteredInternship, index) => (
              <tr key={index} className="border-b hover:bg-gray-100"> 
                <td className="relative -left-['50px'] py-2 px-4 pl-[150px]">{filteredInternship.companyName}</td>
                <td className="py-2 px-4 pl-[130px]">{filteredInternship.arrivalDate}</td>
                <td className="py-2 px-4 pl-[50px]">{filteredInternship.gender}</td>
                <td className="py-2 px-4">
                  <div>
                    <ViewBtn/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
  )
};

export default Placements;
