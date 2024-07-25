const AnimatedGIF = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-10 border-2 border-black">
        <div className="flex flex-col justify-center items-center border rounded-xl shadow-md cursor-pointer">
          <img
            src="https://v2.exercisedb.io/image/3G1RfXbqLQp9uQ"
            alt="Animated GIF"
          ></img>
          <div>
            <span className="bg-[#EBC57D] text-black rounded-xl px-2 mx-2">
              waist
            </span>
            <span className="bg-[#7CEB7C] text-black rounded-xl px-2 mx-2">
              abs
            </span>
            <span className="bg-[#7CDBEA] text-black rounded-xl px-2 mx-2">
              body weight
            </span>
          </div>
          <h1 className="font-bold tracking-wide py-1 text-lg">
            45° side bend
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGIF;
