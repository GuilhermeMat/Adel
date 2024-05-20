import News from "@/components/News";
import { LoadingProvider } from "@/context/LoadingContext";

export default function NewsPage () {
   return (
      <LoadingProvider>
         <News />
      </LoadingProvider>
   )
}