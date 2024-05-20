import Pgi from "@/components/Pgi";
import { LoadingProvider } from "@/context/LoadingContext";

export default function PgiPage() {
  return (
    <LoadingProvider>
      <Pgi />
    </LoadingProvider>
  );
}
