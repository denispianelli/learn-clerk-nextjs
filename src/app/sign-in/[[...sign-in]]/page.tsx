import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="h-[calc(100vh-64px)] flex items-center justify-center">
      <SignIn path="/sign-in" />
    </main>
  );
}
