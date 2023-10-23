import { SignIn } from "@/app/_components/auth/SignIn";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return <SignIn session={session} />;
}
