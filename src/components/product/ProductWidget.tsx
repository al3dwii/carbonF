"use client";
import useSWR from "swr";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function ProductWidget<T>({
  orgId, icon: Icon, title, endpoint, render
}: {
  orgId: string;
  icon: React.FC<any>;
  title: string;
  endpoint: string;
  render: (data: T) => React.ReactNode;
}) {
  const { data, error } = useSWR<T>(`/api/proxy/org/${orgId}${endpoint}`, (u) =>
    fetch(u).then(r => r.json())
  );
  if (error) return <Card title={title}><p>error</p></Card>;
  if (!data) return <Skeleton className="h-24 w-full"/>;

  return (
    <Card title={title}>
      <Icon className="w-5 h-5 inline mr-2"/>
      {render(data)}
    </Card>
  );
}
