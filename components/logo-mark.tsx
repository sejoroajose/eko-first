import Image from "next/image";
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
      <Image
        src="/ekofirst-icon.png"
        alt="Eko-First Movement"
        width={30}
        height={30}
        className="shrink-0"
      />
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
