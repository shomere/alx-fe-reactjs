// UserProfile.jsx
import React from "react";

const UserProfile = ({ name, bio, avatarUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mx-auto my-6 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm">
      <div className="flex flex-col items-center">
        {/* Responsive Profile Image */}
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover"
        />

        {/* Responsive Heading */}
        <h2 className="mt-4 text-lg sm:text-lg md:text-xl font-semibold text-gray-800">
          {name}
        </h2>

        {/* Responsive Paragraph */}
        <p className="mt-2 text-sm sm:text-sm md:text-base text-gray-600 text-center">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
