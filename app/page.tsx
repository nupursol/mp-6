import AuthButtons from "@/components/AuthButtons";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">OAuth Demo</h1>
        <AuthButtons />
      </main>
  );
}