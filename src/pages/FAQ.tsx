/**
 * FAQ — Frequently asked questions with animated accordion.
 */
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does the 14-day free trial work?", a: "You get full access to all Pro features for 14 days. No credit card required. After the trial, choose a plan that fits your needs." },
  { q: "Can I upgrade or downgrade my plan anytime?", a: "Yes! You can switch plans at any time. Upgrades are prorated, and downgrades take effect at your next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise plans." },
  { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption at rest, TLS 1.3 in transit, and are SOC 2 Type II certified. Your data is replicated across multiple regions." },
  { q: "Do you offer custom enterprise solutions?", a: "Yes, our Enterprise plan includes dedicated infrastructure, custom SLAs, priority support, SSO, and advanced compliance features." },
  { q: "How do I cancel my subscription?", a: "You can cancel anytime from your account settings. Your access continues until the end of your current billing period." },
];

const FAQ = () => (
  <div className="max-w-3xl space-y-6">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h1>
      <p className="text-sm text-muted-foreground mt-1">Find answers to common questions.</p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-lg p-6">
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary py-3">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-3">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </div>
);

export default FAQ;
