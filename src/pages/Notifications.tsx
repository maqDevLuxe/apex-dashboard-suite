/**
 * Notifications — Notification center with categorized alerts.
 */
import { motion } from "framer-motion";
import { Bell, CheckCircle2, AlertTriangle, Info, X } from "lucide-react";

const notifications = [
  { type: "success", icon: CheckCircle2, title: "Deployment successful", desc: "Production build v3.2.1 deployed.", time: "5 min ago" },
  { type: "warning", icon: AlertTriangle, title: "Storage limit warning", desc: "You've used 85% of your storage quota.", time: "1 hr ago" },
  { type: "info", icon: Info, title: "New feature available", desc: "Real-time analytics dashboard is now live.", time: "3 hr ago" },
  { type: "success", icon: CheckCircle2, title: "SSL certificate renewed", desc: "Certificate for *.novasaas.com renewed.", time: "6 hr ago" },
  { type: "warning", icon: AlertTriangle, title: "API rate limit approaching", desc: "Current rate: 850/1000 requests per minute.", time: "1 day ago" },
];

const typeStyles: Record<string, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
};

const Notifications = () => (
  <div className="max-w-3xl space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        <p className="text-sm text-muted-foreground mt-1">Stay updated on platform events.</p>
      </div>
      <button className="text-xs text-primary hover:underline font-medium">Mark all read</button>
    </motion.div>

    <div className="space-y-3">
      {notifications.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
          className="glass-card rounded-lg p-4 flex items-start gap-3 group"
        >
          <div className={`h-9 w-9 rounded-lg ${typeStyles[n.type]} flex items-center justify-center shrink-0`}>
            <n.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{n.title}</p>
            <p className="text-xs text-muted-foreground">{n.desc}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-muted-foreground">{n.time}</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Notifications;
