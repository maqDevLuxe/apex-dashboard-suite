/**
 * AuthOTP — OTP / two-factor verification page.
 */
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 dot-pattern">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-8 w-full max-w-md text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">Enter verification code</h1>
        <p className="text-sm text-muted-foreground mb-8">
          We've sent a 6-digit code to your authenticator app
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="h-12 w-12 rounded-lg bg-secondary border border-border text-center text-lg font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          ))}
        </div>

        <button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary mb-4">
          Verify Code
        </button>

        <p className="text-xs text-muted-foreground">
          Didn't receive a code?{" "}
          <button className="text-primary hover:underline font-medium">Resend</button>
        </p>

        <Link to="/auth/login" className="block text-xs text-muted-foreground hover:text-foreground mt-4 transition-colors">
          Back to login
        </Link>
      </motion.div>
    </div>
  );
};

export default AuthOTP;
