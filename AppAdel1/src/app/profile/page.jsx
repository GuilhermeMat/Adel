import Profile from "@/components/Profile";
import { LoadingProvider } from "@/context/LoadingContext";
import { UserProvider } from "@/context/UserContext";

export default function ProfilePage() {
  return (
    <LoadingProvider>
      <Profile />
    </LoadingProvider>
  );
}
