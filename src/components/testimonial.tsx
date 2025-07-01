import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "./ui/card"
import { Star } from "lucide-react"




export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "Grab's AI has completely transformed my trading strategy. The automation is flawless.",
      result: "+247% ROI in 6 months",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "Day Trader",
      content: "I was skeptical at first, but the results speak for themselves. Best investment I've made.",
      result: "+189% ROI in 4 months",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Watson",
      role: "Portfolio Manager",
      content: "The AI's ability to predict market movements is incredible. It's like having a crystal ball.",
      result: "+312% ROI in 8 months",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <motion.section
      id="testimonials"
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
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-purple-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div>
                      <h3 className="text-white font-light text-lg">{testimonial.name}</h3>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 font-light leading-relaxed text-lg">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-green-400 font-medium">{testimonial.result}</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}