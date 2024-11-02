import Image from "next/image";

const PixelGrade = () => {
  return (
    <div className="max-w-6xl mx-auto my-40 flex justify-between items-center">
      <div className="w-1/2">
        <Image
          width={309}
          height={220}
          src="/pixelgrade.png"
          alt="member"
          className="w-full"
        />
      </div>
      <div className="space-y-4 max-w-xl">
        <h1 className="text-2xl font-semibold">
          The unseen of spending three years <br /> at Pixelgrade
        </h1>
        <p className="text-gray text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="flex gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
          Learn More{" "}
        </button>
      </div>
    </div>
  );
};
export default PixelGrade;