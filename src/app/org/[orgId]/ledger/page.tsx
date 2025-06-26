import ClientPage from "./ClientPage";
import { fetchLedger } from "@/lib/ledger-api";

export default async function LedgerPage({ params }: { params: Promise<{ orgId: string }> }) {
  const { orgId } = await params;
  const initialRows = await fetchLedger(orgId, 50);
  return <ClientPage orgId={orgId} initialRows={initialRows} />;
}
