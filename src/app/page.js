import Header from "@/components/molecules/Header";
import Sidebar from "@/components/molecules/Sidebar";
import Image from "next/image";
import { sidebarData } from "@/data/navLinks";
import DashboardMainContent from "@/components/organism/DashboardMainContent";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-4 w-full h-full ">
        <div className="bg-gray-100  hidden col-span-1 lg:block h-full 5xl:h-fit 5xl:w-[480px] lg:w-[260px]  md:w-[252px]">
          <Sidebar sidebars={sidebarData} />
        </div>
        <div className="col-span-1 lg:col-span-3  w-full 5xl:w-full h-full">
          <div className="w-full h-full ">
            <Header />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </>
  );
}
