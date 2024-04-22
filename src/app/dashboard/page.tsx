import { auth, currentUser } from '@clerk/nextjs/server';
import { User } from '@nextui-org/react';

export default async function Dashboard() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in.</div>;
  }

  return (
    <main className="h-[calc(100vh-64px)] flex items-center justify-center">
      <User
        name={`${user.firstName} ${user.lastName}`}
        description={user.username}
        avatarProps={{
          src: `${user.imageUrl}`,
        }}
      />
    </main>
  );
}
