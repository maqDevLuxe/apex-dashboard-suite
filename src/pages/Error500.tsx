/**
 * Error500 — 500 Internal Server Error page.
 */
import { motion } from "framer-motion";
import { Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Error500 = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-10 w-full max-w-md text-center"
    >
      <p className="text-7xl font-black gradient-text mb-4">500</p>
      <h1 className="text-xl font-bold text-foreground mb-2">Internal Server Error</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Something went wrong on our end. Our team has been notified and is working on a fix.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link to="/" className="h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Home className="h-4 w-4" /> Go Home
        </Link>
        <button onClick={() => window.location.reload()} className="h-10 px-5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium inline-flex items-center gap-2 hover:bg-accent transition-colors">
          <RefreshCw className="h-4 w-4" /> Retry
        </button>
      </div>
    </motion.div>
  </div>
);

export default Error500;
