'use client'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Hypasus AI. Alle rechten voorbehouden.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white/90" href="#">Privacy</a>
          <a className="hover:text-white/90" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
