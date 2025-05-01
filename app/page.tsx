'use client';

import { useSession } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";

export default function Home() {
    const { data: session } = useSession();

    const username = session?.user?.email?.split("@")[0];

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-2xl font-bold mb-6">OAuth Demo</h1>
            <AuthButtons />

            {session && (
                <div className="mt-8 bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h2>
                    <div className="text-left space-y-2 text-gray-700">
                        <p><span className="font-medium">Name:</span> {session.user?.name}</p>
                        <p><span className="font-medium">Username:</span> {username}</p>
                        <p><span className="font-medium">Email:</span> {session.user?.email}</p>
                        <p><span className="font-medium">Signed in with:</span> Google</p>
                    </div>
                </div>
            )}
        </main>
    );
}