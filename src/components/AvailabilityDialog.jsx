// "use client";

// import React, { useState } from "react";

// const MeetupBtn = ({ senderId, receiverId }) => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [date, setDate] = useState("");
//   const [timeFrom, setTimeFrom] = useState("");
//   const [timeTo, setTimeTo] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const MeetupClick = () => {
//     setOpenDialog(true); // Open the dialog box
//   };

//   const closeDialog = () => {
//     setOpenDialog(false); // Close the dialog box
//     setResponseMessage(""); // Reset message
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/sendMeetupRequest", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           senderId,    // Sender's ID (logged-in user)
//           receiverId,  // Receiver's ID (profile owner)
//           date,
//           timeFrom,
//           timeTo,
//         }),
//       });

//       const data = await res.json();
//       setResponseMessage(data.message || "Request sent successfully");
//     } catch (error) {
//       setResponseMessage("Failed to send the request.");
//     }
//     setLoading(false);
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
//             <h2 className="text-2xl font-bold mb-4">Availability</h2>
//             <div>
//               <div>
//                 <label className="font-bold" htmlFor="date">Date: </label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="font-bold" htmlFor="timeFrom">Time: </label>
//                 <label htmlFor="timeFrom">from</label>
//                 <input
//                   type="time"
//                   id="timeFrom"
//                   value={timeFrom}
//                   onChange={(e) => setTimeFrom(e.target.value)}
//                 />
//                 <label htmlFor="timeTo">to</label>
//                 <input
//                   type="time"
//                   id="timeTo"
//                   value={timeTo}
//                   onChange={(e) => setTimeTo(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-blue-500 rounded-lg p-1"
//                   disabled={loading}
//                 >
//                   {loading ? "Sending..." : "Request"}
//                 </button>
//               </div>
//               <div className="mt-2">
//                 {responseMessage && (
//                   <p className="text-green-600 font-bold">{responseMessage}</p>
//                 )}
//               </div>
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
