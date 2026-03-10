/**
 * Security — Account security settings: password, 2FA, sessions, activity log.
 */
import { motion } from "framer-motion";
import { Shield, Key, Smartphone, Monitor, LogOut, MapPin } from "lucide-react";

const sessions = [
  { device: "MacBook Pro — Chrome", location: "San Francisco, US", lastActive: "Now", current: true, icon: Monitor },
  { device: "iPhone 15 — Safari", location: "San Francisco, US", lastActive: "2 hr ago", current: false, icon: Smartphone },
  { device: "Windows PC — Firefox", location: "New York, US", lastActive: "3 days ago", current: false, icon: Monitor },
];

const activityLog = [
  { action: "Password changed", ip: "192.168.1.42", time: "2 days ago" },
  { action: "Login from new device", ip: "10.0.0.15", time: "5 days ago" },
  { action: "2FA enabled", ip: "192.168.1.42", time: "1 week ago" },
  { action: "API key generated", ip: "192.168.1.42", time: "2 weeks ago" },
];

const Security = () => (
  <div className="max-w-3xl space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Security</h1>
      <p className="text-sm text-muted-foreground mt-1">Manage your account security and active sessions.</p>
    </motion.div>

    {/* Password Section */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Key className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Password</h2>
          <p className="text-xs text-muted-foreground">Last changed 2 days ago</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground font-medium">Current Password</label>
          <input type="password" placeholder="••••••••" className="mt-1 h-10 w-full rounded-lg bg-secondary border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-medium">New Password</label>
          <input type="password" placeholder="••••••••" className="mt-1 h-10 w-full rounded-lg bg-secondary border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
        </div>
      </div>
      <button className="h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
        Update Password
      </button>
    </motion.div>

    {/* Two-Factor Authentication */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-success/10 flex items-center justify-center">
            <Shield className="h-4 w-4 text-success" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Two-Factor Authentication</h2>
            <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
          </div>
        </div>
        <span className="text-xs font-medium text-success bg-success/10 px-2.5 py-1 rounded-full">Enabled</span>
      </div>
    </motion.div>

    {/* Active Sessions */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Active Sessions</h2>
        <button className="text-xs text-destructive hover:underline font-medium">Revoke All</button>
      </div>
      <div className="space-y-3">
        {sessions.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div className="flex items-center gap-3">
              <s.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {s.device}
                  {s.current && <span className="ml-2 text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded">Current</span>}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {s.location} · {s.lastActive}
                </p>
              </div>
            </div>
            {!s.current && (
              <button className="text-xs text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </motion.div>

    {/* Security Activity Log */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-lg p-6 space-y-4">
      <h2 className="text-sm font-semibold text-foreground">Security Activity Log</h2>
      <div className="space-y-2">
        {activityLog.map((a, i) => (
          <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-border last:border-0">
            <span className="text-foreground font-medium">{a.action}</span>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="font-mono">{a.ip}</span>
              <span>{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Security;
