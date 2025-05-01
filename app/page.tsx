'use client';

import { useSession } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";

export default function Home() {
    const { data: session } = useSession();
    const username = session?.user?.email?.split("@")[0];
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
            <h1 className="text-4xl font-extrabold text-pink-600 mb-6 drop-shadow-md">OAuth Demo</h1>
            <AuthButtons />
            {session && (
                <div className="mt-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-full max-w-sm text-center border border-pink-200">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Information</h2>
                    <div className="text-left space-y-3 text-gray-800 font-medium">
                        {/* Display user's profile picture */}
                        {session.user?.image && (
                            <img src={session.user.image}
                                alt="Profile picture"
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-500"/>
                        )}
                        <p><span className="text-pink-500">👤 Name:</span> {session.user?.name}</p>
                        <p><span className="text-purple-500">🌸 Username:</span> {username}</p>
                        <p><span className="text-blue-500">📧 Email:</span> {session.user?.email}</p>
                        <p><span className="text-yellow-500">🔑 Signed in with:</span> Google</p>
                    </div>
                </div>
            )}
        </main>
    );
}