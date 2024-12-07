import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Navbar />
      <div className="md:flex hidden">
        <Sidebar />
        <section className="ml-[290px] mt-[80px] mr-8">{children}</section>
      </div>
      <section className="md:hidden mt-[80px] mx-8 flex">{children}</section>
    </main>
  );
};

export default HomeLayout;
