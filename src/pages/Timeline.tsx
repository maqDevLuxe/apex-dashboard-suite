/**
 * Timeline — Event timeline page with animated entries.
 */
import { motion } from "framer-motion";
import { Rocket, Users, Zap, Award, Globe, ShieldCheck } from "lucide-react";

const events = [
  { icon: Rocket, title: "Platform Launch v3.0", desc: "Major release with redesigned dashboard and new API endpoints.", date: "Mar 2025", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "10,000 Users Milestone", desc: "Crossed 10k active users across all plans.", date: "Feb 2025", color: "bg-success/10 text-success" },
  { icon: Zap, title: "Edge Functions Released", desc: "Serverless compute deployed to 12 global regions.", date: "Jan 2025", color: "bg-warning/10 text-warning" },
  { icon: Award, title: "SOC 2 Certification", desc: "Achieved SOC 2 Type II compliance certification.", date: "Dec 2024", color: "bg-info/10 text-info" },
  { icon: Globe, title: "Multi-Region Support", desc: "Database replication across US, EU, and APAC.", date: "Nov 2024", color: "bg-primary/10 text-primary" },
  { icon: ShieldCheck, title: "Enterprise SSO", desc: "SAML and OIDC single sign-on for enterprise customers.", date: "Oct 2024", color: "bg-success/10 text-success" },
];

const Timeline = () => (
  <div className="max-w-3xl space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Timeline</h1>
      <p className="text-sm text-muted-foreground mt-1">Platform milestones and key events.</p>
    </motion.div>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-6">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="flex gap-4 relative"
          >
            <div className={`h-10 w-10 rounded-xl ${e.color} flex items-center justify-center shrink-0 z-10`}>
              <e.icon className="h-4.5 w-4.5" />
            </div>
            <div className="glass-card rounded-lg p-4 flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
                <span className="text-xs text-muted-foreground">{e.date}</span>
              </div>
              <p className="text-xs text-muted-foreground">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
