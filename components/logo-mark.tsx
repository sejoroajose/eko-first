import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const ink = tone === "dark" ? "#1E3E3A" : "#F9FAFB";
  const sub = tone === "dark" ? "#108A00" : "#FFBA33";

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M15 2 C 15 11, 15 11, 6 15 C 15 15, 15 15, 15 28 C 15 15, 15 15, 24 15 C 15 11, 15 11, 15 2 Z"
          fill={ink}
        />
        <circle cx="15" cy="15" r="2.2" fill={sub} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tight text-[1.05rem]"
          style={{ color: ink }}
        >
          EKO&#8209;FIRST
        </span>
        <span
          className="text-[0.58rem] font-semibold uppercase tracking-[0.28em]"
          style={{ color: sub }}
        >
          Movement
        </span>
      </span>
    </div>
  );
}
