import Ministry from "@/components/Ministry";
import { LoadingProvider } from "@/context/LoadingContext";

export default function MinistryPage () {
  return (
    <LoadingProvider>
      <Ministry />
    </LoadingProvider>
  );
}