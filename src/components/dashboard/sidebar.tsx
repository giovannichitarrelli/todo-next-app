import { cn } from "@/lib/utils";
import Link from "next/link";

export type SideBarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export default function DashboardSideBar({ className, children }: SideBarGenericProps) {
  return (
    <aside
      className={cn(
        "border-r border-border flex flex-col space-y-6",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function DashboardSideBarHeader({ className, children }: SideBarGenericProps) {
  return (
    <header className={cn("px-6 py-3 border-b border-border", className)}>
      {children}
    </header>
  );
}
export function DashboardSideBarHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return <h2 className={cn("", className)}>{children}</h2>;
}

export function DashboardSideBarMain({ className, children }: SideBarGenericProps) {
  return <main className={cn(" px-3", className)}>{children}</main>;
}

export function DashboardSideBarNav({ className, children }: SideBarGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}

export function DashboardSideBarNavHeader({ className, children }: SideBarGenericProps) {
  return <nav className={cn("", className)}>{children}</nav>;
}

export function DashboardSideBarNavHeaderTitle({
  className,
  children,
}: SideBarGenericProps) {
  return (
    <div className={cn("text-xs uppercase text-muted-foreground ", className)}>
      {children}
    </div>
  );
}

export function DashboardSideBarNavMain({ className, children }: SideBarGenericProps) {
  return <main className={cn("flex flex-col", className)}>{children}</main>;
}

type SideBarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function DashboardSideBarNavLink({
  className,
  children,
  href,
  active,
}: SideBarGenericProps<SideBarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center text-sm px-3 py-2 rouded-md",
        active && "bg-secondary",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function DashboardSideBarNavFooter({ className, children }: SideBarGenericProps) {
  return (
    <footer className={cn("p-6 mt-auto border-t border-border", className)}>
      {children}
    </footer>
  );
}
