import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Shell({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar role={role} />
      <section className="flex-1 flex flex-col">
        <Topbar />
        <ErrorBoundary>
          <main className="flex-1 overflow-auto">{children}</main>
        </ErrorBoundary>
      </section>
    </div>
  );
}
