import { useAuth } from "@/hooks/useAuth";
import {
  withPageAuthRequired,
  type UserProfile,
} from "@auth0/nextjs-auth0/client";
import { NextPage } from "next";

interface Props {
  user: UserProfile;
}

const Profile: NextPage<Props> = ({ user }) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
};

export default withPageAuthRequired(Profile);
