import { MoveRight } from "lucide-react";

const Demo = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 mt-20 mb-12 text-center px-4">
      <h1 className="md:text-5xl text-3xl font-semibold text-[#263238]">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button className="flex gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
        Get a Demo
        <MoveRight size={16} />
      </button>
    </div>
  );
};
export default Demo;
