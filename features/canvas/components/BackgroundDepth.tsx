export function BackgroundDepth() {
  return (
    <>
      {/* Base cream canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#F7F2EA]" />

      {/* Warm cinematic glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_20%,rgba(184,135,82,0.13),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(23,23,23,0.055),transparent_38%)]" />

      {/* Soft engineering grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.04)_1px,transparent_1px)] bg-[size:84px_84px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,253,248,0.52),rgba(247,242,234,0.08),rgba(222,214,200,0.18))]" />
    </>
  );
}