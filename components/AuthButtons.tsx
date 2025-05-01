'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
    const { data: session } = useSession();
    return (
        <div className="flex flex-col items-center space-y-4">
            {!session ? (
                <button onClick={() => signIn("google")}
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg rounded-full shadow-lg transition-all duration-200">
                    🌟 Sign in with Google 🌟
                </button>
            ) : (
                <button onClick={() => signOut()}
                    className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-full shadow-lg transition-all duration-200">
                    🚪 Sign out
                </button>
            )}
        </div>
    );
}