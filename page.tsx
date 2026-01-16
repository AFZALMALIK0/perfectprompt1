"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { setToken } from "@/lib/clientAuth";

export default function SignUp() {
  const r = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name || undefined,
          email: email || undefined,
          phone: phone || undefined,
          password,
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Failed");
      setToken(data.token);
      r.push("/app");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-black/70 hover:underline">
          ← Back
        </Link>
      </div>

      <Card className="p-6">
        <div className="font-display text-2xl">Create your PerfectPrompt account</div>
        <div className="mt-1 text-sm text-black/60">Email or phone + password. (OTP login is on the sign-in page.)</div>

        <form className="mt-6 space-y-3" onSubmit={onSubmit}>
          <Input placeholder="Name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Input placeholder="Password (min 6)" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {err ? <div className="text-sm text-red-600">{err}</div> : null}

          <Button className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Sign up"}
          </Button>
        </form>

        <div className="mt-4 text-sm text-black/70">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-semibold underline">
            Sign in
          </Link>
        </div>
      </Card>
    </>
  );
}
