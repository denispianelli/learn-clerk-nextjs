import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

export default async function App() {
  const { userId } = auth();
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {userId ? (
          <UserButton />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/sign-in">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/sign-up" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
