/**
 * DashboardLayout — Main layout wrapper with sidebar + top bar.
 * Uses SidebarProvider for collapsible sidebar behavior.
 */
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import TopBar from "@/components/dashboard/TopBar";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-1 p-4 lg:p-6 overflow-auto"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
