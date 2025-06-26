export function reportWebVitals(metric) {
  navigator.sendBeacon("/api/analytics/web-vitals",
                       JSON.stringify(metric));
}
