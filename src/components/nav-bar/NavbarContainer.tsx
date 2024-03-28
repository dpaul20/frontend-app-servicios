import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "./Navbar";

export default async function NavbarContainer() {
  const session = await getServerSession(authOptions);

  console.log("NavbarContainer session", session);

  return (
    <>
      <Navbar session={session} />
    </>
  );
}
