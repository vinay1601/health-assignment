import Header from "@/components/molecules/Header";
import Sidebar from "@/components/molecules/Sidebar";
import Image from "next/image";
import { sidebarData } from "@/data/navLinks";
import DashboardMainContent from "@/components/organism/DashboardMainContent";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-4 w-full h-full">
        <div className="bg-gray-100 hidden md:block h-full w-[343px]">
          <Sidebar sidebars={sidebarData} />
        </div>
        <div className="grid md:grid-cols-1 md:col-span-3  w-full md:w-full h-screen">
          <div className="w-full h-full border-2 border-orange-800">
            <Header />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </>
  );
}
