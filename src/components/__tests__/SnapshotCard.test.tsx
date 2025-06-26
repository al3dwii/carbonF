import { render, screen } from "@testing-library/react";
import SnapshotCard from "../dashboard/SnapshotCard";
import { describe, it, expect } from "vitest";

it("renders value & delta", () => {
  render(<SnapshotCard label="x" value="123" trend={[1,2,3]} deltaPct={5} />);
  expect(screen.getByText("123")).toBeInTheDocument();
  expect(screen.getByText(/5%/)).toBeInTheDocument();
});
