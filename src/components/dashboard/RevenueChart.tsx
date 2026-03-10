/**
 * RevenueChart — Area chart showing monthly recurring revenue.
 * Uses Recharts with custom styling matching the glass theme.
 */
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4200, subscribers: 320 },
  { month: "Feb", revenue: 4800, subscribers: 350 },
  { month: "Mar", revenue: 5100, subscribers: 390 },
  { month: "Apr", revenue: 5600, subscribers: 420 },
  { month: "May", revenue: 6200, subscribers: 470 },
  { month: "Jun", revenue: 7100, subscribers: 520 },
  { month: "Jul", revenue: 7800, subscribers: 580 },
  { month: "Aug", revenue: 8200, subscribers: 610 },
  { month: "Sep", revenue: 8900, subscribers: 660 },
  { month: "Oct", revenue: 9400, subscribers: 710 },
  { month: "Nov", revenue: 10200, subscribers: 760 },
  { month: "Dec", revenue: 11500, subscribers: 830 },
];

/* Custom tooltip component */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-lg p-3 text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }} className="flex justify-between gap-4">
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium">
            {p.name === "Revenue" ? `$${p.value.toLocaleString()}` : p.value}
          </span>
        </p>
      ))}
    </div>
  );
};

const RevenueChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="glass-card rounded-lg p-5 col-span-full lg:col-span-2"
  >
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Revenue Overview</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Monthly recurring revenue & subscribers</p>
      </div>
      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
        2025
      </span>
    </div>

    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="subGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="hsl(var(--primary))" fill="url(#revGrad)" strokeWidth={2} />
          <Area type="monotone" dataKey="subscribers" name="Subscribers" stroke="hsl(var(--chart-2))" fill="url(#subGrad)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default RevenueChart;
