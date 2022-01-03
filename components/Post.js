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
// - Are these needed? - bookmark icon, paper airplane icon
// - Update user interactions on post such as like and Comment
// - Update behavior to not truncate the caption/comment and expand it to the next line instead
// - Update the post comment button to be disabled unless there is a comment entered in the input box

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
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box for comment */}
      <form className="flex items-center p-4" action="">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outtline-none"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
