import { getBearer, verifyToken } from "@/lib/auth";
import { errorJson } from "@/lib/api";

export async function requireUser(req: Request) {
  const token = getBearer(req);
  if (!token) return { error: errorJson("Missing auth token", 401) as Response, user: null as const };

  try {
    const user = await verifyToken(token);
    return { error: null as const, user };
  } catch {
    return { error: errorJson("Invalid token", 401) as Response, user: null as const };
  }
}
