function Story({ avatar, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 
        object-contain cursor-pointer hover:scale-110 transition transform ease-out
        "
        src={avatar}
        alt={username}
      />
      <p className="text-xs pt-1 w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
