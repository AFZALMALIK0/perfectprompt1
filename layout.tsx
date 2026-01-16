export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(900px_circle_at_30%_10%,rgba(245,158,11,0.20),transparent_45%),radial-gradient(900px_circle_at_80%_30%,rgba(99,102,241,0.16),transparent_45%)]">
      <div className="mx-auto max-w-md px-6 py-10">{children}</div>
    </main>
  );
}
