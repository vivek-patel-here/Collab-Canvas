"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* Big 404 */}
        <h1 className="text-[120px] font-bold leading-none text-white/90">
          404
        </h1>

        {/* Divider glow */}
        <div className="mx-auto my-6 h-px w-32 bg-linear-to-r from-transparent via-white/40 to-transparent" />

        {/* Message */}
        <h2 className="text-2xl text-white font-medium">
          Page not found
        </h2>

        <p className="mt-3 text-sm text-white/50">
          The page you're looking for doesn't exist or was moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Go Home
          </Link>

          <Link
            href="/meet"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 transition"
          >
            Open Workspace
          </Link>
        </div>
      </div>
    </div>
  );
}
