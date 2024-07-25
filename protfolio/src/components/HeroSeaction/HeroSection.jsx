const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-indigo-600 mb-1 md:text-4xl md:mb-3">
          Anupam Yadav
        </h1>
        <p className="text-sm md:text-xl max-w-md mb-3 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          obcaecati.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
