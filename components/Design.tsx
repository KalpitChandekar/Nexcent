import Image from "next/image";

const Design = () => {
  return (
    <section className="max-w-6xl mx-auto my-40 flex gap-10 items-center px-4">
      <Image
        width={1200}
        height={1200}
        src="/design.png"
        alt="member"
        className="max-w-xs w-full"
      />
      <div className="space-y-4 w-full">
        <h1 className="text-2xl font-semibold">
          How to design your site footer like <br /> we did
        </h1>
        <p className="text-gray text-sm">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="flex gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
          Learn More{" "}
        </button>
      </div>
    </section>
  );
};
export default Design;
