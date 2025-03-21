import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
  children,
  level = 2,
  className,
  ...props
}: HeadingProps) {
  const baseStyles = "font-bold tracking-tight";
  const styles = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl sm:text-3xl lg:text-4xl",
    4: "text-xl sm:text-2xl lg:text-3xl",
    5: "text-lg sm:text-xl lg:text-2xl",
    6: "text-base sm:text-lg lg:text-xl",
  };

  const Component = `h${level}` as ElementType;

  return (
    <Component className={cn(baseStyles, styles[level], className)} {...props}>
      {children}
    </Component>
  );
}
