"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <img src={session.user.image!} alt="Profile" className="w-12 h-12 rounded-full" />
                <button onClick={() => signOut()} className="mt-2">Sign out</button>
            </div>
        );
    }

    return (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
    );
}