import Image from "next/image";

const MemberDashboard = () => {
  return (
    <div className="  py-10 md:py-14 ">
      {/* Welcome Section */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#f9fafb] via-[#ff3898] to-purple-900 dark:from-[#111111] bg-clip-text text-transparent mb-6">
        Member Dashboard
      </h1>

     


      <p className="text-center text-lg md:text-xl text-[#6b7280] dark:text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-8">
        Once subscribed, you'll unlock your personal dashboard with powerful
        tools to create viral content.
      </p>

      <div className="max-w-7xl mx-auto bg-blue-50 p-3 md:p-4 shadow-2xl rounded-2xl">
        <Image
          src="/images/dashboard-image.png"
          alt="Photo"
          className="w-full h-auto rounded-2xl"
          width={1400}
          height={1000}
        />
      </div>
    </div>
  );
};

export default MemberDashboard;
