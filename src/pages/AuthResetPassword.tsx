/**
 * AuthResetPassword — Set new password page (after clicking email link).
 */
import { motion } from "framer-motion";
import { Sparkles, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AuthResetPassword = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md"
    >
      <div className="flex items-center gap-2 mb-8">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">NovaSaaS</span>
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-1">Reset password</h1>
      <p className="text-sm text-muted-foreground mb-6">Enter your new password below.</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs font-medium text-muted-foreground">New Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="password" placeholder="••••••••" className="h-11 w-full rounded-lg bg-secondary border border-border pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Confirm Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="password" placeholder="••••••••" className="h-11 w-full rounded-lg bg-secondary border border-border pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
        </div>

        <button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-primary">
          Reset Password <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <Link to="/auth/login" className="block text-xs text-muted-foreground text-center mt-6 hover:text-foreground transition-colors">
        Back to login
      </Link>
    </motion.div>
  </div>
);

export default AuthResetPassword;
