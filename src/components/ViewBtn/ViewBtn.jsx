"use client"; // This is important to tell Next.js that this is a client-side component

import React, { useState } from "react";

const ViewBtn = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const ViewClick = () => {
    setOpenDialog(true); // Open the dialog box
  };

  const closeDialog = () => {
    setOpenDialog(false); // Close the dialog box
  };

  return (
    <>
      {/* View button */}
      <button
        onClick={ViewClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </button>

      {/* Conditional rendering of dialog */}
      {openDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-black text-2xl font-bold mb-4">Job Details</h2>
            <div>
              <div>
                <p className="text-black font-bold mb-2">Package: </p>
                <p className="text-black mb-4">15 LPA</p>
              </div>
              <div>
                <p className="text-black font-bold mb-2">Job Requirements:</p>
                <ul className="text-black list-disc ml-5">
                  <li>Proficient in React.js and Next.js</li>
                  <li>Experience with REST APIs and GraphQL</li>
                  <li>Good understanding of database systems</li>
                  <li>Strong problem-solving skills</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeDialog}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBtn;
