import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 relative overflow-hidden bg-offwhite">
      <div className="absolute inset-0 bg-sage/10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest border border-sage/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-sage/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-ochre/20 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to take control of your financial future?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of earners already transforming their lives using their smartphone. Get activated and withdraw your first earnings today.
            </p>
            <a href="https://helalink.com/register.php?ref=JackCee" className="bg-ochre hover:bg-ochre-hover text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mx-auto text-lg hover:scale-105 inline-flex w-fit">
              Register Free Account <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
