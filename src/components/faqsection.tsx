import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqData = [
    {
      question: "How does Grab's AI trading work?",
      answer:
        "Our AI analyzes vast amounts of market data to identify profitable trading opportunities. It then executes trades automatically based on your pre-set preferences and risk tolerance.",
    },
    {
      question: "Is my crypto safe with Grab?",
      answer:
        "Yes, we employ bank-grade security measures, including multi-signature wallets and military-grade encryption, to ensure the safety of your funds.",
    },
    {
      question: "What kind of returns can I expect?",
      answer:
        "Returns vary based on market conditions and your risk settings. However, our users typically see significant ROI compared to traditional trading methods.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply connect your wallet, set up your AI assistant with your trading preferences, and let our AI automate your trading 24/7.",
    },
  ]

  return (
    <motion.section
      id="faq"
      ref={ref}
      className="py-32 px-4"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-6xl font-light text-white mb-16 text-center tracking-tighter"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-4">{faq.question}</h3>
                <p className="text-white/70 font-light leading-relaxed text-lg">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
