import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id="mission"
      ref={ref}
      className="py-32 px-4"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-6xl font-light text-white mb-12 tracking-tighter"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-2xl font-light text-white/70 leading-relaxed mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          To empower individuals with cutting-edge AI technology, enabling them to navigate the complexities of the
          crypto market with confidence and achieve unparalleled financial success.
        </motion.p>
        <motion.button
          className="inline-flex items-center justify-center px-8 py-4 text-xl font-light text-white rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #6b21a8 0%, #8b5cf6 50%, #a855f7 100%)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)"
          }}
        >
          Join the Revolution
        </motion.button>
      </div>
    </motion.section>
  )
}