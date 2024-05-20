import Prayer from "@/components/Prayer";
import { LoadingProvider } from "@/context/LoadingContext";

export default function PrayerPage() {
  return (
    <LoadingProvider>
      <Prayer />
    </LoadingProvider>
  );
}
