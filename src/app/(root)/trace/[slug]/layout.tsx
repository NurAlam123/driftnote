import Navbar from "@/components/navbar";

const TracePage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default TracePage;
