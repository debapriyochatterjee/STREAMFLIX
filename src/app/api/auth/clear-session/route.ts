import { signOut } from "@/lib/auth";

// Used when a Server Component detects a session that's cryptographically
// valid but points at a user record that no longer exists (e.g. the
// in-memory store was reset by a server restart). Server Components can't
// mutate cookies during render, so instead of clearing the session inline
// they redirect here — a Route Handler, which is a sanctioned place to
// call signOut() and clear the stale cookie — before landing on /login.
export async function GET() {
  await signOut({ redirectTo: "/login" });
}
