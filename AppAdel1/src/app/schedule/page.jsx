import Schedule from "@/components/Schedule";
import { LoadingProvider } from "@/context/LoadingContext";

export default function SchedulePage() {
  return (
    <LoadingProvider>
      <Schedule />
    </LoadingProvider>
  );
}
