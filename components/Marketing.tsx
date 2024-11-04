import { MoveRight } from "lucide-react";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-40 mt-20 space-y-8">
      <div className="max-w-lg text-center mx-auto space-y-2">
        <h1 className="text-2xl font-semibold">Caring is the new marketing</h1>
        <p className="text-gray text-sm ">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&apos;s joining the
          community, read about how our community are increasing their
          membership income and lot&apos;s more.​
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="relative flex items-center justify-center">
          <Image
            src="/blog1.png"
            alt="blog"
            width={258}
            height={200}
            className="w-full object-cover"
          />
          <div className="bg-white rounded-md px-1 py-3 shadow-xl text-center absolute -bottom-20 w-72 space-y-4">
            <h1 className="text-lg font-semibold text-gray">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-xl text-green font-semibold">Readmore</h1>
              <MoveRight className="text-green" size={18} />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/blog2.png"
            alt="blog"
            width={258}
            height={200}
            className="w-full object-cover"
          />
          <div className="bg-white rounded-md px-1 py-3 shadow-xl text-center absolute -bottom-20 w-72 space-y-4">
            <h1 className="text-lg font-semibold text-gray">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h1>
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-xl text-green font-semibold">Readmore</h1>
              <MoveRight className="text-green" size={18} />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/blog3.png"
            alt="blog"
            width={258}
            height={200}
            className="w-full object-cover"
          />
          <div className="bg-white rounded-md px-1 py-3 shadow-xl text-center absolute -bottom-20 w-72 space-y-4">
            <h1 className="text-lg font-semibold text-gray">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-xl text-green font-semibold">Readmore</h1>
              <MoveRight className="text-green" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marketing;
