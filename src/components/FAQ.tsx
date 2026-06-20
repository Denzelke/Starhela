import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Is Starhela Legit or Scam? Full Review",
    answer: "Starhela Agencies is a 100% legit online earning platform operating across Africa. We are registered, verified, and thousands of members process daily payouts through mobile money. It is definitely not a scam but a genuine opportunity to earn."
  },
  {
    question: "How do I Register and Sign Up on Starhela?",
    answer: "To register for Starhela, simply click the 'Register Free Account' or 'Register' button on our homepage. Registration is fast and easy. Fill in your details and activate your dashboard to start earning."
  },
  {
    question: "How do I withdraw my earnings from Starhela?",
    answer: "You can withdraw your earnings instantly via M-Pesa, MTN Mobile Money, Airtel Money, and other mobile networks across East Africa, ensuring you get your funds quickly and securely."
  },
  {
    question: "Is there an activation fee for Starhela?",
    answer: "Yes, there is a small one-time activation fee to unlock your Starhela dashboard and access all premium earning features. This ensures we maintain a high-quality community of dedicated earners."
  },
  {
    question: "Can I earn without referring people on Starhela?",
    answer: "Absolutely! While the Starhela affiliate marketing program is highly rewarding, you can still earn consistently by answering trivia, spinning the wheel, watching videos, and writing articles."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-forest text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-ochre">Questions</span>
          </h2>
          <p className="text-white/80 text-lg">
            Everything you need to know about earning with Starhela in East Africa.
          </p>
        </div>

        <div className="space-y-3">
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-sage/20 rounded-2xl overflow-hidden hover:border-sage transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/80 border-t border-sage/20 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
