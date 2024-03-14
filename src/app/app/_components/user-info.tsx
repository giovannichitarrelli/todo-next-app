"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  user: Session["user"];
};
export async function UserInfo({ user }: Props) {
  if (!user) {
    return;
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Avatar>
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <span>{user?.email}</span>

        <Button variant="outline" onClick={() => signOut()}>
          Sign out
        </Button>
        {/* <pre>{JSON.stringify(session?.user, null, 1)}</pre> */}
      </div>
    </main>
  );
}
