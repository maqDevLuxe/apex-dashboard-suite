/**
 * Profile — User profile page with stats and recent activity.
 */
import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, ExternalLink } from "lucide-react";

const Profile = () => (
  <div className="max-w-4xl space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
    </motion.div>

    {/* Profile card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card rounded-lg p-6 flex flex-col sm:flex-row items-start gap-6"
    >
      <div className="h-20 w-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-3xl font-bold text-primary shrink-0">
        JD
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-foreground">John Doe</h2>
        <p className="text-sm text-primary font-medium">Platform Administrator</p>
        <p className="text-sm text-muted-foreground mt-2 max-w-lg">
          Full-stack developer and SaaS enthusiast. Building the next generation of cloud-native platforms.
        </p>
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> San Francisco, CA</span>
          <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> john@novasaas.com</span>
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Joined Mar 2024</span>
        </div>
      </div>
    </motion.div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Projects", value: "24" },
        { label: "API Keys", value: "8" },
        { label: "Team Members", value: "12" },
        { label: "Uptime", value: "99.9%" },
      ].map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.08 }}
          className="glass-card rounded-lg p-4 text-center"
        >
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Recent projects */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card rounded-lg p-6">
      <h3 className="text-sm font-semibold text-foreground mb-4">Recent Projects</h3>
      <div className="space-y-3">
        {[
          { name: "NovaSaaS Core API", status: "Active", updated: "2 hours ago" },
          { name: "Customer Portal v3", status: "In Review", updated: "1 day ago" },
          { name: "Analytics Pipeline", status: "Active", updated: "3 days ago" },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
            <div>
              <p className="text-sm font-medium text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">Updated {p.updated}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                {p.status}
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Profile;
