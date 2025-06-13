// "use client"; // This is important to tell Next.js that this is a client-side component

// import React, { useState } from "react";
// import Request from "../Request/Request";
// import { sendRequest } from "../../lib/action";
// const MeetupBtn = ({seniorId,juniorId}) => {
//   const [openDialog, setOpenDialog] = useState(false);


//   const MeetupClick = () => {
//     setOpenDialog(true); // Open the dialog box
//   };

//   const closeDialog = () => {
//     setOpenDialog(false); // Close the dialog box
//   };


//   return (
//     <>
//       {/* Meetup button */}
//       <button
//         onClick={MeetupClick}
//         className="text-2xl rounded-lg bg-green-600 p-2"
//       >
//         Meetup
//       </button>

//       {/* Conditional rendering of dialog */}
//       {openDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-black text-2xl font-bold mb-4">Availability</h2>
//             <div>
//               <form action={sendRequest}>
//               <div>
//               <input type="hidden" name="juniorId" value={juniorId} />
//               <input type="hidden" name="seniorId" value={seniorId} />
//                 <label className="text-black font-bold" htmlFor="date">Date: </label>
//                 <input 
//                   type="date" 
//                   name="date" 
//                   id="date" 
//                   className="text-black border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="text-black font-bold" htmlFor="timeFrom">Time: </label>
//                 <label className="text-black" htmlFor="timeFrom">from</label>
//                 <input 
//                   type="time" 
//                   name="timeFrom" 
//                   id="timeFrom" 
//                   className="text-black border border-gray-300 p-2 rounded"
//                 />
//                 <label className="text-black ml-2" htmlFor="timeTo">to</label>
//                 <input 
//                   type="time" 
//                   name="timeTo" 
//                   id="timeTo" 
//                   className="text-black border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Request
//               </button>
//               </form>   
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={closeDialog}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MeetupBtn;
"use client";

import React, { useState } from "react";
import { sendRequest } from "../../lib/action";

const MeetupBtn = ({ seniorId, juniorId }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const MeetupClick = () => setOpenDialog(true);
  const closeDialog = () => setOpenDialog(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    const formData = new FormData(event.target); // Extract form data
    const data = Object.fromEntries(formData.entries()); // Convert to object

    try {
      const response = await sendRequest(data);
      if (response.success) {
        alert("Request sent successfully!");
        closeDialog();
      } else {
        alert("Failed to send request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <button onClick={MeetupClick} className="text-2xl rounded-lg bg-green-600 p-2">
        Meetup
      </button>

      {openDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-black text-2xl font-bold mb-4">Availability</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="juniorId" value={juniorId} />
              <input type="hidden" name="seniorId" value={seniorId} />

              <div>
                <label className="text-black font-bold" htmlFor="date">Date:</label>
                <input type="date" name="date" id="date" className="text-black border border-gray-300 p-2 rounded w-full" required />
              </div>

              <div className="mt-4">
                <label className="text-black font-bold" htmlFor="timeFrom">Time:</label>
                <label className="text-black" htmlFor="timeFrom">from</label>
                <input type="time" name="timeFrom" id="timeFrom" className="text-black border border-gray-300 p-2 rounded" required />
                <label className="text-black ml-2" htmlFor="timeTo">to</label>
                <input type="time" name="timeTo" id="timeTo" className="text-black border border-gray-300 p-2 rounded" required />
              </div>

              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                Request
              </button>
            </form>

            <div className="flex justify-end mt-4">
              <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetupBtn;
