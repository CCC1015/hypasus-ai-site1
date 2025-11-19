'use client'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Hypasus AI. Alle rechten voorbehouden.</p>
        <div className="flex items-center gap-4">
          <a
            href="/Hypasus_Privacy_Verklaring.pdf"
            download
            className="hover:text-white/90"
          >
            Privacy verklaring
          </a>
          <a
            href="/Algemene_Voorwaarden_Hypasus(AV).pdf"
            download
            className="hover:text-white/90"
          >
            Algemene voorwaarden
          </a>
        </div>
      </div>
    </footer>
  );
};
