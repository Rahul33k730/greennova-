import type { CSSProperties } from 'react';

/**
 * AboutHeroTechVisual — §2 of PRD
 * Premium SVG-based abstract clean-energy engineering system visual.
 * No external images / no cartoon styling. Thin lines, mono micro-annotations,
 * selective nova-green energy glow, H₂ molecules, pipelines, telemetry dots.
 * Used exclusively inside AboutPage HERO right-hand container.
 */
export interface AboutHeroTechVisualProps {
  className?: string;
  style?: CSSProperties;
}

export default function AboutHeroTechVisual({ className = '', style }: AboutHeroTechVisualProps) {
  return (
    <div
      className={[
        'relative w-full overflow-hidden rounded-[28px] border border-white/10',
        'bg-gradient-to-br from-forest-950 via-charcoal-950 to-forest-950 shadow-[0_40px_80px_-40px_rgba(10,30,21,0.55)]',
        className,
      ].join(' ')}
      style={style}
    >
      {/* Dark engineering grid backdrop */}
      <div aria-hidden className="absolute inset-0 tech-grid-bg-dark opacity-[0.7] pointer-events-none" />

      {/* Corner ambient glow layers */}
      <div aria-hidden className="absolute -top-24 -right-20 w-[22rem] h-[22rem] rounded-full bg-nova-500/15 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-28 -left-24 w-[26rem] h-[26rem] rounded-full bg-nova-400/10 blur-3xl pointer-events-none" />

      {/* Technical SVG canvas */}
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        className="relative z-10 w-full h-full aspect-[4/5]"
        aria-hidden
      >
        {/* ===== H₂ MOLECULE NODES ===== */}
        <g>
          {/* Molecule A: H₂ — top-left cluster */}
          <circle cx="210" cy="230" r="36" fill="none" stroke="#4AD08E" strokeOpacity="0.55" strokeWidth="1.2" />
          <circle cx="210" cy="230" r="22" fill="#0A1E15" stroke="#22B871" strokeWidth="1.5" />
          <circle cx="258" cy="255" r="22" fill="#0A1E15" stroke="#22B871" strokeWidth="1.5" />
          {/* bond */}
          <line x1="228" y1="242" x2="242" y2="250" stroke="#83E5B3" strokeWidth="3" />
          <text x="196" y="220" fontFamily="ui-monospace, Menlo, monospace" fontSize="13" fontWeight="700" fill="#83E5B3" letterSpacing="0.08em">H₂</text>

          {/* Molecule B: CH₄ — mid cluster */}
          <circle cx="560" cy="420" r="44" fill="none" stroke="#4AD08E" strokeOpacity="0.45" strokeWidth="1.2" />
          <circle cx="560" cy="420" r="28" fill="#0A1E15" stroke="#22B871" strokeWidth="1.6" />
          <text x="548" y="412" fontFamily="ui-monospace, Menlo, monospace" fontSize="13" fontWeight="700" fill="#83E5B3" letterSpacing="0.04em">CH₄</text>
          {/* 4 "hydrogen bonds" around central node */}
          <circle cx="560" cy="368" r="8" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <circle cx="612" cy="420" r="8" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <circle cx="560" cy="472" r="8" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <circle cx="508" cy="420" r="8" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <line x1="560" y1="380" x2="560" y2="395" stroke="#83E5B3" strokeWidth="2" />
          <line x1="588" y1="420" x2="602" y2="420" stroke="#83E5B3" strokeWidth="2" />
          <line x1="560" y1="448" x2="560" y2="462" stroke="#83E5B3" strokeWidth="2" />
          <line x1="518" y1="420" x2="532" y2="420" stroke="#83E5B3" strokeWidth="2" />

          {/* Molecule C: H₂O — bottom */}
          <circle cx="300" cy="720" r="26" fill="#0A1E15" stroke="#22B871" strokeWidth="1.5" />
          <circle cx="260" cy="690" r="12" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <circle cx="340" cy="690" r="12" fill="#124E35" stroke="#4AD08E" strokeWidth="1.2" />
          <line x1="284" y1="710" x2="268" y2="698" stroke="#83E5B3" strokeWidth="2" />
          <line x1="316" y1="710" x2="332" y2="698" stroke="#83E5B3" strokeWidth="2" />
          <text x="288" y="725" fontFamily="ui-monospace, Menlo, monospace" fontSize="13" fontWeight="700" fill="#83E5B3">H₂O</text>
        </g>

        {/* ===== PIPELINE / FLOW PATHS (animated stroke-draw) ===== */}
        <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* 1. Curved green main artery: top-left H2 → central processing → CH4 cluster */}
          <path
            d="M 260 270 C 420 300, 430 360, 520 390"
            stroke="#4AD08E"
            strokeOpacity="0.85"
            className="stroke-draw delay-1"
          />
          {/* 2. Secondary line: central processing → electrolyser right-top */}
          <path
            d="M 580 250 C 620 300, 610 350, 585 400"
            stroke="#83E5B3"
            strokeOpacity="0.7"
            className="stroke-draw delay-2"
          />
          {/* 3. Diagonal from CH4 to water system (bottom left) */}
          <path
            d="M 540 470 C 470 560, 400 620, 320 680"
            stroke="#4AD08E"
            strokeOpacity="0.75"
            className="stroke-draw delay-3"
          />
          {/* 4. Industrial horizontal pipe bottom, with two elbow joints */}
          <path
            d="M 120 870 L 360 870 L 380 850 L 680 850"
            stroke="#4AD08E"
            strokeOpacity="0.55"
            className="stroke-draw delay-1"
          />
          {/* 5. Grid transmission lines (top) */}
          <path
            d="M 80 120 L 280 120 M 280 120 L 280 170 M 280 120 L 420 90 M 420 90 L 720 90 M 420 90 L 420 150"
            stroke="#83E5B3"
            strokeOpacity="0.45"
            className="stroke-draw delay-2"
          />
        </g>

        {/* ===== TELEMETRY / GRID TRANSMISSION TOWERS ===== */}
        <g stroke="#83E5B3" strokeWidth="1.2" strokeOpacity="0.8" fill="none">
          {/* Tower 1 */}
          <line x1="100" y1="130" x2="100" y2="175" />
          <line x1="82"  y1="140" x2="118" y2="140" />
          <line x1="86"  y1="158" x2="114" y2="158" />
          {/* Tower 2 */}
          <line x1="420" y1="100" x2="420" y2="155" />
          <line x1="402" y1="110" x2="438" y2="110" />
          <line x1="406" y1="128" x2="434" y2="128" />
        </g>

        {/* ===== DATA POINTS (mono micro-annotations) ===== */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#FFFFFFAA">
          {/* Electrolyser block */}
          <g transform="translate(520, 200)">
            <rect width="140" height="84" rx="6" fill="#0F2B1F" stroke="#FFFFFF18" />
            <text x="12" y="22" fontSize="10" fill="#83E5B3" fontWeight="700" letterSpacing="0.14em">ELECTROLYSER</text>
            <text x="12" y="42" fontSize="10.5" fill="#FFFFFF90">4.2 A/m²</text>
            <text x="12" y="60" fontSize="10.5" fill="#FFFFFF90">350 bar</text>
            <text x="12" y="76" fontSize="10.5" fill="#FFFFFF90">η 68% LHV</text>
            {/* glowing dot */}
            <circle cx="124" cy="24" r="4" fill="#22B871">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Gas upgrading block */}
          <g transform="translate(610, 520)">
            <rect width="160" height="80" rx="6" fill="#0F2B1F" stroke="#FFFFFF18" />
            <text x="12" y="22" fontSize="10" fill="#83E5B3" fontWeight="700" letterSpacing="0.14em">GAS UPGRADING</text>
            <text x="12" y="42" fontSize="10.5" fill="#FFFFFF90">95%+ CH₄</text>
            <text x="12" y="60" fontSize="10.5" fill="#FFFFFF90">Membrane / PSA</text>
            <circle cx="144" cy="24" r="4" fill="#22B871">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Water block */}
          <g transform="translate(110, 650)">
            <rect width="150" height="78" rx="6" fill="#0F2B1F" stroke="#FFFFFF18" />
            <text x="12" y="22" fontSize="10" fill="#83E5B3" fontWeight="700" letterSpacing="0.14em">WATER / MBBR</text>
            <text x="12" y="42" fontSize="10.5" fill="#FFFFFF90">MBBR ΔT = 1.4°C</text>
            <text x="12" y="60" fontSize="10.5" fill="#FFFFFF90">UF → RO → ZLD</text>
            <circle cx="132" cy="24" r="4" fill="#22B871">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.0s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Battery / dispatch block */}
          <g transform="translate(560, 860)">
            <rect width="200" height="74" rx="6" fill="#0F2B1F" stroke="#FFFFFF18" />
            <text x="12" y="22" fontSize="10" fill="#DDB87F" fontWeight="700" letterSpacing="0.14em">SMART DISPATCH</text>
            <text x="12" y="42" fontSize="10.5" fill="#FFFFFF90">VRLA SOC 88%</text>
            <text x="12" y="60" fontSize="10.5" fill="#FFFFFF90">BESS Δf ± 12 mHz</text>
            <circle cx="184" cy="24" r="4" fill="#C67E2D">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Corner telemetry micro labels */}
          <g fontSize="9.5" fill="#FFFFFF55" letterSpacing="0.12em">
            <text x="24" y="40">TELEMETRY · NODE 01</text>
            <text x="24" y="972">SYSTEM · ONLINE</text>
            <text x="646" y="40">GREEN NOVA · ENG</text>
            <text x="628" y="972">REF · v2.1 · 2026</text>
          </g>
        </g>

        {/* ===== Small pulsing telemetry dots on paths ===== */}
        <g fill="#83E5B3">
          <circle cx="260" cy="270" r="4">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="580" cy="250" r="3.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="390" r="3.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="540" cy="470" r="3.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.0s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="680" r="3.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="850" r="3.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="420" cy="90" r="3">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="120" r="3">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Bottom-right subtle corner meta */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-nova-400 telemetry-dot telemetry-dot--sm" />
        <span className="font-mono text-[0.65rem] tracking-[0.18em] text-white/60 uppercase font-semibold">
          Live · Telemetry
        </span>
      </div>
    </div>
  );
}
