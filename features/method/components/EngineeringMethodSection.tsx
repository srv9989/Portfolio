export function EngineeringMethodSection() {
  return (
    <div className="max-w-6xl">
      <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#6B6258]">
        02 / Engineering Method
      </p>

      <h2 className="max-w-5xl text-6xl font-semibold leading-tight tracking-[-0.04em]">
        I turn unclear problems into structured systems.
      </h2>

      <div className="mt-12 flex flex-wrap items-center gap-4 text-2xl font-medium text-[#171717]/70">
        <span>Problem</span>
        <span className="text-[#B88752]">→</span>
        <span>Constraint</span>
        <span className="text-[#B88752]">→</span>
        <span>Architecture</span>
        <span className="text-[#B88752]">→</span>
        <span className="text-[#171717]">Impact</span>
      </div>
    </div>
  );
}