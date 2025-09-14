import { motion, useInView } from "framer-motion"
import { BarChart3, Shield, Users, Zap } from "lucide-react"
import { useRef } from "react"
import { Card } from "./ui/card"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your funds are protected with military-grade encryption and multi-signature wallets.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our optimized trading infrastructure.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights and performance metrics to track your success.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Our expert team is available around the clock to assist you. Happy to help you with any issues.",
    },
  ]

  return (
    <motion.section
      id="features"
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
          Powerful Features
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateY: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.03,
                rotateY: index % 2 === 0 ? 5 : -5,
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="p-10 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-3xl font-light text-white mb-6 tracking-tight">{feature.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}