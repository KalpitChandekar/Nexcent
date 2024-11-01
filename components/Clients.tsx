import Image from "next/image";

const Clients = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 space-y-2 text-center">
      <h1 className="text-2xl font-semibold">Our Clients</h1>
      <p className="text-gray text-sm">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex items-center justify-between py-10">
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
      </div>
    </div>
  );
};
export default Clients;
