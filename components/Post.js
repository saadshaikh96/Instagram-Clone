import React from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

// TODO:
// - Are these needed? - bookmark isSecureContext, paper airplane icon

function Post({ id, avatar, username, image, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={avatar}
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>

        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Image */}
      <img
        className="w-full object-cover"
        src={image}
        alt={`${username}'s upload`}
      />

      {/* Button Interactions */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}

      {/* Comments */}

      {/* Input box for comment */}
    </div>
  );
}

export default Post;