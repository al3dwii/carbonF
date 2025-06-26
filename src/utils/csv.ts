export function downloadCsv(rows: any[], filename = "export.csv") {
  const header = Object.keys(rows[0]).join(",");
  const body   = rows.map(r => Object.values(r).join(",")).join("\n");
  const blob   = new Blob([header + "\n" + body], { type: "text/csv" });
  const url    = URL.createObjectURL(blob);
  const a      = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
