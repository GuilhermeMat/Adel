import Profile from "@/components/Profile";
import { LoadingProvider } from "@/context/LoadingContext";

export default function ProfilePage() {
  return (
    <LoadingProvider>
      <Profile />
    </LoadingProvider>
  );
}
