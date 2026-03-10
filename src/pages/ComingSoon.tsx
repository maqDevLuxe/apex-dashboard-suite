/**
 * ComingSoon — Teaser page for upcoming features.
 */
import { motion } from "framer-motion";
import { Rocket, Bell } from "lucide-react";

const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-10 w-full max-w-lg text-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex justify-center mb-6"
      >
        <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Rocket className="h-10 w-10 text-primary" />
        </div>
      </motion.div>

      <h1 className="text-3xl font-black text-foreground mb-2">Coming Soon</h1>
      <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
        We're working on something exciting. Enter your email to be the first to know when we launch.
      </p>

      <div className="flex gap-2 max-w-sm mx-auto">
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 h-11 rounded-lg bg-secondary border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity glow-primary shrink-0">
          <Bell className="h-4 w-4" /> Notify Me
        </button>
      </div>

      <div className="flex justify-center gap-8 mt-10">
        {[
          { value: "14", label: "Days" },
          { value: "08", label: "Hours" },
          { value: "32", label: "Minutes" },
          { value: "17", label: "Seconds" },
        ].map((t) => (
          <div key={t.label}>
            <p className="text-2xl font-bold text-foreground font-mono">{t.value}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default ComingSoon;
