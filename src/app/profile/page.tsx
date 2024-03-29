import { ProfileForm } from "@/components/profile/ProfileForm";

function ProfilePage() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-semibold text-center">Profile Page</h1>
      <ProfileForm />
    </div>
  );
}

export default ProfilePage;
