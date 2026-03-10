/**
 * App — Root application component.
 * Sets up routing, theme provider, and layout structure.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DashboardLayout from "@/layouts/DashboardLayout";

/* Dashboard pages */
import Index from "./pages/Index";
import SubscriptionAnalytics from "./pages/SubscriptionAnalytics";
import Timeline from "./pages/Timeline";
import Notifications from "./pages/Notifications";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
import Billing from "./pages/Billing";

/* Auth pages */
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import AuthForgotPassword from "./pages/AuthForgotPassword";
import AuthResetPassword from "./pages/AuthResetPassword";
import AuthVerifyEmail from "./pages/AuthVerifyEmail";
import AuthOTP from "./pages/AuthOTP";

/* Error / utility pages */
import NotFound from "./pages/NotFound";
import Error500 from "./pages/Error500";
import ComingSoon from "./pages/ComingSoon";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth pages — standalone layout (no sidebar) */}
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/register" element={<AuthRegister />} />
            <Route path="/auth/forgot-password" element={<AuthForgotPassword />} />
            <Route path="/auth/reset-password" element={<AuthResetPassword />} />
            <Route path="/auth/verify-email" element={<AuthVerifyEmail />} />
            <Route path="/auth/otp" element={<AuthOTP />} />

            {/* Error / utility pages — standalone */}
            <Route path="/500" element={<Error500 />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/maintenance" element={<Maintenance />} />

            {/* Dashboard pages — wrapped in DashboardLayout */}
            <Route
              path="/*"
              element={
                <DashboardLayout>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/subscriptions" element={<SubscriptionAnalytics />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/billing" element={<Billing />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </DashboardLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
