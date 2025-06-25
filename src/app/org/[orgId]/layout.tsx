import Shell from "@/components/Shell";
import { getServerRole } from "@/lib/getRole.server";

export default function OrgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = getServerRole();

  return (
    <>
      {/* expose role to the browser once */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__ROLE__=${JSON.stringify(role)};`,
        }}
      />
      <Shell role={role}>{children}</Shell>
    </>
  );
}
