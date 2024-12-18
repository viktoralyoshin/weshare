import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Navbar />
      <div className="md:flex hidden">
        <Sidebar />
        <section className="ml-[290px] mt-[80px] mr-8 w-full">{children}</section>
      </div>
      <section className="md:hidden mt-[80px] flex w-full">{children}</section>
    </main>
  );
};

export default HomeLayout;
