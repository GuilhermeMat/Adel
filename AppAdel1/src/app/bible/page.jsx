import Bible from "@/components/Bible";
import { LoadingProvider } from "@/context/LoadingContext";

export default function BiblePage() {
  return (
    <LoadingProvider>
      <Bible />
    </LoadingProvider>
  );
}
