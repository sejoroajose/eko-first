export function SkylineSignature({
  className,
  lineColor = "#FFBA33",
  buildingColor = "rgba(249,250,251,0.14)",
}: {
  className?: string;
  lineColor?: string;
  buildingColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Third Mainland-style suspension bridge */}
      <path d="M40 210 L1400 210" stroke={buildingColor} strokeWidth="2" />
      <path
        d="M180 210 C 180 90, 340 90, 340 210"
        stroke={buildingColor}
        strokeWidth="2"
      />
      <path
        d="M340 210 C 340 60, 560 60, 560 210"
        stroke={buildingColor}
        strokeWidth="2"
      />
      <line x1="360" y1="205" x2="360" y2="140" stroke={buildingColor} strokeWidth="1.5" />
      <line x1="400" y1="205" x2="400" y2="110" stroke={buildingColor} strokeWidth="1.5" />
      <line x1="440" y1="205" x2="440" y2="88" stroke={buildingColor} strokeWidth="1.5" />
      <line x1="480" y1="205" x2="480" y2="78" stroke={buildingColor} strokeWidth="1.5" />
      <line x1="520" y1="205" x2="520" y2="88" stroke={buildingColor} strokeWidth="1.5" />

      {/* Skyline blocks */}
      <rect x="620" y="120" width="34" height="90" fill={buildingColor} />
      <rect x="662" y="150" width="26" height="60" fill={buildingColor} />
      <rect x="696" y="90" width="30" height="120" fill={buildingColor} />
      <rect x="734" y="130" width="22" height="80" fill={buildingColor} />
      <rect x="764" y="60" width="18" height="150" fill={buildingColor} />
      <rect x="790" y="140" width="30" height="70" fill={buildingColor} />
      <rect x="828" y="100" width="24" height="110" fill={buildingColor} />
      <rect x="860" y="150" width="34" height="60" fill={buildingColor} />
      <rect x="902" y="70" width="20" height="140" fill={buildingColor} />
      <rect x="930" y="120" width="28" height="90" fill={buildingColor} />

      {/* Cathedral-esque spire echoing the wordmark */}
      <path
        d="M990 210 V126 M978 138 L990 96 L1002 138"
        stroke={buildingColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Transit line: rail + road threading the horizon */}
      <path
        d="M0 176 C 220 176, 260 140, 420 150 S 700 190, 900 150 S 1180 116, 1440 132"
        stroke={lineColor}
        strokeWidth="2.5"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
    </svg>
  );
}
