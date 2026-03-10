/**
 * SubscriptionAnalytics — Detailed subscription metrics and charts.
 */
import { motion } from "framer-motion";
import MetricCard from "@/components/dashboard/MetricCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, UserCheck, UserMinus, RefreshCw } from "lucide-react";

const metrics = [
  { label: "New Signups", value: "1,284", trend: 15.3, icon: TrendingUp },
  { label: "Active Trials", value: "342", trend: 6.8, icon: UserCheck },
  { label: "Churned", value: "47", trend: -2.1, icon: UserMinus },
  { label: "Renewals", value: "892", trend: 9.4, icon: RefreshCw },
];

const barData = [
  { month: "Jul", starter: 120, pro: 180, enterprise: 45 },
  { month: "Aug", starter: 140, pro: 200, enterprise: 52 },
  { month: "Sep", starter: 110, pro: 220, enterprise: 60 },
  { month: "Oct", starter: 130, pro: 240, enterprise: 68 },
  { month: "Nov", starter: 150, pro: 260, enterprise: 75 },
  { month: "Dec", starter: 160, pro: 290, enterprise: 82 },
];

const churnData = [
  { month: "Jul", rate: 3.2 }, { month: "Aug", rate: 2.8 }, { month: "Sep", rate: 2.5 },
  { month: "Oct", rate: 2.9 }, { month: "Nov", rate: 2.3 }, { month: "Dec", rate: 2.4 },
];

const SubscriptionAnalytics = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Subscription Analytics</h1>
      <p className="text-sm text-muted-foreground mt-1">Deep dive into subscription performance.</p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, i) => <MetricCard key={m.label} {...m} index={i} />)}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Plan breakdown bar chart */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-lg p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Signups by Plan</h3>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="starter" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pro" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="enterprise" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Churn rate line chart */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card rounded-lg p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Churn Rate Trend</h3>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={churnData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} domain={[0, 5]} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="rate" stroke="hsl(var(--destructive))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--destructive))" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  </div>
);

export default SubscriptionAnalytics;
