import Image from "next/image";
import logo from "@/public/logo.png";
import Sidebar from "../../components/dashboard/shared/Sidebar";
import Topbar from "../../components/dashboard/shared/Topbar";

export default function layout({ children }) {
  return (
    <section className="flex h-screen overflow-hidden bg-background">
      <div className="hidden lg:flex flex-col w-72 h-screen flex-shrink-0 border-r border-gray-100 bg-white">
        <div className="py-5 flex justify-center items-center border-b border-gray-100">
          <Image src={logo} alt="Logo" width={140} height={100} priority />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Sidebar />
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </section>
  );
}
