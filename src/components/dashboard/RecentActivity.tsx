/**
 * RecentActivity — Timeline-style feed of recent platform events.
 */
import { motion } from "framer-motion";
import { UserPlus, CreditCard, AlertTriangle, CheckCircle2, ArrowUpCircle } from "lucide-react";

const activities = [
  { icon: UserPlus, label: "New enterprise signup", detail: "Acme Corp joined Pro plan", time: "2 min ago", color: "text-primary" },
  { icon: CreditCard, label: "Payment received", detail: "$4,200 from TechStart Inc.", time: "18 min ago", color: "text-success" },
  { icon: ArrowUpCircle, label: "Plan upgraded", detail: "CloudNet moved to Enterprise", time: "1 hr ago", color: "text-info" },
  { icon: AlertTriangle, label: "Usage alert", detail: "DataFlow API nearing 90% quota", time: "3 hr ago", color: "text-warning" },
  { icon: CheckCircle2, label: "Invoice paid", detail: "Invoice #1042 settled", time: "5 hr ago", color: "text-success" },
];

const RecentActivity = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="glass-card rounded-lg p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-1">Recent Activity</h3>
    <p className="text-xs text-muted-foreground mb-4">Latest platform events</p>

    <div className="space-y-4">
      {activities.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + i * 0.08 }}
          className="flex items-start gap-3"
        >
          <div className={`mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-secondary flex items-center justify-center ${a.color}`}>
            <a.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{a.label}</p>
            <p className="text-xs text-muted-foreground truncate">{a.detail}</p>
          </div>
          <span className="text-[11px] text-muted-foreground whitespace-nowrap">{a.time}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default RecentActivity;
