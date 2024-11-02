import Image from "next/image";
import { MoveRight } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto my-40 flex justify-between items-center py-10">
      <div className="w-1/2">
        <Image
          width={250}
          height={250}
          src="/Customer1.png"
          alt="member"
          className="w-[80%]"
        />
      </div>
      <div className="space-y-3 max-w-xl">
        <p className="text-gray text-sm">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="text-2xl text-green font-semibold">Tim Smith</h1>
        <p className="text-[#89939E] text-sm">
          British Dragon Boat Racing Association
        </p>
        <div className="flex items-center justify-between pt-4">
          <Image
            width={34}
            height={34}
            src="/client1.png"
            alt="client"
            className=""
          />
          <Image
            width={34}
            height={34}
            src="/client2.png"
            alt="client"
            className=""
          />
          <Image
            width={34}
            height={34}
            src="/client3.png"
            alt="client"
            className=""
          />
          <Image
            width={34}
            height={34}
            src="/client4.png"
            alt="client"
            className=""
          />
          <Image
            width={34}
            height={34}
            src="/client5.png"
            alt="client"
            className=""
          />
          <Image
            width={34}
            height={34}
            src="/client6.png"
            alt="client"
            className=""
          />
          <div className="flex gap-2 items-center justify-center">
            <h1 className="text-xl text-green font-semibold">
              Meet all customers{" "}
            </h1>
            <MoveRight className="text-green" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
