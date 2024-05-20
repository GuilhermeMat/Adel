import Church from "@/components/Church";
import { LoadingProvider } from "@/context/LoadingContext";

export default function ChurchPage() {
  return (
    <LoadingProvider>
      <Church />
    </LoadingProvider>
  );
}
