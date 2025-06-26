import { Alert, AlertTitle, AlertDescription } from '@/components/ui';
import { AlertTriangle as ExclamationTriangleIcon } from 'lucide-react';

export default function AlertBanner({ count }: { count: number }) {
  if (!count) return null;
  return (
    <Alert variant="destructive" className="mb-4">
      <ExclamationTriangleIcon className="size-4" />
      <AlertTitle>{count} unresolved alerts</AlertTitle>
      <AlertDescription>
        <a href="/alerts" className="underline">Review now →</a>
      </AlertDescription>
    </Alert>
  );
}
