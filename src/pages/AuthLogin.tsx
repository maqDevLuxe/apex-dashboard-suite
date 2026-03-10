/**
 * AuthLogin — Modern floating card login UI.
 */
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AuthLogin = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md"
    >
      {/* Brand */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">NovaSaaS</span>
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back</h1>
      <p className="text-sm text-muted-foreground mb-6">Sign in to your account to continue</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="email" placeholder="john@example.com" className="h-11 w-full rounded-lg bg-secondary border border-border pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="password" placeholder="••••••••" className="h-11 w-full rounded-lg bg-secondary border border-border pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="rounded border-border" />
            Remember me
          </label>
          <Link to="/auth/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>

        <button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-primary">
          Sign In <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-6">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-primary hover:underline font-medium">Create one</Link>
      </p>
    </motion.div>
  </div>
);

export default AuthLogin;
