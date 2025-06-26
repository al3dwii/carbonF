"use client";
import { Card } from "./Card";

export function StatCard({ label, value, unit }:{label:string; value:number; unit?:string}){
  return (
    <Card className="p-4 space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-semibold">
        {value}{unit && <span className="text-base ml-1">{unit}</span>}
      </p>
    </Card>
  );
}

export function SkeletonCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({length:4}).map((_,i)=>(
        <Card key={i} className="h-20 animate-pulse bg-muted" />
      ))}
    </div>
  );
}
