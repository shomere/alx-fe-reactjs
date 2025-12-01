// UserProfile.jsx
import React from "react";

const UserProfile = ({ name, bio, avatarUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mx-auto my-6 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm 
                    hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        {/* Profile Image with Hover Scale */}
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover 
                     hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        {/* Heading with Hover Color Change */}
        <h2 className="mt-4 text-lg sm:text-lg md:text-xl font-semibold text-gray-800 
                       hover:text-blue-500 transition-colors duration-300 ease-in-out">
          {name}
        </h2>

        {/* Paragraph */}
        <p className="mt-2 text-sm sm:text-sm md:text-base text-gray-600 text-center">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

