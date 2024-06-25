import Sidebar from "./_components/sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex bg-slate-50">
      <Sidebar />
      <main className="p-3.5 w-full h-full">{children}</main>
    </div>
  );
}
