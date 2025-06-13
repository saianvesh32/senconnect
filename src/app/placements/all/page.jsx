import React from 'react';
import Styles from './all.module.css';
// import ViewBtn from '../../components/ViewBtn/ViewBtn';

const internships = [
  { companyName: 'Company A', arrivalDate: '2024-09-01' },
  { companyName: 'Company B', arrivalDate: '2024-09-05' },
  { companyName: 'Company C', arrivalDate: '2024-09-10' },
  { companyName: 'Company D', arrivalDate: '2024-09-15' },
  { companyName: 'Company E', arrivalDate: '2024-09-20' },
  // Add more companies as needed
];

const Page = () => {
  return (
    <div className="text-black container p-4 -mt-[200px]"> {/* Negative margin to move it up */}
      <h1 className="text-white text-2xl font-bold mb-4">Internships</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className=" py-2 px-4 border">Company Name</th>
            <th className="py-2 px-4 border">Date of Arrival</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {internships.map((internship, index) => (
            <tr key={index} className="border-b hover:bg-gray-100"> 
              <td className="relative -left-['50px'] py-2 px-4 pl-[220px]">{internship.companyName}</td>
              <td className="py-2 px-4 pl-[130px]">{internship.arrivalDate}</td>
              <td className="py-2 px-4">
                <div>
                  {/* <ViewBtn/> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
