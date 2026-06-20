import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-4 md:pt-32 lg:pt-40 lg:pb-8 overflow-hidden bg-gradient-to-b from-sage/20 to-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-forest mb-6"
          >
            Starhela Agencies
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-forest/80 mb-6 max-w-2xl mx-auto"
          >
            Starhela Agencies is the leading digital network marketing and online earning platform in Kenya and East Africa. Discover real ways to make money online with timely M-Pesa withdrawals and 24/7 support.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://helalink.com/register.php?ref=JackCee" className="bg-ochre hover:bg-ochre-hover text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_rgba(217,160,91,0.5)] flex items-center justify-center gap-2 text-lg inline-flex">
              Register StarHela Now <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
