import Navbar from "../../components/Navbar/Navbar";
import img from "../../assets/gym-bg.jpg";
import SearchExercise from "../../components/Home/SearchExercise";
import ExerciseTabs from "../../components/ExerciseTabs/ExerciseTabs";
import AnimatedGIF from "../../components/AnimatedGIF/AnimatedGIF";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[90vh] w-full relative">
        <img src={img} alt="gym" className="h-[100%] w-full object-cover" />
        <div className=" text-center absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold">FASTER, STRONGER</h1>
          <h1 className="text-6xl font-bold mb-7"> FIGHT TO THE END</h1>
          <p className="mb-10">
            &apos;&apos;Exercise is a celebration of what your body can do. Not
            a punishment for what you ate.&apos;&apos; - Women&apos; s Health UK
          </p>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
        </div>
      </div>
      <SearchExercise />
      <ExerciseTabs />
      <AnimatedGIF />
    </div>
  );
};

export default Home;
