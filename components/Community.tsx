import Image from "next/image";

const Community = () => {
  return (
    <div className="max-w-6xl mx-auto py-40 text-center">
      {" "}
      <h1 className="text-2xl font-semibold">
        Manage your entire community <br /> in a single system
      </h1>
      <p className="text-gray text-sm">Who is Nextcent suitable for?</p>
      <div className="flex items-center justify-between space-y-20">
        <div className="flex flex-col items-center justify-center space-y-2 max-w-[16rem]">
          <Image
            width={46}
            height={40}
            src="/system1.png"
            alt="member"
            className=""
          />
          <h1 className="text-xl font-semibold">
            Membership <br />
            Organizations
          </h1>
          <p className="text-sm text-gray">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 max-w-[16rem]">
          <Image
            width={46}
            height={40}
            src="/system2.png"
            alt="member"
            className=""
          />
          <h1 className="text-xl font-semibold">
            National <br />
            Associations
          </h1>
          <p className="text-sm text-gray">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 max-w-[16rem]">
          <Image
            width={46}
            height={40}
            src="/system3.png"
            alt="member"
            className=""
          />
          <h1 className="text-xl font-semibold">
            Clubs And <br /> Groups
          </h1>
          <p className="text-sm text-gray">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
export default Community