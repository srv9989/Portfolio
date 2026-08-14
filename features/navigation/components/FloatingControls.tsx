export function FloatingControls() {
  return (
    <>
      {/* Top navigation */}
      <header className="fixed left-8 right-8 top-8 z-50 flex items-center justify-between">
        {/* Brand — goes back to first slide/About */}
        <a
          href="#about"
          className="flex items-center gap-3 rounded-full border border-[#DED6C8] bg-[#FFFDF8]/75 px-5 py-3 text-sm font-medium text-[#171717] backdrop-blur-xl"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171717] text-xs font-semibold text-[#F7F2EA]">
            VR
          </span>
          <span className="text-[#171717]/75">Venna Rajesh</span>
        </a>

        {/* Center nav — horizontal slide anchors */}
        <nav className="hidden items-center gap-2 rounded-full border border-[#DED6C8] bg-[#FFFDF8]/65 px-3 py-2 text-sm font-medium text-[#6B6258] backdrop-blur-xl md:flex">
          <a
            href="#about"
            className="rounded-full px-4 py-2 text-[#171717] transition hover:bg-[#171717]/5"
          >
            Identity
          </a>

          <a
            href="#work"
            className="rounded-full px-4 py-2 transition hover:bg-[#171717]/5 hover:text-[#171717]"
          >
            Proof
          </a>

          <a
            href="#projects"
            className="rounded-full px-4 py-2 transition hover:bg-[#171717]/5 hover:text-[#171717]"
          >
            Builds
          </a>

          <a
            href="#Stacks"
            className="rounded-full px-4 py-2 transition hover:bg-[#171717]/5 hover:text-[#171717]"
          >
            Stack
          </a>
        </nav>

        {/* Contact CTA */}
       <div className="group relative">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 rounded-full border border-[#171717]/10 bg-[#171717] px-5 py-3 text-sm font-medium text-[#F7F2EA] shadow-[0_18px_40px_rgba(23,23,23,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(23,23,23,0.24)]"
  >
    <span>Resume</span>
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F2EA] text-sm font-semibold text-[#171717] transition group-hover:translate-x-0.5">
      →
    </span>
  </a>
</div>
      </header>

      {/* Bottom-left */}
      <div className="fixed bottom-8 left-8 z-50">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#6B6258]">
          01 / About
        </p>
      </div>

      {/* Bottom-right */}
      <div className="fixed bottom-10 right-10 z-50 flex items-center gap-3">
        <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#171717]/30 to-[#171717]/60" />
        <span className="h-2 w-2 rounded-full bg-[#171717]/70 shadow-[0_0_18px_rgba(23,23,23,0.25)]" />
      </div>
    </>
  );
}