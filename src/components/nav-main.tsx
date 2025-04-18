'use client';

import {
  CheckCircle,
  LayoutDashboard,
  Settings,
  Users,
  type LucideIcon,
} from 'lucide-react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';
import useWorkspaceId from '@/hooks/use-workspace-id';

type ItemType = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export function NavMain() {
  //   const { hasPermission } = useAuthContext();

  //   const canManageSettings = hasPermission(
  //     Permissions.MANAGE_WORKSPACE_SETTINGS
  //   );
  // const canManageSettings = true
  const workspaceId = useWorkspaceId();

  const location = useLocation();

  const pathname = location.pathname;

  const canManageSettings = true;

  const items: ItemType[] = [
    {
      title: 'Dashboard',
      url: `/workspace/${workspaceId}`,
      icon: LayoutDashboard,
    },
    {
      title: 'Tasks',
      url: `/workspace/${workspaceId}/tasks`,
      icon: CheckCircle,
    },
    {
      title: 'Members',
      url: `/workspace/${workspaceId}/members`,
      icon: Users,
    },

    ...(canManageSettings
      ? [
          {
            title: 'Settings',
            url: `/workspace/${workspaceId}/settings`,
            icon: Settings,
          },
        ]
      : []),
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton isActive={item.url === pathname} asChild>
              <Link to={item.url} className="!text-[15px]">
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
