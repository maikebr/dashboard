import Link from "next/link";

import { cn } from "@/lib/utils";

export function NavBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:scale-105 hover:text-primary"
      >
        Payments
      </Link>
      <Link
        href="/overtime"
        className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-primary"
      >
        Overtime
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
