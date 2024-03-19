"use client";
import DashboardSideBar, {
  DashboardSideBarHeader,
  DashboardSideBarMain,
  DashboardSideBarNav,
  DashboardSideBarNavFooter,
  DashboardSideBarNavHeader,
  DashboardSideBarNavHeaderTitle,
  DashboardSideBarNavLink,
  DashboardSideBarNavMain,
} from "@/components/dashboard/sidebar";
import { HomeIcon, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";

type MainSideBarProps = {
  user: Session["user"];
};

export function MainSideBar({ user }: MainSideBarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSideBar>
      <DashboardSideBarHeader>
        <Logo />
      </DashboardSideBarHeader>

      <DashboardSideBarMain className="flex flex-col flex-grow">
        <DashboardSideBarNav>
          <DashboardSideBarNavMain>
            <DashboardSideBarNavLink href="/app" active={isActive("/app")}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </DashboardSideBarNavLink>
            <DashboardSideBarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <Settings className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSideBarNavLink>
          </DashboardSideBarNavMain>
        </DashboardSideBarNav>

        <DashboardSideBarNav className="mt-auto">
          <DashboardSideBarNavHeader>
            <DashboardSideBarNavHeaderTitle>
              Links extras
            </DashboardSideBarNavHeaderTitle>
          </DashboardSideBarNavHeader>
          <DashboardSideBarNavMain>
            <DashboardSideBarNavLink href="/app">
              Precisa de ajuda?
            </DashboardSideBarNavLink>
            <DashboardSideBarNavLink href="/app">Site</DashboardSideBarNavLink>
          </DashboardSideBarNavMain>
        </DashboardSideBarNav>
      </DashboardSideBarMain>

      <DashboardSideBarNavFooter>
        <UserDropdown user={user} />
      </DashboardSideBarNavFooter>
    </DashboardSideBar>
  );
}
