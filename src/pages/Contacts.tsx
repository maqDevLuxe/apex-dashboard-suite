/**
 * Contacts — Team/contacts directory page.
 */
import { motion } from "framer-motion";
import { Mail, Phone, MoreHorizontal } from "lucide-react";

const contacts = [
  { initials: "SK", name: "Sarah Kim", role: "Engineering Lead", email: "sarah@novasaas.com", status: "Online" },
  { initials: "MR", name: "Marcus Rodriguez", role: "Product Manager", email: "marcus@novasaas.com", status: "Online" },
  { initials: "AL", name: "Aisha Liang", role: "DevOps Engineer", email: "aisha@novasaas.com", status: "Away" },
  { initials: "JT", name: "Jake Thompson", role: "Frontend Developer", email: "jake@novasaas.com", status: "Offline" },
  { initials: "EP", name: "Elena Petrov", role: "Data Scientist", email: "elena@novasaas.com", status: "Online" },
  { initials: "DW", name: "David Wu", role: "Security Analyst", email: "david@novasaas.com", status: "Away" },
];

const statusColor: Record<string, string> = {
  Online: "bg-success",
  Away: "bg-warning",
  Offline: "bg-muted-foreground",
};

const Contacts = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Contacts</h1>
      <p className="text-sm text-muted-foreground mt-1">Your team directory.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
          className="glass-card rounded-lg p-5 flex flex-col items-center text-center group"
        >
          <div className="relative mb-3">
            <div className="h-14 w-14 rounded-2xl bg-primary/15 flex items-center justify-center text-lg font-bold text-primary">
              {c.initials}
            </div>
            <span className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card ${statusColor[c.status]}`} />
          </div>
          <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
          <p className="text-xs text-muted-foreground">{c.role}</p>
          <div className="flex gap-2 mt-4">
            <button className="h-8 w-8 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
            </button>
            <button className="h-8 w-8 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
            </button>
            <button className="h-8 w-8 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Contacts;
