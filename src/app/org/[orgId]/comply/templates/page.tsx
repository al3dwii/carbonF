import TemplateManager from "@/components/comply/TemplateManager";

export default function Templates({ params }: { params: { orgId: string } }) {
  const { orgId } = params;
  return (
    <div className="p-6">
      <TemplateManager orgId={orgId} />
    </div>
  );
}
