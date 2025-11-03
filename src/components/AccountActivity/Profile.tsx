import React from "react";
import { useZUserStore } from "@/store/useZUserStore";

const Profile = () => {
  const { zuser } = useZUserStore();
  if (!zuser) {
    return <div>Loading...</div>;
  }
  return (
    <div>
    <div className="bg-white rounded w-full p-6">
      <div className="text-lg font-bold">Personal Information</div>
      <div className="flex justify-between mt-6">
        <div>
          <div className="mb-6">
            <div className="text-gray-500">Name</div>
            <div>{zuser.name}</div>
          </div>
          <div>
            <div className="text-gray-500">Email</div>
            <div>{zuser.email}</div>
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
    </div>
  );
};

export default Profile;
