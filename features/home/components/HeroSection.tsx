export function HeroSection() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-14 pt-12 lg:grid-cols-[1fr_420px]">
        <div className="max-w-3xl">
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#6B6258]">
        Software Engineer / Full-Stack Systems Builder
      </p>

     <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-[var(--font-montserrat)] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#171717] md:text-6xl">
                Venna Rajesh
            </h1>

        <span className="relative top-1 flex items-center gap-3 font-[var(--font-montserrat)] text-xs font-medium uppercase tracking-[0.32em] text-[#B88752]">
        <span className="h-px w-10 bg-[#B88752]/50" />
            Intentional
        </span>
            </div>
      <p className="mt-5 text-sm font-medium uppercase tracking-[0.28em] text-[#171717]/45">
        San Jose, CA · React · TypeScript · Node.js · Go · Cloud · AI Systems
      </p>
      

      <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B6258]">
        Full-stack engineer building scalable APIs, polished React interfaces,
        cloud-native systems, and AI-powered workflows from design to deployment.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="mailto:vennarajesh00@gmail.com"
          className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-[#F7F2EA] shadow-[0_18px_40px_rgba(23,23,23,0.18)] transition hover:-translate-y-0.5"
        >
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/venna-rajesh00/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#DED6C8] bg-[#FFFDF8]/65 px-6 py-3 text-sm font-medium text-[#171717] backdrop-blur-xl transition hover:-translate-y-0.5"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/srv9989"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#DED6C8] bg-[#FFFDF8]/65 px-6 py-3 text-sm font-medium text-[#171717] backdrop-blur-xl transition hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </div>

      <div className="mt-8 h-px w-72 bg-gradient-to-r from-[#171717]/30 to-transparent" />

      <div className="mt-8 flex w-fit items-center gap-4 rounded-full border border-[#DED6C8] bg-[#FFFDF8]/60 px-5 py-3 backdrop-blur-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#171717]/30" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#171717]" />
        </span>

        <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#6B6258]">
          System online
        </span>
      </div>
      </div>
      <div className="relative rounded-[36px] border border-[#DED6C8] bg-[#FFFDF8]/65 p-3 shadow-[0_30px_90px_rgba(23,23,23,0.12)] backdrop-blur-xl">
  <video
    src="/about-video.mp4"
    controls
    preload="metadata"
    className="aspect-[4/5] w-full rounded-[28px] object-cover"
  />

  <p className="mt-4 px-2 pb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#6B6258]">
    30 sec . My Lens
  </p>
</div>
    </div>
  );
}