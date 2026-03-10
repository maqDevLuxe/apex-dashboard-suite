/**
 * Index — Main SaaS Overview Dashboard.
 * Shows key metrics, revenue chart, subscription breakdown, and activity feed.
 */
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SubscriptionDonut from "@/components/dashboard/SubscriptionDonut";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { motion } from "framer-motion";

/* Metric card data */
const metrics = [
  { label: "Monthly Revenue", value: "$48,250", trend: 12.5, icon: DollarSign },
  { label: "Active Users", value: "12,847", trend: 8.2, icon: Users },
  { label: "Active Subscriptions", value: "3,642", trend: 5.1, icon: CreditCard },
  { label: "Churn Rate", value: "2.4%", trend: -0.8, icon: Activity },
];

const Index = () => (
  <div className="space-y-6">
    {/* Page header */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="text-sm text-muted-foreground mt-1">
        Welcome back! Here's what's happening with your platform.
      </p>
    </motion.div>

    {/* Metric cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <MetricCard key={m.label} {...m} index={i} />
      ))}
    </div>

    {/* Charts row */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <RevenueChart />
      <SubscriptionDonut />
    </div>

    {/* Activity feed */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <RecentActivity />

      {/* Quick stats card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="glass-card rounded-lg p-5"
      >
        <h3 className="text-sm font-semibold text-foreground mb-1">Platform Health</h3>
        <p className="text-xs text-muted-foreground mb-4">System status & performance</p>

        <div className="space-y-4">
          {[
            { label: "API Uptime", value: "99.98%", pct: 99.98 },
            { label: "Avg Response Time", value: "42ms", pct: 85 },
            { label: "Error Rate", value: "0.02%", pct: 98 },
            { label: "Server Load", value: "67%", pct: 67 },
          ].map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-medium text-foreground">{s.value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Index;
