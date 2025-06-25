"use client";
import { Component, ErrorInfo, ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { error?: Error }
> {
  state = { error: undefined as Error | undefined };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.error)
      return (
        <div className="p-6">
          <h1 className="text-xl mb-2">Something went wrong</h1>
          <p className="mb-4 text-sm">{this.state.error.message}</p>
          <button className="underline" onClick={() => location.reload()}>
            Reload page
          </button>
        </div>
      );
    return this.props.children;
  }
}
