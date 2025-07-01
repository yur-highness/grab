import { motion, useInView } from "framer-motion"

import { Wallet, BotIcon as Robot, TrendingUp} from "lucide-react"
import { useRef } from "react"
import { Card } from "./ui/card"

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Wallet,
      title: "Connect Your Wallet",
      description: "Securely link your crypto wallet in seconds with our encrypted connection protocol.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Robot,
      title: "Set Up Your AI Assistant",
      description: "Configure your trading preferences and risk tolerance. Our AI learns your style.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: TrendingUp,
      title: "Automate Your Trading",
      description: "Sit back and watch as our AI executes profitable trades 24/7 on your behalf. Happy trading!",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <motion.section
      id="how-it-works"
      ref={ref}
      className="py-32 px-4"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-light text-white mb-20 text-center tracking-tighter"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60, rotateY: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 1, type: "spring", stiffness: 80 }}
              whileHover={{
                y: -15,
                rotateY: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 text-center relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <div className="relative z-10">
                  <div className="mb-8">
                    <motion.img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-48 object-cover rounded-xl mb-6 border border-purple-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <step.icon className="w-10 h-10 text-white" strokeWidth={1} />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-6 tracking-tight">{step.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}