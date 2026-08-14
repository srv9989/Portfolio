export function WorkSection() {
  return (
    <div className="max-w-6xl">
      <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#6B6258]">
        03 / Proof System
      </p>

      <h2 className="max-w-5xl text-6xl font-semibold leading-tight tracking-[-0.04em]">
        Engineering is measured by decisions, tradeoffs, and shipped impact.
      </h2>

      <div className="mt-12 grid max-w-5xl grid-cols-3 gap-4">
        {["Build", "Measure", "Improve"].map((item, index) => (
          <div
            key={item}
            className="rounded-[28px] border border-[#DED6C8] bg-[#FFFDF8]/60 p-6 backdrop-blur-xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#6B6258]">
              0{index + 1}
            </p>

            <p className="mt-10 text-2xl font-semibold tracking-[-0.04em]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}