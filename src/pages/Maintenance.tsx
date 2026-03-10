/**
 * Maintenance — Under maintenance page.
 */
import { motion } from "framer-motion";
import { Wrench, ArrowRight } from "lucide-react";

const Maintenance = () => (
  <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-10 w-full max-w-lg text-center"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex justify-center mb-6"
      >
        <div className="h-20 w-20 rounded-2xl bg-warning/10 flex items-center justify-center">
          <Wrench className="h-10 w-10 text-warning" />
        </div>
      </motion.div>

      <h1 className="text-3xl font-black text-foreground mb-2">Under Maintenance</h1>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
        We're performing scheduled maintenance to improve your experience. We'll be back shortly.
      </p>

      <div className="glass-card rounded-lg p-4 max-w-sm mx-auto mb-8">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-muted-foreground">Estimated downtime</span>
          <span className="font-medium text-foreground">~30 minutes</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full rounded-full bg-warning"
          />
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">Started at 2:00 AM UTC · ~65% complete</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <a href="https://status.example.com" className="h-10 px-5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium inline-flex items-center gap-2 hover:bg-accent transition-colors">
          Check Status Page <ArrowRight className="h-4 w-4" />
        </a>
        <p className="text-xs text-muted-foreground">
          Questions? Contact us at <span className="text-primary">support@novasaas.com</span>
        </p>
      </div>
    </motion.div>
  </div>
);

export default Maintenance;
