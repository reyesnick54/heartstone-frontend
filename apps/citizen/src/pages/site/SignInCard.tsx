// The "Your government account" panel shared by the website pages: sign in, get a digital ID.
import type { ReactNode } from "react";
import { loginUrl, registerUrl } from "@heartstone/api-client";
import { Card, Cluster, Link, Stack } from "@heartstone/ui";
import { paths } from "../../lib/paths";

export function SignInLinks({ returnTo = paths.home }: { returnTo?: string }) {
  return (
    <Cluster gap="4" align="center">
      <Link href={loginUrl({ returnTo })} standalone className="button-link">
        Sign in with your digital ID
      </Link>
      <Link href={registerUrl({ returnTo })} standalone>
        Get a digital ID
      </Link>
    </Cluster>
  );
}

export function SignInCard({
  title = "Your government account",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Card title={title} titleLevel={2}>
      <Stack gap="4">
        <p>{children}</p>
        <SignInLinks />
      </Stack>
    </Card>
  );
}
