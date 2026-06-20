import { motion } from 'motion/react';
import { Share2, PlayCircle, Edit3, Target, Gift, HelpCircle } from 'lucide-react';

const features = [
  {
    title: "Affiliate Marketing",
    description: "Refer friends and earn multi-level commissions for every successful activation.",
    icon: Share2,
    color: "text-forest",
    bg: "bg-sage/20"
  },
  {
    title: "Watch & Earn",
    description: "Get paid for watching short YouTube and TikTok videos right on your dashboard.",
    icon: PlayCircle,
    color: "text-forest",
    bg: "bg-sage/20"
  },
  {
    title: "Article Writing",
    description: "Monetize your writing skills by submitting simple, engaging articles.",
    icon: Edit3,
    color: "text-forest",
    bg: "bg-sage/20"
  },
  {
    title: "Trivia Questions",
    description: "Answer simple questions correctly and get rewarded instantly to your wallet.",
    icon: HelpCircle,
    color: "text-forest",
    bg: "bg-sage/20"
  },
  {
    title: "Spin the Wheel",
    description: "Try your luck on our daily casino wheel spins and win huge bonuses.",
    icon: Target,
    color: "text-forest",
    bg: "bg-sage/20"
  },
  {
    title: "Welcome Bonus",
    description: "Start your journey a step ahead with an instant welcome bonus upon activation.",
    icon: Gift,
    color: "text-forest",
    bg: "bg-sage/20"
  }
];

export default function Features() {
  return (
    <section id="features" className="pt-8 pb-16 bg-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Multiple <span className="text-ochre">Ways of Earning</span>
          </h2>
          <p className="text-forest/80 text-lg">
            We provide diverse opportunities ensuring everyone can find the perfect way to generate income online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sage/10 border border-sage/30 rounded-2xl p-8 hover:bg-sage/20 hover:border-sage transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-forest mb-3">{feature.title}</h3>
              <p className="text-forest/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
