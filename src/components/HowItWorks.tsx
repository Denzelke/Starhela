import { motion } from 'motion/react';
import { UserPlus, Wallet, ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white/50 border-y border-sage/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Start Your Journey in <span className="text-ochre">3 Simple Steps</span>
            </h2>
            <p className="text-forest/80 text-lg mb-8">
              Joining Starhela is quick and secure. Follow these steps to activate your account and start earning right away.
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Create an Account",
                  description: "Register with your basic details to create your secure Starhela profile.",
                  icon: UserPlus
                },
                {
                  step: "02",
                  title: "Activate Profile",
                  description: "Pay a one-time activation fee to unlock your dashboard and earning features.",
                  icon: Wallet
                },
                {
                  step: "03",
                  title: "Earn & Withdraw",
                  description: "Participate in tasks and withdraw your earnings directly to Mobile Money.",
                  icon: ArrowUpRight
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center text-forest font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-forest mb-2">{item.title}</h4>
                    <p className="text-forest/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
