import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

// TODO:
// - Update avatars of user stories
// - Update username
// - Remove dependency from faker

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggested = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    // console.log(suggested);
    setSuggestions(suggested);
  }, []);

  return (
    <div
      className="flex space-x-5 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          //   img={profile.avatar}
          avatar="/images/PlaceholderAvatar.png"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
