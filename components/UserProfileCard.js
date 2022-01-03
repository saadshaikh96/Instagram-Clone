import React from "react";

function UserProfileCard() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full w-16 h-16 border p-1"
        src="/images/PlaceholderAvatar.png"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Foobar</h2>
        <h3 className="text-sm text-gray-400">Hello world!</h3>
      </div>

      <button className="text-sm text-blue-400 text-semibold">Sign Out</button>
    </div>
  );
}

export default UserProfileCard;
