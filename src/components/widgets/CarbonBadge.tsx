export default function CarbonBadge({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs">
      🌿 {value.toFixed(1)} kg CO₂
    </span>
  );
}
