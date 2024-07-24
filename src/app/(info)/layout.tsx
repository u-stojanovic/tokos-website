import Navbar from "@/components/shared/Navbar";

export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
