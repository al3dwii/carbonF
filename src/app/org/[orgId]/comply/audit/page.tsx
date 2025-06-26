export default function AuditTrail({ params }: { params: { orgId: string } }) {
  const { orgId } = params;
  return (
    <div className="p-6">
      <button
        className="btn"
        onClick={() => window.open(`/api/org/${orgId}/comply/audit?format=xlsx`, "_blank")}
      >
        Export XLSX
      </button>
    </div>
  );
}
