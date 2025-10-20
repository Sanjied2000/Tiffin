import React from "react";

const Profile = () => {
  return (
    <div>
    <div className="bg-white rounded w-full p-6">
      <div className="text-lg font-bold">Personal Information</div>
      <div className="flex justify-between mt-6">
        <div>
          <div className="mb-6">
            <div className="text-gray-500">Name</div>
            <div>Mr.Charlie</div>
          </div>
          <div>
            <div className="text-gray-500">Email</div>
            <div>charlie@gmail.com</div>
          </div>
        </div>
        <div className="mr-120">
          <div className="mb-6">
            <div className="text-gray-500">Phone</div>
            <div>0155*******</div>
          </div>
          <div>
            <div className="text-gray-500">Join Date</div>
            <div>30-11-2025</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded w-full p-6 mt-6">
        <div className="text-lg font-bold">Change Password</div>
    </div>
    </div>
  );
};

export default Profile;
