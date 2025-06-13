"use client";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description:
      "This is the description for Project Alpha. A revolutionary project that changes the way we interact with technology.",
    image: "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "john_doe",
  },
  {
    title: "Project Beta",
    description:
      "Project Beta focuses on sustainability and renewable energy solutions for a cleaner future.",
    image: "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "jane_doe",
  },
  {
    title: "Project Gamma",
    description:
      "An AI-based project that enhances user experience through machine learning and data analytics.",
    image: "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "mike_tech",
  },
  {
    title: "Project Delta",
    description:
      "This project aims to build affordable housing solutions with modern architectural designs.",
    image: "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "susan_arch",
  },
  {
    title: "Project Epsilon",
    description:
      "A medical breakthrough project focusing on innovative treatments and healthcare solutions.",
    image: "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "dr_william",
  },
];

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
        >
          <div className="flex items-center space-x-4 p-4">
            <Image
              src={project.avatar}
              alt={project.username}
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">{project.username}</p>
          </div>

          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-60 object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
