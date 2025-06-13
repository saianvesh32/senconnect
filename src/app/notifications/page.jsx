"use client"
// import React from 'react';

// const notificationsData = [
//   {
//     id: 1,
//     requester: 'Ramu',
//     date: '2024-10-20',
//     timeFrom: '10:00 AM',
//     timeTo: '11:00 AM',
//   },
//   {
//     id: 2,
//     requester: 'Sita',
//     date: '2024-10-21',
//     timeFrom: '2:00 PM',
//     timeTo: '3:00 PM',
//   },
//   {
//     id: 3,
//     requester: 'Ravi',
//     date: '2024-10-22',
//     timeFrom: '1:00 PM',
//     timeTo: '2:00 PM',
//   },
//   {
//     id: 4,
//     requester: 'Anita',
//     date: '2024-10-23',
//     timeFrom: '9:00 AM',
//     timeTo: '10:00 AM',
//   },
//   {
//     id: 5,
//     requester: 'Kiran',
//     date: '2024-10-24',
//     timeFrom: '11:00 AM',
//     timeTo: '12:00 PM',
//   },
// ];

// const Notifications = () => {
//   const handleAccept = (id) => {
//     console.log(`Accepted request from ${id}`);
//     // Here you can add your logic to handle accepting the request
//   };

//   const handleReject = (id) => {
//     console.log(`Rejected request from ${id}`);
//     // Here you can add your logic to handle rejecting the request
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Notifications</h1>
//       {notificationsData.map((notification) => (
//         <div key={notification.id} className="border border-gray-300 p-4 mb-2 rounded">
//           <p>
//             <strong>{notification.requester}</strong> has requested a meetup on 
//             <strong> {notification.date}</strong> from 
//             <strong> {notification.timeFrom}</strong> to 
//             <strong> {notification.timeTo}</strong>.
//           </p>
//           <div className="flex space-x-2 mt-2">
//             <button
//               onClick={() => handleAccept(notification.requester)}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => handleReject(notification.requester)}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Reject
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Notifications;
import React from 'react';

// Sample notifications data including year and branch
const notificationsData = [
  {
    id: 1,
    requester: 'Ramu',
    date: '2024-10-20',
    timeFrom: '10:00 AM',
    timeTo: '11:00 AM',
    year: 1,
    branch: 'AI/ML',
  },
  {
    id: 2,
    requester: 'Sita',
    date: '2024-10-21',
    timeFrom: '2:00 PM',
    timeTo: '3:00 PM',
    year: 2,
    branch: 'CSE',
  },
  {
    id: 3,
    requester: 'Ravi',
    date: '2024-10-22',
    timeFrom: '1:00 PM',
    timeTo: '2:00 PM',
    year: 3,
    branch: 'IT',
  },
  {
    id: 4,
    requester: 'Anita',
    date: '2024-10-23',
    timeFrom: '9:00 AM',
    timeTo: '10:00 AM',
    year: 4,
    branch: 'Mechanical',
  },
  {
    id: 5,
    requester: 'Kiran',
    date: '2024-10-24',
    timeFrom: '11:00 AM',
    timeTo: '12:00 PM',
    year: 1,
    branch: 'Civil',
  },
];

const Notifications = () => {
  const handleAccept = (id) => {
    console.log(`Accepted request from ${id}`);
    // Add your logic to handle accepting the request
  };

  const handleReject = (id) => {
    console.log(`Rejected request from ${id}`);
    // Add your logic to handle rejecting the request
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notificationsData.map((notification) => (
        <div key={notification.id} className="border border-gray-300 p-4 mb-2 rounded">
          <p>
            <strong>{notification.requester}</strong> (Year {notification.year}, Branch: {notification.branch}) has requested a meetup on 
            <strong> {notification.date}</strong> from 
            <strong> {notification.timeFrom}</strong> to 
            <strong> {notification.timeTo}</strong>.
          </p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => handleAccept(notification.requester)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Accept
            </button>
            <button
              onClick={() => handleReject(notification.requester)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
