import { z } from "zod";

export function json<T>(data: T, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json", ...(init?.headers || {}) },
  });
}

export function errorJson(message: string, status = 400) {
  return json({ ok: false, error: message }, { status });
}

export function okJson<T>(data: T) {
  return json({ ok: true, ...data });
}

export function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export const phoneLike = z.string().min(8).max(20);
export const emailLike = z.string().email();
