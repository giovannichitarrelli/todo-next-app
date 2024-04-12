"use client";
import {
  DashboardSideBarMain,
  DashboardSideBarNav,
  DashboardSideBarNavLink,
  DashboardSideBarNavMain,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export function SettingsSideBar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <aside>
      <DashboardSideBarNav>
        <DashboardSideBarNavMain>
          <DashboardSideBarNavLink
            href="/app/settings"
            active={isActive("/app/settings")}
          >
            Meu Perfil
          </DashboardSideBarNavLink>
          <DashboardSideBarNavLink
            href="/app/settings/theme"
            active={isActive("/app/settings/theme")}
          >
            Aparência
          </DashboardSideBarNavLink>
          <DashboardSideBarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            Assinatura
          </DashboardSideBarNavLink>
        </DashboardSideBarNavMain>
      </DashboardSideBarNav>
    </aside>
  );
}
