import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-start justify-center px-4 py-12">
      <p className="text-sm uppercase tracking-wider text-zinc-500">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-300">The page you are trying to access does not exist.</p>
      <Link
        to="/"
        className="mt-6 rounded border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
      >
        Back to home
      </Link>
    </section>
  )
}
