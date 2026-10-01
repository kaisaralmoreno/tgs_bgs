import { login } from "@/app/(auth)/login/action";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="w-full max-w-md rounded-xl border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur">
      <h1 className="mb-2 text-2xl font-bold text-white">
        Admin Login
      </h1>

      <p className="mb-6 text-sm text-gray-400">
        Masuk untuk mengelola portfolio.
      </p>

      {params.error && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300"
        >
          {params.error}
        </p>
      )}

      <form action={login} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-white"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            required
            className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-white"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-white px-4 py-2 font-semibold text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
}