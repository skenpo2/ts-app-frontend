import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import Logo from './logo';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { WorkspaceSwitcher } from './asidebar/workSpace-switcher';

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  const workspaceId = 'workSpaceId123';
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="!py-0 dark:bg-background">
        <div className="flex h-[50px] items-center justify-start w-full px-1">
          <Logo url={`/workspace/${workspaceId}`} />
          {open && (
            <Link
              to={`/workspace/${workspaceId}`}
              className="hidden md:flex ml-2 items-center gap-2 self-center font-medium"
            >
              myTeam
            </Link>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
          <WorkspaceSwitcher />
          <Separator>
            <NavMain />
          </Separator>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
