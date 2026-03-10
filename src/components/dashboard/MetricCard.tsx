/**
 * MetricCard — Reusable glassmorphism metric card with icon, value, label, and trend.
 * Supports stagger animation via Framer Motion.
 */
import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  /** Card title / label */
  label: string;
  /** Primary numeric value */
  value: string;
  /** Percentage change — positive = up, negative = down */
  trend: number;
  /** Trend description e.g. "vs last month" */
  trendLabel?: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Optional Framer Motion delay index for stagger */
  index?: number;
}

const MetricCard = ({
  label,
  value,
  trend,
  trendLabel = "vs last month",
  icon: Icon,
  index = 0,
}: MetricCardProps) => {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="glass-card rounded-lg p-5 group hover:border-primary/30 transition-all duration-300"
    >
      {/* Header row: icon + label */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow duration-300">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Value */}
      <p className="text-2xl font-bold tracking-tight text-foreground mb-2">{value}</p>

      {/* Trend row */}
      <div className="flex items-center gap-1.5 text-xs">
        {isPositive ? (
          <TrendingUp className="h-3.5 w-3.5 text-success" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 text-destructive" />
        )}
        <span className={isPositive ? "text-success font-medium" : "text-destructive font-medium"}>
          {isPositive ? "+" : ""}
          {trend}%
        </span>
        <span className="text-muted-foreground">{trendLabel}</span>
      </div>
    </motion.div>
  );
};

export default MetricCard;
