const stackGroups = [
  ["Frontend", "React · Next.js · TypeScript · Tailwind"],
  ["Backend", "Node.js · Express · REST · gRPC"],
  ["Systems", "Go · Kafka · Docker · Kubernetes"],
  ["Data", "PostgreSQL · MongoDB · Supabase"],
  ["Cloud", "AWS · Azure · GCP · CI/CD"],
  ["AI", "PyTorch · LangChain · Whisper · Gemini"],
];

export function SkillsSection() {
  return (
    <div className="max-w-6xl">
      <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#6B6258]">
        04 / Stack
      </p>

      <h2 className="max-w-5xl text-6xl font-semibold leading-tight tracking-[-0.04em]">
        A stack built for product, systems, cloud, and AI.
      </h2>

      <div className="mt-12 grid max-w-6xl grid-cols-3 gap-4">
        {stackGroups.map(([title, tools]) => (
          <div
            key={title}
            className="rounded-[28px] border border-[#DED6C8] bg-[#FFFDF8]/55 p-6 backdrop-blur-xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#6B6258]">
              {title}
            </p>

            <p className="mt-8 text-xl font-semibold leading-8 tracking-[-0.03em] text-[#171717]">
              {tools}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}