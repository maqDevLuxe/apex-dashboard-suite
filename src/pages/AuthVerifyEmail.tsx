/**
 * AuthVerifyEmail — Email verification prompt page.
 */
import { motion } from "framer-motion";
import { Sparkles, MailCheck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const AuthVerifyEmail = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <MailCheck className="h-8 w-8 text-primary" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2">Check your email</h1>
      <p className="text-sm text-muted-foreground mb-6">
        We've sent a verification link to<br />
        <span className="font-medium text-foreground">john@example.com</span>
      </p>

      <p className="text-xs text-muted-foreground mb-6">
        Click the link in the email to verify your account. If you don't see it, check your spam folder.
      </p>

      <button className="w-full h-11 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-accent transition-colors mb-4">
        <RefreshCw className="h-4 w-4" /> Resend Email
      </button>

      <Link to="/auth/login" className="text-xs text-primary hover:underline font-medium">
        Back to login
      </Link>
    </motion.div>
  </div>
);

export default AuthVerifyEmail;
