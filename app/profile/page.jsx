// app/profile/page.js
"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Not signed in</p>;

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} alt="Profile pic" />
    </div>
  );
}
