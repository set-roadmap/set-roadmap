import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-50/50 pt-4">
      <Navbar />
      <main className="pt-20 pb-20 bg-slate-50/50">{children}</main>
    </div>
  );
}
