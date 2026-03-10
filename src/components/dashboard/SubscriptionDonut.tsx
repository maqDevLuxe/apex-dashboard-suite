/**
 * SubscriptionDonut — Donut/pie chart showing subscription plan breakdown.
 */
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Enterprise", value: 35, color: "hsl(var(--primary))" },
  { name: "Pro", value: 40, color: "hsl(var(--chart-2))" },
  { name: "Starter", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Free", value: 10, color: "hsl(var(--chart-4))" },
];

const SubscriptionDonut = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="glass-card rounded-lg p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-1">Subscription Mix</h3>
    <p className="text-xs text-muted-foreground mb-4">Active plan distribution</p>

    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload;
              return (
                <div className="glass-card rounded-lg p-2 text-xs">
                  <span className="font-medium text-foreground">{d.name}</span>: {d.value}%
                </div>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* Legend */}
    <div className="grid grid-cols-2 gap-2 mt-2">
      {data.map((d) => (
        <div key={d.name} className="flex items-center gap-2 text-xs">
          <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: d.color }} />
          <span className="text-muted-foreground">{d.name}</span>
          <span className="ml-auto font-medium text-foreground">{d.value}%</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SubscriptionDonut;
