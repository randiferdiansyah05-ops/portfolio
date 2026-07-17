import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-content px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
