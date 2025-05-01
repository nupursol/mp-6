'use client';
import { signIn, signOut, useSession } from "next-auth/react"; // importing the hooks and functions for auth

export default function AuthButtons() {
    const { data: session } = useSession(); // get session data to check if user is logged in
    return (
        <div className="flex flex-col items-center space-y-4"> {/* container for the buttons */}
            {!session ? ( // if no session (i.e., user isn't logged in)
                <button onClick={() => signIn("google")} // trigger sign in with google
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg rounded-full shadow-lg transition-all duration-200">
                    🌟 Sign in with Google 🌟
                </button>
            ) : ( // if session exists (i.e., user is logged in)
                <button onClick={() => signOut()} // trigger sign out
                    className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-full shadow-lg transition-all duration-200">
                    🚪 Sign out
                </button>
            )}
        </div>
    );
}
