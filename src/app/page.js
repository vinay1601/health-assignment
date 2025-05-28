import Header from "@/components/molecules/Header";
import Sidebar from "@/components/molecules/Sidebar";
import Image from "next/legacy/image";
import { sidebarData } from "@/data/navLinks";
import DashboardMainContent from "@/components/organism/DashboardMainContent";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-4 w-full h-full " >
        <div className="bg-gray-100 md:border-2 md:border-indigo-800 hidden col-span-1 md:block h-full lg:h-fit lg:w-[480px]  md:w-[243px]">
          <Sidebar sidebars={sidebarData} />
        </div>
        <div className="col-span-1 md:col-span-3  w-full md:w-full h-full">
          <div className="w-full h-full border-2 border-orange-800">
            <Header />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </>
  );
}
