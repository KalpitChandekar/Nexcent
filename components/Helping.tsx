import Image from "next/image";

const Helping = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-around p-10 px-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">
          Helping a local <br />
          <span className="text-green">business reinvent itself</span>
        </h1>
        <p className="text-gray text-sm">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        <div className="flex gap-2 items-center">
          <Image src="/members.png" alt="member" width={34} height={34} />
          <div className="">
            <h1 className="text-lg font-semibold">2,245,341</h1>
            <p className="text-gray text-sm">Members</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/clubs.png" alt="club" width={34} height={34} />
          <div className="">
            <h1 className="text-lg font-semibold">46,328</h1>
            <p className="text-gray text-sm">Clubs</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/booking.png" alt="bookings" width={34} height={34} />
          <div className="">
            <h1 className="text-lg font-semibold">828,867</h1>
            <p className="text-gray text-sm">Event Bookings</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/payments.png" alt="payment" width={34} height={34} />
          <div className="">
            <h1 className="text-lg font-semibold">1,926,436</h1>
            <p className="text-gray text-sm">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Helping;
