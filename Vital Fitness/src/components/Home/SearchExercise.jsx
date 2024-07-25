const SearchExercise = () => {
  return (
    <div className="flex justify-center my-10">
      <input
        className="flex h-10 mr-3 w-[250px] border border-zinc-400 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
      />
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-black/80 hover:text-white transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </div>
  );
};

export default SearchExercise;
