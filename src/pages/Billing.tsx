/**
 * Billing — Billing & Plans page with current plan, usage, invoices, and plan comparison.
 */
import { motion } from "framer-motion";
import { CreditCard, Check, Zap, Download } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    features: ["5 team members", "10GB storage", "Basic analytics", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    features: ["25 team members", "100GB storage", "Advanced analytics", "Priority support", "Custom domains", "API access"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    features: ["Unlimited members", "1TB storage", "Real-time analytics", "24/7 dedicated support", "SSO & SAML", "Custom SLA", "On-premise option"],
    current: false,
  },
];

const invoices = [
  { id: "INV-1042", date: "Mar 1, 2025", amount: "$79.00", status: "Paid" },
  { id: "INV-1031", date: "Feb 1, 2025", amount: "$79.00", status: "Paid" },
  { id: "INV-1020", date: "Jan 1, 2025", amount: "$79.00", status: "Paid" },
  { id: "INV-1009", date: "Dec 1, 2024", amount: "$79.00", status: "Paid" },
];

const Billing = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Billing & Plans</h1>
      <p className="text-sm text-muted-foreground mt-1">Manage your subscription and payment details.</p>
    </motion.div>

    {/* Current Plan Overview */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-base font-bold text-foreground">Pro Plan</h2>
          <p className="text-xs text-muted-foreground">Billed monthly · Next billing Mar 1, 2025</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-foreground">$79</span>
        <span className="text-sm text-muted-foreground">/month</span>
      </div>
    </motion.div>

    {/* Usage bars */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-lg p-6 space-y-4">
      <h2 className="text-sm font-semibold text-foreground">Usage This Period</h2>
      {[
        { label: "Storage", used: "67GB", total: "100GB", pct: 67 },
        { label: "API Calls", used: "842K", total: "1M", pct: 84 },
        { label: "Team Members", used: "18", total: "25", pct: 72 },
        { label: "Bandwidth", used: "120GB", total: "500GB", pct: 24 },
      ].map((u, i) => (
        <div key={i}>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">{u.label}</span>
            <span className="font-medium text-foreground">{u.used} / {u.total}</span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${u.pct}%` }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              className={`h-full rounded-full ${u.pct > 80 ? "bg-warning" : "bg-primary"}`}
            />
          </div>
        </div>
      ))}
    </motion.div>

    {/* Plan comparison */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <h2 className="text-sm font-semibold text-foreground mb-4">Available Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className={`glass-card rounded-lg p-6 flex flex-col ${plan.current ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
          >
            {plan.current && (
              <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit mb-3 uppercase tracking-wider">
                Current Plan
              </span>
            )}
            <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mt-1 mb-4">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-2 flex-1 mb-5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`h-10 rounded-lg text-sm font-medium transition-opacity ${
                plan.current
                  ? "bg-secondary text-secondary-foreground cursor-default"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
              disabled={plan.current}
            >
              {plan.current ? "Current Plan" : "Upgrade"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Payment Method */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground">Payment Method</h2>
        <button className="text-xs text-primary hover:underline font-medium">Update</button>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
        <CreditCard className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">•••• •••• •••• 4242</p>
          <p className="text-xs text-muted-foreground">Visa · Expires 08/2027</p>
        </div>
      </div>
    </motion.div>

    {/* Invoice History */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card rounded-lg p-6">
      <h2 className="text-sm font-semibold text-foreground mb-4">Invoice History</h2>
      <div className="space-y-2">
        {invoices.map((inv) => (
          <div key={inv.id} className="flex items-center justify-between text-xs py-2.5 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <span className="font-mono font-medium text-foreground">{inv.id}</span>
              <span className="text-muted-foreground">{inv.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-foreground">{inv.amount}</span>
              <span className="text-success bg-success/10 px-2 py-0.5 rounded-full text-[10px] font-medium">{inv.status}</span>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Billing;
