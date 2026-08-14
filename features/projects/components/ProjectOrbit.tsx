const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/171717`;

const arcPositions = {
  upLeft: [
    { x: 15, y: 110 },
    { x: 35, y: 45 },
    { x: 85, y: -5 },
    { x: 155, y: -8 },
    { x: 220, y: 28 },
  ],
  upRight: [
    { x: 40, y: 28 },
    { x: 105, y: -8 },
    { x: 175, y: -5 },
    { x: 225, y: 45 },
    { x: 245, y: 110 },
  ],
  right: [
    { x: 175, y: -15 },
    { x: 240, y: 25 },
    { x: 270, y: 85 },
    { x: 240, y: 145 },
    { x: 175, y: 185 },
  ],
  downRight: [
    { x: 40, y: 140 },
    { x: 105, y: 190 },
    { x: 175, y: 192 },
    { x: 225, y: 145 },
    { x: 245, y: 80 },
  ],
  downLeft: [
    { x: 15, y: 80 },
    { x: 35, y: 145 },
    { x: 85, y: 192 },
    { x: 155, y: 190 },
    { x: 220, y: 140 },
  ],
  left: [
    { x: 85, y: -15 },
    { x: 20, y: 25 },
    { x: -10, y: 85 },
    { x: 20, y: 145 },
    { x: 85, y: 185 },
  ],
};
const skillGroups = [
  {
    id: "frontend",
    label: "UI",
    title: "Frontend",
    x: 28,
    y: 22,
    arc: "upLeft",
    skills: [
      { name: "React", icon: icon("react") },
      { name: "Next", icon: icon("nextdotjs") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Tailwind", icon: icon("tailwindcss") },
      { name: "Angular", icon: icon("angular") },
    ],
  },
  {
    id: "backend",
    label: "API",
    title: "Backend",
    x: 72,
    y: 22,
    arc: "upRight",
    skills: [
      { name: "Node", icon: icon("nodedotjs") },
      { name: "Express", icon: icon("express") },
      { name: ".NET", icon: icon("dotnet") },
      { name: "REST", icon: icon("openapiinitiative") },
      { name: "Postman", icon: icon("postman") },
    ],
  },
  {
    id: "data",
    label: "DB",
    title: "Data",
    x: 83,
    y: 52,
    arc: "right",
    skills: [
      { name: "Postgres", icon: icon("postgresql") },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "Supabase", icon: icon("supabase") },
      { name: "Neon", icon: icon("neon") },
      { name: "SQL", icon: icon("sqlite") },
    ],
  },
  {
    id: "cloud",
    label: "CLOUD",
    title: "Cloud",
    x: 66,
    y: 80,
    arc: "downRight",
    skills: [
      { name: "AWS", icon: icon("amazonwebservices") },
      { name: "Azure", icon: icon("microsoftazure") },
      { name: "GCP", icon: icon("googlecloud") },
      { name: "Docker", icon: icon("docker") },
      { name: "K8s", icon: icon("kubernetes") },
    ],
  },
  {
    id: "ai",
    label: "AI",
    title: "AI / ML",
    x: 34,
    y: 80,
    arc: "downLeft",
    skills: [
      { name: "PyTorch", icon: icon("pytorch") },
      { name: "LangChain", icon: icon("langchain") },
      { name: "Gemini", icon: icon("googlegemini") },
      { name: "OpenAI", icon: icon("openai") },
      { name: "Python", icon: icon("python") },
    ],
  },
  {
    id: "systems",
    label: "SYS",
    title: "Systems",
    x: 17,
    y: 52,
    arc: "left",
    skills: [
      { name: "Go", icon: icon("go") },
      { name: "Kafka", icon: icon("apachekafka") },
      { name: "Prometheus", icon: icon("prometheus") },
      { name: "Git", icon: icon("git") },
      { name: "Linux", icon: icon("linux") },
    ],
  },
];

export function ProjectOrbit() {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-20">
      <div className="relative h-[76vh] w-full overflow-visible">
        <p className="absolute left-0 top-0 z-20 text-sm font-medium uppercase tracking-[0.35em] text-[#6B6258]">
          03 / Stack Field
        </p>

        <p className="absolute left-0 top-12 z-20 max-w-md text-xl leading-8 text-[#6B6258]">
         ..
        </p>

        {/* Main gravity strings */}
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {skillGroups.map((group) => (
            <line
              key={group.id}
              x1="50"
              y1="50"
              x2={group.x}
              y2={group.y}
              stroke="rgba(23,23,23,0.16)"
              strokeWidth="0.12"
              strokeLinecap="round"
            />
          ))}

          <circle
            cx="50"
            cy="50"
            r="7.5"
            fill="none"
            stroke="rgba(184,135,82,0.22)"
            strokeWidth="0.14"
          />
        </svg>

        {/* Fixed center pivot */}
          <div className="stack-pivot-float absolute left-1/2 top-1/2 z-30 flex h-44 w-44 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#DED6C8] bg-[#FFFDF8]/85 shadow-[0_30px_90px_rgba(23,23,23,0.18)] backdrop-blur-xl" />

          <div className="relative z-10 h-28 w-28 overflow-hidden rounded-full bg-[#171717]">
            <img
              src="/profile.jpg"
              alt="Venna Rajesh"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Skill gravity clusters */}
        {skillGroups.map((group) => {
          const positions = arcPositions[group.arc as keyof typeof arcPositions];

          return (
            <div
              key={group.id}
              className="absolute z-20 h-[210px] w-[260px] -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${group.x}%`,
                top: `${group.y}%`,
              }}
            >
              {/* Local half-circle strings */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 260 210"
                aria-hidden="true"
              >
                {positions.map((point, index) => (
                  <line
                    key={index}
                    x1="130"
                    y1="82"
                    x2={point.x}
                    y2={point.y}
                    stroke="rgba(184,135,82,0.26)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              {/* Group center */}
              <div className="absolute left-1/2 top-[82px] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#6B6258]">
                  {group.title}
                </p>

                <div className="flex h-16 w-16 rotate-45 items-center justify-center border border-[#DED6C8] bg-[#FFFDF8]/90 shadow-[0_24px_60px_rgba(23,23,23,0.12)] backdrop-blur-xl">
                  <span className="-rotate-45 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    {group.label}
                  </span>
                </div>
              </div>

              {/* Skills on half-gravity arc */}
              {group.skills.map((skill, index) => {
                const point = positions[index];

                return (
                  <div
                    key={skill.name}
                    className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                    style={{
                      left: point.x,
                      top: point.y,
                    }}
                    title={skill.name}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DED6C8] bg-[#FFFDF8]/90 shadow-[0_14px_35px_rgba(23,23,23,0.08)] backdrop-blur-xl">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    <span className="max-w-16 truncate text-[8px] font-medium uppercase tracking-[0.08em] text-[#6B6258]">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}

        <p className="absolute bottom-0 left-1/2 z-20 w-max -translate-x-1/2 text-xs font-medium uppercase tracking-[0.28em] text-[#6B6258]">
          Skills pulled into systems
        </p>
      </div>
    </div>
  );
}