import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    avatar: "images/PlaceholderAvatar.png",
    username: "foobar",
    image:
      "https://cdn.vox-cdn.com/thumbor/OVqfmft_u9H8Y6cxDP7jUqWjVjI=/0x0:1387x583/1920x0/filters:focal(0x0:1387x583):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/14137724/Copy_of_05.jpg",
    caption: "What's up danger?",
  },
  {
    id: 2,
    avatar: "images/PlaceholderAvatar.png",
    username: "foobar",
    image:
      "https://cdn.vox-cdn.com/thumbor/OVqfmft_u9H8Y6cxDP7jUqWjVjI=/0x0:1387x583/1920x0/filters:focal(0x0:1387x583):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/14137724/Copy_of_05.jpg",
    caption: "What's up danger?",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
