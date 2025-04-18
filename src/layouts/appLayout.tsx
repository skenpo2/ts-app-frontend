import { AppSidebar } from '@/components/app-sidebar';
import Header from '@/components/header';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import CreateProjectDialog from '@/components/workspace/project/create-project-dialog';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="w-full">
          <>
            <Header />
            <div className="px-3 py-3 lg:px-20">
              <Outlet />
            </div>
          </>
          <CreateProjectDialog />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
